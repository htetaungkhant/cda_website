import { API_ENDPOINTS } from "@/lib/shared/constants";

export const chatbotService = {
  async sendMessage(
    messages: {
      role: "user" | "bot";
      content: string;
    }[]
  ): Promise<{ response: string }> {
    console.log("Sending messages to chatbot:", messages);
    try {
      const url = `${process.env.CHATBOT_URL}${API_ENDPOINTS.CHATBOT}`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      return (await res.json()) as { response: string };
    } catch (error) {
      console.error("Failed to send message to chatbot:", error);
      throw error;
    }
  },
};
