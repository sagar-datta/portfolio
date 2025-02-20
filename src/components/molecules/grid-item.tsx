"use client";

import Image from "next/image";
import { IPortfolioItem } from "@/types/portfolio";

interface IGridItemProps extends Omit<IPortfolioItem, "id"> {}

export const GridItem = ({
  color,
  title,
  description,
  url,
  imagePath,
  techStack,
  keyFeatures,
}: IGridItemProps) => {
  return (
    <div
      className={`
        relative group w-full 
        min-w-0 md:min-w-[390px] max-w-[450px] 
        flex-1 @container cursor-pointer
      `}
      onClick={() => window.open(url, "_blank")}
    >
      {/* Static background */}
      <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl" />

      {/* Main card content */}
      <div
        className={`
          relative rounded-xl aspect-[16/9]
          transition-smooth w-full overflow-hidden
          hover-lift-lg touch-lift-lg
        `}
      >
        <Image
          src={imagePath}
          alt={title}
          fill
          className={`
            object-cover rounded-lg
            transition-smooth opacity-100
            scale-[0.99] group-hover:scale-100
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Content overlay */}
        <div
          className={`
            absolute inset-0 flex flex-col
            p-[5%] transition-smooth
            bg-button-light dark:bg-button-dark
            opacity-100 group-hover:opacity-0
            group-active:opacity-0
          `}
        >
          <div className="flex flex-col h-full select-none">
            {/* Title */}
            <h3 className="font-semibold tracking-tight text-clamp-title text-dark dark:text-light leading-none">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-2 font-normal text-clamp-body text-dark/80 dark:text-light/80 leading-snug line-clamp-3">
              {description}
            </p>

            {/* Tags Container */}
            <div className="flex-1 flex flex-col justify-end space-y-2 mt-auto">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-[clamp(0.25rem,1cqi,0.375rem)]">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`
                      text-modern-clamp font-medium
                      px-[clamp(0.25rem,2cqi,0.75rem)]
                      py-[clamp(0.1rem,1cqi,0.375rem)]
                      rounded-full bg-light dark:bg-primary-dark 
                      text-dark dark:text-light
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features - only show on lg screens */}
              <div className="hidden lg:flex flex-wrap gap-[clamp(0.25rem,1cqi,0.375rem)]">
                {keyFeatures.map((feature, i) => (
                  <span
                    key={i}
                    className={`
                      text-modern-clamp font-medium
                      px-[clamp(0.25rem,2cqi,0.75rem)]
                      py-[clamp(0.1rem,1cqi,0.375rem)]
                      rounded-full bg-primary/55 dark:bg-primary-dark/55
                      text-dark/75 dark:text-light/75
                    `}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
