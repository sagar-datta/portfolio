"use client";

import Image from "next/image";
import { IPortfolioItem } from "@/types/portfolio";
import { ExternalLink } from "lucide-react";

type GridItemProps = Omit<IPortfolioItem, "id" | "color">;

export const GridItem = ({
  title,
  description,
  url,
  imagePath,
  techStack,
  keyFeatures,
}: GridItemProps) => {
  return (
    <div
      className={`
        relative group w-full 
        min-w-0 md:min-w-[450px] max-w-[450px] 
        flex-1 @container cursor-pointer
      `}
      onClick={() => window.open(url, "_blank")}
    >
      {/* Popover for external link info */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-dark/70 dark:text-light/70 opacity-0 group-hover:opacity-100 transition-smooth bg-button-light dark:bg-button-dark px-3 py-1.5 rounded-full shadow-sm">
        <ExternalLink className="w-4 h-4" />
        <p className="text-xs whitespace-nowrap">Opens in a new tab</p>
      </div>

      {/* Static background */}
      <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl" />

      {/* Main card content */}
      <div
        className={`
          relative rounded-xl aspect-[16/9]
          transition-smooth w-full overflow-hidden
          hover-lift-lg touch-lift-lg
          bg-button-light dark:bg-button-dark p-4
        `}
      >
        {/* Content overlay */}
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
          <div className="flex-1 flex flex-col justify-end space-y-2 mt-auto group-hover:opacity-0 transition-smooth">
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

            {/* Key Features - only show at max width */}
            <div className="hidden @[450px]:flex flex-wrap gap-[clamp(0.25rem,1cqi,0.375rem)]">
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

          {/* Image that appears on hover */}
          <div className="absolute left-4 right-[50%] bottom-4 top-[45%] rounded-lg overflow-hidden select-none opacity-0 group-hover:opacity-100 transition-smooth">
            <Image
              src={imagePath}
              alt={title}
              fill
              className={`
                object-cover
                transition-smooth opacity-100
                scale-[0.99] group-hover:scale-100
              `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          {/* External link info */}
          <div className="absolute left-[55%] right-4 bottom-4 top-[45%] flex flex-col opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex flex-wrap gap-[0.375rem] content-start">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`
                    text-xs font-medium
                    px-2 py-1
                    rounded-full bg-light dark:bg-primary-dark 
                    text-dark dark:text-light
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
