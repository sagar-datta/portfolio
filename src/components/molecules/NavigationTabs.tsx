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
    <div className="flex items-center justify-between md:justify-start bg-glass-blur dark:bg-glass-blur-dark backdrop-blur-glass rounded-2xl p-1.5 w-full md:w-auto">
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
