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
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
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
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <style>{`
          @media all and (display-mode: standalone) {
            body { 
              padding-bottom: 8rem !important;
              padding-top: env(safe-area-inset-top) !important;
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
