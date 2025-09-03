"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Banner1 from "@/public/banner-1.jpg";
import Banner2 from "@/public/banner-2.jpg";
import Banner3 from "@/public/banner-3.jpg";
import Steer from "@/public/steer.png";
import { ButtonStyle1 } from "./Button";

const Banner = () => {
  const bannerImages = [Banner1, Banner2, Banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [steerRotation, setSteerRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
      setSteerRotation((prevRotation) => prevRotation + 120);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section className="h-screen w-screen relative overflow-hidden">
      {bannerImages.map((banner, index) => (
        <Image
          key={index}
          src={banner}
          width={1920}
          height={1080}
          alt={`Banner ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Banner 1 content */}
      <div
        className={`flex flex-col justify-center max-lg:justify-start max-lg:pt-30 max-md:pt-20 w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          currentImageIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-radial-[at_30%_50%] max-lg:bg-radial-[at_50%_50%] from-[#000000] to-[#00000000] opacity-50"></div>

        {/* content */}
        <div className="p-8 flex flex-col max-lg:items-center gap-4 items-start justify-center w-3/7 max-lg:w-full text-white relative">
          <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-3xl">
            Master the Road with Confidence
          </h1>
          <p className="max-lg:text-center">
            If you&apos;re based in Cambridgeshire and want to take control
            behind the wheel, our manual driving lessons are made for you. Learn
            with certified instructors at your pace.
          </p>
          <ButtonStyle1
            href="https://www.totaldrive.app/a/onlinebooking.php?173468681946771&all=true"
            target="_blank"
            className="mt-4"
          >
            Book Now
          </ButtonStyle1>
        </div>
      </div>

      {/* Banner 2 content */}
      <div
        className={`flex flex-col justify-center max-lg:justify-start max-lg:pt-30 max-md:pt-20 w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          currentImageIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-radial-[at_30%_50%] max-lg:bg-radial-[at_50%_50%] from-[#000000] to-[#00000000] opacity-50"></div>

        {/* content */}
        <div className="p-8 flex flex-col max-lg:items-center gap-4 items-start justify-center w-3/7 max-lg:w-full text-white relative">
          <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-3xl">
            Drive Easy with Automatic Lessons
          </h1>
          <p className="max-lg:text-center">
            Learning to drive in Cambridgeshire? Our automatic courses are
            perfect for fast learning and effortless city driving — zero
            stalling, all confidence.
          </p>
          <ButtonStyle1
            href="https://www.totaldrive.app/a/onlinebooking.php?173468681946771&all=true"
            target="_blank"
            className="mt-4"
          >
            Book Now
          </ButtonStyle1>
        </div>
      </div>

      {/* Banner 3 content */}
      <div
        className={`flex flex-col justify-center max-lg:justify-start max-lg:pt-30 max-md:pt-20 w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          currentImageIndex === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-radial-[at_30%_50%] max-lg:bg-radial-[at_50%_50%] from-[#000000] to-[#00000000] opacity-50"></div>

        {/* content */}
        <div className="p-8 flex flex-col max-lg:items-center gap-4 items-start justify-center w-3/7 max-lg:w-full text-white relative">
          <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-3xl">
            Pass Fast with Our Intensive Courses
          </h1>
          <p className="max-lg:text-center">
            Pressed for time? Our intensive crash courses are designed to get
            you on the road quickly — ideal for learners needing rapid results.
          </p>
          <ButtonStyle1
            href="https://www.totaldrive.app/a/onlinebooking.php?173468681946771&all=true"
            target="_blank"
            className="mt-4"
          >
            Book Now
          </ButtonStyle1>
        </div>
      </div>

      <Image
        src={Steer}
        width={1920}
        height={1080}
        alt="Steering Wheel"
        className="absolute top-1/2 lg:right-0 transform lg:translate-x-1/2 lg:-translate-y-1/2 w-full h-[90vh] max-lg:h-[100vh] object-contain z-10 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `rotate(${steerRotation}deg)`,
        }}
      />
    </section>
  );
};

export default Banner;
