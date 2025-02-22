"use client";

import { PageTransition } from "@/components/atoms/PageTransition";
import { AboutContent } from "./About/Content";

export const About = () => {
  return (
    <PageTransition>
      <AboutContent />
    </PageTransition>
  );
};
