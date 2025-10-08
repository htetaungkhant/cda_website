"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { toast } from "sonner";

import UniformPaddingSection from "@/components/UniformPaddingSection";
import { PricingCardStyle3 } from "@/components/PricingCard";
import { cn, stripePromise } from "@/lib/shared/utils";
import { Course } from "@/types/course";

interface CoursesGridProps {
  title: string;
  description?: string;
  courses: (Course & {
    features?: {
      image: string;
      title: string;
    }[];
  })[];
  className?: string;
}

const CoursesGrid: React.FC<CoursesGridProps> = ({
  title,
  description,
  courses,
  className,
}) => {
  const mobileScrollContainerRef1 = useRef<HTMLDivElement | null>(null);
  const mobileScrollContainerRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleStripeCallback = async () => {
      if (stripePromise) {
        const stripe = await stripePromise;
        if (stripe) {
          const clientSecretFromURL = new URLSearchParams(
            window.location.search
          ).get("payment_intent_client_secret");

          if (!clientSecretFromURL) {
            return;
          }

          const { paymentIntent } = await stripe.retrievePaymentIntent(
            clientSecretFromURL
          );

          switch (paymentIntent?.status) {
            case "succeeded":
              toast.success("Payment succeeded!");
              break;
            case "processing":
              toast.info("Your payment is processing.");
              break;
            case "requires_payment_method":
              toast.error("Your payment was not successful, please try again.");
              break;
            default:
              toast.error("Something went wrong.");
              break;
          }
        }
      }
    };

    handleStripeCallback();
  }, []);

  const scrollContainer = (direction: "left" | "right") => {
    const refs = [mobileScrollContainerRef1, mobileScrollContainerRef2];
    const gap = 16;

    refs.forEach((ref) => {
      if (!ref.current) return;

      const cardWidth = (
        ref.current.querySelector(":first-child") as HTMLElement
      )?.offsetWidth;
      if (!cardWidth) return;

      const scrollAmount = cardWidth + gap;
      const currentScroll = ref.current.scrollLeft;

      ref.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    });
  };

  return (
    <UniformPaddingSection
      className={cn("flex flex-col gap-4 text-black", className)}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        <strong>{title}</strong>
      </h1>
      {description && (
        <p className="max-lg:text-center text-xs md:text-sm lg:text-base xl:text-lg text-[#585858]">
          {description}
        </p>
      )}
      {courses?.length > 0 ? (
        <div className="mx-auto grid grid-cols-1 gap-4 lg:gap-8">
          <div
            ref={mobileScrollContainerRef1}
            className="flex lg:flex-wrap gap-4 lg:gap-8 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-lg:overflow-x-auto"
            style={{ touchAction: "pan-y" }} // overscrollBehavior: "contain"
          >
            {courses.map((course, index) => (
              <PricingCardStyle3
                key={`${course.id}-${index}`}
                {...course}
                className={cn(
                  "min-w-70 w-70 min-[375px]:min-w-84 min-[375px]:w-84 sm:min-w-88 sm:w-88 lg:w-[48%]",
                  index > Math.ceil(courses.length / 2) - 1 && "max-lg:hidden"
                )}
              />
            ))}
          </div>
          <div
            ref={mobileScrollContainerRef2}
            className="flex lg:hidden gap-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto"
            style={{ touchAction: "pan-y" }} // overscrollBehavior: "contain"
          >
            {courses
              .slice(Math.ceil(courses.length / 2))
              .map((course, index) => (
                <PricingCardStyle3
                  key={`${course.id}-${index}`}
                  {...course}
                  className="min-w-70 w-70 min-[375px]:min-w-84 min-[375px]:w-84 sm:min-w-88 sm:w-88"
                />
              ))}
            {courses.length % 2 !== 0 && (
              <div className="min-w-70 w-70 min-[375px]:min-w-84 min-[375px]:w-84 sm:min-w-88 sm:w-88" />
            )}
          </div>
        </div>
      ) : (
        <p>No courses available</p>
      )}

      {/* Mobile Navigation Arrows */}
      <div
        className={cn(
          "relative flex justify-center lg:hidden",
          courses.length <= 4 && "md:hidden",
          courses.length <= 2 && "hidden"
        )}
      >
        <button
          onClick={() => scrollContainer("left")}
          className="px-4 py-2 bg-white cursor-pointer rounded-l-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <FaArrowLeft className="text-[#545454]" />
        </button>
        <button
          onClick={() => scrollContainer("right")}
          className="px-4 py-2 bg-white cursor-pointer rounded-r-2xl hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <FaArrowRight className="text-[#545454]" />
        </button>
      </div>
    </UniformPaddingSection>
  );
};

export default CoursesGrid;
