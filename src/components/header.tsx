"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
    <Collapsible
      asChild
      open={mobileMenuOpen}
      onOpenChange={setMobileMenuOpen}
    >
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled || mobileMenuOpen
            ? "border-b border-primary/20 bg-background/95 backdrop-blur-lg shadow-[0_4px_10px_-5px_hsl(var(--primary))]"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2"
            prefetch={false}
          >
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
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/10 hover:text-primary relative h-10 w-10"
              >
                <Menu
                  className={cn(
                    "h-7 w-7 transition-all",
                    mobileMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  )}
                />
                <X
                  className={cn(
                    "h-7 w-7 absolute transition-all",
                    mobileMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  )}
                />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-[0_4px_10px_-5px_hsl(var(--primary))] overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <nav className="grid gap-4 text-center text-lg font-medium p-4">
            {navLinks.map((link, index) => (
              <div key={link.href} className="animate-in fade-in slide-in-from-top-4" style={{animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'both'}}>
              <Link
                href={link.href}
                className="hover:text-primary transition-colors duration-300 py-2"
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
              </div>
            ))}
          </nav>
        </CollapsibleContent>
      </header>
    </Collapsible>
  );
}
