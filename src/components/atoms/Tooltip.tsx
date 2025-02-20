"use client";

interface ITooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom";
  className?: string;
}

export const Tooltip = ({
  children,
  content,
  position = "top",
  className = "",
}: ITooltipProps) => {
  const positionStyles = {
    top: "bottom-full mb-5",
    bottom: "top-full mt-5",
  };

  return (
    <div className={`relative group ${className}`}>
      {children}
      <div
        className={`
        absolute left-1/2 -translate-x-1/2 ${positionStyles[position]}
        flex items-center gap-2 px-3 py-1.5 
        rounded-full shadow-sm opacity-0 lg:group-hover:opacity-100 
        transition-smooth glass-button whitespace-nowrap
        before:content-[''] before:absolute before:w-2 before:h-2 
        before:rotate-45 before:bg-button-light dark:before:bg-button-dark
        ${position === "top" ? "before:-bottom-1" : "before:-top-1"}
        before:left-1/2 before:-translate-x-1/2
      `}
      >
        {content}
      </div>
    </div>
  );
};
