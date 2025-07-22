import React from "react";
import Image from "next/image";

import ReasonCardsSection from "@/components/ReasonCardsSection";
import TopUniformSection from "@/components/TopUniformSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import AboutUsImg1 from "@/public/about-us-1.png";
import AboutUsImg2 from "@/public/about-us-2.jpg";
import AboutUsImg3 from "@/public/about-us-3.png";

const AboutUs = () => {
  return (
    <>
      <TopUniformSection title="About Us">
        <div className="mt-8 grid grid-cols-2 gap-6 text-[#585858] max-lg:grid-cols-1 max-lg:mt-4 max-lg:gap-3">
          <div className="flex flex-col gap-6 max-lg:gap-3">
            <Image
              src={AboutUsImg1}
              width={720}
              height={658}
              alt="About Us 1"
              className="rounded-2xl w-full h-full max-h-104 object-cover max-lg:max-h-84"
            />
            <div className="grid grid-cols-2 gap-6 max-lg:gap-3">
              <Image
                src={AboutUsImg2}
                width={336}
                height={309}
                alt="About Us 2"
                className="rounded-2xl w-full h-full max-h-50 object-cover max-lg:max-h-40"
              />
              <Image
                src={AboutUsImg3}
                width={336}
                height={309}
                alt="About Us 3"
                className="rounded-2xl w-full h-full max-h-50 object-cover max-lg:max-h-40"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:text-lg max-lg:gap-3">
            <p>
              At Cambridge Driving Academy (CDA), we believe that learning to
              drive goes far beyond simply passing a test. It’s about building
              lifelong skills, developing road awareness, and gaining the
              confidence to drive safely and responsibly in any situation.
              Whether you&apos;re a complete beginner or someone looking to
              refresh their skills, we’re here to guide you every step of the
              way.
            </p>
            <p>
              Our team of experienced and certified instructors is passionate
              about road safety and committed to providing personalized, patient
              instruction tailored to each student&apos;s unique learning style.
              Over the years, CDA has earned a reputation as a trusted name in
              driving education across the Cambridge area.
            </p>
            <p>
              We pride ourselves on our structured, supportive approach and the
              strong relationships we build with our learners. With flexible
              lesson plans, modern dual-controlled vehicles, and a student-first
              mindset, CDA ensures you are fully prepared not just for the test,
              but for a lifetime of safe driving.
            </p>
          </div>
        </div>
      </TopUniformSection>
      <UniformPaddingSection className="px-0 max-lg:px-0">
        <div className="relative text-white p-3 min-h-80 max-lg:min-h-72 flex flex-col items-center justify-center gap-6 max-lg:gap-3 bg-[url(/about-us-4.png)] bg-cover bg-no-repeat bg-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />

          <h1 className="relative font-semibold text-3xl lg:text-4xl text-center">
            Our Mission
          </h1>
          <p className="relative max-w-2xl text-center font-medium">
            At Cambridge Driving Academy, our mission is to deliver high-quality
            driving lessons that empower every learner to drive with confidence
            and competence. We are committed to creating a supportive, positive
            environment that encourages growth, builds confidence, and promotes
            lifelong road safety. Our goal goes beyond helping students pass
            their driving test — we aim to shape responsible, skilled drivers
            for life.
          </p>
        </div>
      </UniformPaddingSection>

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

      <section className="w-full h-16" />
    </>
  );
};

export default AboutUs;
