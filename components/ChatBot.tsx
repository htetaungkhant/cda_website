"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Send, UserRound, X } from "lucide-react";

import { cn } from "@/lib/shared/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const quickActions = [
  "Manual Driving",
  "Automatic Driving",
  "Intensive Driving",
  "Refresher Driving",
  "Other Questions",
];

const ChatBot = () => {
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const welcomeSpanRef = useRef<HTMLSpanElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi, Welcome to Cambridge Driving Academy",
      isComplete: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isApiWorking, setIsApiWorking] = useState(false);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const streamResponse = (response: string) => {
    let index = 0;
    let content = response;

    if (response.includes("__REDIRECT_TO__:")) {
      // Extract URL using regex
      const urlPattern = /https?:\/\/[^\s]+/;
      const match = response.match(urlPattern);
      if (match) {
        const link = match[0].trim();
        window.open(link, "_blank");
        content = `Redirecting you to <a href="${link}" target="_blank" style="color: blue; text-decoration: underline;">${link}</a>`;
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content,
            isComplete: true,
          },
        ]);
        setIsLoading(false);
        return;
      }
    }

    // Add initial empty message
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        content: "",
        isComplete: false,
      },
    ]);

    const interval = setInterval(() => {
      if (index < content.length) {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          lastMessage.content += content[index];
          return newMessages;
        });
        index++;
      } else {
        clearInterval(interval);
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          lastMessage.isComplete = true;
          return newMessages;
        });
        setIsLoading(false);
      }
    }, 30); // Adjust speed as needed
  };

  const handleSendMessage = async (content: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content,
        isComplete: true,
      },
    ]);
    setInput("");
    setIsLoading(true);
    setIsApiWorking(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [{ role: "user", content }] }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      streamResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
      streamResponse(
        "I apologize, but I'm having trouble processing your request right now. Please try again later."
      );
    } finally {
      setIsApiWorking(false);
    }
  };

  const openPopover = () => {
    setIsOpen(true);
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <span
          ref={welcomeSpanRef}
          onClick={openPopover}
          className="fixed bottom-4 md:bottom-5 right-17 md:right-25 z-50 max-w-[300px] bg-[#FFDA45] p-2 rounded-lg md:rounded-tr-none shadow-lg cursor-pointer opacity-0 transition-all duration-300 ease-in-out hidden"
        >
          <div
            className="absolute -right-2 max-md:bottom-2 md:-top-[1px] w-0 h-0 
                        border-l-[8px] border-l-transparent
                        border-t-[8px] border-t-[#FFDA45]
                        border-r-[8px] border-r-transparent
                        transform rotate-45 md:rotate-135"
          />
          <p className="font-medium text-[10px]">
            Hi, Welcome to <br />
            Cambridge Driving <br />
            Academy
          </p>
        </span>
      )}
      <Popover open={isOpen} onOpenChange={togglePopover}>
        <PopoverTrigger asChild>
          <div
            onMouseEnter={() => {
              if (welcomeSpanRef.current) {
                welcomeSpanRef.current.classList.remove("hidden");
                welcomeSpanRef.current.classList.add("opacity-100");
              }
            }}
            onMouseLeave={() => {
              if (welcomeSpanRef.current) {
                welcomeSpanRef.current.classList.remove("opacity-100");
                setTimeout(() => {
                  welcomeSpanRef.current?.classList.add("hidden");
                }, 300);
              }
            }}
            className="fixed bottom-4 right-4 z-50 w-12 h-12 md:w-18 md:h-18 rounded-full shadow-lg cursor-pointer transition-transform group"
          >
            {!isOpen && (
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 z-50 absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
            )}
            <Image
              width={100}
              height={100}
              src="/chat-bot-icon.svg"
              alt="chat-bot"
              className="w-full h-full object-contain"
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="w-[300px] md:w-[300px] xl:w-[350px] 2xl:w-[400px] p-0 overflow-hidden z-150"
          side="top"
          align="end"
          sideOffset={16}
        >
          {/* Header */}
          <div className="bg-[#FFDA45] p-3 flex items-center gap-3 relative">
            <Image
              width={40}
              height={40}
              src="/logo-icon-white-bg.jpg"
              alt="RoadieBot"
              className="w-12 h-12 p-2 object-contain bg-white rounded-lg"
            />
            <div>
              <h3 className="font-bold text-lg lg:text-xl">RoadieBot</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 p-1 hover:bg-gray-200 rounded-full transition-colors outline-none cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className="text-xs lg:text-sm p-4 h-[300px] 2xl:h-[400px] overflow-y-auto space-y-4"
          >
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={cn(
                    "max-w-[80%] flex gap-2.5 items-start",
                    message.type === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {message.type === "bot" ? (
                    <Image
                      width={40}
                      height={40}
                      src="/logo-icon-white-bg.jpg"
                      alt="RoadieBot"
                      className="w-6 h-6 lg:w-8 lg:h-8 p-1 object-contain bg-white rounded-full border border-[var(--custom-primary)]"
                    />
                  ) : (
                    <UserRound className="w-6 h-6 lg:w-8 lg:h-8 p-1 object-contain bg-[var(--custom-primary)] text-white rounded-full" />
                  )}
                  <div className="p-3 rounded-lg bg-[#FFDA45] relative">
                    <div
                      className={cn(
                        "absolute w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#FFDA45] border-r-[12px] border-r-transparent transform",
                        message.type === "user" &&
                          "-top-[1.5px] -right-2 rotate-135",
                        message.type === "bot" && "-left-2.5 top-0"
                      )}
                    />
                    {/* <span className="break-all">{message.content}</span> */}
                    <span
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {isApiWorking && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-[#FFDA45] animate-pulse">
                  Please wait...
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="grid gap-1">
                {quickActions.map((action, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="text-xs w-fit rounded-full justify-start text-left h-auto whitespace-normal"
                    onClick={() => handleSendMessage(action)}
                    disabled={isLoading}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim() && !isLoading) handleSendMessage(input);
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className={cn(
                  "cursor-pointer",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ChatBot;
