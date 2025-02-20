"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => setIsTouched(true);

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouched(false), 300);
    window.open(url, "_blank");
  };

  return (
    <div
      className="relative group w-full min-w-0 md:min-w-[390px] max-w-[450px] flex-1 @container"
      onClick={() => window.open(url, "_blank")}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Static background */}
      <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl" />

      {/* Main card content */}
      <div
        className={`
          bg-primary-dark dark:bg-primary
          rounded-xl
          aspect-[16/9]
          transition-smooth
          w-full
          overflow-hidden
          group-hover:-translate-x-2
          group-hover:-translate-y-2
          ${isTouched ? "-translate-x-2 -translate-y-2" : ""}
        `}
      >
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className={`
              object-cover
              rounded-lg
              transition-smooth
              opacity-0
              group-hover:opacity-100
              ${isTouched ? "opacity-100" : ""}
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Default state */}
          <div
            className={`
              absolute
              inset-0
              flex
              flex-col
              justify-between
              p-[5%]
              transition-smooth
              group-hover:opacity-0
              ${isTouched ? "opacity-0" : "opacity-100"}
            `}
          >
            <div className="space-y-2">
              <h3 className="text-adaptive font-medium tracking-tight text-clamp-title">
                {title}
              </h3>
              <p className="text-adaptive-60 font-normal text-clamp-body">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-[clamp(0.25rem,1.5cqi,0.5rem)] mt-auto">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-clamp-small tracking-wider uppercase font-medium px-[clamp(0.375rem,2.5cqi,0.75rem)] py-[clamp(0.125rem,1.25cqi,0.375rem)] rounded-full bg-button-dark dark:bg-button-light text-light dark:text-dark ring-0"
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
