import { cookies } from 'next/headers';

import { AUTH_CONFIG } from '@/lib/shared/constants';
import type { User } from '@/types/auth';

/**
 * Server Action to get current user data from server-side
 * This maintains SSR while providing user authentication state
 */
export async function getCurrentUserServer(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const userDataCookie = cookieStore.get('user_data');
    const loginTimestampCookie = cookieStore.get('login_timestamp');
    
    if (userDataCookie?.value && loginTimestampCookie?.value) {
      try {
        // Check session timeout on server-side too
        const loginTimestamp = parseInt(loginTimestampCookie.value, 10);
        const currentTime = Date.now();
        const sessionDuration = currentTime - loginTimestamp;
        
        // If session has expired, return null (will trigger redirect to login)
        if (sessionDuration >= AUTH_CONFIG.SESSION_TIMEOUT) {
          return null;
        }
        
        return JSON.parse(userDataCookie.value) as User;
      } catch {
        return null;
      }
    }
    
    // If no cookie, return null (user should be redirected to login)
    return null;
  } catch {
    // If dynamic usage prevents static rendering, just return null without logging
    return null;
  }
}

/**
 * Server Action to check if user is authenticated server-side
 */
export async function isAuthenticatedServer(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');
    const refreshToken = cookieStore.get('refresh_token');
    const loginTimestampCookie = cookieStore.get('login_timestamp');
    
    if (!accessToken?.value || !refreshToken?.value || !loginTimestampCookie?.value) {
      return false;
    }
    
    // Check session timeout on server-side
    const loginTimestamp = parseInt(loginTimestampCookie.value, 10);
    const currentTime = Date.now();
    const sessionDuration = currentTime - loginTimestamp;
    
    // Session has expired
    if (sessionDuration >= AUTH_CONFIG.SESSION_TIMEOUT) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}
