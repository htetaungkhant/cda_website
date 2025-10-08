"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Logo from "@/public/logo.png";
import { ButtonStyle1 } from "./Button";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  const pathname = usePathname();
  const [hamburgerDisplay, setHamburgerDisplay] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerDisplay(!hamburgerDisplay);
  };

  return (
    <header className="z-20 fixed top-0 left-0 right-0 lg:p-8 custom-scroll-margin">
      <div className="max-lg:relative max-lg:z-20 flex justify-between items-center px-4 py-2 bg-[#FFFFFFB2] border border-[#00000033] rounded-4xl max-lg:rounded-none max-lg:border-none max-lg:bg-white">
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
        <div className="max-lg:hidden flex flex-col">
          <ul className="mx-auto w-9/10 flex justify-between gap-5 px-3 xl:px-15 py-1.5 text-xs">
            <li className="flex gap-1 items-center">
              <FaPhoneAlt className="w-3 h-3" />
              <span>+44 1223 974630</span>
            </li>
            <li className="flex gap-1 items-center">
              <MdEmail className="w-3.5 h-3.5" />
              <a
                href="mailto:support@cambridge.academy"
                className="hover:underline"
              >
                info@cambridgedriving.academy
              </a>
            </li>
            {/* social icons */}
            <div className="flex gap-2 items-center">
              {/* tiktok */}
              <Link
                href="https://www.tiktok.com/@cambridgedriving?_t=8qOhWSvcEAT&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
              {/* facebook */}
              <Link
                href="https://www.facebook.com/cambridgedrivingacademy"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
              {/* instagram */}
              <Link
                href="https://www.instagram.com/cambridgedriving/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
              {/* youtube */}
              <Link
                href="https://www.youtube.com/@cambridgedrivingacademy"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
              {/* twitter */}
              <Link
                href="https://x.com/sadisafi5"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/x.svg"
                  alt="x"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
            </div>
          </ul>
          <span className="block w-full h-[1px] bg-white" />
          <nav className="px-5 xl:px-15 py-1.5">
            <ul className="flex gap-6 xl:gap-10 text-sm font-semibold">
              <li>
                <Link
                  href="/about-us"
                  className={
                    pathname === "/about-us"
                      ? "text-[var(--custom-primary)]"
                      : ""
                  }
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team"
                  className={
                    pathname === "/our-team"
                      ? "text-[var(--custom-primary)]"
                      : ""
                  }
                >
                  OUR TEAM
                </Link>
              </li>
              <li>
                <HeaderDropdown
                  title="EXPLORE CLASSES"
                  titleHref="/explore-classes"
                  subMenuHrefs={[
                    "/explore-classes/manual-driving-class",
                    "/explore-classes/automatic-driving-class",
                    "/explore-classes/intensive-driving-class",
                    "/explore-classes/bulk-booking-class",
                    "/explore-classes/pricing",
                  ]}
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
                <Link
                  href="/cdapedia"
                  className={
                    pathname === "/cdapedia"
                      ? "text-[var(--custom-primary)]"
                      : ""
                  }
                >
                  CDAPEDIA
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={
                    pathname === "/contact-us"
                      ? "text-[var(--custom-primary)]"
                      : ""
                  }
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="max-lg:hidden">
          <ButtonStyle1
            href="https://www.totaldrive.app/a/onlinebooking.php?173468681946771&all=true"
            target="_blank"
          >
            Book Now
          </ButtonStyle1>
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
            <Link
              onClick={() => setHamburgerDisplay(false)}
              href="/"
              className={
                pathname === "/" ? "text-[var(--custom-primary)] font-bold" : ""
              }
            >
              HOME
            </Link>
          </li>
          <li className="text-center">
            <Link
              onClick={() => setHamburgerDisplay(false)}
              href="/about-us"
              className={
                pathname === "/about-us"
                  ? "text-[var(--custom-primary)] font-bold"
                  : ""
              }
            >
              ABOUT US
            </Link>
          </li>
          <li className="text-center">
            <Link
              onClick={() => setHamburgerDisplay(false)}
              href="/our-team"
              className={
                pathname === "/our-team"
                  ? "text-[var(--custom-primary)] font-bold"
                  : ""
              }
            >
              OUR TEAM
            </Link>
          </li>
          <li>
            <HeaderDropdown
              title="EXPLORE CLASSES"
              titleHref="/explore-classes"
              subMenuHrefs={[
                "/explore-classes/manual-driving-class",
                "/explore-classes/automatic-driving-class",
                "/explore-classes/intensive-driving-class",
                "/explore-classes/bulk-booking-class",
                "/explore-classes/pricing",
              ]}
              onTitleClick={() => setHamburgerDisplay(false)}
            >
              <ul className="px-2 py-2 text-xs font-medium">
                <li className="flex items-center rounded-md text-black cursor-pointer">
                  <Link
                    onClick={() => setHamburgerDisplay(false)}
                    href="/explore-classes/manual-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    MANUAL DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    onClick={() => setHamburgerDisplay(false)}
                    href="/explore-classes/automatic-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    AUTOMATIC DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    onClick={() => setHamburgerDisplay(false)}
                    href="/explore-classes/intensive-driving-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    INTENSIVE DRIVING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    onClick={() => setHamburgerDisplay(false)}
                    href="/explore-classes/bulk-booking-class"
                    className="flex items-center justify-between gap-4 w-full px-2 py-2 whitespace-nowrap"
                  >
                    BULK BOOKING CLASS
                    <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </li>
                <li className="flex rounded-md text-black cursor-pointer">
                  <Link
                    onClick={() => setHamburgerDisplay(false)}
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
            <Link
              onClick={() => setHamburgerDisplay(false)}
              href="/contact-us"
              className={
                pathname === "/contact-us"
                  ? "text-[var(--custom-primary)] font-bold"
                  : ""
              }
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        <ButtonStyle1 onClick={() => setHamburgerDisplay(false)}>
          Book Now
        </ButtonStyle1>

        <ul className="flex flex-col items-center gap-2 text-xs">
          <li className="flex gap-1 items-center">
            <FaPhoneAlt className="w-3 h-3" />
            <span>+44 1223 974630</span>
          </li>
          <li className="flex gap-1 items-center">
            <MdEmail className="w-3.5 h-3.5" />
            <a
              href="mailto:support@cambridge.academy"
              className="hover:underline"
            >
              info@cambridgedriving.academy
            </a>
          </li>
          {/* social icons */}
          <div className="flex gap-2 items-center">
            {/* tiktok */}
            <Link
              href="https://www.tiktok.com/@cambridgedriving?_t=8qOhWSvcEAT&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/tiktok.svg"
                alt="TikTok"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </Link>
            {/* facebook */}
            <Link
              href="https://www.facebook.com/cambridgedrivingacademy"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </Link>
            {/* instagram */}
            <Link
              href="https://www.instagram.com/cambridgedriving/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </Link>
            {/* youtube */}
            <Link
              href="https://www.youtube.com/@cambridgedrivingacademy"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/youtube.svg"
                alt="YouTube"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </Link>
            {/* twitter */}
            <Link
              href="https://x.com/sadisafi5"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/x.svg"
                alt="x"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
