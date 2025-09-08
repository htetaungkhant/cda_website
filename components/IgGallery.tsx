"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";

import igGalleryImage from "@/public/ig-gallery.png";
import { InstagramPost } from "@/types/instagram";

interface IgGalleryProps {
  posts?: InstagramPost[];
  isLoading?: boolean;
}

const IgGallery = ({ posts = [], isLoading = false }: IgGalleryProps) => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (postId: string) => {
    setImageErrors((prev) => new Set(prev).add(postId));
  };

  return (
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <div className="p-8 max-lg:p-4 border border-[#00000033] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)] rounded-xl lg:rounded-3xl bg-white">
        <div className="flex md:items-center gap-4">
          <Image
            src={igGalleryImage}
            width={81}
            height={81}
            alt="Instagram Gallery"
            className="w-20 h-20 max-lg:w-16 max-lg:h-16 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 text-[var(--custom-primary)]">
            <h2 className="font-medium">cambridgedriving</h2>
            <div className="flex gap-4 flex-wrap text-xs max-lg:text-[10px]">
              <p>🚗 Learn how to drive confidently Certified Instructors</p>
              <p>
                🛣️ Your journey to safe driving starts here! Offering lessons
                for all ages & skill levels.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          {isLoading
            ? // Loading skeleton
              Array.from({ length: 8 }, (_, index) => (
                <div
                  key={index}
                  className="w-full bg-gray-200 animate-pulse rounded-sm"
                />
              ))
            : posts.slice(0, 8).map((post) => (
                <Link
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <Image
                      src={post.thumbnailUrl}
                      width={300}
                      height={300}
                      alt={
                        post.caption
                          ? post.caption.slice(0, 50) + "..."
                          : "Instagram post"
                      }
                      className="w-full h-full object-cover hover:brightness-110 transition-all duration-200"
                      unoptimized={
                        !imageErrors.has(post.id) &&
                        post.thumbnailUrl.includes("cdninstagram.com")
                      }
                      onError={() => handleImageError(post.id)}
                    />
                    {/* Overlay with post type indicator */}
                    {post.mediaType === "VIDEO" && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        VIDEO
                      </div>
                    )}
                  </div>
                </Link>
              ))}
        </div>
        <Link
          href="https://www.instagram.com/cambridgedriving/"
          target="_blank"
          rel="noreferrer"
          className="w-fit mx-auto flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-to-br from-[#EC554E] to-[#BF3C82] text-white font-semibold rounded-full max-lg:text-sm hover:shadow-lg transition-all duration-500 ease-in-out"
        >
          <FaSquareInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
          <span>Open Instagram</span>
        </Link>
      </div>
    </section>
  );
};

export default IgGallery;
