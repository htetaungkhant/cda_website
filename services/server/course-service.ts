import { cookies, headers } from "next/headers";

import { API_ENDPOINTS } from "@/lib/shared/constants";
import type { Course } from "@/types/course";

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("access_token")?.value;

      // Build absolute URL for server-side fetch
      const hdrs = await headers();
      const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
      const proto = hdrs.get("x-forwarded-proto") ?? "http";
      if (!host) throw new Error("Missing host header");
      const origin = `${proto}://${host}`;
      const url = `${origin}${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.GET_ALL_COURSES}`;

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

      return (await res.json()) as Course[];
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      throw error;
    }
  },

  async getCourseById(id: string): Promise<Course | null> {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("access_token")?.value;

      const hdrs = await headers();
      const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
      const proto = hdrs.get("x-forwarded-proto") ?? "http";
      if (!host) throw new Error("Missing host header");
      const origin = `${proto}://${host}`;
      const coursePath = API_ENDPOINTS.COURSE_BY_ID.replace(":id", id);
      const url = `${origin}${process.env.NEXT_PUBLIC_API_URL}${coursePath}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        cache: "no-store",
      });

      if (res.status === 404) return null;

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      return (await res.json()) as Course;
    } catch (error) {
      console.error("Failed to get course by id:", error);
      throw error;
    }
  },
};
