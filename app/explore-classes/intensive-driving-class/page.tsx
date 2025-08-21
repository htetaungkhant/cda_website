import React from "react";

import TopUniformSection from "@/components/TopUniformSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import { CoursePackage } from "@/types/course";
import CoursePackages from "./(components)/CoursePackages";

const dummyManualPackages: CoursePackage[] = [
  {
    id: "manual-40-hours",
    title: "Bronze Package",
    courseTiming: 40,
    subTitle: "Ideal for complete beginners",
    practicalTestPrice: 2400,
    noPracticalTestPrice: 2300,
    description:
      "A full foundational course for learners starting from scratch. Covers everything from car control to road awareness in a structured, supportive way.",
    courseDescription:
      "Our 40-Hours course is perfect for driver learners with a passion for driving. Whether you’ve had some hands-on experience with short drives with a parent or simply practiced moving a car on a driveway, this course will build on that foundation. It’s also ideal for confident beginners who want to sharpen their skills in a supportive environment.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "None or minimal driving experience",
      },
      {
        title: "Course Duration:",
        description: "4–6 weeks",
      },
    ],
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
    color: "bronze",
  },
  {
    id: "manual-10-hours",
    title: "Extended Package",
    courseTiming: 30,
    subTitle: "Suitable for early-stage learners",
    practicalTestPrice: "£1,850",
    noPracticalTestPrice: "£1,750",
    description:
      "Designed for learners with some prior experience who want more time to build confidence, refine control, and prepare thoroughly for the driving test.",
    courseDescription:
      "Ideal for partly-trained learner drivers with upper intermediate experience who need a focused practice on specific areas, such as mastering the manoeuvres or dealing with complex traffic conditions or independent driving using road signs or Sat-Nav.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "At least 20 hours of previous driving experience.",
      },
      {
        title: "Course Duration:",
        description: "3–4 weeks.",
      },
    ],
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
    color: "extended",
  },
  {
    id: "manual-30-hours",
    title: "Silver Package",
    courseTiming: 20,
    subTitle: "For partly-trained drivers",
    practicalTestPrice: "£1,300",
    noPracticalTestPrice: "£1,200",
    description:
      "Ideal for learners who’ve already had about 20 hours of lessons. Focuses on polishing skills, correcting mistakes, and building test readiness.",
    courseDescription:
      "Ideal for partly-trained learner drivers with intermediate experience who need focused practice to refine their skills. Perfect for those aiming to boost confidence and address specific areas for improvement after recently failed practical driving tests.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "At least 20 hours of previous driving experience.",
      },
      {
        title: "Course Duration:",
        description: "3–4 weeks.",
      },
    ],
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
    color: "silver",
  },
  {
    id: "manual-20-hours",
    title: "GOLD REFRESHER PACKAGE",
    courseTiming: 10,
    subTitle: "For experienced or returning drivers",
    practicalTestPrice: 750,
    noPracticalTestPrice: 650,
    description:
      "Designed for confident drivers or those returning to driving after a break. Ideal for foreign licence holders or learners who recently failed their test and need focused preparation.",
    courseDescription:
      "Ideal for foreign licence holders who previously drove in the UK and either recently failed their practical driving test or planning to take one. This course is designed to assess your current driving skills, identify any habits that may need adjustment, and help you adapt to UK driving standards. Training covers navigating complex traffic situations, spiral roundabouts, dual carriageways, countryside roads, and all essential manoeuvres.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "Experienced drivers who want to improve a specific area.",
      },
      {
        title: "Course Duration:",
        description: "4–6 Days.",
      },
    ],
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
    color: "gold",
  },
];

const dummyAutomaticPackages: CoursePackage[] = [
  {
    id: "automatic-40-hours",
    title: "Bronze Package",
    courseTiming: 40,
    subTitle: "Ideal for complete beginners",
    practicalTestPrice: 2480,
    noPracticalTestPrice: 2380,
    description:
      "A complete driving foundation course for those with little to no prior experience. Builds strong core skills and road awareness from the ground up.",
    courseDescription:
      "Our 40-Hours course is perfect for driver learners with a passion for driving. Whether you’ve had some hands-on experience with short drives with a parent or simply practiced moving a car on a driveway, this course will build on that foundation. It’s also ideal for confident beginners who want to sharpen their skills in a supportive environment.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "None or minimal driving experience",
      },
      {
        title: "Course Duration:",
        description: "4–6 weeks",
      },
    ],
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
    color: "bronze",
  },
  {
    id: "automatic-10-hours",
    title: "Extended Package",
    courseTiming: 30,
    subTitle: "Suitable for early-stage learners",
    practicalTestPrice: "£1,910",
    noPracticalTestPrice: "£1,810",
    description:
      "For learners with some basic experience looking to progress confidently toward test readiness with more time behind the wheel.",
    courseDescription:
      "Ideal for partly-trained learner drivers with upper intermediate experience who need a focused practice on specific areas, such as mastering the manoeuvres or dealing with complex traffic conditions or independent driving using road signs or Sat-Nav.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "At least 20 hours of previous driving experience.",
      },
      {
        title: "Course Duration:",
        description: "4–5 weeks.",
      },
    ],
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
    color: "extended",
  },
  {
    id: "automatic-30-hours",
    title: "Silver Package",
    courseTiming: 20,
    subTitle: "For partly-trained drivers",
    practicalTestPrice: "£1,340",
    noPracticalTestPrice: "£1,240",
    description:
      "Best for learners who’ve already completed ~20 hours of lessons. Focuses on refining skills, correcting errors, and preparing for the test.",
    courseDescription:
      "Ideal for partly-trained learner drivers with intermediate experience who need focused practice to refine their skills. Perfect for those aiming to boost confidence and address specific areas for improvement after recently failed practical driving tests.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "At least 20 hours of previous driving experience.",
      },
      {
        title: "Course Duration:",
        description: "3–4 weeks.",
      },
    ],
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
    color: "silver",
  },
  {
    id: "automatic-20-hours",
    title: "GOLD REFRESHER PACKAGE",
    courseTiming: 10,
    subTitle: "For experienced or returning drivers",
    practicalTestPrice: 770,
    noPracticalTestPrice: 670,
    description:
      "Designed for confident drivers or those returning to driving after a break. Ideal for foreign licence holders or learners who recently failed their test and need focused preparation.",
    courseDescription:
      "Ideal for foreign licence holders who previously drove in the UK and either recently failed their practical driving test or planning to take one. This course is designed to assess your current driving skills, identify any habits that may need adjustment, and help you adapt to UK driving standards. Training covers navigating complex traffic situations, spiral roundabouts, dual carriageways, countryside roads, and all essential manoeuvres.",
    courseRequirements: [
      {
        title: "Experience Level:",
        description: "Experienced drivers who want to improve a specific area.",
      },
      {
        title: "Course Duration:",
        description: "4–6 Days.",
      },
    ],
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
    color: "gold",
  },
];

const IntensiveDrivingClass = () => {
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
        coursePackages={dummyManualPackages}
      />

      {/* Automatic Intensive Course Packages */}
      <CoursePackages
        title="Automatic Intensive Course Packages"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success."
        coursePackages={dummyAutomaticPackages}
      />

      {/* Contact Us Banner */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
};

export default IntensiveDrivingClass;
