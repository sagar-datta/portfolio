import { Header } from "@/components/organisms/header";
import { Dock } from "@/components/organisms/dock";
import { GridItem } from "@/components/molecules/grid-item";

const GRID_ITEMS = [
  {
    id: 1,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    description: "AI-powered recipe generator using Google's Gemini Pro API",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/gastronaut.png",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "Gemini Pro API",
    ],
    keyFeatures: [
      "Smart recipe generation with AI",
      "Interactive checklist for ingredients",
      "Print-optimized recipe cards",
      "Responsive design with animations",
      "Accessibility features",
    ],
  },
  {
    id: 2,
    title: "Galerie de Sagar",
    url: "https://sagar-datta.github.io/galerie/",
    description: "Modern photo gallery with dynamic city selection and mapping",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/galerie.png",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Cloudinary",
      "CSS Animations",
    ],
    keyFeatures: [
      "Dynamic image gallery with modal view",
      "Cities ticker with smooth animations",
      "Progressive image loading",
      "Location data integration",
      "Rich metadata display",
    ],
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
