"use client";

import { IPortfolioItem } from "@/types/Portfolio";
import { ExternalLink } from "lucide-react";
import { TechStackBubble } from "@/components/atoms/TechStackBubble";
import { Tooltip } from "@/components/atoms/Tooltip";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { FeatureBubble } from "@/components/atoms/FeatureBubble";
import { COLORS } from "@/utils/themeConstants";
import { useExternalLink } from "@/hooks/useExternalLink";

type GridItemProps = Omit<IPortfolioItem, "id" | "color">;

export const GridItem = ({
  title,
  description,
  url,
  imagePath,
  techStack,
  keyFeatures,
}: GridItemProps) => {
  const { handleClick } = useExternalLink(url);

  return (
    <Tooltip
      content={
        <div className={`flex items-center gap-2 ${COLORS.text.dimmed}`}>
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
      <div onClick={handleClick}>
        {/* Static background */}
        <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl" />

        {/* Main card content */}
        <div
          className={`
            relative rounded-xl aspect-[16/9]
            transition-smooth w-full overflow-hidden
            hover-lift-lg touch-lift-lg
            ${COLORS.glass.button} p-4
          `}
        >
          {/* Content overlay */}
          <div className="flex flex-col h-full select-none">
            {/* Title */}
            <h3
              className={`font-semibold tracking-tight text-clamp-title ${COLORS.text.primary} leading-none`}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className={`mt-2 font-normal text-clamp-body ${COLORS.text.muted} leading-snug line-clamp-3`}
            >
              {description}
            </p>

            {/* Tags Container */}
            <div className="flex-1 flex flex-col justify-end gap-2 mt-auto md:group-hover:opacity-0 transition-smooth">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech, i) => (
                  <TechStackBubble key={i} tech={tech} />
                ))}
              </div>

              {/* Key Features - only show when card width >= 450px */}
              <div className="hidden @[450px]:flex flex-wrap gap-1.5">
                {keyFeatures.map((feature, i) => (
                  <FeatureBubble key={i} feature={feature} />
                ))}
              </div>
            </div>

            {/* Image that appears on hover */}
            <div className="absolute left-4 right-[50%] bottom-4 top-[45%] rounded-lg overflow-hidden select-none opacity-0 md:group-hover:opacity-100 transition-smooth">
              <ResponsiveImage
                src={imagePath}
                alt={title}
                priority
                className="transition-smooth opacity-100 scale-[0.99] group-hover:scale-100"
              />
            </div>

            {/* External link info */}
            <div className="absolute left-[55%] right-4 bottom-4 top-[45%] flex flex-col opacity-0 md:group-hover:opacity-100 transition-smooth">
              <div className="flex flex-wrap gap-1.5 content-start">
                {techStack.map((tech, i) => (
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
