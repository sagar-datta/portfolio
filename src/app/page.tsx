import { Header } from "@/components/header";
import { Dock } from "@/components/dock";
import { GridItem } from "@/components/grid-item";

const GRID_ITEMS = [
  {
    id: 1,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    description: "AI-powered recipe generator",
    color: "bg-primary-dark dark:bg-primary",
  },
  {
    id: 2,
    title: "Galerie",
    url: "https://sagar-datta.github.io/galerie/",
    description: "Photography portfolio",
    color: "bg-primary-dark dark:bg-primary",
  },
  // Add more portfolio items as needed
];

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
