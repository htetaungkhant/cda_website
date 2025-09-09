import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RefreshTokenData = z.infer<typeof refreshTokenSchema>;

export const contactSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  mobileNumber: z
    .object({
      phone: z.string().min(10, {
        message: "Please enter a valid mobile number.",
      }),
      dialCode: z.string().min(1, {
        message: "Please enter a valid dial code.",
      }),
    })
    .refine((value) => value.phone.length >= 10, {
      message: "Please enter a valid mobile number.",
    }),
  emailId: z.string().email({
    message: "Please enter a valid email address.",
  }),
  course: z.string().min(1, {
    message: "Please select a course.",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const commonBookingSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  emailId: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  postcode: z
    .string()
    .min(4, {
      message: "Postcode must be at least 4 characters.",
    })
    .max(10, {
      message: "Postcode must be at most 10 characters.",
    }),
  mobileNumber: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export type CommonBookingFormData = z.infer<typeof commonBookingSchema>;
