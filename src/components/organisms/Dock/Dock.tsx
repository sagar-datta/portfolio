"use client";

import { MobileDock } from "./MobileDock";
import { DesktopDock } from "./DesktopDock";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { useExternalLink } from "@/hooks/useExternalLink";
import { DockSkeleton, getDockItems } from "./DockItems";

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
    // Use the configured base path for GitHub Pages deployment
    window.open("/portfolio/assets/sagar-datta-cv.pdf", "_blank");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const dockItems = getDockItems(
    resolvedTheme,
    mounted,
    handleGithubClick,
    handleLinkedInClick,
    handleCVDownload,
    handleThemeToggle
  );

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
