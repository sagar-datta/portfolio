import Image from "next/image";
import { useState } from "react";

interface IResponsiveImageProps {
  src: string;
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
  const basePath =
    process.env.NODE_ENV === "production"
      ? `/portfolio${src.split(".")[0]}`
      : src.split(".")[0];
  const fileName = src.split("/").pop() || "";

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
          srcSet={`${basePath}/${fileName.replace(".png", ".webp")}`}
          type="image/webp"
        />
        <source
          srcSet={`${basePath}/${fileName.replace(".png", ".jpg")}`}
          type="image/jpeg"
        />
        <Image
          src={`${basePath}/${fileName}`}
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
