import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
