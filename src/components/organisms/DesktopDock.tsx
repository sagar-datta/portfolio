"use client";

import { type IDockItem } from "@/types/Dock";

interface IDesktopDockProps {
  items: IDockItem[];
}

export const DesktopDock = ({ items }: IDesktopDockProps) => {
  return (
    <div className="hidden [@media(hover:hover)]:lg:flex justify-center p-6 pb-7">
      <div className="flex-center gap-5 px-5 py-2.5 rounded-2xl glass-button">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className="group relative flex-center p-2.5 hover:cursor-pointer transition-bounce hover:scale-125"
          >
            <span className="text-3xl select-none">{item.icon}</span>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-3 py-1 glass-button text-primary dark:text-primary-dark rounded-lg text-modern opacity-0 group-hover:opacity-100 whitespace-nowrap animate-fade group-hover:-translate-y-1 pointer-events-none select-none">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
