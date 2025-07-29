import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import UniformPaddingSection from "./UniformPaddingSection";

interface ReasonCard {
  icon?: string | StaticImport;
  title?: string;
  description?: string;
}

interface ReasonCardsSectionProps {
  title: string;
  description?: string;
  firstCard?: ReasonCard;
  secondCard?: ReasonCard;
  thirdCard?: ReasonCard;
  fourthCard?: ReasonCard;
}

const ReasonCardsSection: React.FC<ReasonCardsSectionProps> = ({
  title,
  description,
  firstCard,
  secondCard,
  thirdCard,
  fourthCard,
}) => {
  return (
    <UniformPaddingSection className="flex flex-col gap-4 text-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">
        <strong>{title}</strong>
      </h1>
      <p className="max-lg:text-center text-xs md:text-sm lg:text-base text-[#585858]">
        {description}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {/* Reason Card 1 */}
        {firstCard && (
          <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-1.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />
            {firstCard.icon && (
              <Image
                src={firstCard.icon}
                alt="Reason 1"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {firstCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative max-[425px]:leading-5">
                {firstCard.title}
              </h2>
            )}
            {firstCard.description && (
              <p className="text-[10px] min-[425px]:text-xs sm:text-sm md:text-base relative">
                {firstCard.description}
              </p>
            )}
          </div>
        )}
        {/* Reason Card 2 */}
        {secondCard && (
          <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-2.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />
            {secondCard.icon && (
              <Image
                src={secondCard.icon}
                alt="Reason 2"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {secondCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative max-[425px]:leading-5">
                {secondCard.title}
              </h2>
            )}
            {secondCard.description && (
              <p className="text-[10px] min-[425px]:text-xs sm:text-sm md:text-base relative">
                {secondCard.description}
              </p>
            )}
          </div>
        )}
        {/* Reason Card 3 */}
        {thirdCard && (
          <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-3.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />
            {thirdCard.icon && (
              <Image
                src={thirdCard.icon}
                alt="Reason 3"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {thirdCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative max-[425px]:leading-5">
                {thirdCard.title}
              </h2>
            )}
            {thirdCard.description && (
              <p className="text-[10px] min-[425px]:text-xs sm:text-sm md:text-base relative">
                {thirdCard.description}
              </p>
            )}
          </div>
        )}
        {/* Reason Card 4 */}
        {fourthCard && (
          <div className="relative flex flex-col gap-2 md:gap-4 md:min-h-64 rounded-xl text-white bg-[url(/car-part-4.png)] bg-cover bg-no-repeat bg-center p-4 max-[330px]:p-2 xl:p-6 overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />
            {fourthCard.icon && (
              <Image
                src={fourthCard.icon}
                alt="Reason 4"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {fourthCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative max-[425px]:leading-5">
                {fourthCard.title}
              </h2>
            )}
            {fourthCard.description && (
              <p className="text-[10px] min-[425px]:text-xs sm:text-sm md:text-base relative">
                {fourthCard.description}
              </p>
            )}
          </div>
        )}
      </div>
    </UniformPaddingSection>
  );
};

export default ReasonCardsSection;
