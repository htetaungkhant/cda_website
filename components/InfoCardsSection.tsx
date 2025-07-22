import React from "react";
import Image from "next/image";
import SvgImage1 from "@/public/1.svg";
import SvgImage2 from "@/public/2.svg";
import SvgImage3 from "@/public/3.svg";
import SvgImage4 from "@/public/4.svg";
import UniformPaddingSection from "./UniformPaddingSection";

const InfoCardsSection = () => {
  return (
    <UniformPaddingSection className="flex flex-col gap-4 text-black">
      <h1 className="text-4xl mt-3 lg:mt-6 max-lg:text-center">
        Your Road to <strong>Driving Success</strong>
      </h1>
      <p className="max-lg:text-center">
        Start your journey with ease at Cambridge Driving Academy. Whether
        it&apos;s getting your provisional licence, enrolling in lessons, or
        acing your driving test, we&apos;re here to support you with expert
        training and a clear path to becoming a confident driver.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {/* Info Card 1 */}
        <div className="relative h-62 lg:h-80 flex flex-col items-center justify-center gap-2 lg:gap-4 p-4 max-[330px]:p-2 xl:p-6 border rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB521] to-[#FFFFFF] transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FCB521] to-[#FFFFFF] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
          <div className="relative z-10 h-full w-full">
            <Image
              src={SvgImage1}
              alt="Enroll at CDA"
              width={120}
              height={120}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 md:-translate-y-20 max-w-28 w-2/5 h-auto object-contain transition-all duration-700 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-12 group-hover:md:w-16"
            />

            <h2 className="opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 md:translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-center transition-all duration-700 ease-in-out group-hover:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-left">
              <span className="whitespace-nowrap">Enroll at CDA</span>
            </h2>
            <h2 className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-0 transform translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-center transition-all duration-700 ease-in-out group-hover:top-12 group-hover:md:top-18 group-hover:xl:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-left">
              <span className="whitespace-nowrap">Enroll at CDA</span>
            </h2>

            <p className="absolute top-0 left-0 transform -translate-x-full -translate-y-8 text-[#585858] text-[10px] md:text-xs lg:text-sm opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-18 group-hover:md:translate-y-26 group-hover:xl:translate-y-30 group-hover:opacity-100 pr-4">
              Join Cambridge Driving Academy and get matched with experienced
              instructors. We tailor every lesson to your needs, ensuring a
              personalised and confidence-building learning experience.
            </p>
          </div>
        </div>
        {/* Info Card 2 */}
        <div className="relative h-62 lg:h-80 flex flex-col items-center justify-center gap-2 lg:gap-4 p-4 max-[330px]:p-2 xl:p-6 border rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB521] to-[#FFFFFF] transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FCB521] to-[#FFFFFF] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
          <div className="relative z-10 h-full w-full">
            <Image
              src={SvgImage2}
              alt="Make Payment"
              width={120}
              height={120}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 md:-translate-y-20 max-w-28 w-2/5 h-auto object-contain transition-all duration-700 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-12 group-hover:md:w-16"
            />

            <h2 className="opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 md:translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-center transition-all duration-700 ease-in-out group-hover:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <span className="whitespace-nowrap">Make</span>
              <br />
              <span className="whitespace-nowrap block -mt-1">Payment</span>
            </h2>
            <h2 className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-0 transform translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-left transition-all duration-700 ease-in-out group-hover:top-12 group-hover:md:top-18 group-hover:xl:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <span className="whitespace-nowrap">Make</span>
              <br />
              <span className="whitespace-nowrap block -mt-1">Payment</span>
            </h2>

            <p className="absolute top-0 left-0 transform -translate-x-full -translate-y-8 text-[#585858] text-[10px] md:text-xs lg:text-sm opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-24 group-hover:md:translate-y-32 group-hover:xl:translate-y-36 group-hover:opacity-100 pr-4">
              Easily secure your spot through our convenient payment options.
              Choose a course plan that fits your schedule and budget without
              any unnecessary hassle.
            </p>
          </div>
        </div>
        {/* Info Card 3 */}
        <div className="relative h-62 lg:h-80 flex flex-col items-center justify-center gap-2 lg:gap-4 p-4 max-[330px]:p-2 xl:p-6 border rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB521] to-[#FFFFFF] transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FCB521] to-[#FFFFFF] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
          <div className="relative z-10 h-full w-full">
            <Image
              src={SvgImage3}
              alt="Complete Your Tuition"
              width={120}
              height={120}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 md:-translate-y-20 max-w-28 w-2/5 h-auto object-contain transition-all duration-700 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-12 group-hover:md:w-16"
            />

            <h2 className="opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 md:translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-center transition-all duration-700 ease-in-out group-hover:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <span className="whitespace-nowrap">Complete</span>
              <br />
              <span className="whitespace-nowrap block -mt-1">
                Your Tuition
              </span>
            </h2>
            <h2 className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-0 transform translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-left transition-all duration-700 ease-in-out group-hover:top-12 group-hover:md:top-18 group-hover:xl:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <span className="whitespace-nowrap">Complete</span>
              <br />
              <span className="whitespace-nowrap block -mt-1">
                Your Tuition
              </span>
            </h2>

            <p className="absolute top-0 left-0 transform -translate-x-full -translate-y-8 text-[#585858] text-[10px] md:text-xs lg:text-sm opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-24 group-hover:md:translate-y-32 group-hover:xl:translate-y-36 group-hover:opacity-100 pr-4">
              Learn the skills to drive safely and confidently through
              structured lessons in manual or automatic cars, supported by
              certified & friendly instructors.
            </p>
          </div>
        </div>
        {/* Info Card 4 */}
        <div className="relative h-62 lg:h-80 flex flex-col items-center justify-center gap-2 lg:gap-4 p-4 max-[330px]:p-2 xl:p-6 border rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB521] to-[#FFFFFF] transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FCB521] to-[#FFFFFF] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
          <div className="relative z-10 h-full w-full">
            <Image
              src={SvgImage4}
              alt="Get Your Driving Licence"
              width={120}
              height={120}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 md:-translate-y-20 max-w-28 w-2/5 h-auto object-contain transition-all duration-700 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-12 group-hover:md:w-16"
            />

            <h2 className="opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 md:translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-center transition-all duration-700 ease-in-out group-hover:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <div className="flex flex-col">
                <span className="whitespace-nowrap">Get Your</span>
                <span className="whitespace-nowrap -mt-1">Driving</span>
                <span className="whitespace-nowrap -mt-1">Licence</span>
              </div>
            </h2>
            <h2 className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-0 transform translate-y-12 font-semibold text-lg lg:text-xl xl:text-2xl text-left transition-all duration-700 ease-in-out group-hover:top-12 group-hover:md:top-18 group-hover:xl:top-20 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <div className="flex flex-col">
                <span className="whitespace-nowrap">Get Your</span>
                <span className="whitespace-nowrap -mt-1">Driving</span>
                <span className="whitespace-nowrap -mt-1">Licence</span>
              </div>
            </h2>

            <p className="absolute top-0 left-0 transform -translate-x-full -translate-y-8 text-[#585858] text-[10px] md:text-xs lg:text-sm opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-32 group-hover:md:translate-y-38 group-hover:xl:translate-y-44 group-hover:opacity-100 pr-4">
              Pass your test and earn your driving licence with confidence and
              support.
            </p>
          </div>
        </div>
      </div>
    </UniformPaddingSection>
  );
};

export default InfoCardsSection;
