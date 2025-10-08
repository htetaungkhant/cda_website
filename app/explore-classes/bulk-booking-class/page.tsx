import React from "react";

import { PiSealCheckFill } from "react-icons/pi";
import { toast } from "sonner";

import ReasonCardsSection from "@/components/ReasonCardsSection";
import TopUniformSection from "@/components/TopUniformSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import { courseService } from "@/services/server/course-service";
import { Course } from "@/types/course";
import PricingCardsSection from "./(components)/PricingCardsSection";

export const dynamic = "force-dynamic";

export default async function BulkBookingClass() {
  let bulkBookingCourses: Course[] = [];
  let error: string | null = null;

  try {
    const courses = await courseService.getAllCourses();
    bulkBookingCourses = courses?.filter(
      (course) => course.category === "bulk booking"
    );
  } catch (err) {
    console.error("Failed to fetch pricings:", err);
    error = "Failed to load pricings. Please try again later.";
    toast.error(error);
    bulkBookingCourses = [];
  }

  return (
    <>
      <TopUniformSection title="Bulk Booking Class">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-4">
          <div className="max-lg:order-2 flex flex-col gap-2 sm:gap-4 text-[#585858]">
            <h1 className="font-semibold text-lg lg:text-xl underline">
              Learn More, Save More
            </h1>
            <p className="text-sm lg:text-base">
              Our Bulk Booking option is perfect for students who want to commit
              to consistent training while saving on lesson costs. Get exclusive
              discounts and flexible scheduling when you book lessons in bulk.
              Bulk booking lessons spread out fewer hours over a longer time,
              allowing for more practice between sessions and a more measured
              learning pace.
            </p>
            <ul className="mt-1 lg:mt-3 list-none py-1 md:py-2 grid grid-cols-1 gap-3 lg:gap-5">
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  5 consecutive weekday lessons
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Guaranteed time slots with your instructor
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Discounted flat-rate pricing
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Available for manual and automatic transmissions
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Helps you build momentum and progress faster
                </span>
              </li>
            </ul>
          </div>
          <div className="max-lg:order-1 max-lg:max-w-100 max-lg:min-w-78 max-lg:w-1/2 max-lg:mx-auto px-6 xl:px-10 relative">
            <div className="w-full h-100 sm:h-120 lg:h-full bg-[url('/explore-classes-1.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
            <div className="absolute left-0 bottom-4 lg:bottom-6 w-32 h-32 lg:w-40 lg:h-40 bg-[url('/explore-classes-2.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
          </div>
        </div>
      </TopUniformSection>

      {/* Reason Cards Section */}
      <ReasonCardsSection
        title="Why Choose Us?"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe, flexible, and personalized driving experience that sets you up for success."
        firstCard={{
          title: "Certified, Friendly Instructors",
          description:
            "Our certified instructors build confidence and focus on safe driving habits for all skill levels.",
          icon: "/5.svg",
        }}
        secondCard={{
          title: "Personalised Learning Plans",
          description:
            "Personalized lessons are designed to meet your unique needs, whether you’re a beginner or experienced driver.",
          icon: "/6.svg",
        }}
        thirdCard={{
          title: "Flexible Scheduling",
          description:
            "Busy lifestyle? No problem. Choose your lesson times with ease and learn at a pace that suits you — mornings, evenings, or weekends.",
          icon: "/7.svg",
        }}
        fourthCard={{
          title: "Modern, Safe Vehicles",
          description:
            "Train in clean, well-maintained cars equipped with the latest safety tech. Your learning experience will be secure, smooth, and stress-free.",
          icon: "/8.svg",
        }}
      />

      {/* Pricing Cards Section */}
      {bulkBookingCourses.length > 0 && (
        <PricingCardsSection bulkBookingCourses={bulkBookingCourses} />
      )}

      {/* Contact Us Banner */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
}
