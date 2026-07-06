import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, CheckSquare, Presentation, Star, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Speaking & Consulting",
  description: "Undangan pembicara tamu, narasumber webinar, pendampingan pemasaran hijau, dan konsultasi UMKM bersama Dr. Panji Deoranto.",
};

const lectureTopics = [
  { title: "Pemasaran Agroindustri & Perilaku Konsumen Hijau", desc: "Menganalisis bauran pemasaran hijau, loyalitas pelanggan terhadap produk ramah lingkungan, dan pentingnya branding sirkular." },
  { title: "Manajemen Risiko Rantai Pasok Berkelanjutan", desc: "Aplikasi Fuzzy FMEA, AHP, dan mitigasi risiko rantai dingin komoditas pangan segar." },
  { title: "Metrik Produktivitas Multi-Kriteria (OMAX/VSM)", desc: "Penerapan Objective Matrix dan Value Stream Mapping untuk menekan pemborosan operasional UMKM agroindustri." },
  { title: "Internasionalisasi Perguruan Tinggi & Kolaborasi ASEAN", desc: "Strategi membangun kemitraan konsorsium universitas regional serta program Summer Course multi-kultural." },
];

export default function SpeakingConsultingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        {/* Banner Section */}
        <section className="py-16 bg-muted/40 border-b border-border/20 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
              Professional Services
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
              Speaking & Consulting
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
              Layanan profesional untuk kuliah tamu, pembicara seminar/webinar regional, pendampingan UMKM daerah, serta penyusunan kajian strategis rantai pasok agroindustri berkelanjutan.
            </p>
          </div>
        </section>

        {/* Topics Available Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
            
            {/* Column 1: Topics list */}
            <div className="space-y-8">
              <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2">
                <Presentation className="h-6 w-6 text-primary" />
                Topik Kuliah & Diskusi Umum
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {lectureTopics.map((topic) => (
                  <div key={topic.title} className="bg-card border border-border/40 rounded-2xl p-5 shadow-sm space-y-2">
                    <h3 className="font-serif font-bold text-base text-foreground leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Experience highlights */}
            <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Mengapa Bermitra?
              </h3>
              
              <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
                <div className="flex gap-3">
                  <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p><strong>Pengalaman Internasional:</strong> Beasiswa Ph.D UPLB Filipina dan aktif mengajar lintas negara (Filipina, Malaysia).</p>
                </div>
                <div className="flex gap-3">
                  <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p><strong>Pendekatan Aplikatif Kuantitatif:</strong> Menyelesaikan masalah nyata bisnis kecil menggunakan metodologi presisi (SWOT, AHP, FMEA).</p>
                </div>
                <div className="flex gap-3">
                  <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p><strong>Sertifikasi Profesional:</strong> Kompetensi terverifikasi BNSP RI dalam pendampingan pemasaran UMKM.</p>
                </div>
              </div>

              <div className="border-t border-border/20 pt-6">
                <Link href="/contact">
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/95 text-white flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider py-4 text-xs">
                    Hubungi Saya
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
