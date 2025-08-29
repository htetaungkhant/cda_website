import { GoogleReview } from "@/types/google";

export const googleService = {
  async get5Reviews(): Promise<GoogleReview[]> {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.GOOGLE_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_PLACE_API_KEY}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      const data = await res.json();

      if (!data || !data.result || !data.result.reviews) {
        throw new Error("No reviews found");
      }

      return data.result.reviews as GoogleReview[];
    } catch (error) {
      console.error("Failed to get Google reviews:", error);
      throw error;
    }
  },
};
