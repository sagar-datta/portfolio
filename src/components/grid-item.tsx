"use client";

import Image from "next/image";

interface IGridItemProps {
  color: string;
  title: string;
  description: string;
  url: string;
  imagePath: string;
  techStack: string[];
  keyFeatures: string[];
}

export function GridItem({
  color,
  title,
  description,
  url,
  imagePath,
  techStack,
  keyFeatures,
}: IGridItemProps) {
  return (
    <div
      className="relative group hover:cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      {/* Static background */}
      <div className="absolute -z-10 inset-0 bg-[#E54D2E] rounded-xl" />

      {/* Main card content */}
      <div
        className={`${color} rounded-xl aspect-[16/9] transition-transform duration-300 
          w-full overflow-hidden group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Default state */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <div className="space-y-2">
              <h3 className="text-primary-dark dark:text-primary font-medium text-xl">
                {title}
              </h3>
              <p className="text-primary-dark/70 dark:text-primary/70 text-sm font-light">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-wider uppercase font-medium px-3 py-1.5 rounded-full 
                    bg-[#3F3E3C] dark:bg-[#E3DACC]
                    text-[#F0EEE6] dark:text-[#222221]
                    ring-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
