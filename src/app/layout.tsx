import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";
import { Providers } from "@/components/atoms/Providers";
import { DynamicFavicon } from "@/components/atoms/DynamicFavicon";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

// Set base path for production or dev environment
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Sagar Datta's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  icons: {
    icon: `${basePath}/favicon-light.svg`,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Safari-specific static favicons with correct base path */}
        <link
          rel="icon"
          type="image/png"
          href={`${
            process.env.NODE_ENV === "production" ? "/portfolio" : ""
          }/safari-favicon.png`}
        />
        <link
          rel="apple-touch-icon"
          href={`${
            process.env.NODE_ENV === "production" ? "/portfolio" : ""
          }/safari-touch-icon.png`}
        />
        <style>{`
          @media all and (display-mode: standalone) {
            body { 
              padding-bottom: calc(env(safe-area-inset-bottom) + 6rem) !important;
              padding-top: calc(env(safe-area-inset-top) + 44px) !important;
            }
          }
        `}</style>
      </head>
      <body className="bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark min-h-screen">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DynamicFavicon />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
