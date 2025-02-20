"use client";

interface TechStackBubbleProps {
  tech: string;
  variant?: "default" | "small";
}

export const TechStackBubble = ({
  tech,
  variant = "default",
}: TechStackBubbleProps) => {
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
        text-dark dark:text-light
      `}
    >
      {tech}
    </span>
  );
};
