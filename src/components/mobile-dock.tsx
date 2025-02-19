"use client";

import { type IDockItem } from "@/types/dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export function MobileDock({ items }: IMobileDockProps) {
  return (
    <div className="lg:hidden w-full bg-white/90 backdrop-blur-xl border-t border-gray-200/50 dark:bg-black/90 dark:border-white/10 px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className="flex items-center justify-center px-3 py-2 rounded-xl
              bg-gray-100 dark:bg-gray-800/90
              active:bg-gray-200 dark:active:bg-gray-700
              transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl transform-gpu transition-transform active:scale-90">
                {item.icon}
              </span>
              <span className="text-xs font-medium text-black/70 dark:text-white/70">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
