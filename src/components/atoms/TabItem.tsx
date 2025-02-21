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
        className={`
          relative text-base font-medium flex-1 md:flex-none
          px-2 py-3 md:px-6 md:py-2
          flex items-center justify-center
          transition-all duration-150 ease-smooth
          rounded-xl
          ${
            isSelected
              ? `bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass font-semibold
                 md:bg-button-light md:dark:bg-button-dark md:backdrop-blur-none md:font-medium`
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
