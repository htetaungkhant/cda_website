export const TOKEN_STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  LOGIN_TIMESTAMP: 'login_timestamp',
} as const;
import type { User } from '@/types/auth';

class TokenStorage {
  private isClient = typeof window !== 'undefined';

  setAccessToken(token: string): void {
    if (!this.isClient) return;
    localStorage.setItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN, token);
  }

  getAccessToken(): string | null {
    if (!this.isClient) return null;
    return localStorage.getItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
  }

  setRefreshToken(token: string): void {
    if (!this.isClient) return;
    localStorage.setItem(TOKEN_STORAGE_KEYS.REFRESH_TOKEN, token);
  }

  getRefreshToken(): string | null {
    if (!this.isClient) return null;
    return localStorage.getItem(TOKEN_STORAGE_KEYS.REFRESH_TOKEN);
  }

  setUserData(user: User): void {
    if (!this.isClient) return;
    localStorage.setItem(TOKEN_STORAGE_KEYS.USER_DATA, JSON.stringify(user));
  }

  getUserData(): User | null {
    if (!this.isClient) return null;
    const userData = localStorage.getItem(TOKEN_STORAGE_KEYS.USER_DATA);
    if (!userData) return null;
    
    try {
      return JSON.parse(userData) as User;
    } catch {
      return null;
    }
  }

  setLoginTimestamp(timestamp: number): void {
    if (!this.isClient) return;
    localStorage.setItem(TOKEN_STORAGE_KEYS.LOGIN_TIMESTAMP, timestamp.toString());
  }

  getLoginTimestamp(): number | null {
    if (!this.isClient) return null;
    const timestamp = localStorage.getItem(TOKEN_STORAGE_KEYS.LOGIN_TIMESTAMP);
    return timestamp ? parseInt(timestamp, 10) : null;
  }

  clearTokens(): void {
    if (!this.isClient) return;
    localStorage.removeItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(TOKEN_STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(TOKEN_STORAGE_KEYS.LOGIN_TIMESTAMP);
  }

  hasValidTokens(): boolean {
    return !!(this.getAccessToken() && this.getRefreshToken());
  }
}

export const tokenStorage = new TokenStorage();
