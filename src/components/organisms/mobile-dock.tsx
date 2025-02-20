"use client";

import { type IDockItem } from "@/types/dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export const MobileDock = ({ items }: IMobileDockProps) => {
  return (
    <div className="lg:hidden w-full bg-primary/90 backdrop-blur-xl border-t border-[#222221]/20 dark:bg-primary-dark/90 dark:border-[#F0EEE6]/20 px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className="flex items-center justify-center px-3 py-2 rounded-xl cursor-pointer
              bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm
              border border-[#222221]/20 dark:border-[#F0EEE6]/20
              active:bg-primary/60 dark:active:bg-primary-dark/60
              transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl transform-gpu transition-transform active:scale-90">
                {item.icon}
              </span>
              <span className="text-xs font-medium text-primary/90 dark:text-primary-dark/90">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
