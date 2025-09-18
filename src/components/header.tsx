"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Code, Menu, X } from "lucide-react";
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
        "sticky top-0 z-50 w-full transition-all duration-300 py-3",
        scrolled
          ? "border-b border-primary/20 bg-background/80 backdrop-blur-lg shadow-[0_4px_10px_-5px_hsl(var(--primary))]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Code className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl">Freyza Kusuma</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[1.05rem] font-medium">
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
        <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 hover:text-primary relative h-8 w-8">
                <Menu className={cn("h-5 w-5 transition-all", mobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
                <X className={cn("h-5 w-5 absolute transition-all", mobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0')} />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background/95 backdrop-blur-lg border-b-primary/20 p-0">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">A list of links to navigate the website.</SheetDescription>
                <div className="pt-24 pb-12">
                  <nav className="grid gap-6 text-center text-2xl font-medium">
                  {navLinks.map((link, index) => (
                      <Link
                      key={link.href}
                      href={link.href}
                      className={cn("hover:text-primary transition-all duration-300", mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4')}
                      prefetch={false}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{transitionDelay: `${index * 100 + 300}ms`}}
                      >
                      {link.label}
                      </Link>
                  ))}
                  </nav>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
