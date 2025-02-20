"use client";

export const useExternalLink = (url: string) => {
  const handleClick = () => window.open(url, "_blank");
  return { handleClick };
};
