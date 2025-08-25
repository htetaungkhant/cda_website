import React from "react";

import { toast } from "sonner";

import { Instructor } from "@/types/instructor";
import TopUniformSection from "@/components/TopUniformSection";
import { instructorService } from "@/services/server/instructor-service";
import CardsSection from "./(components)/CardsSection";

export const dynamic = "force-dynamic";

export default async function OurTeam() {
  let automaticInstructors: Instructor[] = [];
  let manualInstructors: Instructor[] = [];
  let error: string | null = null;

  try {
    const instructors = await instructorService.getAllInstructors();
    automaticInstructors =
      instructors?.filter(
        (instructor) => instructor.drivingMode === "automatic"
      ) || [];

    manualInstructors =
      instructors?.filter(
        (instructor) => instructor.drivingMode === "manual"
      ) || [];
  } catch (err) {
    console.error("Error fetching instructors:", err);
    error = "Failed to fetch instructors. Please try again later.";
    toast.error(error);
    automaticInstructors = [];
    manualInstructors = [];
  }

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
          manualInstructors={manualInstructors}
          automaticInstructors={automaticInstructors}
        />
      </TopUniformSection>
    </>
  );
}
