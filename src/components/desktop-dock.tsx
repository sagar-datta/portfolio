"use client";

import { type IDockItem } from "@/types/dock";

interface IDesktopDockProps {
  items: IDockItem[];
}

export function DesktopDock({ items }: IDesktopDockProps) {
  return (
    <div className="hidden lg:flex justify-center p-6 pb-7">
      <div className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className="group relative flex items-center justify-center p-2 cursor-pointer"
          >
            <span className="text-2xl select-none">{item.icon}</span>
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 
              bg-gray-800/90 backdrop-blur-md dark:bg-gray-900/90 text-white rounded-lg text-sm 
              opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-lg
              transition-all duration-200 transform group-hover:-translate-y-1
              pointer-events-none border border-white/10"
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
