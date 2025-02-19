interface IGridItemProps {
  color: string;
  title?: string;
}

export function GridItem({ color, title }: IGridItemProps) {
  return (
    <div
      className={`${color} rounded-xl aspect-[16/9] shadow-lg transition-all duration-300 
        hover:scale-[1.02] hover:shadow-xl cursor-pointer dark:shadow-gray-800
        flex items-center justify-center max-w-md w-full mx-auto`}
    >
      {title && (
        <span className="text-white font-medium text-lg dark:text-white/90">
          {title}
        </span>
      )}
    </div>
  );
}
