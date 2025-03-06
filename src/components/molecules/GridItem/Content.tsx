import { IPortfolioItem } from "@/types/Portfolio";
import { ExternalLink } from "lucide-react";
import { TechStackBubble } from "@/components/atoms/TechStackBubble";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { motion } from "framer-motion";

type ContentProps = Omit<IPortfolioItem, "id" | "color" | "url"> & {
  isPortfolio?: boolean;
};

export const Content = ({
  title,
  descriptionHeading,
  descriptionExtended,
  imagePath,
  techStack,
  stackSections,
  isPortfolio,
}: ContentProps) => {
  return (
    <div className="relative rounded-xl min-h-[250px] h-full w-full overflow-hidden hover-lift-lg bg-button-light dark:bg-button-dark p-4 [@media(hover:none)]:touch-none [@media(hover:none)]:[-webkit-tap-highlight-color:transparent] [@media(hover:none)]:active:scale-[0.98] [@media(hover:none)]:active:opacity-80 [@media(hover:none)]:transition-all [@media(hover:none)]:duration-150 [@media(hover:none)]:ease-in-out @container/card transform-gpu will-change-transform theme-transition">
      {!isPortfolio && (
        <div className="flex items-center gap-1.5 absolute top-3 right-3 text-dimmed-light dark:text-dimmed-dark [@media(hover:hover)]:@[400px]/card:hidden">
          <p className="text-xs @[400px]:block hidden">Opens in new tab</p>
          <ExternalLink className="w-4 h-4" />
        </div>
      )}
      <div className="flex flex-col h-full select-none">
        {/* Always visible content */}
        <h3 className="font-semibold tracking-tight text-clamp-title text-primary dark:text-primary-dark leading-none mb-3">
          {title}
        </h3>
        <p className="font-medium text-clamp-body text-muted-light dark:text-muted-dark leading-relaxed line-clamp-2 @container/card:line-clamp-1 mb-3 pb-1">
          {descriptionHeading}
        </p>

        {/* Content that hides on hover */}
        <div className="@[400px]/card:group-hover:opacity-0 @[400px]/card:group-hover:invisible transition-opacity duration-150 flex flex-col h-full">
          <p className="font-light text-[13px]/relaxed text-dimmed-light dark:text-dimmed-dark line-clamp-5 mb-4">
            {descriptionExtended}
          </p>
          <div className="mt-auto flex flex-col justify-end gap-2">
            {stackSections ? (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {stackSections.frontend.map((tech: string, i: number) => (
                    <TechStackBubble key={i} tech={tech} />
                  ))}
                  {stackSections.backend.map((tech: string, i: number) => (
                    <TechStackBubble key={i} tech={tech} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech: string, i: number) => (
                  <TechStackBubble key={i} tech={tech} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hover content - hidden by default, visible on hover */}
        <div className="hidden @[400px]/card:block absolute left-4 right-[50%] bottom-4 h-[60%] rounded-lg overflow-hidden select-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="relative w-full pb-[71.43%] rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <ResponsiveImage
                src={imagePath}
                alt={title}
                priority
                className="opacity-100 scale-[0.99] group-hover:scale-100 transition-transform duration-150 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="hidden @[400px]/card:flex absolute left-[55%] right-4 bottom-4 h-[60%] flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          {stackSections ? (
            <div className="space-y-4 w-full">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary/70 dark:text-primary-dark/70">
                    Frontend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stackSections.frontend.map((tech: string, i: number) => (
                    <TechStackBubble key={i} tech={tech} variant="small" />
                  ))}
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary/70 dark:text-primary-dark/70">
                    Backend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stackSections.backend.map((tech: string, i: number) => (
                    <TechStackBubble key={i} tech={tech} variant="small" />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 content-start">
              {techStack.map((tech: string, i: number) => (
                <TechStackBubble key={i} tech={tech} variant="small" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
