import React from "react";

import { toast } from "sonner";

import TopUniformSection from "@/components/TopUniformSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import { Course } from "@/types/course";
import CoursePackages from "./(components)/CoursePackages";
import { courseService } from "@/services/server/course-service";

export default async function IntensiveDrivingClass() {
  let intensiveManualCourses: Course[] = [];
  let intensiveAutomaticCourses: Course[] = [];
  let error: string | null = null;

  try {
    const courses = await courseService.getAllCourses();
    const intensiveCourses = courses?.filter(
      (course) => course.category === "intensive"
    );

    // Manual Courses
    intensiveManualCourses =
      intensiveCourses
        ?.filter((course) => course.drivingMode === "manual")
        ?.map((course) => ({
          ...course,
          features: [
            {
              image: "/15.svg",
              title: "Manual car training with expert guidance",
            },
            {
              image: "/3.svg",
              title: "Thorough preparation for the practical driving test",
            },
            {
              image: "/22.svg",
              title: "Flexible, hands-on instruction",
            },
          ],
        })) || [];

    // Automatic Courses
    intensiveAutomaticCourses =
      intensiveCourses
        ?.filter((course) => course.drivingMode === "automatic")
        ?.map((course) => ({
          ...course,
          features: [
            {
              image: "/15.svg",
              title: "Automatic car training with expert guidance",
            },
            {
              image: "/3.svg",
              title: "Thorough preparation for the practical driving test",
            },
            {
              image: "/22.svg",
              title: "Flexible, hands-on instruction",
            },
          ],
        })) || [];
  } catch (err) {
    console.error("Failed to fetch courses:", err);
    error = "Failed to load courses. Please try again later.";
    toast.error(error);
    intensiveManualCourses = [];
    intensiveAutomaticCourses = [];
  }

  return (
    <>
      <TopUniformSection title="Intensive Driving">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="max-lg:max-w-180 min-w-68 min-[375px]:max-lg:min-w-84 max-lg:w-full max-lg:mx-auto px-0 min-[375px]:px-6 xl:px-10 relative">
            <div className="w-full h-100 sm:h-120 lg:h-full lg:min-h-100 bg-[url('/explore-classes-3.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
            <div className="absolute -right-3 min-[375px]:right-0 bottom-4 lg:bottom-6 w-32 h-32 lg:w-40 lg:h-40 bg-[url('/explore-classes-2.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
          </div>
          <div className="flex flex-col gap-2 text-[#585858]">
            <h1 className="font-semibold text-lg lg:text-xl underline">
              Learn to Drive with Expert Intensive Driving Instructors
            </h1>
            <p className="text-sm lg:text-base">
              Our Intensive Driving Course is specifically designed for students
              who need to book their practical driving test and gain extensive
              on-road practice to build confidence and skill. The goal is to
              help learners become proficient and fully prepared to pass the
              practical test on their first attempt.
            </p>
            <p className="text-sm lg:text-base">
              We offer four levels of intensive courses for both manual and
              automatic vehicles i-e of 40 hours, 30 hours, 20 hours & 10 hours,
              tailored to match different stages of driving experience: Manual
              Intensive Course Packages
            </p>
          </div>
        </div>
      </TopUniformSection>

      {/* Manual Intensive Course Packages */}
      <CoursePackages
        title="Manual Intensive Course Packages"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success."
        courses={intensiveManualCourses}
      />

      {/* Automatic Intensive Course Packages */}
      <CoursePackages
        title="Automatic Intensive Course Packages"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success."
        courses={intensiveAutomaticCourses}
      />

      {/* Contact Us Banner */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
}
