import React from "react";

import { Instructor } from "@/type";
import CardsSection from "./(components)/CardsSection";

const dummyDataMI: Instructor[] = [
  {
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "manual",
  },
  {
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "manual",
  },
  {
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "manual",
  },
  {
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "manual",
  },
  {
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "manual",
  },
  {
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "manual",
  },
  {
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "manual",
  },
  {
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "manual",
  },
  {
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "manual",
  },
  {
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "manual",
  },
];

const dummyDataAI: Instructor[] = [
  {
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "automatic",
  },
  {
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "automatic",
  },
  {
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "automatic",
  },
  {
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "automatic",
  },
  {
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "automatic",
  },
  {
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "automatic",
  },
  {
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "automatic",
  },
  {
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "automatic",
  },
  {
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "automatic",
  },
  {
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "automatic",
  },
];

const OurTeam = () => {
  return (
    <>
      <section className="max-w-420 mx-auto px-6 pb-8 pt-36 max-lg:px-3 max-lg:pb-6 max-lg:pt-24">
        <h1 className="max-lg:text-3xl text-4xl text-[#2D2E2F] text-center font-bold">
          OUR <span className="text-[var(--custom-primary)]">TEAM</span>
        </h1>

        {/* Cards Section */}
        <CardsSection
          manualInstructors={dummyDataMI}
          automaticInstructors={dummyDataAI}
        />
      </section>
    </>
  );
};

export default OurTeam;
