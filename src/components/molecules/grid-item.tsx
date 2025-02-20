"use client";

import Image from "next/image";
import { IPortfolioItem } from "@/types/portfolio";

type IGridItemProps = Omit<IPortfolioItem, "id">;

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
      className="relative group w-full min-w-0 md:min-w-[390px] max-w-[450px] flex-1 @container cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      {/* Static background */}
      <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl" />

      {/* Main card content */}
      <div
        className={`
          relative
          rounded-xl
          aspect-[16/9]
          transition-smooth
          w-full
          overflow-hidden
          hover-lift-lg
          touch-lift-lg
        `}
      >
        <Image
          src={imagePath}
          alt={title}
          fill
          className={`
            object-cover
            rounded-lg
            transition-smooth
            opacity-100
            scale-[0.99]
            group-hover:scale-100
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Content overlay */}
        <div
          className={`
            absolute
            inset-0
            flex
            flex-col
            justify-between
            p-[5%]
            transition-smooth
            bg-button-light dark:bg-button-dark
            opacity-100
            group-hover:opacity-0
            group-active:opacity-0
          `}
        >
          <div className="space-y-2 select-none">
            <h3 className="font-medium tracking-tight text-clamp-title text-dark dark:text-light">
              {title}
            </h3>
            <p className="font-normal text-clamp-body text-dark dark:text-light">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-[clamp(0.25rem,1.5cqi,0.5rem)] mt-auto select-none">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-modern-clamp px-[clamp(0.375rem,2.5cqi,0.75rem)] py-[clamp(0.125rem,1.25cqi,0.375rem)] rounded-full bg-light dark:bg-primary-dark text-dark dark:text-light ring-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
