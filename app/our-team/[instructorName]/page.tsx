import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";

import TopUniformSection from "@/components/TopUniformSection";
import BookingForm from "../(components)/BookingForm";

interface InstructorDetailsProps {
  params: Promise<{ instructorName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InstructorDetails({
  params,
  searchParams,
}: InstructorDetailsProps) {
  const { instructorName } = await params;
  const searchParamsObj = await searchParams;
  console.log("Search Params:", searchParamsObj);

  return (
    <>
      <TopUniformSection
        title={
          <>
            OUR <span className="text-[var(--custom-primary)]">INSTRUCTOR</span>
          </>
        }
      >
        <div className="mt-14 max-lg:mt-6 grid grid-cols-2 max-sm:grid-cols-1 bg-white shadow-md border border-[var(--custom-primary)] rounded-t-xl lg:rounded-t-2xl overflow-hidden">
          <Image
            src="/dummy-data/5.jpg"
            alt={instructorName}
            width={650}
            height={650}
            className="w-full h-full xl:max-h-108 object-cover"
          />
          <div className="flex flex-col gap-6 max-lg:gap-2">
            <h2 className="px-1 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#FFFAC6] to-[#FFFAC600] capitalize">
              {instructorName.replace(/-/g, " ")}
            </h2>
            <p className="px-1 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-[#585858] text-sm md:text-base lg:text-lg">
              Elnara Babayeva is a DVSA-approved automatic driving instructor
              with a calm, friendly, and highly professional teaching style. She
              brings patience and clarity to every lesson, making her especially
              popular with beginners and nervous drivers. With a deep
              understanding of learner needs, Elnara tailors each session to
              help you progress at your own pace while focusing on safety,
              confidence, and real-world driving skills. Her students
              consistently praise her approachable nature and supportive
              feedback. Whether you&apos;re just starting out or need a
              confidence boost, Elnara is here to help you become a safe,
              capable, and test-ready driver.
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 py-3 lg:py-5 xl:py-6">
          <div className="flex justify-center items-center max-w-250 mx-auto h-82 md:h-108 rounded-2xl overflow-hidden relative bg-[url('/yt-banner.png')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <Link
              href={`https://www.youtube.com/@${instructorName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center "
            >
              <span className="absolute w-10 h-10 bg-white" />
              <FaYoutube className="text-red-500 cursor-pointer hover:text-red-600 transition-colors z-10 w-24 h-24 lg:w-32 lg:h-32" />
            </Link>
          </div>
        </div>

        <BookingForm className="mx-auto my-8 lg:my-10" />
      </TopUniformSection>
    </>
  );
}
