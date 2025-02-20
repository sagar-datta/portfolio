"use client";

import { type IDockItem } from "@/types/dock";

interface IDesktopDockProps {
  items: IDockItem[];
}

export const DesktopDock = ({ items }: IDesktopDockProps) => {
  return (
    <div className="hidden lg:flex justify-center p-6 pb-7">
      <div className="flex-center gap-5 px-5 py-2.5 rounded-2xl bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-2xl border-2 border-[#222221]/20 dark:border-[#F0EEE6]/20">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className="group relative flex-center p-2.5 hover:cursor-pointer animate-scale hover:scale-125"
          >
            <span className="text-3xl select-none">{item.icon}</span>
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-2xl border-2 border-[#222221]/20 dark:border-[#F0EEE6]/20 text-primary dark:text-primary-dark rounded-lg text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap animate-fade group-hover:-translate-y-1 pointer-events-none">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
