"use client";

import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiGooglegemini,
  SiCloudinary,
  SiCss3,
  SiShadcnui,
} from "react-icons/si";

interface TechStackBubbleProps {
  tech: string;
  variant?: "default" | "small";
}

const techIcons: { [key: string]: IconType } = {
  React: SiReact,
  "React 18": SiReact,
  TypeScript: SiTypescript,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Gemini Pro API": SiGooglegemini,
  Cloudinary: SiCloudinary,
  "CSS Animations": SiCss3,
  "Shadcn/ui": SiShadcnui,
};

export const TechStackBubble = ({
  tech,
  variant = "default",
}: TechStackBubbleProps) => {
  const Icon = techIcons[tech];

  const sizeStyles = {
    default: `
      text-modern-clamp font-medium
      px-[clamp(0.25rem,2cqi,0.75rem)]
      py-[clamp(0.1rem,1cqi,0.375rem)]
    `,
    small: `
      text-[clamp(0.5rem,3cqi,0.575rem)] uppercase tracking-wider font-medium
      px-[clamp(0.25rem,2cqi,0.625rem)]
      py-[clamp(0.1rem,1cqi,0.325rem)]
    `,
  };

  return (
    <span
      className={`
        ${sizeStyles[variant]}
        rounded-full bg-light dark:bg-primary-dark 
        text-primary dark:text-primary-dark
        flex items-center gap-1.5
      `}
    >
      {Icon && (
        <Icon
          className={`${
            variant === "small" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"
          } hidden md:block`}
        />
      )}
      {tech}
    </span>
  );
};
