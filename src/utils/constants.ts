import { IPortfolioItem } from "@/types/Portfolio";

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
  },
];
