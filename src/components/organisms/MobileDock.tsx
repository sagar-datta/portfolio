"use client";

import { IDockItem } from "@/types/Dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export const MobileDock = ({ items }: IMobileDockProps) => {
  return (
    <div className="block lg:[@media(hover:hover)]:hidden w-full bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className="w-full @container px-3 py-2 rounded-xl cursor-pointer bg-button-light dark:bg-button-dark active:bg-button-light/80 active:dark:bg-button-dark/80 touch-none active:scale-95 tab-transitions [-webkit-tap-highlight-color:transparent]"
          >
            <div className="flex-center gap-2">
              <span className="hidden @[122px]:block text-2xl select-none">
                {item.icon}
              </span>
              <span className="text-base font-medium text-primary dark:text-primary-dark select-none">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
