"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import Logo from "@/public/logo.png";
import { ButtonStyle1 } from "./Button";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  const [hamburgerDisplay, setHamburgerDisplay] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerDisplay(!hamburgerDisplay);
  };

  return (
    <header className="z-20 fixed top-0 left-0 right-0 lg:p-8 custom-scroll-margin">
      <div className="max-lg:relative max-lg:z-20 flex justify-between items-center px-4 py-2 bg-[#ffffffed] border border-[#00000033] rounded-4xl max-lg:rounded-none max-lg:border-none max-lg:bg-white">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            width={248}
            height={76}
            alt="Logo"
            className="w-48 h-16 max-lg:w-36 max-lg:h-12 object-contain"
          />
        </Link>
        <button
          onClick={handleHamburgerClick}
          className="relative lg:hidden text-black bg-[var(--custom-primary)] outline-none ring-0 rounded-lg w-8 h-8 cursor-pointer transition"
        >
          <RxCross2
            className={`absolute top-0 left-0 w-full h-full p-1 duration-300 ${
              hamburgerDisplay ? "opacity-100 rotate-90" : "opacity-0"
            }`}
          />
          <RxHamburgerMenu
            className={`absolute top-0 left-0 w-full h-full p-1 duration-300 ${
              hamburgerDisplay ? "opacity-0" : "opacity-100"
            }`}
          />
        </button>
        <nav className="max-lg:hidden">
          <ul className="flex gap-8 text-sm font-semibold">
            <li>
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link href="/our-team">OUR TEAM</Link>
            </li>
            <li>
              <HeaderDropdown
                title="EXPLORE CLASSES"
                titleHref="/explore-classes"
              >
                <ul className="px-2 py-2 text-xs font-medium">
                  <li className="flex items-center rounded-md text-black hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/explore-classes/manual-driving-class"
                      className="flex items-center justify-between w-full px-2 py-2 whitespace-nowrap"
                    >
                      MANUAL DRIVING CLASS
                      <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                  </li>
                  <li className="flex rounded-md text-black hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/explore-classes/automatic-driving-class"
                      className="flex items-center justify-between w-full px-2 py-2 whitespace-nowrap"
                    >
                      AUTOMATIC DRIVING CLASS
                      <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                  </li>
                  <li className="flex rounded-md text-black hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/explore-classes/intensive-driving-class"
                      className="flex items-center justify-between w-full px-2 py-2 whitespace-nowrap"
                    >
                      INTENSIVE DRIVING CLASS
                      <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                  </li>
                  <li className="flex rounded-md text-black hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/explore-classes/bulk-booking-class"
                      className="flex items-center justify-between w-full px-2 py-2 whitespace-nowrap"
                    >
                      BULK BOOKING CLASS
                      <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                  </li>
                  <li className="flex rounded-md text-black hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/explore-classes/pricing"
                      className="flex items-center justify-between w-full px-2 py-2 whitespace-nowrap"
                    >
                      PRICING
                      <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </HeaderDropdown>
            </li>
            <li>
              <Link href="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        <div className="max-lg:hidden">
          <ButtonStyle1>Book Now</ButtonStyle1>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`lg:hidden flex flex-col items-center justify-center absolute top-0 left-0 rounded-b-4xl space-y-7 w-full pt-24 py-6 bg-linear-to-r from-[#A8A9AD] to-[#FFFFFF] ${
          hamburgerDisplay ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 text-sm font-semibold">
          <li className="text-center">
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li className="text-center">
            <Link href="/our-team">OUR TEAM</Link>
          </li>
          <li>
            <HeaderDropdown
              title="EXPLORE CLASSES"
              titleHref="/explore-classes"
            >
              <ul className="px-2 py-2 text-xs font-medium">
                <li className="flex items-center rounded-md text-black cursor-pointer">
                  <Link
                    href="/explore-classes/manual-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    MANUAL DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    href="/explore-classes/automatic-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    AUTOMATIC DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    href="/explore-classes/intensive-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    INTENSIVE DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    href="/explore-classes/bulk-booking-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    BULK BOOKING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    href="/explore-classes/pricing"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    PRICING
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </HeaderDropdown>
          </li>
          <li className="text-center">
            <Link href="/contact-us">CONTACT US</Link>
          </li>
        </ul>

        <ButtonStyle1>Book Now</ButtonStyle1>
      </div>
    </header>
  );
};

export default Header;
