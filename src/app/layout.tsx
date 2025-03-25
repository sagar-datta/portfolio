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
    {
      color: "rgba(240, 238, 230, 0.95)",
      media: "(prefers-color-scheme: light)",
    },
    { color: "rgba(34, 34, 33, 0.95)", media: "(prefers-color-scheme: dark)" },
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
                // Simple script to update Safari's theme-color when theme changes
                const updateThemeColor = () => {
                  const isDark = document.documentElement.classList.contains('dark');
                  
                  // Get theme-color meta tag
                  let themeColorMeta = document.querySelector('meta[name="theme-color"]');
                  if (!themeColorMeta) {
                    themeColorMeta = document.createElement('meta');
                    themeColorMeta.name = 'theme-color';
                    document.head.appendChild(themeColorMeta);
                  }
                  
                  // Set theme color based on dark/light mode
                  themeColorMeta.setAttribute('content', isDark ? 'rgba(34, 34, 33, 0.95)' : 'rgba(240, 238, 230, 0.95)');
                };
                
                // Update on theme changes
                const observer = new MutationObserver(() => {
                  // Small delay to ensure CSS has applied
                  setTimeout(updateThemeColor, 50);
                });
                
                // Initialize
                window.addEventListener('DOMContentLoaded', () => {
                  updateThemeColor();
                  observer.observe(document.documentElement, { 
                    attributes: true, 
                    attributeFilter: ['class'] 
                  });
                });
              } catch (e) {
                // Silently fail if needed
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
