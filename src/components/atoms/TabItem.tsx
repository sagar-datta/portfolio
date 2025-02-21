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
          relative px-6 py-2 text-base font-medium
          transition-all duration-150 ease-smooth
          ${isSelected ? "bg-button-light dark:bg-button-dark rounded-xl" : ""}
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
