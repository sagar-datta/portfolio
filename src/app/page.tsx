import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GridItem } from "@/components/grid-item";

const GRID_ITEMS = [
  { id: 1, color: "bg-blue-500", title: "Projects" },
  { id: 2, color: "bg-emerald-500", title: "Skills" },
  { id: 3, color: "bg-purple-500", title: "Experience" },
  { id: 4, color: "bg-pink-500", title: "Education" },
  { id: 5, color: "bg-amber-500", title: "Contact" },
  { id: 6, color: "bg-red-500", title: "Blog" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Sagar Datta's Portfolio" />

      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRID_ITEMS.map((item) => (
            <GridItem key={item.id} color={item.color} title={item.title} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
