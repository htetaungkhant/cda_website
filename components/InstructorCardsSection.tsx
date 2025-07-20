"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { GiCarWheel } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { ButtonStyle1 } from "./Button";

interface Instructor {
  image: string;
  name: string;
  type: string;
}

const dummyData: Instructor[] = [
  {
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "Manual Instructor",
  },
  {
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "Automatic Instructor",
  },
  {
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "Intensive Instructor",
  },
  {
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "Manual Instructor",
  },
  {
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "Automatic Instructor",
  },
];

const InstructorCardsSection = () => {
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
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <h1 className="text-4xl max-lg:text-center">
        <strong>Meet Our Instructors</strong>
      </h1>
      <p className="max-lg:text-center">
        At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success.
      </p>
      <div className="relative max-lg:hidden">
        <div className="max-lg:hidden flex transform transition-all duration-500">
          {/* Instructor Cards */}
          {dummyData.map((instructor, index) => (
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
                  src={instructor.image}
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
                  <span>{instructor.type}</span>
                </p>
                <div className="flex flex-wrap justify-center gap-3 xl:gap-6 py-2">
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white py-2 px-4 rounded-sm cursor-pointer">
                    Book Now
                  </button>
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white py-2 px-4 rounded-sm cursor-pointer">
                    View Details
                  </button>
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
          {dummyData.map((instructor, index) => (
            <div
              key={`${instructor.name}-${index}`}
              className={cn(
                "relative flex-1 p-2 lg:p-3 flex flex-col gap-4 border border-[var(--custom-primary)] shadow-[-12px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-white transform transition-all duration-500 -ml-28 opacity-0 hover:opacity-100",
                index !== 0 ? "hover:-translate-x-15" : "-ml-0"
              )}
            >
              <div className="h-76 lg:h-90">
                <Image
                  src={instructor.image}
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
                  <span>{instructor.type}</span>
                </p>
                <div className="flex flex-wrap justify-center gap-3 xl:gap-6 py-2">
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white py-2 px-4 rounded-sm cursor-pointer">
                    Book Now
                  </button>
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs lg:text-sm text-white py-2 px-4 rounded-sm cursor-pointer">
                    View Details
                  </button>
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
        >
          {/* Instructor Cards */}
          {dummyData.map((instructor, index) => (
            <div
              key={`${instructor.name}-${index}`}
              className="min-w-[85vw] sm:min-w-80 p-2 flex flex-col gap-4 border border-[var(--custom-primary)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-white first:ml-0 transform transition-all duration-500"
            >
              <div className="h-76">
                <Image
                  src={instructor.image}
                  width={128}
                  height={128}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex-1 px-2 flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{instructor.name}</h3>
                <p className="text-sm font-medium text-gray-600 flex items-center gap-1">
                  <GiCarWheel className="inline-block text-[var(--custom-primary)] w-5 h-5" />
                  <span>{instructor.type}</span>
                </p>
                <div className="flex flex-wrap justify-center gap-3 xl:gap-6 py-2">
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs text-white py-2 px-4 rounded-sm cursor-pointer">
                    Book Now
                  </button>
                  <button className="whitespace-nowrap flex-1 bg-[var(--custom-primary)] font-medium text-xs text-white py-2 px-4 rounded-sm cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default InstructorCardsSection;
