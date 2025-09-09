import { API_ENDPOINTS } from "@/lib/shared/constants";
import { apiClient } from "@/services/client/api-client";
import { StripeApiPayload, StripeApiResponse } from "@/types/payment";

export const paymentService = {
  async createPaymentIntent(
    data: StripeApiPayload
  ): Promise<StripeApiResponse> {
    return apiClient.post<StripeApiResponse>(
      API_ENDPOINTS.CREATE_PAYMENT_INTENT,
      data
    );
  },
};
