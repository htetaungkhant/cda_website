import { API_ENDPOINTS } from "@/lib/shared/constants";
import { apiClient } from "@/services/client/api-client";
import type { Course } from "@/types/course";

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    return apiClient.get<Course[]>(API_ENDPOINTS.GET_ALL_COURSES);
  },

  async getCourseById(id: string): Promise<Course | null> {
    const path = API_ENDPOINTS.COURSE_BY_ID.replace(":id", id);
    return apiClient.get<Course | null>(path);
  },
};
