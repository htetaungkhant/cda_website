import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-420 mx-auto px-6 pb-8 pt-36 max-lg:px-3 max-lg:pb-6 max-lg:pt-24 flex flex-col gap-4 text-[#585858]">
      <h1 className="max-lg:text-3xl text-4xl text-[#2D2E2F] text-center font-bold">
        PRIVACY POLICY
      </h1>
      <div className="flex flex-col gap-4 lg:gap-6 text-sm max-lg:text-xs">
        <p>
          <strong>Last updated:</strong> 20-06-2025
        </p>
        <p>
          Cambridge Driving Academy Ltd (&quot;we&quot;, &quot;our&quot;, or
          &quot;CDA&quot;) is committed to protecting your privacy and handling
          your data securely.
        </p>
        <div>
          <h2 className="text-base font-bold">1. What We Collect</h2>
          <ul className="list-disc pl-5">
            <li>Name, phone number, and email</li>
            <li>Driving preferences (manual or automatic)</li>
            <li>Booking and payment information</li>
            <li>Lesson feedback and communication history</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5">
            <li>To manage lesson bookings and scheduling</li>
            <li>To contact you regarding your course</li>
            <li>To process payments</li>
            <li>To improve our services</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">3. Data Sharing</h2>
          <ul className="list-disc pl-5">
            <li>
              Your personal data is only shared with your assigned instructor
            </li>
            <li>
              We do not sell or distribute your information to third parties
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">4. Data Storage & Security</h2>
          <ul className="list-disc pl-5">
            <li>
              Your data is securely stored and accessed only by authorized
              personnel
            </li>
            <li>We comply with the UK GDPR and Data Protection Act 2018</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">5. Your Rights</h2>
          <ul className="list-disc pl-5">
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Withdraw consent for communication.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">6. Data Retention</h2>
          <p>
            We retain your data for up to five years following the completion of
            services unless required for legal compliance.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold">7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            reflected on this page, and continued use of our website constitutes
            acceptance of these updates.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold">8. Contact Us</h2>
          <p>
            For privacy-related inquiries, contact us at:
            support@cambridgedriving.academy
          </p>
          <p>
            📞 Phone: <span className="font-medium">01223 974630</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
