"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ImageProps } from "./types";

export const ClientImage = ({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  containerClassName = "",
}: ImageProps) => {
  const [error, setError] = useState(false);
  const { resolvedTheme } = useTheme();
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const getImagePath = () => {
    // Check if src is an object with light/dark properties
    if (src && typeof src === "object" && "light" in src && "dark" in src) {
      const themePath = resolvedTheme === "light" ? src.light : src.dark;
      return `${basePath}${themePath}`;
    }
    return `${basePath}${src}`;
  };

  const imagePath = getImagePath();

  if (error) {
    return (
      <div className={`relative w-full h-full ${containerClassName}`}>
        <div
          className={`w-full h-full rounded-lg bg-light dark:bg-dark flex items-center justify-center ${className}`}
        >
          <span className="text-dimmed-light dark:text-dimmed-dark text-lg font-medium text-center px-4">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${containerClassName}`}>
      <picture>
        <source
          srcSet={imagePath.replace(/\.png$/, ".webp")}
          type="image/webp"
        />
        <source
          srcSet={imagePath.replace(/\.png$/, ".jpg")}
          type="image/jpeg"
        />
        <Image
          src={imagePath}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
          priority={priority}
          onError={() => setError(true)}
        />
      </picture>
    </div>
  );
};
