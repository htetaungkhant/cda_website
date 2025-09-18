"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiCarWheel } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { cn } from "@/lib/shared/utils";
import { Instructor } from "@/types/instructor";
import { ButtonStyle1 } from "./Button";
import UniformPaddingSection from "./UniformPaddingSection";

export const InstructorCard: React.FC<
  Instructor & { responsive?: boolean; className?: string }
> = ({
  id,
  image,
  name,
  drivingMode,
  totalDriveUrl,
  responsive = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-2 flex flex-col gap-4 border border-[var(--custom-primary)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] bg-white first:ml-0 transform transition-all duration-500",
        responsive ? "rounded-2xl sm:rounded-3xl" : "rounded-3xl",
        className
      )}
    >
      <div className={responsive ? "h-40 min-sm:h-76" : "h-76"}>
        <Image
          src={image?.image}
          width={128}
          height={128}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl"
          priority
        />
      </div>
      <div
        className={cn(
          "flex-1 flex flex-col gap-1",
          responsive ? "sm:px-2" : "px-2"
        )}
      >
        <h3
          className={cn(
            "font-semibold",
            responsive ? "text-sm line-clamp-1" : "text-lg"
          )}
        >
          {name}
        </h3>
        <p className="font-medium text-gray-600 flex items-center gap-1">
          <GiCarWheel
            className={cn(
              "inline-block text-[var(--custom-primary)]",
              responsive ? "w-4 h-4" : "w-5 h-5"
            )}
          />
          <span
            className={cn(
              "whitespace-nowrap line-clamp-1 text-ellipsis",
              responsive
                ? "text-[10px] min-[375px]:text-xs min-sm:text-sm"
                : "text-sm"
            )}
          >
            {drivingMode === "both"
              ? "Automatic & Manual"
              : drivingMode === "manual"
              ? "Manual Instructor"
              : "Automatic Instructor"}
          </span>
        </p>
        <div className="flex justify-center gap-2 sm:gap-3 xl:gap-6 py-2">
          <a
            href={totalDriveUrl || "#"}
            target="_blank"
            className={cn(
              "whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-white text-center rounded-sm cursor-pointer hover:shadow-md",
              responsive
                ? "text-[7px] px-1.5 py-1.5 min-[375px]:text-[10px] min-sm:text-xs min-sm:py-2 min-sm:px-4"
                : "text-xs py-2 px-4"
            )}
          >
            Book Now
          </a>
          <Link
            href={{
              pathname: `/our-team/${name.replaceAll(" ", "-").toLowerCase()}`,
              query: { unique: id },
            }}
            className={cn(
              "whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-white text-center rounded-sm cursor-pointer hover:shadow-md",
              responsive
                ? "text-[7px] px-1.5 py-1.5 min-[375px]:text-[10px] min-sm:text-xs min-sm:py-2 min-sm:px-4"
                : "text-xs py-2 px-4"
            )}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const InstructorCardsSection: React.FC<{ instructors: Instructor[] }> = ({
  instructors,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const hoveredLayerRef = useRef<HTMLDivElement | null>(null);
  const instructorCardsRef = useRef<HTMLDivElement[]>([]);

  const handleLeftArrowClick = () => {
    if (mobileScrollContainerRef.current) {
      const cardWidth = (
        mobileScrollContainerRef.current.querySelector(
          ":first-child"
        ) as HTMLElement | null
      )?.offsetWidth;
      const gap = 16;
      if (cardWidth) {
        const scrollAmount = cardWidth + gap;
        mobileScrollContainerRef.current.scrollTo({
          left: mobileScrollContainerRef.current.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleRightArrowClick = () => {
    if (mobileScrollContainerRef.current) {
      const cardWidth = (
        mobileScrollContainerRef.current.querySelector(
          ":first-child"
        ) as HTMLElement | null
      )?.offsetWidth;
      const gap = 16;
      if (cardWidth) {
        const scrollAmount = cardWidth + gap;
        mobileScrollContainerRef.current.scrollTo({
          left: mobileScrollContainerRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <UniformPaddingSection className="flex flex-col gap-4 text-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        <strong>Meet Our Instructors</strong>
      </h1>
      <p className="max-lg:text-center text-xs md:text-sm lg:text-base text-[#585858]">
        At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success.
      </p>
      <div className="relative max-lg:hidden">
        <div className="max-lg:hidden flex transform transition-all duration-500">
          {/* Instructor Cards */}
          {instructors.map((instructor, index) => (
            <div
              key={`${instructor.name}-${index}`}
              ref={(el) => {
                if (el) {
                  instructorCardsRef.current[index] = el;
                }
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }
                hoveredLayerRef.current?.classList.remove("hidden");
                hoveredLayerRef.current?.classList.add("flex");
              }}
              className="flex-1 p-2 lg:p-3 flex flex-col gap-4 border border-[var(--custom-primary)] shadow-[-12px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-white -ml-28 first:ml-0 transform transition-all duration-500"
            >
              <div className="h-76 lg:h-90">
                <Image
                  src={instructor.image?.image}
                  width={128}
                  height={128}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex-1 px-2 flex flex-col gap-1">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {instructor.name}
                </h3>
                <p className="text-sm lg:text-base font-medium text-gray-600 flex items-center gap-1">
                  <GiCarWheel className="inline-block text-[var(--custom-primary)] w-5 h-5" />
                  <span>
                    {instructor.drivingMode === "manual"
                      ? "Manual Instructor"
                      : "Automatic Instructor"}
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-3 xl:gap-6 py-2">
                  <a
                    href={instructor.totalDriveUrl || "#"}
                    target="_blank"
                    className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white text-center py-2 px-4 rounded-sm cursor-pointer"
                  >
                    Book Now
                  </a>
                  <Link
                    href={{
                      pathname: `/our-team/${instructor.name
                        .replaceAll(" ", "-")
                        .toLowerCase()}`,
                      query: { unique: instructor.id },
                    }}
                    className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white text-center py-2 px-4 rounded-sm cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={hoveredLayerRef}
          onMouseLeave={(e) => {
            e.preventDefault();
            timerRef.current = setTimeout(() => {
              hoveredLayerRef.current?.classList.remove("flex");
              hoveredLayerRef.current?.classList.add("hidden");
            }, 300);
          }}
          className="absolute inset-0 hidden opacity-0 transform transition-all duration-300 hover:opacity-100"
        >
          {/* blur overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl" />
          {/* Instructor Cards */}
          {instructors.map((instructor, index) => (
            <div
              key={`${instructor.name}-${index}`}
              className={cn(
                "relative flex-1 p-2 lg:p-3 flex flex-col gap-4 border border-[var(--custom-primary)] shadow-[-12px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-white transform transition-all duration-500 -ml-28 opacity-0 hover:opacity-100",
                index !== 0 ? "hover:-translate-x-15" : "-ml-0"
              )}
            >
              <div className="h-76 lg:h-90">
                <Image
                  src={instructor.image?.image}
                  width={128}
                  height={128}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex-1 px-2 flex flex-col gap-1">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {instructor.name}
                </h3>
                <p className="text-sm lg:text-base font-medium text-gray-600 flex items-center gap-1">
                  <GiCarWheel className="inline-block text-[var(--custom-primary)] w-5 h-5" />
                  <span>
                    {instructor.drivingMode === "manual"
                      ? "Manual Instructor"
                      : "Automatic Instructor"}
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-3 xl:gap-6 py-2">
                  <a
                    href={instructor.totalDriveUrl || "#"}
                    target="_blank"
                    className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white text-center py-2 px-4 rounded-sm cursor-pointer"
                  >
                    Book Now
                  </a>
                  <Link
                    href={{
                      pathname: `/our-team/${instructor.name
                        .replaceAll(" ", "-")
                        .toLowerCase()}`,
                      query: { unique: instructor.id },
                    }}
                    className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white text-center py-2 px-4 rounded-sm cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex justify-center lg:hidden">
        <div
          ref={mobileScrollContainerRef}
          className="p-2 flex gap-4 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transform transition-all duration-500"
          style={{ touchAction: "pan-y" }}
        >
          {/* Instructor Cards */}
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={`${instructor.name}-${index}`}
              {...instructor}
              className="min-w-[85vw] sm:min-w-80"
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="relative flex justify-center lg:hidden">
        <button
          onClick={handleLeftArrowClick}
          className="px-4 py-2 bg-white cursor-pointer rounded-l-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <FaArrowLeft className="text-[#545454]" />
        </button>
        <button
          onClick={handleRightArrowClick}
          className="px-4 py-2 bg-white cursor-pointer rounded-r-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <FaArrowRight className="text-[#545454]" />
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <ButtonStyle1 href="/our-team">View All</ButtonStyle1>
      </div>
    </UniformPaddingSection>
  );
};

export default InstructorCardsSection;
