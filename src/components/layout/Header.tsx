"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "International", path: "/international" },
  { name: "TEP 2026", path: "/tep-2026" },
  { name: "Impact", path: "/impact" },
  { name: "Speaking & Consulting", path: "/speaking-consulting" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/30 py-3 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <Link href="/" className="group flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-primary group-hover:text-primary/80 transition-colors">
                Dr. Panji Deoranto
              </span>
              <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase group-hover:text-primary/70 transition-colors">
                Agro-Marketing Expert
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right-side Utilities */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <Link href="/contact">
                <Button className="rounded-full bg-primary hover:bg-primary/95 text-white gap-1 text-sm font-medium">
                  Hubungi
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:bg-muted/50 rounded-full"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-serif py-2 border-b border-border/20 transition-colors",
                    isActive ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-serif py-2 border-b border-border/20 transition-colors",
                pathname === "/contact" ? "text-primary font-semibold" : "text-foreground/80"
              )}
            >
              Contact
            </Link>
          </nav>

          <div>
            <div className="border-t border-border/40 pt-6">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/95 text-white py-6 text-base font-semibold">
                  Mulai Kolaborasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
