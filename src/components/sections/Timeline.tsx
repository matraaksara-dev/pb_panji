"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Briefcase, Globe, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { timeline, TimelineItem } from "@/content/timeline";

// Helper to get category icon
const getIcon = (category: TimelineItem["category"]) => {
  switch (category) {
    case "education":
      return <GraduationCap className="h-5 w-5 text-accent" />;
    case "career":
      return <Briefcase className="h-5 w-5 text-primary" />;
    case "international":
      return <Globe className="h-5 w-5 text-white" />;
    default:
      return <Landmark className="h-5 w-5 text-primary" />;
  }
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 340;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-background overflow-hidden border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
              Hero&apos;s Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Jejak Perjalanan & Milestone Utama
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Dari masa studi di Yogyakarta, riset beasiswa SEARCA di Los Baños Filipina, kepemimpinan struktural di Malang, hingga ekspedisi pembangunan transmigran di Papua.
            </p>
          </div>

          {/* Nav buttons for desktop horizontal scroll */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Scroll Layout */}
        <div className="hidden lg:block relative">
          <div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {timeline.map((item, index) => (
              <div
                key={index}
                className="w-[320px] shrink-0 snap-start bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-[360px]"
              >
                <div>
                  {/* Timeline Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-primary/30 group-hover:text-primary transition-colors">
                      {item.year}
                    </span>
                    <div className="p-2 rounded-xl bg-muted group-hover:bg-primary group-hover:text-white transition-all text-primary">
                      {getIcon(item.category)}
                    </div>
                  </div>

                  {/* Title & Location */}
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-sans font-medium text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                    {item.location}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Optional Badge */}
                {item.badge && (
                  <div className="mt-4 self-start text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-accent/15 text-accent">
                    {item.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border/50" />
          <div className="space-y-8 pl-10 text-left">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Visual marker dot */}
                <div className="absolute -left-[38px] top-1 p-1.5 rounded-full bg-background border-2 border-primary text-primary z-10">
                  {getIcon(item.category)}
                </div>

                {/* Timeline Card */}
                <div className="bg-card rounded-2xl p-5 border border-border/40 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xl font-extrabold text-primary">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-base text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-2">
                    {item.location}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
