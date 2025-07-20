import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="max-w-420 mx-auto px-6 pb-8 pt-36 max-lg:px-3 max-lg:pb-6 max-lg:pt-24 flex flex-col gap-4 text-[#585858]">
      <h1 className="max-lg:text-3xl text-4xl text-[#2D2E2F] text-center font-bold">
        TERMS & CONDITIONS
      </h1>
      <div className="flex flex-col gap-4 lg:gap-6 text-sm max-lg:text-xs">
        <p>
          <strong>Last updated:</strong> 20-06-2025
        </p>
        <p>
          These Terms & Conditions apply to all driving tuition services offered
          by Cambridge Driving Academy Ltd. By booking and attending lessons,
          you agree to the following:
        </p>
        <div>
          <h2 className="text-base font-bold">1. Definitions</h2>
          <ul className="list-disc pl-5">
            <li>&quot;School&quot; refers to Cambridge Driving Academy.</li>
            <li>
              &quot;Instructor&quot; refers to the self-employed driving
              instructor assigned to the student.
            </li>
            <li>&quot;Student&quot; means the individual receiving tuition.</li>
            <li>
              &quot;Regulations&quot; refers to The Consumer Contracts
              (Information, Cancellation and Additional Charges) Regulations
              2013.
            </li>
            <li>
              &quot;DVSA&quot; means the Driving and Vehicle Standards Agency.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">2. Driving Instructors</h2>
          <ul className="list-disc pl-5">
            <li>
              All instructors are DVSA registered and operate independently.
            </li>
            <li>
              Cambridge Driving Academy acts only as a booking and payment
              agent.
            </li>
            <li>
              The contract for tuition is strictly between you (the student) and
              your instructor.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">3. Bookings & Cancellations</h2>
          <ul className="list-disc pl-5">
            <li>
              Bookings are subject to instructor approval and availability.
            </li>
            <li>
              48 hours’ notice is required for lesson cancellation; otherwise,
              full charges may apply.
            </li>
            <li>
              Instructors may cancel or reschedule lessons due to illness,
              vehicle issues, or unsafe conditions.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">4. Lesson Structure</h2>
          <ul className="list-disc pl-5">
            <li>Lessons are generally 2 hours long.</li>
            <li>
              Pickup/drop-off locations and timings are agreed upon directly
              with the instructor.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">5. Payments</h2>
          <ul className="list-disc pl-5">
            <li>
              Payment must be made in advance via bank transfer, online, or
              cash.
            </li>
            <li>
              Refunds on block bookings are pro-rated and exclude any discounts.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">6. Student Obligations</h2>
          <ul className="list-disc pl-5">
            <li>You must hold a valid UK provisional or full licence.</li>
            <li>
              You are responsible for bringing your licence and wearing
              corrective lenses if needed.
            </li>
            <li>
              You must not attend lessons under the influence of alcohol or
              drugs.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">7. Vehicle Use</h2>
          <ul className="list-disc pl-5">
            <li>Instructor vehicles are roadworthy and fully insured.</li>
            <li>
              Use of your personal vehicle is at the instructor’s discretion and
              requires insurance proof.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">8. Driving Tests</h2>
          <ul className="list-disc pl-5">
            <li>
              Students must confirm test readiness with their instructor before
              booking.
            </li>
            <li>
              Use of instructor’s vehicle for tests is subject to approval
            </li>
            <li>DVSA test fees do not cover instructor time or vehicle use.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">9. Termination</h2>
          <ul className="list-disc pl-5">
            <li>
              The instructor may cancel tuition due to poor attendance, unsafe
              behaviour, or lack of progress.
            </li>
            <li>
              You may terminate lessons anytime with notice. Remaining lesson
              fees may be refunded if applicable.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">10. Liability</h2>
          <ul className="list-disc pl-5">
            <li>
              Instructors are liable only for foreseeable loss or damage caused
              by their negligence.
            </li>
            <li>
              Cambridge Driving Academy is not responsible for instructor
              conduct or student progress
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
