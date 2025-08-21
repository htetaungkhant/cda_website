import React from "react";

import { cn } from "@/lib/shared/utils";

interface UniformPaddingSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UniformPaddingSection({
  className,
  children,
}: UniformPaddingSectionProps) {
  return (
    <section className={cn("max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6", className)}>
      {children}
    </section>
  );
}
