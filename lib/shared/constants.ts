export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: "/auth/login",
  REFRESH_TOKEN: "/auth/refresh",

  // Instructor endpoints
  INSTRUCTORS: "/instructor/all",
  INSTRUCTOR_BY_ID: "/instructor/by-id",

  // Course endpoints
  GET_ALL_COURSES: "/course/all",
  COURSE_BY_ID: "/course/:id",

  // Contact endpoints
  GET_ALL_INQUIRIES: "/contactUs/all",
  CREATE_INQUIRY: "/contactUs/create",
  DELETE_INQUIRY: "/contactUs/delete",
  UPDATE_INQUIRY: "/contactUs/update",
  INQUIRY_BY_ID: "/contactUs/:id",

  // Chatbot endpoints
  CHATBOT: "/chat",
} as const;

export const TOKEN_STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER_DATA: "user_data",
} as const;

export const AUTH_CONFIG = {
  TOKEN_REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes before expiry
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
} as const;
