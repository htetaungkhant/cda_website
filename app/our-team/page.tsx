import React from "react";

import { Instructor } from "@/types/instructor";
import TopUniformSection from "@/components/TopUniformSection";
import CardsSection from "./(components)/CardsSection";

const dummyDataMI: Instructor[] = [
  {
    id: "1",
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "manual",
  },
  {
    id: "2",
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "manual",
  },
  {
    id: "3",
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "manual",
  },
  {
    id: "4",
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "manual",
  },
  {
    id: "5",
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "manual",
  },
  {
    id: "6",
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "manual",
  },
  {
    id: "7",
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "manual",
  },
  {
    id: "8",
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "manual",
  },
  {
    id: "9",
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "manual",
  },
  {
    id: "10",
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "manual",
  },
];

const dummyDataAI: Instructor[] = [
  {
    id: "11",
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "automatic",
  },
  {
    id: "12",
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "automatic",
  },
  {
    id: "13",
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "automatic",
  },
  {
    id: "14",
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "automatic",
  },
  {
    id: "15",
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "automatic",
  },
  {
    id: "16",
    image: "/dummy-data/7.jpg",
    name: "Dunya Nori",
    type: "automatic",
  },
  {
    id: "17",
    image: "/dummy-data/8.jpg",
    name: "Ghulam Mohd.",
    type: "automatic",
  },
  {
    id: "18",
    image: "/dummy-data/5.jpg",
    name: "Behzad Yacubi",
    type: "automatic",
  },
  {
    id: "19",
    image: "/dummy-data/6.jpg",
    name: "Elnara Babayeva",
    type: "automatic",
  },
  {
    id: "20",
    image: "/dummy-data/4.jpg",
    name: "Ahmad Siddiqi",
    type: "automatic",
  },
];

const OurTeam = () => {
  return (
    <>
      <TopUniformSection
        title={
          <>
            OUR <span className="text-[var(--custom-primary)]">TEAM</span>
          </>
        }
      >
        {/* Cards Section */}
        <CardsSection
          manualInstructors={dummyDataMI}
          automaticInstructors={dummyDataAI}
        />
      </TopUniformSection>
    </>
  );
};

export default OurTeam;
