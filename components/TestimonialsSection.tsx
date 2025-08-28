"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";

import googleSvg from "@/public/google-logo.svg";
import { cn } from "@/lib/shared/utils";
import UniformPaddingSection from "./UniformPaddingSection";
import { ButtonStyle1 } from "./Button";

const dummyData = [
  {
    image: "/dummy-data/3.png",
    name: "Bella Pellegrini",
    date: "2024-09-05",
    rating: 5,
    review:
      "I had an amazing experience with the driving class. The instructors were professional and the lessons were very informative.",
  },
  {
    image: "/dummy-data/3.png",
    name: "John Doe",
    date: "2024-09-06",
    rating: 4.5,
    review:
      "I did a 26 hour intensive course (spread over 6 days) with Ahmad and passed on my first attempt. I couldn't recommend CDA more!",
  },
  {
    image: "/dummy-data/3.png",
    name: "Jane Smith",
    date: "2024-09-07",
    rating: 3,
    review:
      "The instructors were very patient and helpful. I highly recommend this class!",
  },
  {
    image: "/dummy-data/3.png",
    name: "Alice Johnson",
    date: "2024-09-08",
    rating: 4.5,
    review:
      "Great experience! The class was well-structured and the instructors were very knowledgeable.",
  },
  {
    image: "/dummy-data/3.png",
    name: "Bob Williams",
    date: "2024-09-09",
    rating: 5,
    review:
      "I learned so much in this class. The instructors were very professional and made the learning process enjoyable.",
  },
];

const TestimonialsSection = () => {
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (!mobileScrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - mobileScrollContainerRef.current.offsetLeft);
    setScrollLeft(mobileScrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (!isDragging || !mobileScrollContainerRef.current) return;
    const x = e.pageX - mobileScrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    mobileScrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
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
    <UniformPaddingSection className="flex flex-col gap-4 text-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        <strong>Our Testimonials</strong>
      </h1>
      <p className="max-lg:text-center text-xs md:text-sm lg:text-base text-[#585858]">
        At Cambridge Driving Academy, we go beyond lessons — we ensure a safe,
        flexible, and personalized driving experience that sets you up for
        success.
      </p>
      <div className="flex justify-center">
        <div
          ref={mobileScrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex overflow-x-auto gap-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ touchAction: "pan-y" }}
        >
          {/* Testimonial Cards */}
          {dummyData.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="relative min-w-[87vw] sm:min-w-80 h-64 xl:h-68 bg-gradient-to-b from-[#FCB521] to-[#FF8800] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-[1px] rounded-xl flex flex-col gap-2 md:gap-3 xl:gap-5 p-4 max-[330px]:p-2 xl:p-6 bg-white">
                <Image
                  src={googleSvg}
                  width={30}
                  height={30}
                  alt="google-logo"
                  className="absolute right-5 top-8 w-6 h-6"
                />
                <div className="flex gap-3">
                  <Image
                    src={testimonial.image}
                    width={70}
                    height={70}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                    alt="google-avatar"
                  />
                  <div className="py-1.5 flex flex-col justify-between gap-1">
                    <h3 className="text-base lg:text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  {/* rating stars */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < Math.floor(testimonial.rating) ? (
                          <FaStar className="text-yellow-500" />
                        ) : i < testimonial.rating ? (
                          <FaStarHalfAlt className="text-yellow-500" />
                        ) : (
                          <FaStar className="text-gray-300" />
                        )}
                      </span>
                    ))}
                  </div>
                  <PiSealCheckFill className="text-blue-500 w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700 line-clamp-4 xl:line-clamp-3">
                  {testimonial.review}
                </p>
                <div className="flex-1 flex items-end">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-gray-600 text-sm hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <div
        className={cn(
          "relative flex justify-center",
          dummyData.length === 1 && "hidden",
          dummyData.length <= 4 && "xl:hidden",
          dummyData.length <= 3 && "lg:hidden",
          dummyData.length <= 2 && "md:hidden"
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

      <div className="flex justify-center mt-2">
        <ButtonStyle1
          href="https://www.google.com/maps/place/Cambridge+Driving+Academy/@52.218965,0.139653,10z/data=!4m17!1m8!3m7!1s0x47d870f6b8b15949:0xe4646c6d8649454d!2s11+Kinross+Rd,+Chesterton,+Cambridge+CB4+1QU,+UK!3b1!8m2!3d52.2189646!4d0.1396526!16s%2Fg%2F11c0_ckcgp!3m7!1s0x47d8710ab2ecfe95:0x8cb000cee85efed5!8m2!3d52.2189652!4d0.1396524!9m1!1b1!16s%2Fg%2F11rgfxkw1j?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          View All
        </ButtonStyle1>
      </div>
    </UniformPaddingSection>
  );
};

export default TestimonialsSection;
