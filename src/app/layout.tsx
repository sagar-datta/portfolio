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
                // Function to update theme color based on current theme
                const updateThemeColor = () => {
                  // Check if dark mode is active
                  const isDark = document.documentElement.classList.contains('dark');
                  
                  // Dynamically get the background color from the page
                  const getActualBackgroundColor = () => {
                    // Get the computed background color from the body or html element
                    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
                    
                    // If it's in rgb format, convert to hex
                    if (bodyBgColor.startsWith('rgb')) {
                      const rgb = bodyBgColor.match(/\d+/g);
                      if (rgb && rgb.length >= 3) {
                        return '#' + 
                          parseInt(rgb[0]).toString(16).padStart(2, '0') + 
                          parseInt(rgb[1]).toString(16).padStart(2, '0') + 
                          parseInt(rgb[2]).toString(16).padStart(2, '0');
                      }
                    }
                    
                    // Return the original color or fallback
                    return bodyBgColor || (isDark ? '#222221' : '#F0EEE6');
                  };
                  
                  // Get the actual background color
                  const actualBgColor = getActualBackgroundColor();
                  
                  // Set or create theme-color meta tag
                  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
                  if (!metaThemeColor) {
                    metaThemeColor = document.createElement('meta');
                    metaThemeColor.name = 'theme-color';
                    document.head.appendChild(metaThemeColor);
                  }
                  
                  // Update theme color with transparency
                  metaThemeColor.setAttribute('content', actualBgColor);
                };
                
                // Set up observer to detect theme changes
                const observer = new MutationObserver((mutations) => {
                  updateThemeColor();
                });
                
                // Initialize once DOM is loaded
                window.addEventListener('DOMContentLoaded', () => {
                  updateThemeColor();
                  
                  // Start observing for theme changes
                  observer.observe(document.documentElement, { 
                    attributes: true, 
                    attributeFilter: ['class'] 
                  });
                });
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
