"use client";

import { type IDockItem } from "@/types/dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export function MobileDock({ items }: IMobileDockProps) {
  return (
    <div className="lg:hidden w-full bg-primary/90 backdrop-blur-xl border-t border-primary/50 dark:bg-primary-dark/90 dark:border-primary-dark/10 px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className="flex items-center justify-center px-3 py-2 rounded-xl
              bg-primary/80 dark:bg-primary-dark/80
              active:bg-primary/90 dark:active:bg-primary-dark/90
              transition-all duration-200 drop-shadow-primary dark:drop-shadow-primary-dark"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl transform-gpu transition-transform active:scale-90">
                {item.icon}
              </span>
              <span className="text-xs font-medium text-primary/70 dark:text-primary-dark/70">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
