"use client";

import { MinWidthError } from "./MinWidthError";
import { useEffect, useState } from "react";

interface IWidthCheckProps {
  children: React.ReactNode;
}

export const WidthCheck = ({ children }: IWidthCheckProps) => {
  const [isTooNarrow, setIsTooNarrow] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsTooNarrow(window.innerWidth < 320);
    };

    // Check on mount
    checkWidth();

    // Check on resize
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isTooNarrow) {
    return <MinWidthError />;
  }

  return children;
};
