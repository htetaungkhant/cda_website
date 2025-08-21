'use client';

import React, { useState, useEffect, useCallback, createContext, useContext, useRef } from 'react';

import { AUTH_CONFIG } from '@/lib/shared/constants';
import { AppError } from '@/services/client/api-client';
import { authService } from '@/services/shared/auth-service';
import type { AuthState, LoginCredentials } from '@/types/auth';

// Auth Context
interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  });
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const user = authService.getCurrentUser();
        const isAuthenticated = authService.isAuthenticated();
        
        setState({
          user,
          isAuthenticated,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          user: null,
          isAuthenticated: false,
          loading: false,
          error: error instanceof Error ? error.message : 'Authentication initialization failed',
        });
      }
    };

    initializeAuth();
  }, []);

  // Set up automatic token refresh
  useEffect(() => {
    const setupTokenRefresh = () => {
      // Clear any existing interval
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }

      // Only set up refresh if user is authenticated
      if (state.isAuthenticated) {
        refreshIntervalRef.current = setInterval(async () => {
          try {
            // Check if session is still valid first
            const sessionValid = authService.isSessionValid();
            
            if (!sessionValid) {
              // Session has expired, log out the user and clear all data
              try {
                await authService.logout(); // This will clear both localStorage and cookies
              } catch {
                // If logout fails, at least clear the state
              }
              
              setState({
                user: null,
                isAuthenticated: false,
                loading: false,
                error: 'Session expired',
              });
              return;
            }
            
            const timeUntilExpiry = authService.getTimeUntilTokenExpiry();
            
            if (timeUntilExpiry !== null && timeUntilExpiry <= AUTH_CONFIG.TOKEN_REFRESH_THRESHOLD) {
              await authService.ensureValidToken();
              
              // Refresh user data after token refresh
              const user = authService.getCurrentUser();
              const isAuthenticated = authService.isAuthenticated();
              
              setState(prev => ({
                ...prev,
                user,
                isAuthenticated,
                error: null,
              }));
            }
          } catch {
            // If token refresh fails, log out the user
            setState({
              user: null,
              isAuthenticated: false,
              loading: false,
              error: 'Session expired',
            });
          }
        }, 5000); // Check every 5 seconds for more responsive session timeout
      }
    };

    setupTokenRefresh();

    // Cleanup interval on unmount or when auth state changes
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, [state.isAuthenticated]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await authService.login(credentials);
      const user = authService.getCurrentUser();
      
      setState({
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage = error instanceof AppError 
        ? error.message 
        : 'Login failed';
        
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await authService.logout();
      setState({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      });
    } catch (error) {
      // Even if logout fails, clear the local state
      setState({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: error instanceof Error ? error.message : 'Logout failed',
      });
    }
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      await authService.refreshAccessToken();
      const user = authService.getCurrentUser();
      
      setState(prev => ({
        ...prev,
        user,
        isAuthenticated: true,
        error: null,
      }));
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: error instanceof Error ? error.message : 'Token refresh failed',
      });
    }
  }, []);

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    refreshToken,
  };

  return React.createElement(
    AuthContext.Provider,
    { value },
    children
  );
}

// Auth Hook
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Custom hook for async operations with error handling
export function useAsyncOperation() {
  const [state, setState] = useState({ 
    loading: false, 
    error: null as string | null 
  });

  const execute = useCallback(async (operation: () => Promise<unknown>) => {
    setState({ loading: true, error: null });

    try {
      const result = await operation();
      setState({ loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof AppError 
        ? error.message 
        : 'Operation failed';
      setState({ loading: false, error: errorMessage });
      throw error;
    }
  }, []);

  return { ...state, execute };
}
