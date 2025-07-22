import React from "react";

import TopUniformSection from "@/components/TopUniformSection";
import ReasonCardsSection from "@/components/ReasonCardsSection";
import InstructorCardsSection from "@/components/InstructorCardsSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import { ButtonStyle1 } from "@/components/Button";
import { CardStyle1 } from "@/components/Card";

const ManualDrivingClass = () => {
  return (
    <>
      <TopUniformSection title="Manual Driving">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="max-lg:max-w-180 min-w-68 min-[375px]:max-lg:min-w-84 max-lg:w-full max-lg:mx-auto px-0 min-[375px]:px-6 xl:px-10 relative">
            <div className="w-full h-100 sm:h-120 lg:h-full lg:min-h-100 bg-[url('/explore-classes-3.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
            <div className="absolute -right-3 min-[375px]:right-0 bottom-4 lg:bottom-6 w-32 h-32 lg:w-40 lg:h-40 bg-[url('/explore-classes-2.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
          </div>
          <div className="flex flex-col gap-2 text-[#585858]">
            <h1 className="font-semibold text-lg lg:text-xl underline">
              Learn Manual Transmission with Expert Instructors
            </h1>
            <p className="text-sm lg:text-base">
              Learning to drive a manual car gives you complete control and a
              deeper understanding of how your vehicle operates. At Cambridge
              Driving Academy, our manual transmission driving lessons are
              designed to equip you with the skills and confidence needed to
              handle any road situation. Whether you’re a beginner or looking to
              improve your manual driving skills, our expert instructors are
              here to guide you every step of the way.
            </p>
            <div className="lg:px-5 flex justify-center lg:justify-end mt-4 lg:mt-6">
              <ButtonStyle1>Book Now</ButtonStyle1>
            </div>
          </div>
        </div>
      </TopUniformSection>

      {/* Reason Cards Section */}
      <ReasonCardsSection
        title="Why Choose Manual Driving?"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe, flexible, and personalized driving experience that sets you up for success."
        firstCard={{
          title: "Greater Control",
          description:
            "Learning to drive a manual car gives you full control over gear selection, allowing you to adapt more precisely to different driving conditions such as steep hills or slippery roads.",
          icon: "/9.svg",
        }}
        secondCard={{
          title: "Wider Range of Vehicles",
          description:
            "A manual driving license allows you to drive both manual and automatic vehicles, providing more flexibility and choice when it comes to owning or renting a car.",
          icon: "/10.svg",
        }}
        thirdCard={{
          title: "Cost-Effective Learning",
          description:
            "Manual cars can often be cheaper to purchase and maintain, making learning in a manual a cost-effective option in the long run.",
          icon: "/11.svg",
        }}
        fourthCard={{
          title: "Enhanced Driving Skills",
          description:
            "Mastering a manual transmission can make you a more skilled and confident driver, as you’ll learn to coordinate clutch control, gear changes, and vehicle handling.",
          icon: "/12.svg",
        }}
      />

      {/* Lesson Badge Cards Section */}
      <UniformPaddingSection className="flex flex-col gap-4 text-black">
        <h1 className="text-4xl max-lg:text-center">
          <strong>Inside Our Manual Driving Lessons</strong>
        </h1>
        <p className="max-lg:text-center">
          Our manual driving lessons focus on clutch control, smooth gear
          shifts, hill starts, and real-world driving scenarios—ensuring
          you&apos;re ready for any road ahead with confidence and precision.
        </p>
        <div className="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 w-full">
            <div className="flex gap-2 md:gap-4 lg:gap-8">
              <CardStyle1
                title="Step-by-Step Guidance"
                description="Our lessons start with the basics, such as clutch control and smooth gear changes, and progress to more advanced techniques like hill starts, driving in heavy traffic, and reversing."
                iconUrl="/13.svg"
                className="w-[40%]"
              />
              <CardStyle1
                title="Experienced Instructors"
                description="Our patient and knowledgeable instructors are experts in teaching manual transmission. They will tailor each lesson to your pace, ensuring you build confidence and skill with every session."
                iconUrl="/14.svg"
                className="flex-1"
              />
            </div>
            <div className="flex gap-2 md:gap-4 lg:gap-8">
              <CardStyle1
                title="Comprehensive Training"
                description="Our lessons cover all aspects of the driving test requirements, including manoeuvres, road awareness, and defensive driving techniques, ensuring you’re fully prepared to pass your test and drive safely on your own."
                iconUrl="/16.svg"
                className="flex-1"
              />
              <CardStyle1
                title="Flexible Scheduling"
                description="We offer flexible lesson times, including early mornings, evenings, and weekends, to fit around your busy schedule."
                iconUrl="/17.svg"
                className="w-[40%]"
              />
            </div>
          </div>
          <div className="lg:w-[30%]">
            <CardStyle1
              title="Modern Manual Vehicles"
              description="Learn in our comfortable, well-maintained manual cars equipped with dual controls for added safety, giving you peace of mind as you develop your driving skills. Our manual fleet includes: VW Golf, Ford Focus, Skoda Octavia."
              iconUrl="/15.svg"
              className="h-full"
            />
          </div>
        </div>
      </UniformPaddingSection>

      {/* Instructor Cards Section */}
      <InstructorCardsSection />

      {/* Contact Us Banner */}
      <UniformPaddingSection className="max-lg:hidden my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
};

export default ManualDrivingClass;
