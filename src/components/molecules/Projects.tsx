import { PageTransition } from "@/components/atoms/PageTransition";
import { GridItem } from "@/components/molecules/GridItem";
import { GRID_ITEMS } from "@/utils/constants";

const ProjectsContent = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center md:items-stretch">
      {GRID_ITEMS.map((item) => (
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
  );
};

export const Projects = () => {
  return (
    <PageTransition>
      <ProjectsContent />
    </PageTransition>
  );
};
