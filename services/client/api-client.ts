import { tokenStorage } from "@/lib/client/token-storage";
import { API_ENDPOINTS } from "@/lib/shared/constants";
import { env } from "@/lib/shared/env";
import type { ValidationError, ErrorResponse } from "@/types/api";
import type {
  LoginCredentials,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "@/types/auth";

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

class ApiClient {
  private baseURL: string;

  constructor() {
    // Always call the local proxy route; secrets are injected server-side
    this.baseURL = env.NEXT_PUBLIC_API_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    skipTokenRefresh: boolean = false
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    // Skip token refresh for login and refresh token endpoints to avoid circular dependency
    const shouldSkipRefresh =
      skipTokenRefresh ||
      endpoint === API_ENDPOINTS.LOGIN ||
      endpoint === API_ENDPOINTS.REFRESH_TOKEN;

    let accessToken = tokenStorage.getAccessToken();

    // Attempt token refresh if needed (unless we're skipping it)
    if (!shouldSkipRefresh && accessToken) {
      try {
        // Check if token needs refresh - import dynamically to avoid circular dependency
        const { authService } = await import("../shared/auth-service");
        accessToken = await authService.ensureValidToken();
      } catch {
        // If token refresh fails, continue with existing token
        // The request will fail and handle the 401 error appropriately
        accessToken = tokenStorage.getAccessToken();
        if (!accessToken) {
          throw new AppError("No access token available", 401);
        }
      }
    }

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        let errorMessage = "Request failed";

        try {
          const errorText = await response.text();

          // Try to parse as JSON to extract the error message
          if (errorText) {
            try {
              const errorJson = JSON.parse(errorText);

              // Handle validation errors with multiple error messages
              if (errorJson.errors && Array.isArray(errorJson.errors)) {
                const errorMessages = errorJson.errors.map(
                  (err: ValidationError) => {
                    if (err.field && err.message) {
                      return err.field
                        ? `${err.field}: ${err.message}`
                        : err.message;
                    }
                    return err.message || err.toString();
                  }
                );
                errorMessage = errorMessages.join(", ");
              }
              // Handle single error message formats
              else {
                const typedErrorJson = errorJson as ErrorResponse;
                errorMessage =
                  typedErrorJson.error ||
                  typedErrorJson.message ||
                  typedErrorJson.detail ||
                  errorText;
              }
            } catch {
              // If not valid JSON, use the text as is (but clean it)
              errorMessage = errorText
                .replace(/^\{|\}$/g, "")
                .replace(/"/g, "");
            }
          }
        } catch {
          // If we can't read the response, use status-based message
          errorMessage =
            response.status === 401 ? "Invalid credentials" : "Request failed";
        }

        throw new AppError(errorMessage, response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Network error occurred", 500);
    }
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return this.request<LoginResponse>(
      API_ENDPOINTS.LOGIN,
      {
        method: "POST",
        body: JSON.stringify(credentials),
      },
      true
    ); // Skip token refresh for this endpoint
  }

  async refreshToken(
    refreshTokenData: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    return this.request<RefreshTokenResponse>(
      API_ENDPOINTS.REFRESH_TOKEN,
      {
        method: "POST",
        body: JSON.stringify(refreshTokenData),
      },
      true
    ); // Skip token refresh for this endpoint
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint);
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string, data?: unknown): Promise<T> {
    const config: RequestInit = {
      method: "DELETE",
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    return this.request<T>(endpoint, config);
  }

  async uploadFormData<T>(
    endpoint: string,
    formData: FormData,
    method: "POST" | "PUT" = "POST"
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    let accessToken = tokenStorage.getAccessToken();

    // Attempt token refresh if needed
    if (accessToken) {
      try {
        const { authService } = await import("../shared/auth-service");
        accessToken = await authService.ensureValidToken();
      } catch {
        accessToken = tokenStorage.getAccessToken();
        if (!accessToken) {
          throw new AppError("No access token available", 401);
        }
      }
    }

    const config: RequestInit = {
      method,
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        let errorMessage = "Request failed";

        try {
          const errorText = await response.text();

          if (errorText) {
            try {
              const errorJson = JSON.parse(errorText);

              if (errorJson.errors && Array.isArray(errorJson.errors)) {
                const errorMessages = errorJson.errors.map(
                  (err: ValidationError) => {
                    if (err.field && err.message) {
                      return err.field
                        ? `${err.field}: ${err.message}`
                        : err.message;
                    }
                    return err.message || err.toString();
                  }
                );
                errorMessage = errorMessages.join(", ");
              } else {
                const typedErrorJson = errorJson as ErrorResponse;
                errorMessage =
                  typedErrorJson.error ||
                  typedErrorJson.message ||
                  typedErrorJson.detail ||
                  errorText;
              }
            } catch {
              errorMessage = errorText
                .replace(/^\{|\}$/g, "")
                .replace(/"/g, "");
            }
          }
        } catch {
          errorMessage =
            response.status === 401 ? "Invalid credentials" : "Request failed";
        }

        throw new AppError(errorMessage, response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Network error occurred", 500);
    }
  }
}

export const apiClient = new ApiClient();
