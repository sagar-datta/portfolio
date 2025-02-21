import { SiGnometerminal } from "react-icons/si";
import { NavigationTabs } from "@/components/molecules/NavigationTabs";

interface IHeaderProps {
  name: string;
  profession: string;
}

export const Header = ({ name, profession }: IHeaderProps) => {
  return (
    <header className="sticky top-4 z-10 mx-6 md:mx-4 mb-6">
      <div className="max-w-4xl mx-auto bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass rounded-2xl">
        <div className="relative flex items-center p-1.5 md:px-8 md:py-2.5">
          {/* Left section with icon and name */}
          <div className="hidden md:flex items-center gap-3">
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
          <div className="w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <NavigationTabs />
          </div>

          {/* Right section with status indicators */}
          <div className="hidden md:flex ml-auto items-center gap-3 text-xs">
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
