"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/Header";
import { Dock } from "@/components/organisms/Dock";
import { WidthCheck } from "@/components/organisms/WidthCheck";
import { TabId } from "@/components/molecules/NavigationTabs";
import { Projects } from "@/components/molecules/Projects";
import { About } from "@/components/molecules/About";
import { Contact } from "@/components/molecules/Contact";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabId>("about");

  const renderContent = () => {
    switch (selectedTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <WidthCheck>
      <div className="min-h-screen flex flex-col pb-20 lg:pb-24">
        <Header
          name="Sagar Datta"
          profession="Frontend Engineer"
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        <main className="flex-1 w-full pt-6 px-6 pb-0 lg:grid lg:place-items-center">
          {renderContent()}
        </main>

        <Dock />
      </div>
    </WidthCheck>
  );
}
