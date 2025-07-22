import React from "react";
import { PiSealCheckFill } from "react-icons/pi";

import ReasonCardsSection from "@/components/ReasonCardsSection";
import TopUniformSection from "@/components/TopUniformSection";
import CourseCardsSection from "@/components/CourseCardsSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import UniformPaddingSection from "@/components/UniformPaddingSection";

const ExploreClasses = () => {
  return (
    <>
      <TopUniformSection title="Explore Classes">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-4">
          <div className="max-lg:order-2 flex flex-col gap-1 text-[#585858]">
            <h1 className="font-semibold text-lg lg:text-xl underline">
              Expert Driving Lessons in Cambridge
            </h1>
            <p className="text-sm lg:text-base">
              At Cambridge Driving Academy, we’re committed to helping you
              become a confident, responsible driver. Our expert instructors
              provide step-by-step guidance tailored to your learning style,
              ensuring you not only pass your test but understand the principles
              of safe and skilled driving. With modern vehicles, flexible
              scheduling, and a supportive learning environment, we make your
              driving journey smooth, effective, and empowering — whether
              you&apos;re learning in Cambridge or taking an intensive course
              anywhere in the UK.
            </p>
            <ul className="list-none px-2 md:px-4 py-1 md:py-2 grid grid-cols-2 gap-2">
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Expert, DVSA-Approved Instructors
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Affordable Packages
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Personalized Lessons
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">High Pass Rates</span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Comprehensive Training
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Defensive Driving Focus
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Flexible Scheduling
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Test Preparation Support
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Modern, Safe Vehicles
                </span>
              </li>
              <li className="py-1 md:py-1.5 flex items-center gap-1 md:gap-2.5">
                <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
                <span className="text-sm lg:text-base">
                  Friendly Learning Environment
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

      {/* Course Cards Section */}
      <CourseCardsSection />

      {/* Contact Us Banner / max-lg:hidden */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
};

export default ExploreClasses;
