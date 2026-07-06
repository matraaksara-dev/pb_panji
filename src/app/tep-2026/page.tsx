import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Users, Compass, Tag, BookOpen } from "lucide-react";
import { tepTeam, fieldJournal } from "@/content/tep2026";

export const metadata = {
  title: "TEP 2026 Field Notes — Papua Barat Daya",
  description: "Catatan harian lapangan (field notes) Dr. Panji Deoranto dalam Ekspedisi Patriot 2026 di Klamono dan Segun, Sorong.",
};

export default function TEP2026Page() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background text-left">
        {/* Hero Banner Section */}
        <section className="relative py-16 bg-primary text-white overflow-hidden">
          {/* Subtle design accents */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/25 border border-accent/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-2-foreground">
              <Compass className="h-4 w-4 animate-spin-slow" />
              <span>Program Resmi Kementerian Transmigrasi RI</span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Tim Ekspedisi Patriot (TEP) 2026
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
              Mendokumentasikan rekam riset aksi, pendampingan pasca-panen jagung, dan strategi pemasaran agroindustri dari perbatasan Papua Barat Daya — Distrik Klamono dan Segun, Kabupaten Sorong.
            </p>
          </div>
        </section>

        {/* TEP Context & Collaboration */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
            
            {/* Left: About TEP */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Misi Penguatan Kawasan Transmigrasi
              </h2>
              <div className="text-muted-foreground text-xs md:text-sm space-y-4 leading-relaxed">
                <p>
                  <strong>Tim Ekspedisi Patriot (TEP) 2026</strong> adalah program seleksi nasional kompetitif yang diselenggarakan oleh Kementerian Transmigrasi RI. Program ini memilih akademisi berkomitmen tinggi dari berbagai perguruan tinggi nasional untuk merumuskan kebijakan berbasis bukti (evidence-based policy) langsung dari daerah prioritas pembangunan.
                </p>
                <p>
                  Fokus ekspedisi ini adalah <strong>Proyek R7 King Corn</strong>, sebuah inisiatif penguatan ketahanan pangan dan rantai nilai jagung dari hulu (peningkatan kualitas panen basah) hingga hilir (kemitraan dengan pabrik pakan ternak regional).
                </p>
              </div>
            </div>

            {/* Right: Team members */}
            <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Kolaborator FTAB UB
              </h3>
              <div className="space-y-4">
                {tepTeam.map((member) => (
                  <div key={member.name} className="text-xs border-b border-border/20 pb-3 last:border-b-0 last:pb-0">
                    <p className="font-bold text-foreground">{member.name}</p>
                    <p className="text-primary font-medium mt-0.5">{member.role}</p>
                    <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider mt-0.5">
                      {member.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Field Notes Feed */}
        <section className="py-12 bg-muted/20 border-t border-border/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Field Journal / Catatan Harian Lapangan
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm mb-10 max-w-lg">
              Catatan autentik perkembangan proyek, dokumentasi interaksi sosial, serta temuan riset aksi secara kronologis.
            </p>

            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/60">
              {fieldJournal.map((entry) => (
                <div key={entry.id} className="relative pl-10 group">
                  {/* Timeline dot marker */}
                  <div className="absolute left-2.5 top-2 w-3.5 h-3.5 rounded-full bg-background border-4 border-primary group-hover:border-accent transition-colors" />

                  <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs text-muted-foreground font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {entry.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {entry.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-lg md:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                      {entry.title}
                    </h3>

                    {/* Journal text content */}
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {entry.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[9px] font-bold text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full"
                        >
                          <Tag className="h-2.5 w-2.5 text-primary" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
