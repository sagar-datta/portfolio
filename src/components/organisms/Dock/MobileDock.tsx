"use client";

import { IDockItem } from "@/types/Dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export const MobileDock = ({ items }: IMobileDockProps) => {
  return (
    <div className="block lg:[@media(hover:hover)]:hidden fixed bottom-0 left-0 right-0 z-10">
      <div className="w-full bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass px-4 pb-7 pt-3">
        <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="group relative w-full @container px-3 py-2 rounded-xl cursor-pointer bg-button-light dark:bg-button-dark active:bg-button-light/80 active:dark:bg-button-dark/80 touch-none active:scale-95 transition-all duration-200 [-webkit-tap-highlight-color:transparent]"
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass text-primary dark:text-primary-dark rounded-lg text-xs font-medium opacity-0 transition-all duration-200 ease-in-out [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:-translate-y-1 whitespace-nowrap pointer-events-none select-none">
                {item.label}
              </span>
              <div className="flex-center">
                <span className="text-2xl select-none">{item.icon}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
