import { SiGnometerminal } from "react-icons/si";
import { NavigationTabs } from "@/components/molecules/NavigationTabs";

interface IHeaderProps {
  name: string;
  profession: string;
}

export const Header = ({ name, profession }: IHeaderProps) => {
  return (
    <header className="sticky top-4 z-10 mx-4">
      <div className="max-w-6xl mx-auto bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass rounded-2xl">
        <div className="relative flex items-center px-5 py-2.5">
          {/* Left section with icon and name */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-primary dark:text-primary-dark">
              <SiGnometerminal className="w-5 h-5" />
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

          {/* Center section with navigation tabs - Absolutely positioned for perfect center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavigationTabs />
          </div>

          {/* Right section with status indicators */}
          <div className="ml-auto flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-soft-pulse"></div>
              <span className="font-medium text-dimmed-light dark:text-dimmed-dark">
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
