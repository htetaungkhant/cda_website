import { tokenStorage } from '@/lib/client/token-storage';
import { AUTH_CONFIG } from '@/lib/shared/constants';
import type { 
  LoginCredentials, 
  LoginResponse, 
  User,
  RefreshTokenRequest,
  RefreshTokenResponse 
} from '@/types/auth';

import { apiClient, AppError } from '../client/api-client';

class AuthService {
  // Helper method to set cookies from client-side
  private setCookie(name: string, value: string, days: number = 7) {
    if (typeof document !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;secure;samesite=strict`;
    }
  }

  // Helper method to remove cookies
  private removeCookie(name: string) {
    if (typeof document !== 'undefined') {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await apiClient.login(credentials);
      
      // Store tokens in localStorage for client-side access
      tokenStorage.setAccessToken(response.token);
      tokenStorage.setRefreshToken(response.refreshToken);
      
      // Also store tokens in cookies for server-side access
      this.setCookie('access_token', response.token, 7);
      this.setCookie('refresh_token', response.refreshToken, 30);
      
      // Extract and store user data with login timestamp
      const userData: User = {
        id: this.extractUserIdFromToken(response.token),
        username: response.username,
        email: response.email,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      };
      
      tokenStorage.setUserData(userData);
      
      // Store login timestamp for session validation
      tokenStorage.setLoginTimestamp(Date.now());
      
      // Store user data in cookie for server-side access
      this.setCookie('user_data', JSON.stringify(userData), 7);
      this.setCookie('login_timestamp', Date.now().toString(), 7);
      
      return response;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Login failed', 401);
    }
  }

  async logout(): Promise<void> {
    try {
      // Clear stored tokens and user data from localStorage
      tokenStorage.clearTokens();
      
      // Clear cookies as well
      this.removeCookie('access_token');
      this.removeCookie('refresh_token');
      this.removeCookie('user_data');
      this.removeCookie('login_timestamp');
    } catch {
      // Even if logout request fails, clear local storage and cookies
      tokenStorage.clearTokens();
      this.removeCookie('access_token');
      this.removeCookie('refresh_token');
      this.removeCookie('user_data');
      this.removeCookie('login_timestamp');
      throw new AppError('Logout failed', 500);
    }
  }

  async refreshAccessToken(): Promise<string> {
    const refreshToken = tokenStorage.getRefreshToken();
    
    if (!refreshToken) {
      throw new AppError('No refresh token available', 401);
    }

    try {
      const refreshTokenData: RefreshTokenRequest = { refreshToken };
      const response: RefreshTokenResponse = await apiClient.refreshToken(refreshTokenData);
      
      // Update stored access token in localStorage
      tokenStorage.setAccessToken(response.token);
      
      // Also update the access token cookie
      this.setCookie('access_token', response.token, 7);
      
      return response.token;
    } catch {
      // If refresh fails, clear all tokens from both localStorage and cookies
      tokenStorage.clearTokens();
      this.removeCookie('access_token');
      this.removeCookie('refresh_token');
      this.removeCookie('user_data');
      this.removeCookie('login_timestamp');
      throw new AppError('Token refresh failed', 401);
    }
  }

  getCurrentUser(): User | null {
    return tokenStorage.getUserData();
  }

  isAuthenticated(): boolean {
    const user = this.getCurrentUser();
    const hasTokens = tokenStorage.hasValidTokens();
    const sessionValid = this.isSessionValid();
    return !!(user && hasTokens && sessionValid);
  }

  private extractUserIdFromToken(token: string): string {
    try {
      // Decode JWT payload (basic implementation)
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.id || '';
    } catch {
      return '';
    }
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      const currentTime = Date.now() / 1000;
      return decodedPayload.exp < currentTime;
    } catch {
      return true;
    }
  }

  private getTokenExpirationTime(token: string): number | null {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.exp * 1000; // Convert to milliseconds
    } catch {
      return null;
    }
  }

  private shouldRefreshToken(token: string): boolean {
    try {
      const expirationTime = this.getTokenExpirationTime(token);
      if (!expirationTime) return true;
      
      const currentTime = Date.now();
      const timeUntilExpiry = expirationTime - currentTime;
      
      // Refresh if token expires within the threshold (5 minutes by default)
      return timeUntilExpiry <= AUTH_CONFIG.TOKEN_REFRESH_THRESHOLD;
    } catch {
      return true;
    }
  }

  async ensureValidToken(): Promise<string | null> {
    const accessToken = tokenStorage.getAccessToken();
    
    if (!accessToken) {
      return null;
    }

    // Check if token is expired or should be refreshed proactively
    if (this.isTokenExpired(accessToken)) {
      try {
        return await this.refreshAccessToken();
      } catch {
        return null;
      }
    }

    // Proactive refresh if token expires soon
    if (this.shouldRefreshToken(accessToken)) {
      try {
        return await this.refreshAccessToken();
      } catch {
        // If refresh fails, return the current token if it's still valid
        return this.isTokenExpired(accessToken) ? null : accessToken;
      }
    }

    return accessToken;
  }

  /**
   * Check if the current session is still valid based on session timeout
   */
  isSessionValid(): boolean {
    const user = this.getCurrentUser();
    const loginTimestamp = tokenStorage.getLoginTimestamp();
    
    if (!user || !loginTimestamp) return false;

    const currentTime = Date.now();
    const sessionDuration = currentTime - loginTimestamp;

    return sessionDuration < AUTH_CONFIG.SESSION_TIMEOUT;
  }

  /**
   * Get time remaining until token expiration in milliseconds
   */
  getTimeUntilTokenExpiry(): number | null {
    const accessToken = tokenStorage.getAccessToken();
    if (!accessToken) return null;

    const expirationTime = this.getTokenExpirationTime(accessToken);
    if (!expirationTime) return null;

    const timeRemaining = expirationTime - Date.now();
    return timeRemaining > 0 ? timeRemaining : 0;
  }

  /**
   * Get time remaining until session timeout in milliseconds
   */
  getTimeUntilSessionExpiry(): number | null {
    const loginTimestamp = tokenStorage.getLoginTimestamp();
    if (!loginTimestamp) return null;

    const currentTime = Date.now();
    const sessionDuration = currentTime - loginTimestamp;
    const timeRemaining = AUTH_CONFIG.SESSION_TIMEOUT - sessionDuration;
    
    return timeRemaining > 0 ? timeRemaining : 0;
  }
}

export const authService = new AuthService();
