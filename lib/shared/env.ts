import { z } from "zod";

// Public (browser-exposed) env
const publicEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().min(1, "API URL is required"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

function getPublicEnv() {
  try {
    return publicEnvSchema.parse({
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NODE_ENV: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error("Environment configuration error:", error);
    // Fallback for development
    return {
      NEXT_PUBLIC_API_URL: "https://your-api-domain.com",
      NODE_ENV: "development" as const,
    };
  }
}

export const env = getPublicEnv();
