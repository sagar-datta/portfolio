"use client";

import { PageTransition } from "@/components/atoms/PageTransition";
import { useState } from "react";
import { ContactContent } from "./ContactContent";

export const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    const isHoverableDevice = window.matchMedia("(hover: hover)").matches;
    if (!isHoverableDevice) return;

    e.preventDefault();
    navigator.clipboard.writeText("s@gar.jp.net");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <PageTransition>
      <ContactContent
        showCopied={showCopied}
        isHovering={isHovering}
        onEmailClick={handleEmailClick}
        onEmailHover={() =>
          window.matchMedia("(hover: hover)").matches && setIsHovering(true)
        }
        onEmailLeave={() => setIsHovering(false)}
      />
    </PageTransition>
  );
};
