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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { color: "#F0EEE6", media: "(prefers-color-scheme: light)" },
    { color: "#222221", media: "(prefers-color-scheme: dark)" },
  ],
};

export const metadata: Metadata = {
  title: "Sagar Datta's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  icons: {
    icon: "/favicon-light.svg",
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
          :root {
            --theme-color-light: #F0EEE6;
            --theme-color-dark: #222221;
          }
          @media all and (display-mode: standalone) {
            body { 
              padding-bottom: calc(env(safe-area-inset-bottom) + 6rem) !important;
              padding-top: calc(env(safe-area-inset-top) + 44px) !important;
            }
          }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const themeFromLS = localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                const themeToUse = themeFromLS === 'system' ? systemTheme : themeFromLS || systemTheme
                
                document.querySelector('meta[name="theme-color"]').setAttribute(
                  'content',
                  themeToUse === 'dark' ? '#222221' : '#F0EEE6'
                )
                
                // Setup listener for theme changes
                const observer = new MutationObserver(function(mutations) {
                  if (document.documentElement.classList.contains('dark')) {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#222221')
                  } else {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#F0EEE6')
                  }
                });
                
                // Start observing once DOM is ready
                window.addEventListener('DOMContentLoaded', () => {
                  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
                })
              } catch (e) {
                // Silently fail if localStorage is not available
              }
            `,
          }}
        />
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
