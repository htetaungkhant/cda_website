import Banner from "@/components/Banner";
import CourseCardsSection from "@/components/CourseCardsSection";
import IgGallery from "@/components/IgGallery";
import InfoCardsSection from "@/components/InfoCardsSection";
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
      <ReasonCardsSection />

      {/* IG Gallery Section */}
      <IgGallery />

      {/* Testimonial Section */}
      <TestimonialsSection />
    </>
  );
}
