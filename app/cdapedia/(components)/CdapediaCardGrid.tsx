"use client";
import React, { JSX, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import UniformPaddingSection from "@/components/UniformPaddingSection";
import { ButtonStyle1 } from "@/components/Button";
import { chunkArray, cn } from "@/lib/shared/utils";

interface SyllabusItem {
  title: string;
  content: JSX.Element;
}

const CDADrivingSyllabus: SyllabusItem[] = [
  {
    title: "Cockpit Drill & Controls",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          Every safe journey begins with the correct preparation. In your
          driving lessons in Cambridge, our professional driving instructors in
          CDA will teach you how to:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Enter and exit the vehicle safely</li>
          <li>Adjust the seat, mirrors, and steering</li>
          <li>Fasten your seatbelt correctly</li>
          <li>
            Understand essential controls — pedals, gears, indicators,
            handbrake, lights, and wipers.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Moving Off & Stopping",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>During your driving lessons CDA, you’ll master:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>The POM (Prepare, Observe, Move) routine.</li>
          <li>The MSM (Mirror, Signal, Manoeuvre) routine.</li>
          <li>Finding the biting point.</li>
          <li>Checking blind spots.</li>
          <li>Signalling and stopping safely</li>
        </ul>
        <p>
          These are essential skills taught by our manual and automatic driving
          instructors in CDA.
        </p>
      </div>
    ),
  },
  {
    title: "Safe Road Positioning",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>For effective driving tuition in CDA, our instructors teach:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Correct lane discipline.</li>
          <li>Safe positioning from the kerb and other vehicles.</li>
          <li>Understanding the UK Highway Code.</li>
        </ul>
        <p>
          These are essential skills taught by our manual and automatic driving
          instructors in CDA.
        </p>
      </div>
    ),
  },
  {
    title: "Use of Mirrors & Signals",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          Throughout your driving lessons in CDA, you’ll develop the habit of:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Using mirrors before any manoeuvre.</li>
          <li>Correct signalling at the right time.</li>
          <li>Following the MSM routine with precision.</li>
        </ul>
        <p>This is a core part of driving test preparation in CDA.</p>
      </div>
    ),
  },
  {
    title: "Junctions (Left & Right Turns)",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Our CDA driving instructors will guide you to:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>
            Approach junctions using the PSL routine (Position, Speed, Look).
          </li>
          <li>Understand priorities and signs.</li>
          <li>Safely turn from major to minor roads and vice versa.</li>
        </ul>
        <p>
          This is a key part of driving lessons for learners in Cambridge
          Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "T-Junctions (Emerging)",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>In your driving lessons CDA, you’ll learn:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Approaching open and closed T-junctions.</li>
          <li>Judging safe gaps.</li>
          <li>Correct use of give-way and stop lines.</li>
        </ul>
        <p>
          These are essential skills taught by our manual and automatic driving
          instructors in Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Crossroads",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Crossroads are common in CDA. You’ll practise:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Navigating controlled and uncontrolled crossroads.</li>
          <li>Right-turn priority rules.</li>
          <li>Managing oncoming traffic.</li>
        </ul>
        <p>
          All covered in our affordable driving lessons in CDA. These are
          essential skills taught by our manual and automatic driving
          instructors in Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Roundabouts",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Our Cambridge Driving Academy instructors will train you to:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Approach roundabouts using MSM and PSL.</li>
          <li>Choose the correct lane.</li>
          <li>
            Signal and exit correctly.
            <br />
            Cambridge roundabouts, like Milton and Histon, are common routes
            during driving test preparation in Cambridge.
          </li>
        </ul>
        <p>All covered in our affordable driving lessons in CDA.</p>
      </div>
    ),
  },
  {
    title: "Pedestrian Crossings",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          In your driving lessons of Cambridge Driving Academy, you&apos;ll be
          taught:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>
            How to recognise Zebra, Pelican, Puffin, Toucan, and Pegasus
            crossings.
          </li>
          <li>Legal obligations and safe stopping.</li>
          <li>Awareness of cyclists and pedestrians.</li>
        </ul>
        <p>
          This is vital for learners taking driving lessons at Cambridge Driving
          Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Meeting Traffic & Clearance",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>In Cambridge Driving Academy, You’ll develop the skills to:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Give way on narrow streets.</li>
          <li>Maintain clearance around parked vehicles.</li>
          <li>Safely anticipate oncoming traffic.</li>
        </ul>
        <p>
          Crucial for residential areas in Cambridge Driving Academy driving
          lessons. All covered in our affordable driving lessons in CDA.
        </p>
      </div>
    ),
  },
  {
    title: "Overtaking",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          Our professional driving instructors in Cambridge Driving Academy will
          help you:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Understand when overtaking is safe.</li>
          <li>Judge speed and distance.</li>
          <li>Avoid overtaking near hazards or bends.</li>
        </ul>
        <p>
          Taught in both manual and automatic driving lessons in CDA. All
          covered in our affordable driving lessons in Cambridge Driving
          Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Rural Roads",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Our Cambridge Driving Academy instructors will train you to:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Drive confidently on country roads like Butt Lane.</li>
          <li>Manage sharp bends, dips, and surface changes.</li>
          <li>Use appropriate gears and speeds.</li>
        </ul>
        <p>
          Important for diverse driving tuition in CDA. These are essential
          skills taught by our manual and automatic driving instructors in
          Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Single and Dual Carriageways",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>You&apos;ll practice on roads like the A14, A428, and A10:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Joining and exiting via slip roads.</li>
          <li>Lane control and speed awareness.</li>
          <li>Safe overtaking on faster roads.</li>
        </ul>
        <p>
          These lessons are integral part of our driving school in CDA. This is
          vital for learners taking driving lessons Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Town/City Driving",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          In your driving lessons at Cambridge Driving Academy, You’ll
          experience:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Cambridge city traffic.</li>
          <li>Cyclist awareness, box junctions, and bus lanes.</li>
          <li>One-way streets and ring roads.</li>
        </ul>
        <p>
          This real-world exposure is key for driving test preparation in
          Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Use of Speed",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          In your driving lessons of Cambridge Driving Academy, you&apos;ll be
          taught:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Match your speed to traffic flow and road types.</li>
          <li>Stay within speed limits.</li>
          <li>Adjust to weather and visibility conditions.</li>
        </ul>
        <p>
          Taught in both manual and automatic driving lessons in CDA. All
          covered in our affordable driving lessons in Cambridge Driving
          Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Anticipation & Planning",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Our CDA driving instructors will help you learn to:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Read the road ahead.</li>
          <li>Spot potential hazards early.</li>
          <li>Plan safe actions.</li>
        </ul>
        <p>
          This hands-on approach not only boosts confidence but also ensures
          familiarity with road rules, vehicle handling, and situational
          awareness. 
        </p>
      </div>
    ),
  },
  {
    title: "Hazard Awareness",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Your driving lessons of Cambridge Driving Academy, will include:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Identifying static and moving hazards.</li>
          <li>Safe reactions to potential dangers.</li>
          <li>Staying calm in unpredictable situations.</li>
        </ul>
        <p>
          These lessons are Beneficial for nervous drivers in Cambridge. This is
          vital for learners taking driving lessons Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Manoeuvres",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>In preparation for your test, we teach:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Parallel parking.</li>
          <li>Bay parking (forward and reverse).</li>
          <li>Pulling up and reversing two car lengths.</li>
        </ul>
        <p>
          All covered in all driving test preparation in Cambridge Driving
          Academy, this real-world exposure is key for driving test preparation.
        </p>
      </div>
    ),
  },
  {
    title: "Turn in the Road / Reversing",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Though not on the test, our instructors still include:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>3-point turns.</li>
          <li>Reversing around corners.</li>
        </ul>
        <p>
          This provides comprehensive driving instruction in both manual and
          automatic vehicles, equipping learners with essential skills and gives
          hands-on, real-world training experiences to gain the practical
          confidence.
        </p>
      </div>
    ),
  },
  {
    title: "Emergency Stop",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Your driving lessons of Cambridge Driving Academy, will include:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>How to stop quickly and safely.</li>
          <li>Maintaining control under pressure.</li>
          <li>Understanding stopping distances.</li>
        </ul>
        <p>
          These lessons are essential for nervous drivers in Cambridge. This is
          vital for learners taking driving lessons Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Independent Driving",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Towards the end of your CDA driving lessons, you&apos;ll:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Follow road signs or sat nav.</li>
          <li>Make decisions independently.</li>
        </ul>
        <p>
          This replicates the test environment at Brookmont Court and helps
          students pass the practical driving test in Cambridge on the first
          attempt.
        </p>
      </div>
    ),
  },
  {
    title: "Eco-Safe Driving",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>
          In your driving lessons of Cambridge Driving Academy, you&apos;ll be
          taught:
        </p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Drive fuel-efficiently.</li>
          <li>
            Use the correct gears (especially in manual driving lessons CDA).
          </li>
          <li>Reduce idling and brake smoothly.</li>
        </ul>
        <p>
          This supports sustainability and saves costs for students in during
          their driving lessons at Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Motorway Driving (Optional)",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>After you pass, we offer advanced CDA driving tuition:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>Safe merging and lane changes.</li>
          <li>Smart motorway awareness.</li>
          <li>
            Managing high-speed traffic
            <br />
            Ideal for extending your driving future in Cambridge.
          </li>
        </ul>
        <p>
          This supports sustainability and saves costs for students in during
          their driving lessons at Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
  {
    title: "Show Me / Tell Me Questions",
    content: (
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 text-[8px] sm:text-xs lg:text-sm xl:text-base">
        <p>Cambridge Driving Academy prepares you fully by covering:</p>
        <ul className="list-disc pl-4 xl:pl-6">
          <li>How to explain basic car checks.</li>
          <li>How to operate in-car controls while driving.</li>
        </ul>
        <p>
          This boosts the confidence required to pass the Cambridge driving test
          on the first attempt. It’s a vital part of the learning experience at
          Cambridge Driving Academy.
        </p>
      </div>
    ),
  },
];

interface CdapediaCardGridProps {
  className?: string;
}
const CdapediaCardGrid: React.FC<CdapediaCardGridProps> = ({ className }) => {
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleLeftArrowClick = () => {
    if (mobileScrollContainerRef.current) {
      const cardWidth = (
        mobileScrollContainerRef.current.querySelector(
          ":first-child"
        ) as HTMLElement | null
      )?.offsetWidth;
      const gap = 12;
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
      const gap = 12;
      if (cardWidth) {
        const scrollAmount = cardWidth + gap;
        mobileScrollContainerRef.current.scrollTo({
          left: mobileScrollContainerRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleDownload: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "/cdapaedia.pdf";
    link.download = "CDA Driving Syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <UniformPaddingSection
      className={cn(
        "flex flex-col gap-4 lg:gap-6 xl:gap-8 text-black relative",
        className
      )}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        UK Driving Syllabus – <strong>Learning Path</strong>
      </h1>
      <p className="max-lg:text-center text-sm lg:text-base xl:text-lg text-[#585858]">
        Explore the complete UK Driving Syllabus followed by Cambridge Driving
        Academy. Each lesson is designed to build your skills step by step —
        from mastering the basics to handling complex road situations with
        confidence.
      </p>
      <div
        className="flex gap-3 overflow-x-hidden"
        ref={mobileScrollContainerRef}
      >
        {chunkArray(CDADrivingSyllabus, 8)?.map((chunk, index) => (
          <div
            key={`cda-driving-syllabus-${index}`}
            className="w-full min-w-full flex-shrink-0 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 xl:gap-5"
          >
            {chunk.map((item, itemIndex) =>
              item ? (
                <div
                  key={`cda-driving-syllabus-item-${itemIndex}`}
                  className="flex flex-col gap-2.5 lg:gap-5 p-2.5 pb-4 lg:p-5 lg:pb-10 border border-[var(--custom-primary)] rounded-lg bg-white text-[#585858] relative overflow-hidden"
                >
                  <span className="block absolute -bottom-2.5 lg:-bottom-3.5 right-0 font-bold text-7xl md:text-9xl text-[var(--custom-primary)] opacity-20 select-none pointer-events-none">
                    {String(index * 8 + (itemIndex + 1)).padStart(2, "0")}
                  </span>
                  <h1 className="min-h-12 xl:min-h-18 font-semibold text-[var(--custom-primary)] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-2">
                    {item.title}
                  </h1>
                  <div>{item.content}</div>
                </div>
              ) : (
                <div
                  key={`cda-driving-syllabus-item-${itemIndex}`}
                  className="h-full min-h-60 lg:min-h-120"
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Arrows */}
      <div className={cn("relative flex justify-center")}>
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

      <div className="flex justify-center lg:absolute bottom-6 right-6">
        <ButtonStyle1 onClick={handleDownload}>Download</ButtonStyle1>
      </div>
    </UniformPaddingSection>
  );
};

export default CdapediaCardGrid;
