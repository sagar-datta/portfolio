import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";
import { Providers } from "@/components/atoms/Providers";
import { DynamicFavicon } from "@/components/atoms/DynamicFavicon";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sagar Datta's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  icons: {
    icon: "/favicon-light.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
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
        <style>{`
          @media all and (display-mode: standalone) {
            :root {
              --sat: env(safe-area-inset-top);
              --sab: env(safe-area-inset-bottom);
            }
            @media (prefers-color-scheme: light) {
              :root {
                --background-color: #ffffff;
              }
            }
            @media (prefers-color-scheme: dark) {
              :root {
                --background-color: #000000;
              }
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
