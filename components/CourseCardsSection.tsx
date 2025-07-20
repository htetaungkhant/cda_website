"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TbWheel } from "react-icons/tb";
import { IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import ManualDriving from "@/public/manual-driving.png";
import IntensiveDriving from "@/public/intensive-driving.png";
import AutomaticDriving from "@/public/automatic-driving.png";
import BulkBooking from "@/public/bulk-booking.png";

const CourseCardsSection = () => {
  const cardsRowRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (cardsRowRef.current) {
      cardsRowRef.current.classList.replace("gap-16", "gap-4");
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (cardsRowRef.current) {
      cardsRowRef.current.classList.replace("gap-4", "gap-16");
    }
  };

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
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <h1 className="text-4xl max-lg:text-center">
        Our <strong>Driving Courses</strong>
      </h1>
      <p className="max-lg:text-center">
        Whether you&apos;re a beginner or just need a refresher, Cambridge
        Driving Academy has a course tailored to your journey. Choose the right
        course and start driving with skill, confidence, and control.
      </p>
      <div
        ref={cardsRowRef}
        className="flex gap-16 transition-all duration-500 ease-in-out max-lg:hidden"
      >
        {/* Course Card 1 */}
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative h-112 flex-2 flex flex-col justify-center gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group hover:flex-3 transition-all duration-500 ease-in-out"
        >
          <h2 className="font-bold text-white text-3xl absolute z-10 top-5 transform translate-y-2 group-hover:translate-y-0 group-hover:scale-90 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            Manual Driving
          </h2>
          <h2 className="font-bold text-xl lg:text-2xl absolute z-10 top-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Manual Driving
          </h2>
          <Image
            src={ManualDriving}
            alt="Manual Driving Course"
            width={160}
            height={300}
            className="absolute top-0 left-0 z-0 group-hover:top-18 group-hover:left-5 rounded-xl group-hover:w-[calc(50%-30px)] group-hover:h-[65%] w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="w-[calc(50%-30px)] absolute top-18 right-5 transform translate-x-100 group-hover:translate-x-0 flex flex-col gap-2 items-end transition-all duration-500 ease-in-out">
            <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
              <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
              <span>Manual</span>
            </div>
            <p className="text-xs">
              Learn the essentials of driving with full control. Our manual
              lessons help you master gear shifting, clutch control, and road
              safety skills, preparing you for any vehicle and situation with
              confidence and real-world driving experience.
            </p>
          </div>
          <button className="absolute bottom-5 left-5 right-5 z-10 bg-white group-hover:bg-[var(--custom-primary)] text-black group-hover:text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-black group-hover:border-white transform -rotate-45 group-hover:rotate-0 rounded-full transition-all duration-500 ease-in-out" />
          </button>
        </div>
        {/* Course Card 2 */}
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative h-112 flex-2 flex flex-col justify-center gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group hover:flex-3 transition-all duration-500 ease-in-out"
        >
          <h2 className="font-bold text-white text-3xl absolute z-10 top-5 transform translate-y-2 group-hover:translate-y-0 group-hover:scale-90 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            Intensive Driving
          </h2>
          <h2 className="font-bold text-xl lg:text-2xl absolute z-10 top-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Intensive Driving
          </h2>
          <Image
            src={IntensiveDriving}
            alt="Intensive Driving Course"
            width={160}
            height={300}
            className="absolute top-0 left-0 z-0 group-hover:top-18 group-hover:left-5 rounded-xl group-hover:w-[calc(50%-30px)] group-hover:h-[65%] w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="w-[calc(50%-30px)] absolute top-18 right-5 transform translate-x-100 group-hover:translate-x-0 flex flex-col gap-2 items-end transition-all duration-500 ease-in-out">
            <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
              <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
              <span>Intensive</span>
            </div>
            <p className="text-xs">
              Need to get licensed fast? Our intensive courses offer fast-track
              training tailored to your schedule. Learn everything from basics
              to advanced maneuvers in a structured, focused way to pass your
              test in weeks—not months.
            </p>
          </div>
          <button className="absolute bottom-5 left-5 right-5 z-10 bg-white group-hover:bg-[var(--custom-primary)] text-black group-hover:text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-black group-hover:border-white transform -rotate-45 group-hover:rotate-0 rounded-full transition-all duration-500 ease-in-out" />
          </button>
        </div>
        {/* Course Card 3 */}
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative h-112 flex-2 flex flex-col justify-center gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group hover:flex-3 transition-all duration-500 ease-in-out"
        >
          <h2 className="font-bold text-white text-3xl absolute z-10 top-5 transform translate-y-2 group-hover:translate-y-0 group-hover:scale-90 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            Automatic Driving
          </h2>
          <h2 className="font-bold text-xl lg:text-2xl absolute z-10 top-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Automatic Driving
          </h2>
          <Image
            src={AutomaticDriving}
            alt="Automatic Driving Course"
            width={160}
            height={300}
            className="absolute top-0 left-0 z-0 group-hover:top-18 group-hover:left-5 rounded-xl group-hover:w-[calc(50%-30px)] group-hover:h-[65%] w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="w-[calc(50%-30px)] absolute top-18 right-5 transform translate-x-100 group-hover:translate-x-0 flex flex-col gap-2 items-end transition-all duration-500 ease-in-out">
            <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
              <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
              <span>Automatic</span>
            </div>
            <p className="text-xs">
              Perfect for beginners or those looking for an easier learning
              curve. Focus on traffic rules, steering, and road awareness while
              we handle the gearwork. Ideal for quick learning and city driving.
            </p>
          </div>
          <button className="absolute bottom-5 left-5 right-5 z-10 bg-white group-hover:bg-[var(--custom-primary)] text-black group-hover:text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-black group-hover:border-white transform -rotate-45 group-hover:rotate-0 rounded-full transition-all duration-500 ease-in-out" />
          </button>
        </div>
        {/* Course Card 4 */}
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative h-112 flex-2 flex flex-col justify-center gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group hover:flex-3 transition-all duration-500 ease-in-out"
        >
          <h2 className="font-bold text-white text-3xl absolute z-10 top-5 transform translate-y-2 group-hover:translate-y-0 group-hover:scale-90 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            Bulk Booking
          </h2>
          <h2 className="font-bold text-xl lg:text-2xl absolute z-10 top-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Bulk Booking
          </h2>
          <Image
            src={BulkBooking}
            alt="Bulk Booking Course"
            width={160}
            height={300}
            className="absolute top-0 left-0 z-0 group-hover:top-18 group-hover:left-5 rounded-xl group-hover:w-[calc(50%-30px)] group-hover:h-[65%] w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="w-[calc(50%-30px)] absolute top-18 right-5 transform translate-x-100 group-hover:translate-x-0 flex flex-col gap-2 items-end transition-all duration-500 ease-in-out">
            <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
              <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
              <span>Bulk Booking</span>
            </div>
            <p className="text-xs">
              Get exclusive discounts and flexible scheduling when you book
              lessons in bulk. Whether you&apos;re managing employee training or
              learning with friends, CDA makes group driving sessions easy,
              affordable, and effective.
            </p>
          </div>
          <button className="absolute bottom-5 left-5 right-5 z-10 bg-white group-hover:bg-[var(--custom-primary)] text-black group-hover:text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-black group-hover:border-white transform -rotate-45 group-hover:rotate-0 rounded-full transition-all duration-500 ease-in-out" />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div
        ref={mobileScrollContainerRef}
        className="flex overflow-x-auto gap-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden"
      >
        {/* Course Card 1 */}
        <div className="min-w-[87vw] sm:min-w-72 relative h-112 flex flex-col gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group">
          <h2 className="font-bold text-xl lg:text-2xl">Manual Driving</h2>
          <div className="flex-1 flex gap-2 lg:gap-4">
            <Image
              src={ManualDriving}
              alt="Manual Driving Course"
              width={160}
              height={300}
              className="rounded-xl w-1/2 h-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-2 items-end">
              <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
                <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
                <span>Manual</span>
              </div>
              <p className="text-xs">
                Learn the essentials of driving with full control. Our manual
                lessons help you master gear shifting, clutch control, and road
                safety skills, preparing you for any vehicle and situation with
                confidence and real-world driving experience.
              </p>
            </div>
          </div>
          <button className="bg-[var(--custom-primary)] cursor-pointer text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-white rounded-full" />
          </button>
        </div>
        {/* Course Card 2 */}
        <div className="min-w-[87vw] sm:min-w-72 relative h-112 flex flex-col gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group">
          <h2 className="font-bold text-xl lg:text-2xl">Intensive Driving</h2>
          <div className="flex-1 flex gap-2 lg:gap-4">
            <Image
              src={IntensiveDriving}
              alt="Intensive Driving Course"
              width={160}
              height={300}
              className="rounded-xl w-1/2 h-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-2 items-end">
              <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
                <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
                <span>Intensive</span>
              </div>
              <p className="text-xs">
                Need to get licensed fast? Our intensive courses offer
                fast-track training tailored to your schedule. Learn everything
                from basics to advanced maneuvers in a structured, focused way
                to pass your test in weeks—not months.
              </p>
            </div>
          </div>
          <button className="bg-[var(--custom-primary)] cursor-pointer text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-white rounded-full" />
          </button>
        </div>
        {/* Course Card 3 */}
        <div className="min-w-[87vw] sm:min-w-72 relative h-112 flex flex-col gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group">
          <h2 className="font-bold text-xl lg:text-2xl">Automatic Driving</h2>
          <div className="flex-1 flex gap-2 lg:gap-4">
            <Image
              src={AutomaticDriving}
              alt="Automatic Driving Course"
              width={160}
              height={300}
              className="rounded-xl w-1/2 h-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-2 items-end">
              <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
                <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
                <span>Automatic</span>
              </div>
              <p className="text-xs">
                Perfect for beginners or those looking for an easier learning
                curve. Focus on traffic rules, steering, and road awareness
                while we handle the gearwork. Ideal for quick learning and city
                driving.
              </p>
            </div>
          </div>
          <button className="bg-[var(--custom-primary)] cursor-pointer text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-white rounded-full" />
          </button>
        </div>
        {/* Course Card 4 */}
        <div className="min-w-[87vw] sm:min-w-72 relative h-112 flex flex-col gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 border border-[#00000066] rounded-xl shadow-xl bg-white overflow-hidden group">
          <h2 className="font-bold text-xl lg:text-2xl">Bulk Booking</h2>
          <div className="flex-1 flex gap-2 lg:gap-4">
            <Image
              src={BulkBooking}
              alt="Bulk Booking Course"
              width={160}
              height={300}
              className="rounded-xl w-1/2 h-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-2 items-end">
              <div className="p-1 pl-2 rounded-tl-2xl flex text-sm max-lg:text-xs text-white font-semibold items-center gap-2 bg-[var(--custom-primary)]">
                <TbWheel className="w-5 min-w-5 h-5 text-white border-3 border-white rounded-full" />
                <span>Bulk Booking</span>
              </div>
              <p className="text-xs">
                Get exclusive discounts and flexible scheduling when you book
                lessons in bulk. Whether you&apos;re managing employee training
                or learning with friends, CDA makes group driving sessions easy,
                affordable, and effective.
              </p>
            </div>
          </div>
          <button className="bg-[var(--custom-primary)] cursor-pointer text-white font-medium rounded-full flex items-center justify-between px-3 py-1 pr-1 hover:shadow-lg">
            <span className="whitespace-nowrap">READ MORE</span>
            <IoMdArrowForward className="p-1.5 max-lg:p-1 w-8 h-8 max-lg:w-7 max-lg:h-7 border border-white rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="relative flex justify-center lg:hidden">
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
    </section>
  );
};

export default CourseCardsSection;
