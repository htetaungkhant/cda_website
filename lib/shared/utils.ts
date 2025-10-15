import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chunkArray<T>(
  array: T[],
  size: number,
  paddingValue: T | null = null
): (T | null)[][] | undefined {
  if (!Array.isArray(array) || size <= 0) return;
  const result: (T | null)[][] = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk: (T | null)[] = array.slice(i, i + size);
    // Pad the chunk if it's smaller than the desired size
    while (chunk.length < size) {
      chunk.push(paddingValue);
    }
    result.push(chunk);
  }
  return result;
}
