"use client";

import { type IDockItem } from "@/types/dock";

interface IDesktopDockProps {
  items: IDockItem[];
}

export function DesktopDock({ items }: IDesktopDockProps) {
  return (
    <div className="hidden lg:flex justify-center p-6 pb-7">
      <div
        className="flex items-center gap-5 px-5 py-2.5 rounded-2xl 
        bg-primary/60 dark:bg-primary-dark/60 backdrop-blur-2xl 
        border-2 border-[#222221]/20 dark:border-[#F0EEE6]/20"
      >
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className="group relative flex items-center justify-center p-2.5 cursor-pointer transition-transform duration-200 hover:scale-125"
          >
            <span className="text-3xl select-none">{item.icon}</span>
            <span
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 
              bg-primary/60 dark:bg-primary-dark/60 backdrop-blur-2xl 
              border-2 border-[#222221]/20 dark:border-[#F0EEE6]/20
              text-primary dark:text-primary-dark rounded-lg text-sm 
              opacity-0 group-hover:opacity-100 whitespace-nowrap
              transition-all duration-200 transform group-hover:-translate-y-1
              pointer-events-none"
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
