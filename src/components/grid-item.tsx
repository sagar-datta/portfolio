"use client";

import Image from "next/image";

interface IGridItemProps {
  color: string;
  title: string;
  description: string;
  url: string;
  imagePath: string;
}

export function GridItem({
  color,
  title,
  description,
  url,
  imagePath,
}: IGridItemProps) {
  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      {/* Static background */}
      <div className="absolute -z-10 inset-0 bg-[#E54D2E] rounded-xl" />

      {/* Main card content */}
      <div
        className={`${color} rounded-xl aspect-[16/9] transition-transform duration-300 
          flex flex-col items-center justify-center w-full overflow-hidden
          border border-primary-dark/20 dark:border-primary/20
          group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-white font-medium text-lg mb-2 drop-shadow-md">
              {title}
            </h3>
            <p className="text-white/90 text-sm drop-shadow-md">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
