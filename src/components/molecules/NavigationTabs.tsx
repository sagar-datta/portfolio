"use client";

import { useState, useRef, useEffect } from "react";
import { TabItem } from "@/components/atoms/TabItem";

const TABS = [
  { id: "info", label: "Info" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>("info");
  const [pillStyles, setPillStyles] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = TABS.findIndex((tab) => tab.id === selectedTab);
    const selectedElement = tabsRef.current[selectedIndex];

    if (selectedElement) {
      setPillStyles({
        left: selectedElement.offsetLeft,
        width: selectedElement.offsetWidth,
      });
    }
  }, [selectedTab]);

  return (
    <div className="relative flex items-center bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass rounded-full p-1">
      {/* Sliding pill background */}
      <div
        className="absolute bg-button-light dark:bg-button-dark rounded-full transition-all duration-200 ease-smooth"
        style={{
          left: pillStyles.left,
          width: pillStyles.width,
          height: "calc(100% - 8px)",
          top: "4px",
        }}
      />

      {/* Tab items */}
      {TABS.map((tab, index) => (
        <TabItem
          key={tab.id}
          label={tab.label}
          isSelected={selectedTab === tab.id}
          onClick={() => setSelectedTab(tab.id)}
          ref={(el) => {
            if (el) tabsRef.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};
