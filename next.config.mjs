/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Configure base path for GitHub Pages
  basePath: "/portfolio",
  // Disable trailing slashes
  trailingSlash: false,
  // Ensure assets are properly referenced
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/portfolio",
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },
};

export default nextConfig;
