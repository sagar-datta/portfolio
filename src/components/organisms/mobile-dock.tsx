"use client";

import { IDockItem } from "@/types/Dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export const MobileDock = ({ items }: IMobileDockProps) => {
  return (
    <div className="block lg:[@media(hover:hover)]:hidden w-full glass-blur px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className="relative group w-full @container"
          >
            <div className="absolute -z-10 inset-[1px] bg-accent-red rounded-xl interactive-shadow" />
            <div className="flex-center px-3 py-2 rounded-xl cursor-pointer glass-button transition-smooth hover-lift-sm touch-lift-sm">
              <div className="flex-center gap-2">
                <span className="hidden @[122px]:block text-2xl transform-gpu transition-transform active:scale-90 select-none">
                  {item.icon}
                </span>
                <span className="text-modern text-primary dark:text-primary-dark select-none">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
