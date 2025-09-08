import { toast } from "sonner";

import Banner from "@/components/Banner";
import CourseCardsSection from "@/components/CourseCardsSection";
import IgGallery from "@/components/IgGallery";
import InfoCardsSection from "@/components/InfoCardsSection";
import InstructorCardsSection from "@/components/InstructorCardsSection";
import ReasonCardsSection from "@/components/ReasonCardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { googleService } from "@/services/server/google-service";
import { instagramService } from "@/services/server/instagram-service";
import { instructorService } from "@/services/server/instructor-service";
import { GoogleReview } from "@/types/google";
import { InstagramPost } from "@/types/instagram";
import { Instructor } from "@/types/instructor";

export const dynamic = "force-dynamic";

export default async function Home() {
  let recentInstructors: Instructor[] = [];
  let instructorsError: string | null = null;
  let googleReviews: GoogleReview[] = [];
  let googleReviewsError: string | null = null;
  let instagramPosts: InstagramPost[] = [];
  let instagramError: string | null = null;

  try {
    const instructors = await instructorService.getAllInstructors();
    const automaticInstructors =
      instructors?.filter(
        (instructor) => instructor.drivingMode === "automatic"
      ) || [];

    const manualInstructors =
      instructors?.filter(
        (instructor) => instructor.drivingMode === "manual"
      ) || [];

    const bothInstructors =
      instructors?.filter(
        (instructor) =>
          instructor.drivingMode === "both" ||
          instructor.drivingMode === "automatic" ||
          instructor.drivingMode === "manual"
      ) || [];

    // get 2 manual instructors, 2 automatic instructors and 1 both instructor randomly
    recentInstructors = [
      ...manualInstructors.sort(() => 0.5 - Math.random()).slice(0, 2),
      ...automaticInstructors.sort(() => 0.5 - Math.random()).slice(0, 2),
      ...bothInstructors.sort(() => 0.5 - Math.random()).slice(0, 1),
    ];
  } catch (err) {
    console.error("Error fetching instructors:", err);
    instructorsError = "Failed to fetch instructors. Please try again later.";
    toast.error(instructorsError);
    recentInstructors = [];
  }

  try {
    googleReviews = await googleService.get5Reviews();
  } catch (err) {
    console.error("Error fetching Google reviews:", err);
    googleReviewsError =
      "Failed to fetch Google reviews. Please try again later.";
    toast.error(googleReviewsError);
    googleReviews = [];
  }

  try {
    instagramPosts = await instagramService.getUserMedia(8);
  } catch (err) {
    console.error("Error fetching Instagram posts:", err);
    instagramError = "Failed to fetch Instagram posts. Please try again later.";
    toast.error(instagramError);
    instagramPosts = [];
  }

  return (
    <>
      <Banner />

      {/* Info Cards Section */}
      <InfoCardsSection />

      {/* Course Cards Section */}
      <CourseCardsSection />

      {/* Reason Cards Section */}
      <ReasonCardsSection
        title="Why Choose Us?"
        description="At Cambridge Driving Academy, we go beyond lessons — we ensure a safe, flexible, and personalized driving experience that sets you up for success."
        firstCard={{
          title: "Certified, Friendly Instructors",
          description:
            "Our certified instructors build confidence and focus on safe driving habits for all skill levels.",
          icon: "/5.svg",
        }}
        secondCard={{
          title: "Personalised Learning Plans",
          description:
            "Personalized lessons are designed to meet your unique needs, whether you’re a beginner or experienced driver.",
          icon: "/6.svg",
        }}
        thirdCard={{
          title: "Flexible Scheduling",
          description:
            "Busy lifestyle? No problem. Choose your lesson times with ease and learn at a pace that suits you — mornings, evenings, or weekends.",
          icon: "/7.svg",
        }}
        fourthCard={{
          title: "Modern, Safe Vehicles",
          description:
            "Train in clean, well-maintained cars equipped with the latest safety tech. Your learning experience will be secure, smooth, and stress-free.",
          icon: "/8.svg",
        }}
      />

      {/* Instructor Cards Section */}
      {recentInstructors.length >= 4 && (
        <InstructorCardsSection instructors={recentInstructors} />
      )}

      {/* IG Gallery Section */}
      {instagramPosts.length >= 4 && <IgGallery posts={instagramPosts} />}

      {/* Testimonial Section */}
      {googleReviews.length >= 4 && (
        <TestimonialsSection testimonials={googleReviews} />
      )}

      <section className="w-full h-8" />
    </>
  );
}
