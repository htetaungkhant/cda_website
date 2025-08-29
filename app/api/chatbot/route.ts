import { NextResponse } from "next/server";

import { chatbotService } from "@/services/server/chatbot-service";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  try {
    const response = await chatbotService.sendMessage(prompt);
    if (!response || !response.response) {
      return NextResponse.json(
        { error: "No response from chatbot" },
        { status: 500 }
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error occurred while processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
