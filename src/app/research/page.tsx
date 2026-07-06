import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetricsDashboard } from "@/components/sections/MetricsDashboard";
import { PublicationList } from "@/components/sections/PublicationList";
import { profile } from "@/content/profile";

export const metadata = {
  title: "Riset & Publikasi Ilmiah",
  description: "Dashboard metrik publikasi SINTA, Scopus, Google Scholar, dan katalog tulisan ilmiah Dr. Panji Deoranto.",
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        {/* Hero Header */}
        <section className="py-12 bg-muted/30 border-b border-border/20 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
              Kontribusi Akademik
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
              Riset & Publikasi Ilmiah
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
              Kumpulan rekam jejak riset kuantitatif di bidang pemasaran agroindustri, optimalisasi rantai pasok hijau, serta evaluasi produktivitas agroindustri terapan.
            </p>
          </div>
        </section>

        {/* Metrics Dashboard Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-left">
              Metrik Dampak Riset
            </h2>
            <MetricsDashboard />
          </div>
        </section>

        {/* Signature Methodologies Section */}
        <section className="py-12 bg-muted/20 border-y border-border/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3 text-left">
              Metodologi & Kepakaran Utama
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm text-left mb-8 max-w-xl">
              Metode kuantitatif-manajerial yang sering saya terapkan untuk memecahkan masalah industri pangan, rantai pasok, dan efisiensi produksi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {profile.methodologies.map((m) => (
                <div
                  key={m.name}
                  className="bg-card border border-border/30 rounded-xl p-5 shadow-sm text-left hover:shadow-md transition-shadow"
                >
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publication List Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-left">
              Daftar Artikel & Publikasi Terpilih
            </h2>
            <PublicationList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
