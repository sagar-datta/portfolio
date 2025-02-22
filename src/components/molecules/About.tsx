"use client";

import { PageTransition } from "@/components/atoms/PageTransition";
import { AboutContent } from "./AboutContent";

export const About = () => {
  return (
    <PageTransition>
      <AboutContent />
    </PageTransition>
  );
};
