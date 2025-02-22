export interface ImageProps {
  src: string | { light: string; dark: string };
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  containerClassName?: string;
}
