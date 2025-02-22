import Image from "next/image";

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
  const basePath = process.env.NODE_ENV === "production" ? `/portfolio${src.split(".")[0]}` : src.split(".")[0];
  const fileName = src.split("/").pop() || "";

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
        />
      </picture>
    </div>
  );
};
