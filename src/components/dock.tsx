"use client";

import { MobileDock } from "./mobile-dock";
import { DesktopDock } from "./desktop-dock";
import { type IDockItem } from "@/types/dock";

const DOCK_ITEMS: IDockItem[] = [
  { icon: "🐙", label: "GitHub" },
  { icon: "📧", label: "Contact" },
  { icon: "🌙", label: "Theme" },
];

export function Dock() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <MobileDock items={DOCK_ITEMS} />
      <DesktopDock items={DOCK_ITEMS} />
    </footer>
  );
}
