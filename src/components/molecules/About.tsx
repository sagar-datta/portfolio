"use client";

import { PageTransition } from "@/components/atoms/PageTransition";

export const About = () => {
  return (
    <PageTransition>
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-h2 text-primary dark:text-primary-dark">About</h2>
      </div>
    </PageTransition>
  );
};
