"use client";

import { forwardRef } from "react";

interface ITabItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TabItem = forwardRef<HTMLButtonElement, ITabItemProps>(
  ({ label, isSelected, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        style={{
          '--font-weight': isSelected ? 600 : 500
        } as React.CSSProperties}
        className={`
        relative text-base flex-1 md:flex-none
        px-2 py-3 md:px-6 md:py-2
        flex items-center justify-center
        [font-variation-settings:'wght'_var(--font-weight)] md:font-medium md:[font-variation-settings:initial]
        tab-transitions
          rounded-xl
          ${
            isSelected
              ? `bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass font-semibold
                 md:bg-button-light md:dark:bg-button-dark md:backdrop-blur-none`
              : "bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass/30 md:bg-transparent md:backdrop-blur-none"
          }
        `}
      >
        <span
          className={`
            transition-colors duration-200
            ${
              isSelected
                ? "text-primary dark:text-primary-dark"
                : "text-dimmed-light dark:text-dimmed-dark hover:text-muted-light hover:dark:text-muted-dark"
            }
          `}
        >
          {label}
        </span>
      </button>
    );
  }
);
