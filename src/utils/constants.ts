import { IPortfolioItem } from "@/types/Portfolio";

export const GRID_ITEMS: IPortfolioItem[] = [
  {
    id: 1,
    title: "ClariFi",
    url: "https://clarifi-finance.vercel.app/dashboard",
    descriptionHeading:
      "Full-stack personal finance platform with real-time insights and smart categorisation",
    descriptionExtended:
      "Turborepo monorepo • Type-safe database operations • JWT authentication • Real-time updates • Smart transaction categorisation • Financial insights • Budget tracking • PWA support • Dark/Light mode • Responsive design",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: {
      light: "/images/projects/clarifi/clarifi.png",
      dark: "/images/projects/clarifi/clarifi.png",
    },
    techStack: [
      // Frontend
      "Next.js",
      "TypeScript",
      "React",
      "Redux",
      "React Query",
      "Tailwind",
      "Radix UI",
      // Backend
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Clerk",
      "Render",
    ],
    size: "large",
    stackSections: {
      frontend: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "React Query",
        "Tailwind",
        "Radix UI",
      ],
      backend: ["Express.js", "PostgreSQL", "Supabase", "Clerk", "Render"],
    },
  },
  {
    id: 5,
    title: "Itinerai",
    url: "https://sagar-datta.github.io/travel-itinerary-ai/",
    descriptionHeading:
      "AI-powered travel planner with intelligent itinerary generation",
    descriptionExtended:
      "Smart destination search • Custom React hooks • Advanced state management • Dark mode • Accessibility features • Type-safe development",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: {
      light: "/images/projects/itinerai/itinerai.png",
      dark: "/images/projects/itinerai/itinerai.png",
    },
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "React Hook Form",
      "Tailwind",
      "Gemini AI",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    url: "https://github.com/sagar-datta/portfolio/",
    descriptionHeading:
      "Modern portfolio with minimalist desktop-inspired interface",
    descriptionExtended:
      "Dark/light theme • Responsive design • Container queries • Smooth animations • Optimised images • Accessibility features",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: {
      light: "/images/projects/portfolio/portfolio-light.png",
      dark: "/images/projects/portfolio/portfolio.png",
    },
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Framer",
      "Container Queries",
    ],
  },
  {
    id: 2,
    title: "Gastronaut AI",
    url: "https://sagar-datta.github.io/gastronaut-ai/",
    descriptionHeading: "AI-powered recipe generator with enterprise-grade UX",
    descriptionExtended:
      "Real-time generation • Customised preferences • Step-by-step instructions • Nutritional insights • Mobile-optimised • Error handling",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: {
      light: "/images/projects/gastronaut/gastronaut.png",
      dark: "/images/projects/gastronaut/gastronaut.png",
    },
    techStack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind",
      "Shadcn",
      "Framer",
      "Gemini AI",
    ],
  },
  {
    id: 4,
    title: "Galerie de Sagar",
    url: "https://sagar-datta.github.io/galerie/",
    descriptionHeading: "Interactive photo gallery with dynamic city mapping",
    descriptionExtended:
      "Interactive navigation • Dynamic image loading • Smooth transitions • Optimised performance • Responsive layout • Cloud integration",
    color: "bg-primary-dark dark:bg-primary",
    imagePath: {
      light: "/images/projects/galerie/galerie.png",
      dark: "/images/projects/galerie/galerie.png",
    },
    techStack: ["TypeScript", "React", "Vite", "Tailwind", "Cloudinary", "CSS"],
  },
];
