import { IPortfolioItem } from "@/types/Portfolio";

export const GRID_ITEMS: IPortfolioItem[] = [
  {
    id: 3,
    title: "Portfolio",
    url: "https://sagar-datta.github.io/portfolio/",
    descriptionHeading: "Modern, responsive portfolio website built with Next.js and TypeScript",
    descriptionExtended: "Dark/light theme • Responsive design • Container queries • Smooth animations • Optimised images • Accessibility features",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: "/images/projects/portfolio.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Container Queries",
      "next-themes",
    ],
  },
  {
    id: 1,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    descriptionHeading:
      "AI-powered recipe generator utilising Google's Gemini Pro API",
    descriptionExtended:
      "Real-time recipe generation • Customised ingredient inputs • Dietary preferences • Step-by-step instructions • Nutritional insights • Mobile-optimised",
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
      "Interactive city navigation • Dynamic image loading • Smooth transitions • Optimised performance • Responsive grid layout • Cloudinary integration",
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
