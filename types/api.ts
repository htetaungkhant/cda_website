// Shared API types that are used across multiple modules

// Error response types for consistent API error handling
export interface ValidationError {
  field?: string;
  message: string;
}

export interface ErrorResponse {
  error?: string;
  message?: string;
  detail?: string;
  errors?: ValidationError[];
}
