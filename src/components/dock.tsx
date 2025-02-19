"use client";

import { MobileDock } from "./mobile-dock";
import { DesktopDock } from "./desktop-dock";
import { type IDockItem } from "@/types/dock";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Dock() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const DOCK_ITEMS: IDockItem[] = [
    { icon: "🐙", label: "GitHub" },
    { icon: "📧", label: "Contact" },
    {
      icon: "🌚",
      label: "Dark Mode",
      onClick: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    },
  ];

  if (!mounted) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <MobileDock items={DOCK_ITEMS} />
        <DesktopDock items={DOCK_ITEMS} />
      </footer>
    );
  }

  const mountedDockItems: IDockItem[] = [
    { icon: "🐙", label: "GitHub" },
    { icon: "📧", label: "Contact" },
    {
      icon: resolvedTheme === "dark" ? "🌝" : "🌚",
      label: resolvedTheme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <MobileDock items={mountedDockItems} />
      <DesktopDock items={mountedDockItems} />
    </footer>
  );
}
