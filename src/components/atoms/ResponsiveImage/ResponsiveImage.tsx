import { ImageProps } from "./types";
import { ClientImage } from "./ClientImage";

export const ResponsiveImage = (props: ImageProps) => {
  // Server-side props preparation and validation if needed
  return <ClientImage {...props} />;
};
