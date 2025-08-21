import { z } from "zod";

const serverEnvSchema = z.object({
  API_HOST: z.string().url("Invalid API host URL"),
  API_KEY: z.string().min(1, "API key is required"),
});

export function getServerEnv() {
  return serverEnvSchema.parse({
    API_HOST: process.env.API_HOST,
    API_KEY: process.env.API_KEY,
  });
}

export const serverEnv = getServerEnv();
