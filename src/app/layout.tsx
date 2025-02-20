import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { Providers } from "@/components/organisms/Providers";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sagar Datta's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
