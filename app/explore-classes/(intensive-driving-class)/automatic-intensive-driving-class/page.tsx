import React from "react";

import { toast } from "sonner";

import TopUniformSection from "@/components/TopUniformSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import { Course } from "@/types/course";
import { courseService } from "@/services/server/course-service";
import CoursesGrid from "../(components)/CourseGrid";

export const dynamic = "force-dynamic";

export default async function AutomaticIntensiveDrivingClass() {
  let intensiveAutomaticCourses: Course[] = [];
  let error: string | null = null;

  try {
    const courses = await courseService.getAllCourses();
    const intensiveCourses = courses?.filter(
      (course) => course.category === "intensive"
    );

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
    intensiveAutomaticCourses = [];
  }

  return (
    <>
      <TopUniformSection title="Intensive Driving">
        <div className="mt-4 lg:mt-8">
          <div className="max-lg:mx-auto pl-0 pr-3 min-[375px]:pr-10 xl:pr-15 py-2 w-full lg:w-[50%] lg:float-left h-80 md:h-90 max-h-100 aspect-square relative">
            <div className="w-full h-full bg-[url('/explore-classes-3.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
            <div className="absolute right-0 min-[375px]:right-2.5 lg:right-5 bottom-6 lg:bottom-8 w-32 h-32 lg:w-40 lg:h-40 bg-[url('/explore-classes-2.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
          </div>
          <h1 className="max-lg:mt-8 font-semibold text-lg lg:text-xl underline">
            Learn to Drive with Expert Intensive Driving Instructors
          </h1>
          <p className="mt-1 text-sm md:text-base lg:text-lg">
            These are our highly concentrated, regular, and frequent lessons
            that improve knowledge retention and build confidence faster than
            traditional weekly lessons. Ideal for those with limited time but
            who are committed to learning quickly.
            <span className="block py-1 lg:py-2" />
            CDA’s Intensive Driving Courses provide an accelerated and focused
            approach to learning to drive. With condensed lessons, learners can
            immerse themselves in a concentrated learning environment and
            develop their driving skills and knowledge quickly. While intensive
            courses differ from normal driving lessons in terms of timeframe,
            lesson structure, and intensity level, they offer benefits such as
            time efficiency, focused learning, progress monitoring, and test
            readiness.
            <span className="block py-1 lg:py-2" />
            Before choosing an intensive course, consider factors such as your
            experience level, learning style, availability, commitment, and
            driving test readiness. By making an informed decision, you can
            embark on an intensive driving course that suits your needs and
            helps you become a skilled and confident driver.
            <span className="block py-1 lg:py-2" />
            We offer four levels of intensive courses for both manual and
            automatic vehicles i-e of 40 hours (Bronze), 30 hours (Silver), 20
            hours (Silver) & 10 hours (Gold), tailored to match different stages
            of driving experience on both manual and automatic transmissions.
          </p>
        </div>
      </TopUniformSection>

      {intensiveAutomaticCourses && intensiveAutomaticCourses.length > 0 ? (
        <CoursesGrid
          title="Automatic Intensive Course Packages"
          description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success."
          courses={intensiveAutomaticCourses}
        />
      ) : (
        <p className="text-center text-sm text-gray-500 my-8">
          No automatic intensive driving courses available at the moment.
        </p>
      )}

      {/* Contact Us Banner */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
}
