import React from "react";

import { Instructor } from "@/types/instructor";
import TopUniformSection from "@/components/TopUniformSection";
import CardsSection from "./(components)/CardsSection";

const dummyDataMI: Instructor[] = [
  {
    id: "1",
    image: {
      id: "1",
      image: "/dummy-data/4.jpg",
      thumbnail: "/dummy-data/4.jpg",
    },
    name: "Ahmad Siddiqi",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "2",
    image: {
      id: "2",
      image: "/dummy-data/5.jpg",
      thumbnail: "/dummy-data/5.jpg",
    },
    name: "Behzad Yacubi",
    drivingMode: "manual",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "3",
    image: {
      id: "3",
      image: "/dummy-data/6.jpg",
      thumbnail: "/dummy-data/6.jpg",
    },
    name: "Elnara Babayeva",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "4",
    image: {
      id: "4",
      image: "/dummy-data/7.jpg",
      thumbnail: "/dummy-data/7.jpg",
    },
    name: "Dunya Nori",
    drivingMode: "manual",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "5",
    image: {
      id: "5",
      image: "/dummy-data/8.jpg",
      thumbnail: "/dummy-data/8.jpg",
    },
    name: "Ghulam Mohd.",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "6",
    image: {
      id: "6",
      image: "/dummy-data/5.jpg",
      thumbnail: "/dummy-data/5.jpg",
    },
    name: "Behzad Yacubi",
    drivingMode: "manual",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "7",
    image: {
      id: "7",
      image: "/dummy-data/6.jpg",
      thumbnail: "/dummy-data/6.jpg",
    },
    name: "Elnara Babayeva",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "8",
    image: {
      id: "4",
      image: "/dummy-data/4.jpg",
      thumbnail: "/dummy-data/4.jpg",
    },
    name: "Ahmad Siddiqi",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "9",
    image: {
      id: "5",
      image: "/dummy-data/8.jpg",
      thumbnail: "/dummy-data/8.jpg",
    },
    name: "Ghulam Mohd.",
    drivingMode: "manual",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "10",
    image: {
      id: "4",
      image: "/dummy-data/7.jpg",
      thumbnail: "/dummy-data/7.jpg",
    },
    name: "Dunya Nori",
    drivingMode: "manual",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
];

const dummyDataAI: Instructor[] = [
  {
    id: "11",
    image: {
      id: "4",
      image: "/dummy-data/4.jpg",
      thumbnail: "/dummy-data/4.jpg",
    },
    name: "Ahmad Siddiqi",
    drivingMode: "automatic",
    description: "Experienced driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 10,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "12",
    image: {
      id: "5",
      image: "/dummy-data/5.jpg",
      thumbnail: "/dummy-data/5.jpg",
    },
    name: "Behzad Yacubi",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "13",
    image: {
      id: "6",
      image: "/dummy-data/6.jpg",
      thumbnail: "/dummy-data/6.jpg",
    },
    name: "Elnara Babayeva",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "14",
    image: {
      id: "7",
      image: "/dummy-data/7.jpg",
      thumbnail: "/dummy-data/7.jpg",
    },
    name: "Dunya Nori",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "15",
    image: {
      id: "8",
      image: "/dummy-data/8.jpg",
      thumbnail: "/dummy-data/8.jpg",
    },
    name: "Ghulam Mohd.",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "16",
    image: {
      id: "7",
      image: "/dummy-data/7.jpg",
      thumbnail: "/dummy-data/7.jpg",
    },
    name: "Dunya Nori",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "17",
    image: {
      id: "8",
      image: "/dummy-data/8.jpg",
      thumbnail: "/dummy-data/8.jpg",
    },
    name: "Ghulam Mohd.",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "18",
    image: {
      id: "5",
      image: "/dummy-data/5.jpg",
      thumbnail: "/dummy-data/5.jpg",
    },
    name: "Behzad Yacubi",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "19",
    image: {
      id: "6",
      image: "/dummy-data/6.jpg",
      thumbnail: "/dummy-data/6.jpg",
    },
    name: "Elnara Babayeva",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: "20",
    image: {
      id: "4",
      image: "/dummy-data/4.jpg",
      thumbnail: "/dummy-data/4.jpg",
    },
    name: "Ahmad Siddiqi",
    drivingMode: "automatic",
    description: "Skilled driving instructor",
    link: "#",
    totalDriveUrl: "#",
    noOfBookings: 8,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
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
