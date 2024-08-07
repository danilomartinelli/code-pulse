'use client';

import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/global/3d-card';
import { CheckIcon } from 'lucide-react';

export type Feature = {
  id: string;
  text: string;
};

type PricingCardProps = {
  title: string;
  price: string;
  features: Feature[];
  highlightBorder?: boolean;
};

const PricingCard = ({
  title,
  price,
  features,
  highlightBorder = false,
}: PricingCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black ${
          highlightBorder
            ? 'dark:border-[#E2CBFF]'
            : 'dark:border-white/[0.2]'
        } border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border`}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
          <h2 className="text-6xl">{price}</h2>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Get a glimpse of what our software is capable of. Just a
          heads up you&apos;ll never leave us after this!
          <ul className="my-4 flex flex-col gap-2">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                {feature.text}
              </li>
            ))}
          </ul>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="span"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
            onClick={() => {
              // TODO: Add action here
            }}
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="span"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
            onClick={() => {
              // TODO: Add action here
            }}
          >
            Get Started Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default PricingCard;
