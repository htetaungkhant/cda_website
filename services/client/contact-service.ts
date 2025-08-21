import { API_ENDPOINTS } from "@/lib/shared/constants";
import { ContactFormData } from "@/lib/shared/validations";
import { apiClient } from "@/services/client/api-client";
import type { Contact } from "@/types/contact";

export const contactService = {
  async getAllInquiries(): Promise<{
    list: Contact[];
    total: number;
    page: number;
    limit: number;
  }> {
    return apiClient.get<{
      list: Contact[];
      total: number;
      page: number;
      limit: number;
    }>(API_ENDPOINTS.GET_ALL_INQUIRIES);
  },

  async getInquiryById(id: string): Promise<Contact | null> {
    const path = API_ENDPOINTS.INQUIRY_BY_ID.replace(":id", id);
    return apiClient.get<Contact | null>(path);
  },

  async createInquiry(data: ContactFormData): Promise<Contact> {
    return apiClient.post<Contact>(API_ENDPOINTS.CREATE_INQUIRY, data);
  },

  async updateInquiry(
    data: { id: string } & Partial<ContactFormData>
  ): Promise<Contact> {
    return apiClient.put<Contact>(API_ENDPOINTS.UPDATE_INQUIRY, data);
  },

  async deleteInquiry(id: string): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.DELETE_INQUIRY, { id });
  },
};
