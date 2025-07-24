import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { TbWheel } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";

import { cn } from "@/lib/utils";
import { ButtonStyle3 } from "./Button";
import { CoursePackage } from "@/type";

interface PricingCardStyle1Props {
  transmissionType: "Automatic" | "Manual";
  price: string;
  save: string;
  features: string[];
  className?: string;
}

export function PricingCardStyle1({
  transmissionType,
  price,
  save,
  features,
  className,
}: PricingCardStyle1Props) {
  return (
    <div
      className={cn(
        "w-full sm:w-100 flex flex-col border border-black rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden",
        className
      )}
    >
      <h1 className="px-2 py-1 flex items-center justify-center gap-2 text-white text-lg lg:text-xl font-semibold uppercase bg-[#302204]">
        <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
        <span>{transmissionType} Transmission</span>
      </h1>
      <div className="p-1.5 md:p-2">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-bl-2xl">
            <span className="font-bold text-2xl md:text-4xl">{price}</span>
            <p className="text-sm md:text-base">Your Price</p>
          </div>
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-br-2xl">
            <span className="font-bold text-2xl md:text-4xl">{save}</span>
            <p className="text-sm md:text-base">Your Save</p>
          </div>
        </div>
        <ul className="md:mt-1 list-none py-1 md:py-2 grid grid-cols-1 gap-1 lg:gap-2">
          {features.map((feature, index) => (
            <li
              key={`${transmissionType}-${index}`}
              className="flex items-center gap-1 md:gap-2.5"
            >
              <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
              <span className="text-sm lg:text-base">{feature}</span>
            </li>
          ))}
        </ul>
        <ButtonStyle3 className="w-full">Book Now</ButtonStyle3>
      </div>
    </div>
  );
}

interface PricingCardStyle2Props {
  transmissionType: "Automatic" | "Manual";
  price: string;
  save: string;
  features: string[];
  className?: string;
}

export function PricingCardStyle2({
  transmissionType,
  price,
  save,
  features,
  className,
}: PricingCardStyle2Props) {
  return (
    <div
      className={cn(
        "w-full sm:w-112 flex flex-col border border-black rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden",
        className
      )}
    >
      <h1 className="px-2 py-2 lg:px-3 lg:py-3 flex items-center justify-center gap-2 text-white text-lg md:text-xl lg:text-2xl font-semibold uppercase bg-[#302204]">
        <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
        <span>{transmissionType} Transmission</span>
      </h1>
      <div className="p-1.5 md:p-2">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-bl-2xl">
            <span className="font-bold text-2xl md:text-4xl">{price}</span>
            <p className="text-xs sm:text-sm md:text-base">Weekdays</p>
          </div>
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-br-2xl">
            <span className="font-bold text-2xl md:text-4xl">{save}</span>
            <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
              Weekends & Evenings
            </p>
          </div>
        </div>
        <ul className="md:mt-1 list-none py-1 md:py-2 grid grid-cols-1">
          {features.map((feature, index) => (
            <li
              key={`${transmissionType}-${index}`}
              className="mx-auto py-0.5 lg:py-1 text-sm lg:text-base text-center not-last:border-b border-gray-400"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface PricingCardStyle3Props extends CoursePackage {
  className?: string;
}

export function PricingCardStyle3({
  color,
  title,
  courseTiming,
  subTitle,
  practicalTestPrice,
  noPracticalTestPrice,
  description,
  className,
}: PricingCardStyle3Props) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col border border-[#FFFFFF66] rounded-xl overflow-hidden cursor-pointer",
        className
      )}
    >
      <MdArrowOutward className="absolute top-2 right-2 w-6 h-6 lg:w-8 lg:h-8 text-white" />
      <div
        className={cn(
          "p-1.5 md:p-2 text-white font-semibold",
          color === "bronze" && "bg-gradient-to-r from-[#CE8237] to-[#764413]",
          color === "extended" &&
            "bg-gradient-to-r from-[#7C7C7E] to-[#484847]",
          color === "silver" && "bg-gradient-to-r from-[#7C7C7E] to-[#484847]",
          color === "gold" && "bg-gradient-to-r from-[#A17301] to-[#3B2A00]"
        )}
      >
        <h1 className="mx-auto max-w-9/10 p-1 text-center text-lg md:text-xl lg:text-2xl uppercase whitespace-nowrap">
          <span>{title}</span>
          {courseTiming && (
            <>
              <br />
              <span>({courseTiming} Hours)</span>
            </>
          )}
        </h1>
        <h4 className="flex items-center justify-center gap-2 whitespace-nowrap text-sm lg:text-base">
          <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
          <span>{subTitle}</span>
        </h4>
      </div>
      <div
        className={cn(
          "flex-1 flex flex-col p-1.5 md:p-2",
          color === "bronze" && "bg-gradient-to-r from-[#DBAB7E] to-[#CD7F32]",
          color === "extended" &&
            "bg-gradient-to-r from-[#A8A9AD] to-[#C0C0C0]",
          color === "silver" && "bg-gradient-to-r from-[#A8A9AD] to-[#C0C0C0]",
          color === "gold" && "bg-gradient-to-r from-[#FFB700] to-[#FFD700]"
        )}
      >
        <p className="flex-1 py-1 text-sm lg:text-base">{description}</p>
        <div className="mt-1 flex">
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-white border border-[#794911] rounded-bl-2xl">
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {typeof practicalTestPrice === "number"
                ? `£${practicalTestPrice}`
                : practicalTestPrice}
            </span>
            <p className="text-[10px] min-[375px]:text-xs lg:text-sm whitespace-nowrap">
              Includes practical test
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-white border border-[#794911] rounded-br-2xl">
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {typeof noPracticalTestPrice === "number"
                ? `£${noPracticalTestPrice}`
                : noPracticalTestPrice}
            </span>
            <p className="text-[10px] min-[375px]:text-xs lg:text-sm whitespace-nowrap">
              Without practical test
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
