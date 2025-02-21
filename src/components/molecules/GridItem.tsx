"use client";

import { IPortfolioItem } from "@/types/Portfolio";
import { ExternalLink } from "lucide-react";
import { TechStackBubble } from "@/components/atoms/TechStackBubble";
import { Tooltip } from "@/components/atoms/Tooltip";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { useExternalLink } from "@/hooks/useExternalLink";

type GridItemProps = Omit<IPortfolioItem, "id" | "color">;

export const GridItem = ({
  title,
  descriptionHeading,
  descriptionExtended,
  url,
  imagePath,
  techStack,
}: GridItemProps) => {
  const { handleClick } = useExternalLink(url);

  return (
    <Tooltip
      content={
        <div className="flex items-center gap-2 text-dimmed-light dark:text-dimmed-dark">
          <ExternalLink className="w-4 h-4" />
          <p className="text-xs">Opens in a new tab</p>
        </div>
      }
      position="top"
      className={`
        relative w-full 
        min-w-0 md:min-w-[450px] max-w-[450px] 
        flex-1 @container cursor-pointer
      `}
    >
      <div onClick={handleClick} className="group relative">
        {/* Static background - only for mouse devices */}
        <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl hidden [@media(hover:hover)]:block" />

        {/* Main card content */}
        <div
          className={`
            relative rounded-xl aspect-[16/9]
            transition-smooth w-full overflow-hidden
            hover-lift-lg
            bg-button-light dark:bg-button-dark p-4
            [@media(hover:none)]:touch-none [@media(hover:none)]:[-webkit-tap-highlight-color:transparent]
            [@media(hover:none)]:active:scale-[0.98] [@media(hover:none)]:active:opacity-80
            [@media(hover:none)]:transition-all [@media(hover:none)]:duration-150 [@media(hover:none)]:ease-in-out
          `}
        >
          {/* Content overlay */}
          <div className="flex flex-col h-full select-none">
            {/* Title */}
            <h3 className="font-semibold tracking-tight text-clamp-title text-primary dark:text-primary-dark leading-none mb-3">
              {title}
            </h3>

            {/* Description Heading */}
            <p className="font-medium text-[15px] text-muted-light dark:text-muted-dark leading-snug line-clamp-2 mb-2">
              {descriptionHeading}
            </p>

            {/* Description Extended */}
            <p className="hidden md:block font-light text-[13px]/relaxed text-dimmed-light dark:text-dimmed-dark line-clamp-3 mb-4 group-hover:opacity-0 transition-smooth">
              {descriptionExtended}
            </p>

            {/* Tags Container */}
            <div className="mt-auto flex flex-col justify-end gap-2 group-hover:opacity-0 transition-smooth">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech: string, i: number) => (
                  <TechStackBubble key={i} tech={tech} />
                ))}
              </div>
            </div>

            {/* Image that appears on hover */}
            <div className="absolute left-4 right-[50%] bottom-4 top-[35%] rounded-lg overflow-hidden select-none opacity-0 group-hover:opacity-100 transition-smooth">
              <ResponsiveImage
                src={imagePath}
                alt={title}
                priority
                className="transition-smooth opacity-100 scale-[0.99] group-hover:scale-100"
              />
            </div>

            {/* External link info */}
            <div className="absolute left-[55%] right-4 bottom-4 top-[35%] flex flex-col opacity-0 group-hover:opacity-100 transition-smooth">
              <div className="flex flex-wrap gap-1.5 content-start">
                {techStack.map((tech: string, i: number) => (
                  <TechStackBubble key={i} tech={tech} variant="small" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};
