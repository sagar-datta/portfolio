"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export const DynamicFavicon = () => {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

    if (favicon) {
      const basePath =
        process.env.NODE_ENV === "production" ? "/portfolio" : "";
      favicon.href = `${basePath}${
        currentTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg"
      }`;
    }
  }, [theme, systemTheme]);

  return null;
};
