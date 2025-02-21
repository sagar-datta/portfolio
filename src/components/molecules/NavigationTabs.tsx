"use client";

import { useState } from "react";
import { TabItem } from "@/components/atoms/TabItem";

const TABS = [
  { id: "info", label: "Info" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>("info");

  return (
    <div className="flex items-center bg-glass-button dark:bg-glass-button-dark rounded-full p-1">
      {TABS.map((tab) => (
        <TabItem
          key={tab.id}
          label={tab.label}
          isSelected={selectedTab === tab.id}
          onClick={() => setSelectedTab(tab.id)}
        />
      ))}
    </div>
  );
};
