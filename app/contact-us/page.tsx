import React from "react";

import TopUniformSection from "@/components/TopUniformSection";
import { ContactUsForm } from "./(components)/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <TopUniformSection
        title={
          <>
            GET IN <span className="text-[var(--custom-primary)]">TOUCH</span>{" "}
            WITH US
          </>
        }
      >
        {/* Contact Us Form */}
        <ContactUsForm className="mt-10 mx-auto" />
      </TopUniformSection>
    </>
  );
};

export default ContactUs;
