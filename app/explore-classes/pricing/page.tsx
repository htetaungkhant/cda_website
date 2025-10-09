import React from "react";

import { PiSealCheckFill } from "react-icons/pi";
import { toast } from "sonner";

import TopUniformSection from "@/components/TopUniformSection";
import { PricingCardStyle2 } from "@/components/PricingCard";
import { courseService } from "@/services/server/course-service";
import { Course } from "@/types/course";

export const dynamic = "force-dynamic";

export default async function Pricing() {
  let manualPrice: Course | null = null;
  let automaticPrice: Course | null = null;
  let error: string | null = null;

  try {
    const courses = await courseService.getAllCourses();
    const pricings = courses?.filter(
      (course) => course.category === "standard"
    );
    manualPrice =
      pricings?.find((course) => course.drivingMode === "manual") || null;
    automaticPrice =
      pricings?.find((course) => course.drivingMode === "automatic") || null;
  } catch (err) {
    console.error("Failed to fetch pricings:", err);
    error = "Failed to load pricings. Please try again later.";
    toast.error(error);
    manualPrice = null;
    automaticPrice = null;
  }

  return (
    <>
      <TopUniformSection title="Pricing">
        <div className="mt-4 flex flex-col gap-4 text-black">
          <h1 className="text-2xl lg:text-4xl max-lg:text-center">
            <strong>Standard Driving Lessons</strong>
          </h1>
          <p className="max-lg:text-center text-lg lg:text-xl">
            (Beginners and Partly-Trained Students)
          </p>
          {manualPrice || automaticPrice ? (
            <div className="sm:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Pricing Card */}
              {manualPrice && (
                <PricingCardStyle2
                  drivingMode={manualPrice?.drivingMode}
                  price={`£${manualPrice?.primaryPrice}`}
                  save={`£${manualPrice?.secondaryPrice}`}
                  features={manualPrice?.descriptionList}
                />
              )}
              {/* Pricing Card */}
              {automaticPrice && (
                <PricingCardStyle2
                  drivingMode={automaticPrice?.drivingMode}
                  price={`£${automaticPrice?.primaryPrice}`}
                  save={`£${automaticPrice?.secondaryPrice}`}
                  features={automaticPrice?.descriptionList}
                />
              )}
            </div>
          ) : (
            <p className="mt-8 mb-1 text-center text-lg font-medium text-gray-500">
              No pricing information available.
            </p>
          )}
        </div>
        <div className="mt-8 lg:mt-16 mx-auto max-w-235 border border-[#000000B2] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <h1 className="text-center text-white text-xl lg:text-2xl font-semibold px-4 py-2 md:py-3 bg-[#660B0B]">
            Important Disclaimer
          </h1>
          <ul className="md:mt-1 list-none px-3 py-1 md:px-5 md:py-3 grid grid-cols-1 gap-1 lg:gap-2 text-[#585858]">
            <li className="flex items-center gap-1 md:gap-2.5">
              <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
              <span className="text-xs sm:text-sm lg:text-base">
                Please read and if agreed sign the online copy of our T&Cs
                before committing to proceed with your booking.
              </span>
            </li>
            <li className="flex items-center gap-1 md:gap-2.5">
              <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
              <span className="text-xs sm:text-sm lg:text-base">
                You may cancel or reschedule your confirmed fully pre-paid
                lesson without any charge if we are notified at least 48 hours
                prior notice of the cancellation.
              </span>
            </li>
          </ul>
        </div>
      </TopUniformSection>
    </>
  );
}
