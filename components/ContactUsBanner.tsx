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
        "md:min-h-36 md:min-w-145 max-w-250 mx-auto flex flex-col gap-2 bg-gradient-to-r from-[#FFEF96] to-[#E5BE6E] px-6 py-4 rounded-xl shadow-sm relative",
        className
      )}
    >
      <div className="font-semibold text-xs min-[375px]:text-sm sm:text-lg md:text-xl xl:text-2xl">
        <h2 className="max-w-44 sm:max-w-80">
          Book Your First Driving Lesson And Contact Us
        </h2>
      </div>
      <div className="absolute -top-4 sm:-top-10 right-2 sm:right-20 flex flex-col justify-center items-center gap-2">
        <Image
          src="/contact-us-banner-icon.png"
          alt="Contact Us"
          width={280}
          height={280}
          className="w-20 h-20 sm:w-30 sm:h-30 object-contain"
        />
        <p className="font-medium text-sm md:text-base">📞 01223 974630</p>
      </div>
      <ButtonStyle2 className="w-fit mt-1">Contact Us</ButtonStyle2>
    </div>
  );
}
