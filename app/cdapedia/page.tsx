import React from "react";
import Image from "next/image";

import TopUniformSection from "@/components/TopUniformSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import CdapediaCardGrid from "./(components)/CdapediaCardGrid";

export default async function CDApedia() {
  return (
    <>
      <TopUniformSection className="px-0 max-lg:px-0">
        <div className="py-8 md:py-24 lg:py-32 text-white flex justify-center items-center flex-col gap-2 md:gap-4 lg:gap-6 relative">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10" />

          <div className="absolute inset-0 flex justify-center items-start z-0 overflow-hidden">
            <Image
              src="/cdapaedia-banner.png"
              alt="CDApedia Banner"
              width={1024}
              height={576}
              priority
              className="-mt-8 md:-mt-20 xl:-mt-32 w-full h-auto object-cover object-top"
            />
          </div>

          <h1 className="z-10 uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            CDAPAEDIA
          </h1>
          <p className="z-10 px-3 w-full lg:w-[75%] xl:w-[55%] text-center text-sm md:text-base lg:text-xl xl:text-2xl">
            Learn with Cambridge Driving Academy — where structure, safety, and
            confidence come together on your journey to becoming a skilled UK
            driver.
          </p>
        </div>
      </TopUniformSection>

      <UniformPaddingSection className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-black">
        <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
          Guide to Learning to <strong>Drive in the UK</strong>
        </h1>
        <div>
          <div className="mx-auto w-full md:w-[50%] lg:w-[35%] xl:w-[30%] lg:pl-5 pb-2 lg:float-right">
            <Image
              src="/cdapaedia-1.png"
              alt="content image"
              width={500}
              height={300}
              className="w-full h-auto xl:max-h-110 object-cover rounded-lg"
            />
          </div>
          <p className="whitespace-pre-wrap text-[#585858] text-sm md:text-base xl:text-lg mt-4 lg:mt-0">
            Learning to drive in the UK is an exciting journey, and Cambridge
            Driving Academy makes it safe, structured, and confidence-building.
            We are widely considered the best driving school in Cambridge for
            those looking to learn to drive in Cambridge, offering intensive
            driving courses for beginners or other driving tuition packages.
            <br />
            <br />
            Our DVSA-approved professional driving instructors in Cambridge
            provide structured, supportive training. We specialise in driving
            test preparation in Cambridge, helping learners follow the official
            UK driving syllabus and prepare to pass the practical driving test
            on the first attempt at Brookmont Court Driving Test Centre. In
            Cambridge.
            <br />
            <br />
            Whether you&apos;re looking for manual driving instructors in
            Cambridge or automatic driving instructors in Cambridge, our
            complete driving tuition in Cambridge covers every need. We are
            proud to offer affordable driving lessons in Cambridge, providing
            cheap driving lessons in Cambridge without compromising on quality.
            Our team includes male and female driving instructors in Cambridge,
            and we welcome nervous drivers, young learners, and all experience
            levels.
          </p>
        </div>
      </UniformPaddingSection>

      <CdapediaCardGrid />

      <section className="w-full h-16" />
    </>
  );
}
