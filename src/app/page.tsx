import { Header } from "@/components/organisms/Header";
import { Dock } from "@/components/organisms/Dock";
import { GridItem } from "@/components/molecules/GridItem";
import { GRID_ITEMS } from "@/utils/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-24">
      <Header name="Sagar Datta" profession="Full Stack Developer" />

      <main className="flex-1 max-w-7xl mx-auto w-full pt-6 px-6 pb-0 lg:grid lg:place-items-center">
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
      </main>

      <Dock />
    </div>
  );
}
