import { PageTransition } from "@/components/atoms/PageTransition";
import { GridItem } from "@/components/molecules/GridItem";
import { GRID_ITEMS } from "@/utils/constants";

const ProjectsContent = () => {
  const sortedItems = [...GRID_ITEMS].sort((a, b) => a.id - b.id);

  return (
    <div className="w-full lg:w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center md:items-stretch">
        {sortedItems.map((item) => (
          <GridItem
            key={item.id}
            title={item.title}
            descriptionHeading={item.descriptionHeading}
            descriptionExtended={item.descriptionExtended}
            url={item.url}
            imagePath={item.imagePath}
            techStack={item.techStack}
          />
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
