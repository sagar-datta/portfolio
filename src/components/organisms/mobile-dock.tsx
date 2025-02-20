"use client";

import { type IDockItem } from "@/types/dock";

interface IMobileDockProps {
  items: IDockItem[];
}

export const MobileDock = ({ items }: IMobileDockProps) => {
  return (
    <div className="lg:hidden w-full bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-xl border-t border-[#222221]/20 dark:border-[#F0EEE6]/20 px-4 py-3">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className="relative group w-full"
          >
            <div className="absolute -z-10 inset-0 bg-[#E54D2E] rounded-xl shadow-sm transition-all duration-150 group-active:[@media(hover:none)]:shadow-none" />
            <div
              className="flex-center px-3 py-2 rounded-xl cursor-pointer bg-[#E2DBCB] dark:bg-[#3F3E3C] transition-all duration-150 
              hover:[@media(hover:hover)]:-translate-x-0.5 hover:[@media(hover:hover)]:-translate-y-0.5 
              active:[@media(hover:none)]:-translate-x-0.5 active:[@media(hover:none)]:-translate-y-0.5"
            >
              <div className="flex-center gap-2">
                <span className="text-2xl transform-gpu transition-transform active:scale-90">
                  {item.icon}
                </span>
                <span className="text-xs font-medium text-primary dark:text-primary-dark">
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
