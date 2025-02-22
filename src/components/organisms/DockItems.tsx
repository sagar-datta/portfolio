import { type IDockItem } from "@/types/Dock";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin, SiGoogledocs } from "react-icons/si";

export const DockSkeleton = () => (
  <div className="h-16 bg-button-light dark:bg-button-dark animate-pulse rounded-t-xl" />
);

export const getDockItems = (
  resolvedTheme: string | undefined,
  mounted: boolean,
  handleGithubClick: () => void,
  handleLinkedInClick: () => void,
  handleCVDownload: () => void,
  handleThemeToggle: () => void
): IDockItem[] => [
  {
    icon: (
      <VscGithubInverted className="text-primary dark:text-primary-dark text-2xl [@media(hover:hover)]:lg:text-4xl" />
    ),
    label: "GitHub",
    onClick: handleGithubClick,
  },
  {
    icon: (
      <SiLinkedin className="text-primary dark:text-primary-dark text-2xl [@media(hover:hover)]:lg:text-4xl" />
    ),
    label: "LinkedIn",
    onClick: handleLinkedInClick,
  },
  {
    icon: (
      <SiGoogledocs className="text-primary dark:text-primary-dark text-2xl [@media(hover:hover)]:lg:text-4xl" />
    ),
    label: "Download CV",
    desktopLabel: "Download CV",
    onClick: handleCVDownload,
  },
  {
    icon: mounted && resolvedTheme === "dark" ? "🌝" : "🌚",
    label:
      mounted && resolvedTheme === "dark"
        ? "Toggle Light Mode"
        : "Toggle Dark Mode",
    desktopLabel:
      mounted && resolvedTheme === "dark"
        ? "Toggle Light Mode"
        : "Toggle Dark Mode",
    onClick: handleThemeToggle,
  },
];
