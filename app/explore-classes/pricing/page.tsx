import React from "react";

import TopUniformSection from "@/components/TopUniformSection";
import { PricingCardStyle2 } from "@/components/PricingCard";

const Pricing = () => {
  return (
    <>
      <TopUniformSection title="Pricing">
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-4xl max-lg:text-center">
            <strong>Standard Driving Lessons</strong>
          </h1>
          <p className="max-lg:text-center text-lg lg:text-xl">
            (Beginners and Partly-Trained Students)
          </p>
          <div className="sm:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Pricing Card */}
            <PricingCardStyle2
              transmissionType="Manual"
              price="£80"
              save="£84"
              features={[
                "Weekdays – 2 Hour Driving Lesson",
                "Weekends & Evenings - 2 Hour",
              ]}
            />
            {/* Pricing Card */}
            <PricingCardStyle2
              transmissionType="Automatic"
              price="£84"
              save="£88"
              features={[
                "Weekdays – 2 Hour Driving Lesson",
                "Weekends & Evenings - 2 Hour",
              ]}
            />
          </div>
        </div>
      </TopUniformSection>

      {/* Pricing Cards Section */}
    </>
  );
};

export default Pricing;
