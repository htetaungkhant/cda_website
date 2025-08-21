import { API_ENDPOINTS } from "@/lib/shared/constants";
import { apiClient } from "@/services/client/api-client";
import type { Instructor } from "@/types/instructor";

export const instructorService = {
  async getAllInstructors(): Promise<Instructor[]> {
    try {
      const response = await apiClient.get<Instructor[]>(
        API_ENDPOINTS.INSTRUCTORS
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch instructors:", error);
      throw error;
    }
  },

  async getInstructorById(id: string): Promise<Instructor | null> {
    try {
      const response = await apiClient.post<Instructor | null>(
        API_ENDPOINTS.INSTRUCTOR_BY_ID,
        { id }
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch instructor by id:", error);
      throw error;
    }
  },
};
