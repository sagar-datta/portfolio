import { PageTransition } from "@/components/atoms/PageTransition";
import { GridItem } from "@/components/molecules/GridItem";
import { GRID_ITEMS } from "@/utils/constants";

const ProjectsContent = () => {
  const sortedItems = [...GRID_ITEMS].sort((a, b) => a.id - b.id);

  return (
    <div className="w-full max-w-[1450px] mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
          >
            <GridItem
              title={item.title}
              descriptionHeading={item.descriptionHeading}
              descriptionExtended={item.descriptionExtended}
              url={item.url}
              imagePath={item.imagePath}
              techStack={item.techStack}
              size={item.size}
              stackSections={item.stackSections}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <PageTransition>
      <ProjectsContent />
    </PageTransition>
  );
};
