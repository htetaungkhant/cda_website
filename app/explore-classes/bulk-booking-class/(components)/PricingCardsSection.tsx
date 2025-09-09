"use client";
import React, { useEffect } from "react";
import { toast } from "sonner";

import UniformPaddingSection from "@/components/UniformPaddingSection";
import { PricingCardStyle1 } from "@/components/PricingCard";
import { cn, stripePromise } from "@/lib/shared/utils";
import { Course } from "@/types/course";

interface PricingCardsSectionProps {
  bulkBookingCourses: Course[];
  className?: string;
}
const PricingCardsSection: React.FC<PricingCardsSectionProps> = ({
  className,
  bulkBookingCourses,
}) => {
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

  return (
    <UniformPaddingSection
      className={cn("flex flex-col gap-4 text-black", className)}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        <strong>Our Pricings</strong>
      </h1>
      <p className="max-lg:text-center text-xs md:text-sm lg:text-base text-[#585858]">
        At CDA, we offer straightforward, no-surprise pricing — tailored
        packages to match your goals, experience, and learning style.
      </p>
      <div className="sm:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Pricing Card */}
        {bulkBookingCourses[0] && (
          <PricingCardStyle1
            id={bulkBookingCourses[0].id}
            drivingMode={bulkBookingCourses[0].drivingMode}
            price={`£${bulkBookingCourses[0]?.primaryPrice}`}
            save={`£${bulkBookingCourses[0]?.secondaryPrice}`}
            features={bulkBookingCourses[0]?.descriptionList}
          />
        )}
        {/* Pricing Card */}
        {bulkBookingCourses[1] && (
          <PricingCardStyle1
            id={bulkBookingCourses[1].id}
            drivingMode={bulkBookingCourses[1].drivingMode}
            price={`£${bulkBookingCourses[1]?.primaryPrice}`}
            save={`£${bulkBookingCourses[1]?.secondaryPrice}`}
            features={bulkBookingCourses[1]?.descriptionList}
          />
        )}
      </div>
    </UniformPaddingSection>
  );
};

export default PricingCardsSection;
