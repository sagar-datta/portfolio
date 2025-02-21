import { IPortfolioItem } from "@/types/Portfolio";

export const GRID_ITEMS: IPortfolioItem[] = [
  {
    id: 1,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    descriptionHeading:
      "AI-powered recipe generator using Google's Gemini Pro API",
    descriptionExtended:
      "Leveraging the power of Google's Gemini Pro API to create personalized recipes based on your ingredients and preferences. Features real-time generation and dynamic UI updates.",
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
    descriptionHeading:
      "Modern photo gallery with dynamic city selection and mapping",
    descriptionExtended:
      "A sleek photo gallery showcasing travel photography with interactive city selection, dynamic image loading, and smooth transitions. Built with performance and user experience in mind.",
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
