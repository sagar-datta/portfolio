import { IPortfolioItem } from "@/types/portfolio";

export const GRID_ITEMS: IPortfolioItem[] = [
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
];
