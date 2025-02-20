"use client";

import { MobileDock } from "./MobileDock";
import { DesktopDock } from "./DesktopDock";
import { type IDockItem } from "@/types/Dock";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { useExternalLink } from "@/hooks/useExternalLink";

const DockSkeleton = () => (
  <div className="h-16 bg-button-light dark:bg-button-dark animate-pulse rounded-t-xl" />
);

export const Dock = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { handleClick: handleGithubClick } = useExternalLink(
    "https://github.com/sagar-datta"
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const dockItems: IDockItem[] = [
    {
      icon: "🐙",
      label: "GitHub",
      onClick: handleGithubClick,
    },
    { icon: "📧", label: "Contact" },
    {
      icon: mounted && resolvedTheme === "dark" ? "🌝" : "🌚",
      label: mounted && resolvedTheme === "dark" ? "Light" : "Dark",
      desktopLabel:
        mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode",
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
