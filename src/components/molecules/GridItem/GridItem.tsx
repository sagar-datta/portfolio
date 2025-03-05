"use client";

import { IPortfolioItem } from "@/types/Portfolio";
import { ExternalLink } from "lucide-react";
import { Tooltip } from "@/components/atoms/Tooltip";
import { useExternalLink } from "@/hooks/useExternalLink";
import { Content } from "@/components/molecules/GridItem/Content";

type GridItemProps = Omit<IPortfolioItem, "id" | "color">;

export const GridItem = (props: GridItemProps) => {
  const { handleClick } = useExternalLink(props.url);
  const isPortfolio = props.title === "Portfolio";

  return (
    <Tooltip
      content={
        <div className="flex items-center gap-2 text-light">
          {isPortfolio ? (
            <>
              <ExternalLink className="w-4 h-4" />
              <p className="text-xs">Opens GitHub Repo in new tab</p>
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              <p className="text-xs">Opens in a new tab</p>
            </>
          )}
        </div>
      }
      position="top"
      className={`relative w-full min-w-0 md:min-w-[450px] ${
        props.size === "large"
          ? "md:min-w-[920px] md:max-w-[920px]"
          : "max-w-[450px]"
      } flex-1 @container cursor-pointer`}
    >
      <div onClick={handleClick} className="group relative">
        <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl hidden [@media(hover:hover)]:block" />
        <Content {...props} isPortfolio={isPortfolio} />
      </div>
    </Tooltip>
  );
};
