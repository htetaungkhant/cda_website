import Stripe from "stripe";

import { CommonBookingFormData } from "@/lib/shared/validations";

export interface StripeApiPayload extends CommonBookingFormData {
  courseId: string;
  email: string;
  phone: string;
  postalCode: string;
  withTest?: boolean;
}

export interface StripeApiResponse {
  bookingId: string;
  sessionId: Stripe.PaymentIntent;
  message: string;
}
