import { toast } from "sonner";

import TopUniformSection from "@/components/TopUniformSection";
import ReasonCardsSection from "@/components/ReasonCardsSection";
import InstructorCardsSection from "@/components/InstructorCardsSection";
import UniformPaddingSection from "@/components/UniformPaddingSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import { ButtonStyle1 } from "@/components/Button";
import { CardStyle1 } from "@/components/Card";
import { DrivingMode } from "@/types/global";
import { Instructor } from "@/types/instructor";
import { instructorService } from "@/services/server/instructor-service";

export const dynamic = "force-dynamic";

export default async function AutomaticDrivingClass() {
  let recentInstructors: Instructor[] = [];
  let error: string | null = null;

  try {
    const instructors = await instructorService.getAllInstructors();
    const filteredInstructors =
      instructors?.filter(
        (instructor) =>
          instructor.drivingMode === "automatic" ||
          instructor.drivingMode === "both"
      ) || [];

    recentInstructors = [
      ...filteredInstructors
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map((instructor) => ({
          ...instructor,
          drivingMode: "automatic" as DrivingMode,
        })),
    ];
  } catch (err) {
    console.error("Error fetching instructors:", err);
    error = "Failed to fetch instructors. Please try again later.";
    toast.error(error);
    recentInstructors = [];
  }

  return (
    <>
      <TopUniformSection title="Automatic Driving">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="max-lg:max-w-180 min-w-68 min-[375px]:max-lg:min-w-84 max-lg:w-full max-lg:mx-auto px-0 min-[375px]:px-6 xl:px-10 relative">
            <div className="w-full h-100 sm:h-120 lg:h-full lg:min-h-100 bg-[url('/explore-classes-3.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
            <div className="absolute -right-3 min-[375px]:right-0 bottom-4 lg:bottom-6 w-32 h-32 lg:w-40 lg:h-40 bg-[url('/explore-classes-2.png')] bg-cover bg-center rounded-xl shadow-lg"></div>
          </div>
          <div className="flex flex-col gap-2 text-[#585858]">
            <h1 className="font-semibold text-lg lg:text-xl underline">
              Learn to Drive with Expert Automatic Driving Instructors
            </h1>
            <p className="text-sm lg:text-base xl:text-lg">
              At Cambridge Driving Academy, our automatic driving lessons
              provide a smooth and stress-free learning experience, perfect for
              learners who prefer simplicity behind the wheel. Automatic
              vehicles eliminate the need to master gear changes, allowing you
              to focus more on road awareness and driving confidence. Whether
              you&apos;re just starting out or transitioning from manual, our
              expert instructors are here to guide you every step of the way
              toward becoming a safe, capable driver.
            </p>
            <div className="lg:px-5 flex justify-center lg:justify-end mt-4 lg:mt-6">
              <ButtonStyle1
                href="https://www.totaldrive.app/a/onlinebooking.php?173468681946771&all=true"
                target="_blank"
              >
                Book Now
              </ButtonStyle1>
            </div>
          </div>
        </div>
      </TopUniformSection>

      {/* Reason Cards Section */}
      <ReasonCardsSection
        title="Why Choose Automatic Driving?"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe, flexible, and personalized driving experience that sets you up for success."
        firstCard={{
          title: "Simplified Learning",
          description:
            "Automatic cars do not require you to manually change gears, making the learning process easier and allowing you to focus more on the road and surroundings.",
          icon: "/18.svg",
        }}
        secondCard={{
          title: "Stress Reduction",
          description:
            "If you’re anxious about learning to drive, automatic lessons can reduce stress by eliminating the need to coordinate clutch control and gear shifting.",
          icon: "/19.svg",
        }}
        thirdCard={{
          title: "City Convenience",
          description:
            "Automatic cars are especially convenient in urban areas with heavy traffic, where frequent stopping and starting can make driving a manual car challenging.",
          icon: "/20.svg",
        }}
        fourthCard={{
          title: "Quick Progression",
          description:
            "With fewer controls to manage, many learners find they can progress faster in automatic lessons, helping you reach test readiness sooner.",
          icon: "/21.svg",
        }}
      />

      {/* Lesson Badge Cards Section */}
      <UniformPaddingSection className="flex flex-col gap-4 text-black">
        <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
          <strong>Inside Our Automatic Driving Lessons</strong>
        </h1>
        <p className="max-lg:text-center text-xs md:text-sm lg:text-base text-[#585858]">
          Focus on the road, not the gears — ideal for beginners or anyone
          seeking a stress-free way to build driving confidence.
        </p>
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 w-full">
          <div className="flex gap-2 md:gap-4 lg:gap-8">
            <CardStyle1
              title="Modern Automatic Vehicles"
              description="Learn in our comfortable, well-maintained automatic cars equipped with the latest safety features, ensuring a smooth and enjoyable learning experience. Our automatic fleet includes: Mercedes-Benz GLA 220D, Toyota Cross, Toyota Yaris, VW Polo R-Line, VW Golf."
              iconUrl="/15.svg"
              className="w-[40%]"
            />
            <CardStyle1
              title="Experienced Instructors"
              description="Our experienced and patient instructors specialise in teaching automatic driving, providing personalised lessons tailored to your pace and learning style."
              iconUrl="/14.svg"
              className="flex-1"
            />
          </div>
          <div className="flex gap-2 md:gap-4 lg:gap-8">
            <CardStyle1
              title="Comprehensive Training"
              description="From mastering basic controls to advanced manoeuvres and defensive driving techniques, our automatic lessons cover all aspects of safe driving, preparing you fully for your practical driving test."
              iconUrl="/16.svg"
              className="flex-1"
            />
            <CardStyle1
              title="Flexible Scheduling"
              description="We offer flexible lesson times to suit your schedule, with options for early morning, evening, and weekend lessons."
              iconUrl="/17.svg"
              className="w-[40%]"
            />
          </div>
        </div>
      </UniformPaddingSection>

      {/* Instructor Cards Section */}
      <InstructorCardsSection instructors={recentInstructors} />

      {/* Contact Us Banner */}
      <UniformPaddingSection className="my-4 lg:my-8">
        <ContactUsBanner />
      </UniformPaddingSection>
    </>
  );
}
