import { IPortfolioItem } from "@/types/Portfolio";

export const GRID_ITEMS: IPortfolioItem[] = [
  {
    id: 3,
    title: "Portfolio",
    url: "https://sagar-datta.github.io/portfolio/",
    descriptionHeading:
      "Modern portfolio with minimalist desktop-inspired interface",
    descriptionExtended:
      "Dark/light theme • Responsive design • Container queries • Smooth animations • Optimised images • Accessibility features",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/portfolio.png",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer",
      "Container Queries",
    ],
  },
  {
    id: 1,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    descriptionHeading: "AI-powered recipe generator with enterprise-grade UX",
    descriptionExtended:
      "Real-time generation • Customised preferences • Step-by-step instructions • Nutritional insights • Mobile-optimised • Error handling",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/gastronaut.png",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Shadcn",
      "Framer",
      "Gemini AI",
    ],
  },
  {
    id: 2,
    title: "Galerie de Sagar",
    url: "https://sagar-datta.github.io/galerie/",
    descriptionHeading: "Interactive photo gallery with dynamic city mapping",
    descriptionExtended:
      "Interactive navigation • Dynamic image loading • Smooth transitions • Optimised performance • Responsive layout • Cloud integration",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/galerie.png",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Cloudinary", "CSS"],
  },
];
