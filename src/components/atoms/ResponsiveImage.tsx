"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

interface IResponsiveImageProps {
  src: string | { light: string; dark: string };
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  containerClassName?: string;
}

export const ResponsiveImage = ({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  containerClassName = "",
}: IResponsiveImageProps) => {
  const [error, setError] = useState(false);
  const { resolvedTheme } = useTheme();
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  console.log("ResponsiveImage props:", { src, resolvedTheme, basePath });

  const getImagePath = () => {
    // Log the incoming src to see its structure
    console.log("Image src type:", typeof src);
    console.log("Image src value:", src);

    // Check if src is an object with light/dark properties
    if (src && typeof src === "object" && "light" in src && "dark" in src) {
      const themePath = resolvedTheme === "light" ? src.light : src.dark;
      console.log("Using themed path:", themePath);
      return `${basePath}${themePath}`;
    }

    // Fallback for string paths
    console.log("Using default path:", src);
    return `${basePath}${src}`;
  };

  const imagePath = getImagePath();
  console.log("Final image path:", imagePath);

  if (error) {
    console.log("Image error occurred");
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
          onError={(e) => {
            console.log("Image load error:", e);
            setError(true);
          }}
        />
      </picture>
    </div>
  );
};
