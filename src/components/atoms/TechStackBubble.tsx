"use client";

import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGooglegemini,
  SiCloudinary,
  SiCss3,
  SiNextdotjs,
  SiContainerd,
  SiShadcnui,
  SiVite,
  SiReacthookform,
  SiRedux,
  SiReactquery,
  SiRadixui,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiClerk,
  SiRender,
} from "react-icons/si";

interface TechStackBubbleProps {
  tech: string;
  variant?: "default" | "small";
}

const techIcons: { [key: string]: IconType } = {
  React: SiReact,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Tailwind: SiTailwindcss,
  Framer: SiFramer,
  "Gemini AI": SiGooglegemini,
  Cloudinary: SiCloudinary,
  CSS: SiCss3,
  "Next.js": SiNextdotjs,
  "Container Queries": SiContainerd,
  Shadcn: SiShadcnui,
  "React Hook Form": SiReacthookform,
  Redux: SiRedux,
  "React Query": SiReactquery,
  "Radix UI": SiRadixui,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Clerk: SiClerk,
  Render: SiRender,
};

export const TechStackBubble = ({
  tech,
  variant = "default",
}: TechStackBubbleProps) => {
  const Icon = techIcons[tech];

  const sizeStyles = {
    default: `
      text-[13px] font-medium tracking-wide
      px-2.5 py-1
    `,
    small: `
      text-[11px] tracking-wider font-medium
      px-2 py-0.5
    `,
  };

  return (
    <span
      className={`
        ${sizeStyles[variant]}
        rounded-full bg-light/90 dark:bg-dark/90 
        text-primary/80 dark:text-primary-dark/80
        flex items-center gap-1.5 
        transform-gpu will-change-transform
        transition-[background-color] duration-150
      `}
      style={{ willChange: "transform" }}
    >
      {Icon && (
        <Icon
          className={`${
            variant === "small" ? "w-3 h-3" : "w-3.5 h-3.5"
          } opacity-80`}
        />
      )}
      <span className="transition-none">{tech}</span>
    </span>
  );
};
