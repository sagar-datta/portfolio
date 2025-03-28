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
        style={
          {
            "--font-weight": isSelected ? 600 : 500,
          } as React.CSSProperties
        }
        className={`
        relative text-clamp-tab md:[@media(hover:hover)]:text-base flex-1 md:[@media(hover:hover)]:flex-none md:[@media(hover:none)]:w-full
        px-2 py-3 md:[@media(hover:hover)]:px-6 md:[@media(hover:hover)]:py-2
        flex items-center justify-center
        touch-none active:scale-95
        [-webkit-tap-highlight-color:transparent]
        [font-variation-settings:'wght'_var(--font-weight)] md:[@media(hover:hover)]:font-medium md:[@media(hover:hover)]:[font-variation-settings:initial]
        transform-gpu will-change-transform
        rounded-xl
          ${
            isSelected
              ? `bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass font-semibold 
                 active:bg-glass-blur/80 active:dark:bg-glass-blur-dark/80 
                 md:[@media(hover:hover)]:bg-button-light md:[@media(hover:hover)]:dark:bg-button-dark md:[@media(hover:hover)]:backdrop-blur-none`
              : "md:[@media(hover:hover)]:bg-transparent"
          }
          transition-[background-color] duration-150
        `}
      >
        <span
          className={`
            ${
              isSelected
                ? "text-primary dark:text-primary-dark"
                : "text-dimmed-light dark:text-dimmed-dark"
            }
          `}
        >
          {label}
        </span>
      </button>
    );
  }
);

TabItem.displayName = "TabItem";
