/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Configure base path for GitHub Pages
  basePath: "",
  // Disable trailing slashes
  trailingSlash: false,
  // Ensure assets are properly referenced
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
