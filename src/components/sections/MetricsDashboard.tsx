"use client";

import React from "react";
import { Award, BookOpen, Quote, HelpCircle } from "lucide-react";
import { profile } from "@/content/profile";

export function MetricsDashboard() {
  return (
    <div className="space-y-8">
      {/* Grid of 3 Indexes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Google Scholar Card */}
        <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                Google Scholar
              </span>
              <div className="p-2 rounded-xl bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Total Sitasi
              </p>
              <h3 className="font-mono text-3xl font-black text-foreground">
                {profile.metrics.googleScholar.citations}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border/20 text-xs">
              <div>
                <p className="text-muted-foreground">H-Index</p>
                <p className="font-mono font-bold text-foreground text-lg">
                  {profile.metrics.googleScholar.hIndex}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Artikel</p>
                <p className="font-mono font-bold text-foreground text-lg">
                  {profile.metrics.googleScholar.articles}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4 italic">
            *Data terakumulasi dari seluruh publikasi terindeks Google Scholar.
          </p>
        </div>

        {/* SINTA Card */}
        <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                SINTA Indonesia
              </span>
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Sitasi Terverifikasi
              </p>
              <h3 className="font-mono text-3xl font-black text-foreground">
                {profile.metrics.sinta.citations}
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-border/20 text-xs">
              <div>
                <p className="text-muted-foreground">H-Index</p>
                <p className="font-mono font-bold text-foreground text-base">
                  {profile.metrics.sinta.hIndex}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">i10-Idx</p>
                <p className="font-mono font-bold text-foreground text-base">
                  {profile.metrics.sinta.i10Index}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Dokumen</p>
                <p className="font-mono font-bold text-foreground text-base">
                  {profile.metrics.sinta.documents}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4 italic">
            *ID SINTA: 6038394. Skor resmi berdasarkan Kemdiktisaintek RI.
          </p>
        </div>

        {/* Scopus Card */}
        <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-secondary">
                Scopus
              </span>
              <div className="p-2 rounded-xl bg-secondary/10 text-secondary">
                <Quote className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Dokumen Terindeks
              </p>
              <h3 className="font-mono text-3xl font-black text-foreground">
                {profile.metrics.scopus.articles}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border/20 text-xs">
              <div>
                <p className="text-muted-foreground">H-Index</p>
                <p className="font-mono font-bold text-foreground text-lg">
                  {profile.metrics.scopus.hIndex}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">ResearchGate</p>
                <p className="font-mono font-bold text-foreground text-lg">
                  {profile.metrics.researchGate.works}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4 italic">
            *Katalog karya internasional terindeks basis data global Scopus/RG.
          </p>
        </div>
      </div>

      {/* Methodology Disclaimer Accordion Info */}
      <div className="bg-muted/40 border border-border/30 rounded-2xl p-5 text-left text-xs md:text-sm text-muted-foreground leading-relaxed flex gap-3">
        <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-serif font-bold text-foreground text-sm">
            Catatan Perbedaan Metodologi Penghitungan
          </h4>
          <p>
            Terdapat perbedaan jumlah sitasi antara platform dikarenakan metode pelacakan: <strong>Google Scholar</strong> melacak sitasi dari jurnal, prosiding, tesis, dan laporan pengabdian masyarakat secara luas; sedangkan <strong>SINTA</strong> dan <strong>Scopus</strong> menyaring sitasi secara ketat hanya dari publikasi terakreditasi nasional (Sinta 1-6) dan jurnal internasional bereputasi tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}
