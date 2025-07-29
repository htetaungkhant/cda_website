"use client";
import { useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface HeaderDropdownProps {
  title: string;
  titleHref?: string;
  subMenuHrefs?: string[];
  onTitleClick?: () => void;
  children: ReactNode;
}

const HeaderDropdown = ({
  title,
  titleHref,
  subMenuHrefs,
  onTitleClick,
  children,
}: HeaderDropdownProps) => {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("hidden");
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      caretRef.current &&
      !caretRef.current.contains(event.target as Node)
    ) {
      dropdownRef.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative z-10">
      {titleHref ? (
        <div
          className={cn(
            "w-full flex items-center justify-center gap-2 poppins-medium cursor-pointer",
            pathname === titleHref && " text-[var(--custom-primary)]",
            subMenuHrefs?.includes(pathname) && "text-[var(--custom-primary)]"
          )}
        >
          <Link href={titleHref} onClick={onTitleClick}>
            {title}
          </Link>
          <span ref={caretRef} onClick={handleClick}>
            <FaCaretDown />
          </span>
        </div>
      ) : (
        <button
          className="w-full flex items-center justify-center gap-2 poppins-medium cursor-pointer"
          onClick={handleClick}
        >
          {title}
          <span ref={caretRef}>
            <FaCaretDown />
          </span>
        </button>
      )}
      <div
        ref={dropdownRef}
        className="w-full lg:w-[160%] lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden lg:bg-white rounded-xl lg:mt-4 lg:border border-[var(--custom-primary)]"
      >
        {/* speech bubble tails */}
        {/* alternative => left-5/6 transform -translate-x-1/2 */}
        <div className="max-lg:hidden absolute -top-4 right-8">
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[var(--custom-primary)]"></div>
          <div className="absolute top-[1px] left-[1px] w-0 h-0 border-l-[15px] border-r-[15px] border-b-[15px] border-l-transparent border-r-transparent border-b-white"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HeaderDropdown;
// Usage:
// <Dropdown title="Menu">
//   <ul className="p-4">
//     <li className="py-2 hover:bg-gray-100">Item 1</li>
//     <li className="py-2 hover:bg-gray-100">Item 2</li>
//     <li className="py-2 hover:bg-gray-100">Item 3</li>
//   </ul>
// </Dropdown>
