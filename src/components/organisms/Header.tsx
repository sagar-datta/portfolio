import { SiHtmx } from "react-icons/si";

interface IHeaderProps {
  name: string;
  profession: string;
}

export const Header = ({ name, profession }: IHeaderProps) => {
  return (
    <header className="sticky top-4 z-10 mx-4">
      <div className="max-w-6xl mx-auto bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass rounded-full">
        <div className="flex items-center gap-4 px-4 py-2.5">
          {/* Left section with icon and name */}
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 flex items-center justify-center text-primary dark:text-primary-dark">
              <SiHtmx className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium select-none text-primary dark:text-primary-dark">
              {name}
            </span>
          </div>

          {/* Center section with separator and profession */}
          <div className="flex-1 flex items-center justify-center gap-3">
            <div className="h-4 w-px bg-dimmed-light dark:bg-dimmed-dark"></div>
            <span className="text-xs font-medium text-dimmed-light dark:text-dimmed-dark">
              {profession}
            </span>
            <div className="h-4 w-px bg-dimmed-light dark:bg-dimmed-dark"></div>
          </div>

          {/* Right section with status indicators */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-soft-pulse"></div>
              <span className="font-medium text-primary dark:text-primary-dark">
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
