"use client";

interface ITabItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TabItem = ({ label, isSelected, onClick }: ITabItemProps) => {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-1 text-sm font-medium transition-colors"
    >
      <span
        className={`relative z-10 ${
          isSelected
            ? "text-primary dark:text-primary-dark"
            : "text-dimmed-light dark:text-dimmed-dark"
        }`}
      >
        {label}
      </span>
      {isSelected && (
        <span className="absolute inset-0 bg-button-light dark:bg-button-dark rounded-full transition-smooth" />
      )}
    </button>
  );
};
