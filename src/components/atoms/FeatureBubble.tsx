"use client";

interface IFeatureBubbleProps {
  feature: string;
  className?: string;
}

export const FeatureBubble = ({
  feature,
  className = "",
}: IFeatureBubbleProps) => {
  return (
    <span
      className={`
        text-modern-clamp font-medium
        px-[clamp(0.25rem,2cqi,0.75rem)]
        py-[clamp(0.1rem,1cqi,0.375rem)]
        rounded-full bg-primary/55 dark:bg-primary-dark/55
        text-dark/75 dark:text-light/75
        ${className}
      `}
    >
      {feature}
    </span>
  );
};
