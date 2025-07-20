import Banner from "@/components/Banner";
import CourseCardsSection from "@/components/CourseCardsSection";
import IgGallery from "@/components/IgGallery";
import InfoCardsSection from "@/components/InfoCardsSection";
import InstructorCardsSection from "@/components/InstructorCardsSection";
import ReasonCardsSection from "@/components/ReasonCardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
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
      <InstructorCardsSection />

      {/* IG Gallery Section */}
      <IgGallery />

      {/* Testimonial Section */}
      <TestimonialsSection />

      <section className="w-full h-8" />
    </>
  );
}
