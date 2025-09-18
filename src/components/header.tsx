"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Code, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-primary/20 bg-background/80 backdrop-blur-lg shadow-[0_4px_10px_-5px_hsl(var(--primary))]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center mx-auto">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <Code className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl">Freyza Kusuma</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-xl font-medium ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background border-r-primary/20">
            <nav className="grid gap-6 text-xl font-medium pt-8">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold mb-4"
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Code className="h-6 w-6 text-primary" />
                <span className="sr-only">Freyza Kusuma</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary"
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
