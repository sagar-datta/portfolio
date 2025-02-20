import { Header } from "@/components/organisms/header";
import { Dock } from "@/components/organisms/dock";
import { GridItem } from "@/components/molecules/grid-item";
import { GRID_ITEMS } from "@/utils/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-24">
      <Header title="Sagar Datta's Portfolio" />

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-wrap justify-center gap-6 w-full">
            {GRID_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <GridItem
                  color={item.color}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  imagePath={item.imagePath}
                  techStack={item.techStack}
                  keyFeatures={item.keyFeatures}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Dock />
    </div>
  );
}
