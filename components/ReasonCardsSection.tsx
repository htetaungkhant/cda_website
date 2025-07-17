import Image from "next/image";
import React from "react";

import SvgImage5 from "@/public/5.svg";
import SvgImage6 from "@/public/6.svg";
import SvgImage7 from "@/public/7.svg";
import SvgImage8 from "@/public/8.svg";

const ReasonCardsSection = () => {
  return (
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <h1 className="text-4xl max-lg:text-center">
        <strong>Why Choose Us?</strong>
      </h1>
      <p className="max-lg:text-center">
        At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {/* Reason Card 1 */}
        <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-1.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
          <Image
            src={SvgImage5}
            alt="Reason 1"
            width={64}
            height={64}
            className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
          />
          <h2 className="font-semibold text-lg md:text-xl relative">
            Certified, Friendly Instructors
          </h2>
          <p className="text-sm md:text-base relative">
            Our certified instructors build confidence and focus on safe driving
            habits for all skill levels.
          </p>
        </div>
        {/* Reason Card 2 */}
        <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-2.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
          <Image
            src={SvgImage6}
            alt="Reason 2"
            width={64}
            height={64}
            className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
          />
          <h2 className="font-semibold text-lg md:text-xl relative">
            Certified, Friendly Instructors
          </h2>
          <p className="text-sm md:text-base relative">
            Our certified instructors build confidence and focus on safe driving
            habits for all skill levels.
          </p>
        </div>
        {/* Reason Card 3 */}
        <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-3.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
          <Image
            src={SvgImage7}
            alt="Reason 3"
            width={64}
            height={64}
            className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
          />
          <h2 className="font-semibold text-lg md:text-xl relative">
            Certified, Friendly Instructors
          </h2>
          <p className="text-sm md:text-base relative">
            Our certified instructors build confidence and focus on safe driving
            habits for all skill levels.
          </p>
        </div>
        {/* Reason Card 4 */}
        <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-4.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
          <Image
            src={SvgImage8}
            alt="Reason 4"
            width={64}
            height={64}
            className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
          />
          <h2 className="font-semibold text-lg md:text-xl relative">
            Certified, Friendly Instructors
          </h2>
          <p className="text-sm md:text-base relative">
            Our certified instructors build confidence and focus on safe driving
            habits for all skill levels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReasonCardsSection;
