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
        {/* <div className="mt-8 grid grid-cols-2 gap-6 text-[#585858] max-lg:grid-cols-1 max-lg:mt-4 max-lg:gap-3"> */}
        <div className="mt-8 text-[#585858]">
          <div className="lg:w-[50%] lg:pr-6 lg:float-left flex flex-col gap-6 max-lg:gap-3">
            <Image
              src={AboutUsImg1}
              width={720}
              height={658}
              alt="About Us 1"
              className="aspect-square rounded-2xl w-full h-full object-cover xl:max-h-100"
            />
            <div className="grid grid-cols-2 gap-6 max-lg:gap-3">
              <Image
                src={AboutUsImg2}
                width={336}
                height={309}
                alt="About Us 2"
                className="aspect-square rounded-2xl w-full h-full object-cover xl:max-h-50"
              />
              <Image
                src={AboutUsImg3}
                width={336}
                height={309}
                alt="About Us 3"
                className="aspect-square rounded-2xl w-full h-full object-cover xl:max-h-50"
              />
            </div>
          </div>
          <p className="max-lg:mt-3 lg:text-lg xl:text-xl">
            Born in a time of challenge, built on values, and driven by results.
            <span className="block py-1 lg:py-2" />
            Cambridge Driving Academy was founded during the lockdown, in a time
            when the world paused and many began to rethink the future.
            <span className="block py-1 lg:py-2" />
            By 2023, just two years after opening our doors, we achieved the
            highest driving test pass rate in Cambridge, outpacing even the most
            established names in the industry. Our success wasn’t by chance, it
            was the result of our commitment to excellence, integrity, and a
            learner-first approach.
            <span className="block py-1 lg:py-2" />
            From day one, our approach has been different. CDA is teaching
            real-world skills, developing true confidence, and making sure every
            student feels supported and ready, not just for a test day, but for
            every journey that follows.
            <span className="block py-1 lg:py-2" />
            Our instructors are at the heart of this difference. Each one is
            carefully selected and continuously trained to ensure they bring not
            only technical expertise but also patience, professionalism, and a
            genuine passion for teaching. We believe that when learners feel at
            ease and understood, they learn faster, better, and with lasting
            confidence.
            <span className="block py-1 lg:py-2" />
            CDA fleet is equipped with modern tuition cars. Our ADIs are using
            modern teaching methods and client-centred instruction style,
            because no two learners are the same. Whether you&apos;re a complete
            beginner or coming back after time away, we’ll meet you where you
            are and help you get where you want to be!
            <span className="block py-1 lg:py-2" />
            When you choose Cambridge Driving Academy, you&apos;re not just
            signing up for driving lessons. You&apos;re joining a driving school
            that was built differently and proudly stands by that difference.
          </p>
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
