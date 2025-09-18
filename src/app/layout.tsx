import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontHeadline = Poppins({ 
  subsets: ["latin"], 
  weight: ["700", "800"],
  variable: "--font-headline",
});
const fontBody = Open_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body",
});

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
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
