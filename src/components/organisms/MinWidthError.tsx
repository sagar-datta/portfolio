"use client";

export const MinWidthError = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary dark:bg-primary-dark p-4">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-primary dark:text-primary-dark mb-2">
          Screen Too Narrow
        </h1>
        <p className="text-sm text-dimmed-light dark:text-dimmed-dark max-w-[280px]">
          This website requires a minimum screen width of 320px for optimal
          viewing experience.
        </p>
      </div>
    </div>
  );
};
