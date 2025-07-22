import React from "react";
import { cn } from "@/lib/utils";

interface TopUniformSectionProps {
  title?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export default function TopUniformSection({
  title,
  className,
  children,
}: TopUniformSectionProps) {
  return (
    <section
      className={cn(
        "max-w-420 mx-auto px-6 pb-8 pt-36 max-lg:px-3 max-lg:pb-6 max-lg:pt-24",
        className
      )}
    >
      {title && (
        <h1 className="max-lg:text-3xl text-4xl text-[#2D2E2F] text-center font-bold uppercase">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}
