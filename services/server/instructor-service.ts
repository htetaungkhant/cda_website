import { cookies, headers } from "next/headers";

import { API_ENDPOINTS } from "@/lib/shared/constants";
import type { Instructor } from "@/types/instructor";

export const instructorService = {
  async getAllInstructors(): Promise<Instructor[]> {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    // Build absolute URL for server-side fetch (relative URLs are invalid in Node fetch)
    const hdrs = await headers();
    const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
    const proto = hdrs.get("x-forwarded-proto") ?? "http";
    if (!host) throw new Error("Missing host header");
    const origin = `${proto}://${host}`;
    const url = `${origin}${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.INSTRUCTORS}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `Request failed with status ${res.status}`);
    }

    return (await res.json()) as Instructor[];
  },

  async getInstructorById(id: string): Promise<Instructor | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    const hdrs = await headers();
    const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
    const proto = hdrs.get("x-forwarded-proto") ?? "http";
    if (!host) throw new Error("Missing host header");
    const origin = `${proto}://${host}`;
    const url = `${origin}${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.INSTRUCTOR_BY_ID}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ id }),
      cache: "no-store",
    });

    if (res.status === 404) return null;

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `Request failed with status ${res.status}`);
    }

    return (await res.json()) as Instructor;
  },
};
