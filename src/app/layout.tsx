import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Freyza Kusuma | Creative Web Developer",
  description:
    "Welcome to the portfolio of Freyza Kusuma, a creative web developer specializing in modern, interactive web applications using Next.js, React, and more.",
  keywords: [
    "Freyza Kusuma",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "UI/UX Design",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
