"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export const DynamicFavicon = () => {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

    if (favicon) {
      favicon.href =
        currentTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
    }
  }, [theme, systemTheme]);

  return null;
};
