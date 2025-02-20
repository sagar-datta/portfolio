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
          flex flex-col items-center justify-center w-full overflow-hidden
          group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Default state */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-primary-dark dark:text-primary font-medium text-xl mb-2">
              {title}
            </h3>
            <p className="text-primary-dark/80 dark:text-primary/80 text-sm text-center">
              {description}
            </p>
          </div>

          {/* Hover state with detailed info */}
          <div className="absolute inset-0 flex flex-col p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
            <h3 className="text-primary-dark dark:text-primary font-medium text-lg mb-2">
              {title}
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-primary-dark dark:text-primary font-medium text-sm mb-1">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary-dark/10 dark:bg-primary/10 text-primary-dark dark:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-primary-dark dark:text-primary font-medium text-sm mb-1">
                  Key Features
                </h4>
                <ul className="text-xs text-primary-dark/80 dark:text-primary/80 list-disc list-inside space-y-1">
                  {keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
