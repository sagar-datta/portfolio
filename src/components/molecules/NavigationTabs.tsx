"use client";

import { useState } from "react";
import { TabItem } from "@/components/atoms/TabItem";

const TABS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>("about");

  return (
    <div
      className="flex md:[@media(hover:none)]:grid md:[@media(hover:none)]:grid-cols-3 items-stretch md:items-center justify-between md:justify-start 
      md:[@media(hover:hover)]:bg-glass-blur md:[@media(hover:hover)]:dark:bg-glass-blur-dark md:[@media(hover:hover)]:backdrop-blur-glass 
      md:rounded-2xl md:[@media(hover:hover)]:p-1.5 md:[@media(hover:none)]:p-0
      w-full md:w-auto md:[@media(hover:none)]:min-w-[350px]
      gap-1.5 md:[@media(hover:hover)]:gap-0 md:[@media(hover:none)]:gap-1.5"
    >
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
