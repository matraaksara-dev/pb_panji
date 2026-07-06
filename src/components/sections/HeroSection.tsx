"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Compass, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border/20">
      {/* Decorative route-map SVG line */}
      <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full object-cover"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="6 6"
        >
          {/* Java to Philippines line */}
          <path d="M 200 450 Q 350 250 500 150" />
          {/* Philippines to Papua line */}
          <path d="M 500 150 Q 650 300 800 400" />
          
          <circle cx="200" cy="450" r="8" fill="currentColor" />
          <circle cx="500" cy="150" r="8" fill="currentColor" />
          <circle cx="800" cy="400" r="8" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Column: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-left"
          >
            {/* TEP 2026 Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1 text-xs font-semibold text-accent dark:text-accent tracking-wide uppercase">
              <Compass className="h-3.5 w-3.5 animate-spin-slow" />
              <span>Anggota Tim Ekspedisi Patriot 2026</span>
            </div>

            {/* Title / Headline */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary block">
                {profile.tagline}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                {profile.headline}
              </h1>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              Selamat datang di portal portofolio ilmiah dan kontribusi terapan saya. Sebagai peneliti, dosen, dan praktisi pemasaran agroindustri, fokus saya adalah menjembatani penemuan ilmiah universitas dengan kemandirian bisnis UMKM serta jejaring global.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/research">
                <button className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary/95 text-white px-6 py-3 text-sm font-semibold transition-all shadow-md group">
                  Lihat Riset Saya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/speaking-consulting">
                <button className="flex items-center gap-2 rounded-full border border-border bg-card hover:bg-muted/50 text-foreground px-6 py-3 text-sm font-semibold transition-all">
                  Kolaborasi & Konsultasi
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Roles Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/40 text-xs">
              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Ketua IRO FTAB</h4>
                  <p className="text-muted-foreground">Hubungan Internasional</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Koordinator SEARCA</h4>
                  <p className="text-muted-foreground">Jejaring Regional</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Sertifikasi BNSP</h4>
                  <p className="text-muted-foreground">Pemasaran UMKM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border/40 group"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
              Dr. Panji Deoranto
            </div>

            {/* The Image */}
            <Image
              src="/images/panji.jpg"
              alt="Dr. Panji Deoranto, S.TP., M.P., Ph.D."
              fill
              priority
              sizes="(max-w-7xl) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle caption */}
            <div className="absolute bottom-4 left-4 z-20 text-white text-left">
              <p className="font-serif font-bold text-lg leading-tight">
                Dr. Panji Deoranto
              </p>
              <p className="text-xs text-white/80">
                Sorong, Papua Barat Daya - TEP 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
