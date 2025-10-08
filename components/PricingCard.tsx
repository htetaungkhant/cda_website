"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { PiSealCheckFill } from "react-icons/pi";
import { TbWheel } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { cn } from "@/lib/shared/utils";
import { Course } from "@/types/course";
import { DrivingMode } from "@/types/global";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonStyle3 } from "./Button";
import { CardStyle1 } from "./Card";
import CommonBookingForm from "./CommonBookingForm";

interface PricingCardStyle1Props {
  id: string;
  drivingMode: DrivingMode;
  price: string;
  save: string;
  features: string[];
  className?: string;
}

export function PricingCardStyle1({
  id,
  drivingMode,
  price,
  save,
  features,
  className,
}: PricingCardStyle1Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "w-full sm:w-100 flex flex-col border border-black rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden",
        className
      )}
    >
      <h1 className="px-2 py-1 flex items-center justify-center gap-2 text-white text-lg lg:text-xl font-semibold uppercase bg-[#302204]">
        <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
        <span>{drivingMode} Transmission</span>
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
              key={`${drivingMode}-${index}`}
              className="flex items-center gap-1 md:gap-2.5"
            >
              <PiSealCheckFill className="text-[var(--custom-primary)] min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
              <span className="text-sm lg:text-base">{feature?.trim()}</span>
            </li>
          ))}
        </ul>
        <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <ButtonStyle3 className="w-full">Book Now</ButtonStyle3>
          </DialogTrigger>
          <DialogContent
            // overlay={false}
            showCloseButton={false}
            className="p-0 sm:max-w-[70vw] w-[90vw] md:w-[75vw] lg:w-[60vw] lg:max-w-200 rounded-3xl border-none"
          >
            <DialogTitle className="hidden" />
            <DialogDescription className="hidden" />
            <DialogClose asChild>
              <Image
                src="/cross-icon-black.png"
                alt="Close"
                width={24}
                height={24}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </DialogClose>
            <CommonBookingForm id={id} onSuccess={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

interface PricingCardStyle2Props {
  drivingMode: DrivingMode;
  price: string;
  save: string;
  features: string[];
  noHeader?: boolean;
  className?: string;
}

export function PricingCardStyle2({
  drivingMode,
  price,
  save,
  features,
  noHeader = false,
  className,
}: PricingCardStyle2Props) {
  return (
    <div
      className={cn(
        "w-full sm:w-112 flex flex-col border border-black rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden",
        className
      )}
    >
      {!noHeader && (
        <h1 className="px-2 py-2 lg:px-3 lg:py-3 flex items-center justify-center gap-2 text-white text-lg md:text-xl lg:text-2xl font-semibold uppercase bg-[#302204]">
          <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
          <span>{drivingMode} Transmission</span>
        </h1>
      )}
      <div className="p-1.5 md:p-2">
        <div className="flex text-black">
          <div
            className={cn(
              "flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-bl-2xl",
              noHeader && "rounded-tl-2xl"
            )}
          >
            <span className="font-bold text-2xl md:text-4xl">{price}</span>
            <p className="text-xs sm:text-sm md:text-base">Weekdays</p>
          </div>
          <div
            className={cn(
              "flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-[#F8B624] border border-[#794911] rounded-br-2xl",
              noHeader && "rounded-tr-2xl"
            )}
          >
            <span className="font-bold text-2xl md:text-4xl">{save}</span>
            <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
              Weekends & Evenings
            </p>
          </div>
        </div>
        <ul className="md:mt-1 list-none py-1 md:py-2 grid grid-cols-1">
          {features.map((feature, index) => (
            <li
              key={`${drivingMode}-${index}`}
              className="mx-auto py-0.5 lg:py-1 text-sm lg:text-base text-center not-last:border-b border-gray-400"
            >
              {feature?.trim()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface PricingCardStyle3Props extends Course {
  features?: {
    image: string;
    title: string;
  }[];
  className?: string;
}

export function PricingCardStyle3({
  id,
  cardColor,
  name,
  timeInHours,
  suitability,
  descriptionList,
  experience,
  duration,
  primaryPrice,
  secondaryPrice,
  features,
  className,
}: PricingCardStyle3Props) {
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isBooking1Open, setIsBooking1Open] = useState(false);
  const [isBooking2Open, setIsBooking2Open] = useState(false);

  const handleLeftArrowClick = () => {
    if (mobileScrollContainerRef.current) {
      const cardWidth = (
        mobileScrollContainerRef.current.querySelector(
          ":first-child"
        ) as HTMLElement | null
      )?.offsetWidth;
      const gap = 16;
      if (cardWidth) {
        const scrollAmount = cardWidth + gap;
        mobileScrollContainerRef.current.scrollTo({
          left: mobileScrollContainerRef.current.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleRightArrowClick = () => {
    if (mobileScrollContainerRef.current) {
      const cardWidth = (
        mobileScrollContainerRef.current.querySelector(
          ":first-child"
        ) as HTMLElement | null
      )?.offsetWidth;
      const gap = 16;
      if (cardWidth) {
        const scrollAmount = cardWidth + gap;
        mobileScrollContainerRef.current.scrollTo({
          left: mobileScrollContainerRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      <Dialog modal>
        <DialogTrigger asChild>
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
                cardColor === "bronze" &&
                  "bg-gradient-to-r from-[#CE8237] to-[#764413]",
                cardColor === "silver" &&
                  "bg-gradient-to-r from-[#7C7C7E] to-[#484847]",
                cardColor === "gold" &&
                  "bg-gradient-to-r from-[#A17301] to-[#3B2A00]",
                cardColor === "white" &&
                  "bg-gradient-to-r from-[#FFFFFF] to-[#EAEAEA]"
              )}
            >
              <h1
                className={cn(
                  "mx-auto max-w-9/10 p-1 text-center text-base min-[375px]:text-lg md:text-xl lg:text-2xl uppercase whitespace-nowrap",
                  cardColor === "white" && "text-black"
                )}
              >
                <span>{name}</span>
                {timeInHours && (
                  <>
                    <br />
                    <span>({timeInHours} Hours)</span>
                  </>
                )}
              </h1>
              {suitability && (
                <h4
                  className={cn(
                    "flex items-center justify-center gap-2 whitespace-nowrap text-xs min-[375px]:text-sm lg:text-base",
                    cardColor === "white" && "text-black"
                  )}
                >
                  <TbWheel
                    className={cn(
                      "w-5 min-w-5 h-5 text-white border-3 border-white rounded-full",
                      cardColor === "white" && "text-black border-black"
                    )}
                  />
                  <span>{suitability}</span>
                </h4>
              )}
            </div>
            <div
              className={cn(
                "flex-1 flex flex-col p-1.5 md:p-2",
                cardColor === "bronze" &&
                  "bg-gradient-to-r from-[#DBAB7E] to-[#CD7F32]",
                cardColor === "silver" &&
                  "bg-gradient-to-r from-[#A8A9AD] to-[#C0C0C0]",
                cardColor === "gold" &&
                  "bg-gradient-to-r from-[#FFB700] to-[#FFD700]",
                cardColor === "white" && "bg-white"
              )}
            >
              <p className="flex-1 py-1 text-xs min-[375px]:text-sm lg:text-base line-clamp-3">
                {descriptionList?.filter(Boolean)?.join(" ")}
              </p>
              <div className="mt-1 flex">
                <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-white border border-[#794911] rounded-bl-2xl">
                  <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    {typeof primaryPrice === "number"
                      ? `£${primaryPrice.toLocaleString("en-US")}`
                      : primaryPrice}
                  </span>
                  <p className="text-[10px] min-[375px]:text-xs lg:text-sm whitespace-nowrap">
                    Includes practical test
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-1 justify-center items-center p-1.5 md:p-3 bg-white border border-[#794911] rounded-br-2xl">
                  <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    {typeof secondaryPrice === "number"
                      ? `£${secondaryPrice.toLocaleString("en-US")}`
                      : secondaryPrice}
                  </span>
                  <p className="text-[10px] min-[375px]:text-xs lg:text-sm whitespace-nowrap">
                    Without practical test
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className={cn(
            "text-white p-0 sm:max-w-[90vw] w-[95vw] lg:max-w-400 2xl:-ml-6",
            cardColor === "bronze" &&
              "bg-gradient-to-r from-[#CD7F32] to-[#DBAB7E]",
            cardColor === "silver" &&
              "bg-gradient-to-r from-[#626262] to-[#C0C0C0]",
            cardColor === "gold" &&
              "bg-gradient-to-r from-[#B78300] via-[#C37F00] to-[#FFD700]",
            cardColor === "white" &&
              "text-black bg-gradient-to-r from-[#FFFFFF] to-[#EAEAEA]"
          )}
        >
          <DialogClose asChild>
            <Image
              src="/cross-icon.png"
              alt="Close"
              width={24}
              height={24}
              className="absolute top-2 right-2 cursor-pointer z-10"
            />
          </DialogClose>
          <div className="px-4 py-4 lg:px-6 lg:py-8 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <DialogTitle className="font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase whitespace-nowrap">
              <span className="font-black underline">{name}</span>
              {timeInHours && (
                <>
                  <br />
                  <span className="text-base md:text-lg lg:text-xl">
                    ({timeInHours} Hours)
                  </span>
                </>
              )}
            </DialogTitle>
            {suitability && (
              <h4 className="flex items-center justify-center gap-2 whitespace-nowrap text-sm lg:text-base font-semibold mt-1">
                <TbWheel
                  className={cn(
                    "w-5 min-w-5 h-5 border-3 border-white rounded-full",
                    cardColor === "white" && "text-black border-black"
                  )}
                />
                <span>{suitability}</span>
              </h4>
            )}
            <div className="mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3">
              <h2 className="font-black text-base sm:text-lg md:text-xl lg:text-2xl">
                Course Description:
              </h2>
              <DialogDescription
                className={cn(
                  "text-white text-xs md:text-sm lg:text-base",
                  cardColor === "white" && "text-black"
                )}
              >
                {descriptionList?.filter(Boolean)?.join(" ")}
              </DialogDescription>
              {experience && duration && (
                <ul className="list-none grid grid-cols-1 gap-1 text-xs md:text-sm lg:text-base">
                  {experience && (
                    <li>
                      <PiSealCheckFill className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5 text-[#503517]" />
                      <span className="font-semibold">Experience Level:</span>{" "}
                      {experience}
                    </li>
                  )}
                  {duration && (
                    <li>
                      <PiSealCheckFill className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5 text-[#503517]" />
                      <span className="font-semibold">Course Duration:</span>{" "}
                      {duration}
                    </li>
                  )}
                </ul>
              )}
            </div>
            {Array.isArray(features) && features.length > 0 && (
              <div className="mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3">
                <h2 className="font-black text-base sm:text-lg md:text-xl lg:text-2xl">
                  What’s Included:
                </h2>
                <div
                  ref={mobileScrollContainerRef}
                  className={cn(
                    "py-1 flex lg:grid lg:grid-cols-1 gap-4 max-lg:overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                    features.length === 2 && "lg:grid-cols-2",
                    features.length >= 3 && "lg:grid-cols-3"
                  )}
                  style={{ touchAction: "pan-y" }}
                >
                  {features.map((feature, index) => (
                    <CardStyle1
                      key={`${feature.title}-${index}`}
                      iconUrl={feature.image}
                      title={feature.title}
                      className="min-w-63 min-[375px]:max-md:min-w-77 md:max-lg:min-w-80 lg:min-w-auto shadow-md"
                    />
                  ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <div
                  className={cn(
                    "mt-4 relative flex justify-center lg:hidden",
                    features.length <= 2 && "md:hidden",
                    features.length <= 1 && "hidden"
                  )}
                >
                  <button
                    onClick={handleLeftArrowClick}
                    className="px-4 py-2 bg-white cursor-pointer rounded-l-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
                  >
                    <FaArrowLeft className="text-[#545454]" />
                  </button>
                  <button
                    onClick={handleRightArrowClick}
                    className="px-4 py-2 bg-white cursor-pointer rounded-r-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
                  >
                    <FaArrowRight className="text-[#545454]" />
                  </button>
                </div>
              </div>
            )}
            <div className="mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3">
              <h2 className="font-black text-base sm:text-lg md:text-xl lg:text-2xl">
                Pricings:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                <div className="flex flex-col gap-1 md:gap-2 p-2 md:p-3 bg-white text-black text-center md:border border-[#794911] md:rounded-bl-2xl">
                  <h1 className="font-black text-2xl md:text-3xl lg:text-4xl">
                    {typeof primaryPrice === "number"
                      ? `£${primaryPrice.toLocaleString("en-US")}`
                      : primaryPrice}
                  </h1>
                  <p>Includes practical test</p>
                  <Dialog
                    modal
                    open={isBooking1Open}
                    onOpenChange={setIsBooking1Open}
                  >
                    <DialogTrigger asChild>
                      <ButtonStyle3 className="w-full lg:max-w-7/10 mx-auto">
                        Book Now
                      </ButtonStyle3>
                    </DialogTrigger>
                    <DialogContent
                      // overlay={false}
                      showCloseButton={false}
                      className="p-0 sm:max-w-[70vw] w-[90vw] md:w-[75vw] lg:w-[60vw] lg:max-w-200 rounded-3xl border-none"
                    >
                      <DialogTitle className="hidden" />
                      <DialogDescription className="hidden" />
                      <DialogClose asChild>
                        <Image
                          src="/cross-icon-black.png"
                          alt="Close"
                          width={24}
                          height={24}
                          className="absolute top-3 right-3 cursor-pointer"
                        />
                      </DialogClose>
                      <CommonBookingForm
                        id={id}
                        onSuccess={() => setIsBooking1Open(false)}
                        withTest={true}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 p-2 md:p-3 max-md:pt-6 bg-white text-black text-center md:border border-[#794911] max-md:rounded-bl-2xl rounded-br-2xl">
                  <h1 className="font-black text-2xl md:text-3xl lg:text-4xl">
                    {typeof secondaryPrice === "number"
                      ? `£${secondaryPrice.toLocaleString("en-US")}`
                      : secondaryPrice}
                  </h1>
                  <p>Without practical test</p>
                  <Dialog
                    modal
                    open={isBooking2Open}
                    onOpenChange={setIsBooking2Open}
                  >
                    <DialogTrigger asChild>
                      <ButtonStyle3 className="w-full lg:max-w-7/10 mx-auto">
                        Book Now
                      </ButtonStyle3>
                    </DialogTrigger>
                    <DialogContent
                      showCloseButton={false}
                      className="p-0 sm:max-w-[70vw] w-[90vw] md:w-[75vw] lg:w-[60vw] lg:max-w-200 rounded-3xl border-none"
                    >
                      <DialogTitle className="hidden" />
                      <DialogDescription className="hidden" />
                      <DialogClose asChild>
                        <Image
                          src="/cross-icon-black.png"
                          alt="Close"
                          width={24}
                          height={24}
                          className="absolute top-3 right-3 cursor-pointer"
                        />
                      </DialogClose>
                      <CommonBookingForm
                        id={id}
                        onSuccess={() => setIsBooking2Open(false)}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-6 flex flex-col rounded-2xl overflow-hidden border border-black shadow-md">
              <h1 className="p-2 lg:p-3 text-lg lg:text-xl text-white text-center font-semibold uppercase bg-[#660B0B]">
                Important Disclaimer
              </h1>
              <p className="px-2 py-1 lg:px-3 lg:py-2 flex gap-1 lg:gap-2 bg-white text-[#585858]">
                <PiSealCheckFill className="max-md:mt-1 md:max-lg:-mt-1 min-w-4 min-h-4 md:w-7 md:h-7 text-[var(--custom-primary)]" />
                <span className="block text-sm lg:text-base">
                  Please be aware that the current waiting time for a practical
                  driving test in Cambridge is approximately 8 weeks from the
                  start of your course. An applicant should have cleared his/her
                  theory driving test
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
