import { Header } from "@/components/organisms/header";
import { Dock } from "@/components/organisms/dock";
import { GridItem } from "@/components/molecules/grid-item";
import { GRID_ITEMS } from "@/utils/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-24">
      <Header title="Sagar Datta's Portfolio" />

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:grid lg:place-items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center md:items-stretch">
          {GRID_ITEMS.map((item) => (
            <GridItem
              key={item.id}
              color={item.color}
              title={item.title}
              description={item.description}
              url={item.url}
              imagePath={item.imagePath}
              techStack={item.techStack}
              keyFeatures={item.keyFeatures}
            />
          ))}
        </div>
      </main>

      <Dock />
    </div>
  );
}
