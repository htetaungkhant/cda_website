"use client";
import React, { useState } from "react";

import { Instructor } from "@/type";
import { InstructorCard } from "@/components/InstructorCardsSection";
import { ButtonStyle1 } from "@/components/Button";

interface CardsSectionProps {
  manualInstructors: Instructor[];
  automaticInstructors: Instructor[];
}

const CardsSection = ({
  manualInstructors,
  automaticInstructors,
}: CardsSectionProps) => {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <>
      <div className="px-4 py-2 mt-8 grid grid-cols-2 gap-2 font-bold bg-white shadow-[4px_1px_12px_0px_rgba(0,0,0,0.25)] rounded-xl max-lg:p-2 max-lg:mt-4 text-[8px] min-[375px]:text-[10px] min-sm:text-xs min-md:text-sm min-lg:text-base">
        <button
          className={`p-1.5 max-lg:p-1 rounded-lg whitespace-nowrap cursor-pointer hover:shadow-md max-lg:rounded-md ${
            activeTab === "manual"
              ? "bg-[var(--custom-primary)] text-white"
              : "text-[#1B1919CC] border border-black"
          }`}
          onClick={() => setActiveTab("manual")}
        >
          MANUAL INSTRUCTORS
        </button>
        <button
          className={`p-1.5 max-lg:p-1 rounded-lg whitespace-nowrap cursor-pointer hover:shadow-md max-lg:rounded-md ${
            activeTab === "automatic"
              ? "bg-[var(--custom-primary)] text-white"
              : "text-[#1B1919CC] border border-black"
          }`}
          onClick={() => setActiveTab("automatic")}
        >
          AUTOMATIC INSTRUCTORS
        </button>
      </div>
      <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-x-1.5 gap-y-4 md:gap-x-5 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 xl:grid-cols-4">
        {(activeTab === "manual"
          ? manualInstructors
          : automaticInstructors
        ).map((instructor, index) => (
          <InstructorCard
            key={`${instructor.name}-${index}`}
            {...instructor}
            responsive
          />
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <ButtonStyle1>View More</ButtonStyle1>
      </div>
    </>
  );
};

export default CardsSection;
