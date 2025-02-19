interface IGridItemProps {
  color: string;
  title?: string;
}

export function GridItem({ color, title }: IGridItemProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Static orange background */}
      <div className="absolute -z-10 inset-0 bg-orange-500 rounded-xl" />

      {/* Main card content */}
      <div
        className={`${color} rounded-xl aspect-[16/9] transition-all duration-300 
          flex items-center justify-center w-full
          border border-primary-dark/20 dark:border-primary/20
          group-hover:bg-primary-dark/95 dark:group-hover:bg-primary/95
          group-hover:-translate-x-2 group-hover:-translate-y-2`}
      >
        {title && (
          <span className="text-primary-dark dark:text-primary font-medium text-lg">
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
