import { AVAILABILITY_STATUS } from "@/config/availability";

export const AvailabilityStatus = () => {
  const isAvailable = AVAILABILITY_STATUS.isAvailable;

  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`w-2 h-2 rounded-full animate-soft-pulse ${
          isAvailable ? "bg-emerald-500" : "bg-accent-red"
        }`}
      />
      <span className="font-medium text-dimmed-light dark:text-dimmed-dark">
        {isAvailable ? "Available for work" : "Unavailable for work"}
      </span>
    </div>
  );
};
