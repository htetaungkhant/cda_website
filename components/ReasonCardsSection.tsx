import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    <section className="max-w-420 mx-auto px-6 py-8 max-lg:px-3 max-lg:py-6 flex flex-col gap-4 text-black">
      <h1 className="text-4xl max-lg:text-center">
        <strong>{title}</strong>
      </h1>
      <p className="max-lg:text-center">{description}</p>
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
                className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {firstCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative">
                {firstCard.title}
              </h2>
            )}
            {firstCard.description && (
              <p className="text-sm md:text-base relative">
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
                className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {secondCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative">
                {secondCard.title}
              </h2>
            )}
            {secondCard.description && (
              <p className="text-sm md:text-base relative">
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
                className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {thirdCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative">
                {thirdCard.title}
              </h2>
            )}
            {thirdCard.description && (
              <p className="text-sm md:text-base relative">
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
                className="w-12 h-12 md:w-14 md:h-14 object-contain relative"
              />
            )}
            {fourthCard.title && (
              <h2 className="font-semibold text-lg md:text-xl relative">
                {fourthCard.title}
              </h2>
            )}
            {fourthCard.description && (
              <p className="text-sm md:text-base relative">
                {fourthCard.description}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReasonCardsSection;
