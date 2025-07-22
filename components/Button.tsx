"use client";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import Arrow from "@/public/arrow.svg";
import WhiteArrow from "@/public/arrow-white.svg";
import { cn } from "@/lib/utils";

export const ButtonStyle1: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      contentClassName?: string;
    }
> = ({ href, children, contentClassName, ...props }) => {
  const content = (
    <motion.div
      className={cn(
        "relative flex items-center gap-2 font-medium text-base p-1.5 pl-3.5 rounded-full bg-[var(--custom-primary)] cursor-pointer group overflow-hidden max-lg:p-1 max-lg:pl-3",
        contentClassName
      )}
      whileHover="hover"
    >
      {/* Sliding background */}
      <motion.div
        className="absolute inset-0 bg-black rounded-full"
        variants={{
          hover: { x: "0%" },
        }}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.span
        className="relative flex-1 text-left z-10 text-black whitespace-nowrap max-lg:text-sm"
        variants={{
          hover: { color: "#ffffff" },
        }}
        initial={{ color: "#000000" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.span>

      {/* Arrow */}
      <motion.div
        className="relative z-10 bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 max-lg:p-1.5 max-lg:w-7 max-lg:h-7"
        variants={{
          hover: { rotate: 45 },
        }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={Arrow}
          width={48}
          height={48}
          alt="Arrow"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} {...props} className="no-underline">
        {content}
      </Link>
    );
  }

  return <button {...props}>{content}</button>;
};

export const ButtonStyle2: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      contentClassName?: string;
    }
> = ({ href, children, contentClassName, ...props }) => {
  const content = (
    <div
      className={cn(
        "relative flex items-center gap-2 font-medium text-base p-1.5 pl-3.5 rounded-full bg-white text-black cursor-pointer group overflow-hidden max-lg:p-1 max-lg:pl-3",
        contentClassName
      )}
    >
      {/* Content */}
      <span className="relative flex-1 text-left z-10 whitespace-nowrap max-lg:text-sm">
        {children}
      </span>

      {/* Arrow */}
      <div className="relative z-10 bg-black rounded-full p-2 flex items-center justify-center w-8 h-8 max-lg:p-1.5 max-lg:w-7 max-lg:h-7 transition-all duration-500 ease-in-out group-hover:rotate-45">
        <Image
          src={WhiteArrow}
          width={48}
          height={48}
          alt="Arrow"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        {...props}
        className={cn("no-underline group", props.className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className={cn("group", props.className)}>
      {content}
    </button>
  );
};

export const ButtonStyle3: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
      contentClassName?: string;
    }
> = ({ href, children, contentClassName, ...props }) => {
  const content = (
    <div
      className={cn(
        "relative flex items-center gap-2 font-medium text-base p-1.5 pl-3.5 rounded-full bg-black text-white cursor-pointer group overflow-hidden max-lg:p-1 max-lg:pl-3",
        contentClassName
      )}
    >
      {/* Content */}
      <span className="relative flex-1 text-left z-10 whitespace-nowrap max-lg:text-sm">
        {children}
      </span>

      {/* Arrow */}
      <div className="relative z-10 bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 max-lg:p-1.5 max-lg:w-7 max-lg:h-7 transition-all duration-500 ease-in-out rotate-45">
        <Image
          src={Arrow}
          width={48}
          height={48}
          alt="Arrow"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        {...props}
        className={cn("no-underline group", props.className)}
      >
        {content}
      </Link>
    );
  }

  return <button {...props}>{content}</button>;
};
