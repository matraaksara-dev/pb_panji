import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, CheckCircle2, ChevronRight, HelpCircle, Lightbulb } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

export const metadata = {
  title: "Dampak & Studi Kasus UMKM",
  description: "Studi kasus pendampingan pemasaran agroindustri, restrukturisasi klaster UMKM, dan optimalisasi rantai pasok oleh Dr. Panji Deoranto.",
};

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        {/* Page Header */}
        <section className="py-12 bg-muted/30 border-b border-border/20 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
              Real-World Impact
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
              Dampak Nyata & Studi Kasus
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
              Menerjemahkan riset kuantitatif di meja akademik menjadi solusi operasional, peningkatan efisiensi, dan peningkatan kapasitas bisnis bagi UMKM dan Koperasi Agroindustri di Indonesia.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-card border border-border/40 hover:border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category and location */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {study.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-semibold">
                      {study.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  {/* Structured 3 steps: Problem -> Method -> Result */}
                  <div className="space-y-4 pt-2">
                    {/* Problem */}
                    <div className="flex gap-3 text-xs leading-relaxed">
                      <HelpCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground">Masalah Lapangan:</h4>
                        <p className="text-muted-foreground mt-0.5">{study.problem}</p>
                      </div>
                    </div>

                    {/* Method */}
                    <div className="flex gap-3 text-xs leading-relaxed">
                      <Lightbulb className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground">Pendekatan Riset:</h4>
                        <p className="text-muted-foreground mt-0.5">{study.methodology}</p>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="flex gap-3 text-xs leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground">Dampak Nyata:</h4>
                        <p className="text-muted-foreground mt-0.5">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/20 mt-6 pt-4 text-xs font-bold text-primary flex items-center gap-1 hover:text-primary/80 cursor-pointer">
                  <span>Lihat Publikasi Pendukung</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
