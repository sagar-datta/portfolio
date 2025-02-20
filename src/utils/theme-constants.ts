export const COLORS = {
  glass: {
    button: "bg-button-light dark:bg-button-dark",
    blur: "bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-xl",
  },
  text: {
    primary: "text-dark dark:text-light",
    muted: "text-dark/80 dark:text-light/80",
    dimmed: "text-dark/70 dark:text-light/70",
  },
} as const;

export const SPACING = {
  gap: {
    small: "gap-[clamp(0.25rem,1cqi,0.375rem)]",
    medium: "gap-[0.375rem]",
  },
  padding: {
    bubble: {
      x: "px-[clamp(0.25rem,2cqi,0.75rem)]",
      y: "py-[clamp(0.1rem,1cqi,0.375rem)]",
    },
  },
} as const;

export const BREAKPOINTS = {
  mobile: "@[450px]",
  tablet: "md",
  desktop: "lg",
} as const;
