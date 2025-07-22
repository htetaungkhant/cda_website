import React from "react";

import { cn } from "@/lib/utils";
import { ButtonStyle2 } from "./Button";
import Image from "next/image";

interface ContactUsBannerProps {
  className?: string;
}

export default function ContactUsBanner({ className }: ContactUsBannerProps) {
  return (
    <div
      className={cn(
        "min-h-36 min-w-145 max-w-250 mx-auto flex flex-col gap-2 bg-gradient-to-r from-[#FFEF96] to-[#E5BE6E] px-6 py-4 rounded-xl shadow-sm relative",
        className
      )}
    >
      <div className="font-semibold text-xl xl:text-2xl">
        <h2>Book Your First Driving Lesson</h2>
        <h2>And Contact Us</h2>
      </div>
      <div className="absolute -top-10 right-20 flex flex-col justify-center items-center gap-2">
        <Image
          src="/contact-us-banner-icon.png"
          alt="Contact Us"
          width={280}
          height={280}
          className="w-30 h-30 object-contain"
        />
        <p className="font-medium">📞 01223 974630</p>
      </div>
      <ButtonStyle2 className="w-fit mt-1">Contact Us</ButtonStyle2>
    </div>
  );
}
