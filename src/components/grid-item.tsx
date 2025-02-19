"use client";

interface IGridItemProps {
  color: string;
  title: string;
  description: string;
  url: string;
}

export function GridItem({ color, title, description, url }: IGridItemProps) {
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
          flex flex-col items-center justify-center w-full p-4 text-center
          border border-primary-dark/20 dark:border-primary/20
          group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        <h3 className="text-primary-dark dark:text-primary font-medium text-lg mb-2">
          {title}
        </h3>
        <p className="text-primary-dark/80 dark:text-primary/80 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
