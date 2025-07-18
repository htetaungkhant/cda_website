import React from "react";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";

import igGalleryImage from "@/public/ig-gallery.png";
import dummyData1 from "@/public/dummy-data/1.png";
import dummyData2 from "@/public/dummy-data/2.png";

const IgGallery = () => {
  return (
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <div className="p-8 max-lg:p-4 border border-[#00000033] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)] rounded-xl lg:rounded-3xl bg-white">
        <div className="flex md:items-center gap-4">
          <Image
            src={igGalleryImage}
            width={81}
            height={81}
            alt="Instagram Gallery"
            className="w-20 h-20 max-lg:w-16 max-lg:h-16 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 text-[var(--custom-primary)]">
            <h2 className="font-medium">cambridgedriving</h2>
            <div className="flex gap-4 flex-wrap text-xs max-lg:text-[10px]">
              <p>🚗 Learn how to drive confidently Certified Instructors</p>
              <p>
                🛣️ Your journey to safe driving starts here! Offering lessons
                for all ages & skill levels.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          <Image
            src={dummyData1}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData2}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData1}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData2}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData1}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData2}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData1}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
          <Image
            src={dummyData2}
            width={200}
            height={200}
            alt="Instagram Gallery"
            className="w-full h-full rounded-sm object-cover"
          />
        </div>
        <button className="cursor-pointer mx-auto flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-to-br from-[#EC554E] to-[#BF3C82] text-white font-semibold rounded-full max-lg:text-sm">
          <FaSquareInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
          <span>Open Instagram</span>
        </button>
      </div>
    </section>
  );
};

export default IgGallery;
