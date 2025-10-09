"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
  FaTiktok,
  FaLocationDot,
  FaCalendarDays,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";

import logo from "@/public/footer-logo.png";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="relative text-white">
      {/* Curved Shape */}
      <svg
        viewBox="0 0 1512 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-lg:hidden"
      >
        <path
          d="M0 44.7144C0 44.7144 459.888 0 756 0C1052.11 0 1512 44.7144 1512 44.7144V67.5H0V44.7144Z"
          fill="url(#paint0_linear_2004_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2004_3"
            x1="2.17605e-07"
            y1="256"
            x2="1512"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2B2B2B" />
            <stop offset="1" stopColor="#0B082B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="bg-[#0D0B2B] lg:bg-gradient-to-r from-[#2B2B2B] to-[#0B082B] lg:-mt-1">
        <div className="px-16 py-8 max-lg:px-8 max-lg:py-4 max-lg:pt-8 flex justify-between max-lg:flex-col gap-16 lg:gap-8">
          <div className="w-72 flex flex-col items-start gap-2 lg:gap-4 max-lg:w-full max-md:items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={248}
                height={76}
                className="w-48 h-auto object-contain"
              />
            </Link>
            <p className="text-sm max-lg:text-xs max-lg:mt-2">
              Cambridge Driving Academy was created out of a strong passion, a
              shared vision, and a ceaseless commitment to making learning easy
              and accessible.
            </p>
            <div className="flex items-center gap-3 max-lg:gap-2 max-sm:justify-between max-sm:w-full">
              <Link
                href="https://www.facebook.com/cambridgedrivingacademy"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="w-8 h-8 text-[var(--custom-primary)]" />
              </Link>
              <Link
                href="https://www.instagram.com/cambridgedriving/"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareInstagram className="w-8 h-8 text-[var(--custom-primary)]" />
              </Link>
              <Link
                href="https://x.com/sadisafi5"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareXTwitter className="w-8 h-8 text-[var(--custom-primary)]" />
              </Link>
              <Link
                href="https://www.youtube.com/@cambridgedrivingacademy"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareYoutube className="w-8 h-8 text-[var(--custom-primary)]" />
              </Link>
              <Link
                href="https://www.tiktok.com/@cambridgedriving?_t=8qOhWSvcEAT&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok className="w-7 h-7 p-1.5 bg-[var(--custom-primary)] rounded-sm text-black" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:flex gap-4">
            {/* nav links */}
            <div className="flex flex-col gap-2 max-w-50">
              <h3 className="relative whitespace-nowrap text-[8px] min-[425px]:text-[10px] sm:text-xs lg:text-sm font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/5 sm:after:w-1/3 after:min-w-7 sm:after:min-w-12 after:h-0.5 sm:after:h-1 after:bg-[var(--custom-primary)]">
                QUICK LINKS
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-[var(--custom-primary)]">
                <li>
                  <Link
                    href="/"
                    className={`hover:underline ${
                      pathname === "/" ? "font-bold text-white" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={`hover:underline ${
                      pathname === "/about-us" ? "font-bold text-white" : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className={`hover:underline ${
                      pathname === "/our-team" ? "font-bold text-white" : ""
                    }`}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore-classes"
                    className={`hover:underline ${
                      pathname === "/explore-classes"
                        ? "font-bold text-white"
                        : ""
                    }`}
                  >
                    Explore Classes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className={`hover:underline ${
                      pathname === "/privacy-policy"
                        ? "font-bold text-white"
                        : ""
                    }`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className={`hover:underline ${
                      pathname === "/terms-conditions"
                        ? "font-bold text-white"
                        : ""
                    }`}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 max-w-50">
              <h3 className="relative whitespace-nowrap text-[8px] min-[425px]:text-[10px] sm:text-xs lg:text-sm font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/5 sm:after:w-1/3 after:min-w-7 sm:after:min-w-12 after:h-0.5 sm:after:h-1 after:bg-[var(--custom-primary)]">
                CONTACT INFO
              </h3>
              <ul className="mt-4 flex flex-col gap-1 text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-[var(--custom-primary)]">
                <li className="flex gap-1">
                  <MdEmail className="w-3 min-w-3 h-3 md:w-4 md:min-w-4 md:h-4 text-[#E2D5B4]" />
                  <a
                    href="mailto:info@cambridgedriving.academy"
                    className="hover:underline"
                  >
                    info@cambridgedriving.academy
                  </a>
                </li>
                <li className="flex gap-1">
                  <FaCalendarDays className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:min-w-4 lg:h-4 text-[#E2D5B4]" />
                  <span>Mon–Sat</span>
                </li>
                <li className="flex gap-1">
                  <IoTime className="w-3 min-w-3 h-3 md:w-4 md:min-w-4 md:h-4 text-[#E2D5B4]" />
                  <span>08:00 AM to 05:00 PM</span>
                </li>
                <li className="flex gap-1">
                  <FaPhoneAlt className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:min-w-4 lg:h-4 text-[#E2D5B4]" />
                  <span>01223 974630</span>
                </li>
                <li className="flex gap-1">
                  <FaLocationDot className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8 lg:min-w-3 -mt-1 text-[#E2D5B4]" />
                  <a
                    href="https://www.google.com/maps/place/Cambridge+Driving+Academy/@52.218965,0.139653,10z/data=!4m15!1m8!3m7!1s0x47d870f6b8b15949:0xe4646c6d8649454d!2s11+Kinross+Rd,+Chesterton,+Cambridge+CB4+1QU,+UK!3b1!8m2!3d52.2189646!4d0.1396526!16s%2Fg%2F11c0_ckcgp!3m5!1s0x47d8710ab2ecfe95:0x8cb000cee85efed5!8m2!3d52.2189652!4d0.1396524!16s%2Fg%2F11rgfxkw1j?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    11 Kinross Rd, Chesterton, Cambridge CB4 1QU, United Kingdom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4">
          <p className="p-4 text-[10px] sm:text-xs lg:text-sm text-center border-t border-[var(--custom-primary)]">
            © Copyright 2025 Cambridge Driving Academy | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
