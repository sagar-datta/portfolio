"use client";

import { MobileDock } from "./MobileDock";
import { DesktopDock } from "./DesktopDock";
import { type IDockItem } from "@/types/Dock";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { useExternalLink } from "@/hooks/useExternalLink";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin, SiGoogledocs } from "react-icons/si";

const DockSkeleton = () => (
  <div className="h-16 bg-button-light dark:bg-button-dark animate-pulse rounded-t-xl" />
);

const Dock = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { handleClick: handleGithubClick } = useExternalLink(
    "https://github.com/sagar-datta"
  );
  const { handleClick: handleLinkedInClick } = useExternalLink(
    "https://www.linkedin.com/in/sagar-datta98/"
  );

  const handleCVDownload = () => {
    // This will trigger download or open in new tab depending on browser
    window.open("/assets/sagar-datta-cv.pdf", "_blank");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const dockItems: IDockItem[] = [
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
      onClick: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <Suspense fallback={<DockSkeleton />}>
        <MobileDock items={dockItems} />
        <DesktopDock
          items={dockItems.map((item) => ({
            ...item,
            label: item.desktopLabel || item.label,
          }))}
        />
      </Suspense>
    </footer>
  );
};

export { Dock };
