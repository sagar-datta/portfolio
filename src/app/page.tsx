import { Header } from "@/components/header";
import { Dock } from "@/components/dock";
import { GridItem } from "@/components/grid-item";

const GRID_ITEMS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  color: [
    "bg-blue-500/90 dark:bg-blue-600",
    "bg-emerald-500/90 dark:bg-emerald-600",
    "bg-purple-500/90 dark:bg-purple-600",
    "bg-pink-500/90 dark:bg-pink-600",
    "bg-amber-500/90 dark:bg-amber-600",
    "bg-red-500/90 dark:bg-red-600",
  ][i],
  title: `Project ${i + 1}`,
}));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-24">
      <Header title="Sagar Datta's Portfolio" />

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {GRID_ITEMS.map((item) => (
            <GridItem key={item.id} color={item.color} title={item.title} />
          ))}
        </div>
      </main>

      <Dock />
    </div>
  );
}
