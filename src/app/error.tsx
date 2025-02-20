"use client";

interface IErrorProps {
  reset: () => void;
}

export default function Error({ reset }: IErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-accent-red text-light hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
