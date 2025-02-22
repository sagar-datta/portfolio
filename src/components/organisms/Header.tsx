import { SiGnometerminal } from "react-icons/si";
import { NavigationTabs, TabId } from "@/components/molecules/NavigationTabs";
import { AvailabilityStatus } from "@/components/atoms/AvailabilityStatus";

interface IHeaderProps {
  name: string;
  profession: string;
  selectedTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Header = ({
  name,
  profession,
  selectedTab,
  onTabChange,
}: IHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 -mt-[env(safe-area-inset-top)]">
      <div className="absolute inset-0 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-glass" />
      <div className="relative pt-[env(safe-area-inset-top)] mx-6 md:mx-4 py-4">
        <div className="max-w-4xl mx-auto bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass rounded-2xl">
          <div className="relative flex items-center p-1.5 md:px-8 md:py-4">
            {/* Left section with icon and name */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-primary dark:text-primary-dark">
                <SiGnometerminal className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold select-none text-primary dark:text-primary-dark leading-snug">
                  {name}
                </span>
                <span className="text-xs font-medium text-dimmed-light dark:text-dimmed-dark">
                  {profession}
                </span>
              </div>
            </div>

            {/* Center section with navigation tabs */}
            <div className="w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <NavigationTabs
                selectedTab={selectedTab}
                onTabChange={onTabChange}
              />
            </div>

            {/* Right section with status indicators */}
            <div className="hidden md:flex ml-auto items-center gap-3 text-xs">
              <AvailabilityStatus />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
