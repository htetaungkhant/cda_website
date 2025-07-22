import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface CardStyle1Props {
  title: string;
  description: string;
  iconUrl: string;
  className?: string;
}

export function CardStyle1({
  title,
  description,
  iconUrl,
  className,
}: CardStyle1Props) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-b from-[#FFFDEE] to-[#F9F3B1] border border-[var(--custom-primary)] shadow-[4.17px_4.17px_12.5px_0px_rgba(0,0,0,0.25)] rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 max-sm:min-h-44 flex flex-col justify-center items-center gap-2 text-center",
        className
      )}
    >
      <Image
        src={iconUrl}
        width={100}
        height={100}
        alt={title}
        className="w-12 h-12 xl:w-15 xl:h-15 object-contain"
      />
      <h2 className="text-xs sm:text-sm lg:text-base font-medium">{title}</h2>
      <p className="overflow-hidden absolute inset-0 flex justify-center items-center bg-gradient-to-b from-[#FEF1D6] to-[#FDC24A] text-[#585858] rounded-xl p-1 sm:p-2 text-[10px] sm:text-xs lg:text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {description}
      </p>
    </div>
  );
}
