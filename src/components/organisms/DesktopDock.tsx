"use client";

import { type IDockItem } from "@/types/Dock";

interface IDesktopDockProps {
  items: IDockItem[];
}

export const DesktopDock = ({ items }: IDesktopDockProps) => {
  return (
    <div className="hidden [@media(hover:hover)]:lg:block fixed bottom-0 left-0 right-0 z-10">
      <div className="absolute inset-0 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-glass" />
      <div className="relative h-20 flex items-center justify-center py-2">
        <div className="flex-center gap-6 px-6 py-2 rounded-xl bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass">
          {items.map((item) => (
            <div
              key={item.label}
              onClick={item.onClick}
              className="group relative flex-center p-1.5 hover:cursor-pointer transition-bounce hover:scale-125"
            >
              <span className="text-2xl select-none">{item.icon}</span>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass text-primary dark:text-primary-dark rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap animate-fade group-hover:-translate-y-1 pointer-events-none select-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
