import {
  InstagramPost,
  InstagramMediaResponse,
  InstagramUserResponse,
} from "@/types/instagram";

class InstagramService {
  private accessToken: string;
  private baseUrl = "https://graph.instagram.com";

  constructor() {
    this.accessToken = process.env.IG_ACCESS_TOKEN || "";
  }

  async getUserMedia(limit: number = 8): Promise<InstagramPost[]> {
    try {
      if (!this.accessToken) {
        throw new Error("Instagram access token is not configured");
      }

      const userData: InstagramUserResponse = await (
        await fetch(
          `${this.baseUrl}/me?fields=id&access_token=${this.accessToken}`
        )
      ).json();

      const posts: InstagramPost[] = [];
      let after = "";
      const fetchLimit = 25; // Fetch in batches

      // Keep fetching until we have enough images or no more data
      while (posts.length < limit) {
        const url = `${this.baseUrl}/${
          userData.id
        }/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=${fetchLimit}${
          after ? `&after=${after}` : ""
        }&access_token=${this.accessToken}`;

        const mediaResponse = await fetch(url);
        if (!mediaResponse.ok) break;

        const mediaData: InstagramMediaResponse = await mediaResponse.json();

        // Filter and add images
        const images = mediaData.data
          .filter((item) => item.media_type === "IMAGE")
          .map((item) => ({
            id: item.id,
            mediaType: item.media_type,
            mediaUrl: item.media_url,
            thumbnailUrl: item.thumbnail_url || item.media_url,
            permalink: item.permalink,
            caption: item.caption || "",
          }));

        posts.push(...images);

        // Check if there's more data
        if (!mediaData.paging?.next) break;
        after = mediaData.paging.cursors?.after || "";
      }

      return posts.slice(0, limit);
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
      // Return empty array instead of throwing to prevent page crashes
      return [];
    }
  }

  async refreshAccessToken(): Promise<string | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error(`Failed to refresh token: ${response.statusText}`);
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error refreshing Instagram access token:", error);
      return null;
    }
  }
}

export const instagramService = new InstagramService();
