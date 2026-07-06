import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, Award, Compass, Heart } from "lucide-react";
import { Timeline } from "@/components/sections/Timeline";
import { profile } from "@/content/profile";

export const metadata = {
  title: "Hero's Journey & Biografi",
  description: "Biografi akademik dan kisah perjalanan profesional Dr. Panji Deoranto dari Jawa Tengah, Filipina, hingga Sorong Papua.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        {/* Intro Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                Biografi
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
                Tentang Saya
              </h1>
              <div className="mt-6 p-4 border-l-4 border-primary bg-muted/40 rounded-r-xl">
                <p className="font-serif italic text-sm text-foreground/80 leading-relaxed">
                  &ldquo;{profile.usp}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
              <p>
                Perjalanan akademis dan pengabdian masyarakat saya berakar pada keyakinan bahwa riset universitas tidak boleh berhenti di lemari perpustakaan. Sektor pertanian Indonesia, khususnya usaha mikro, kecil, dan menengah (UMKM), menyimpan potensi luar biasa yang membutuhkan jembatan analisis kuantitatif untuk meningkatkan efisiensi dan daya saing pasar mereka.
              </p>
              <p>
                Sebagai dosen di Fakultas Teknologi Agroindustri dan Biosistem (FTAB) Universitas Brawijaya, saya memadukan pengajaran di kelas dengan bimbingan riset aksi nyata di lapangan. Studi doktoral saya di University of the Philippines Los Baños (UPLB) sebagai SEARCA Scholar telah memperluas cakrawala saya untuk mengapresiasi pentingnya kerja sama regional dan internasional dalam menyongsong ketahanan pangan yang berkelanjutan.
              </p>
              <p>
                Melalui peran saya sebagai Ketua IRO FTAB UB dan partisipasi aktif dalam Tim Ekspedisi Patriot 2026 di perbatasan Papua Barat Daya, saya berkomitmen untuk terus menghubungkan gagasan global dengan aksi lokal demi kemajuan pembangunan agroindustri Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Component */}
        <Timeline />

        {/* Education & Core Values Grid */}
        <section className="py-16 bg-muted/10 border-b border-border/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Education Credentials */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Pendidikan Formal
                </h2>
                <div className="space-y-4">
                  <div className="border border-border/30 rounded-xl p-5 bg-card">
                    <span className="font-mono text-xs font-bold text-accent">2007 — 2011</span>
                    <h3 className="font-serif font-bold text-base text-foreground mt-1">Ph.D. in Agricultural Economics</h3>
                    <p className="text-muted-foreground text-xs">University of the Philippines Los Baños (UPLB), Filipina</p>
                    <p className="text-[10px] text-primary font-semibold mt-1">Penerima Beasiswa SEARCA</p>
                  </div>
                  <div className="border border-border/30 rounded-xl p-5 bg-card">
                    <span className="font-mono text-xs font-bold text-accent">1999 — 2001</span>
                    <h3 className="font-serif font-bold text-base text-foreground mt-1">Magister Pertanian (M.P.) - Ekonomi Pertanian</h3>
                    <p className="text-muted-foreground text-xs">Universitas Gadjah Mada (UGM), Yogyakarta</p>
                  </div>
                  <div className="border border-border/30 rounded-xl p-5 bg-card">
                    <span className="font-mono text-xs font-bold text-accent">1993 — 1998</span>
                    <h3 className="font-serif font-bold text-base text-foreground mt-1">Sarjana Teknologi Pertanian (S.TP.) - Teknologi Industri Pertanian</h3>
                    <p className="text-muted-foreground text-xs">Universitas Gadjah Mada (UGM), Yogyakarta</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Core Values */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Nilai-Nilai Utama
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.coreValues.map((v) => (
                    <div key={v.title} className="border border-border/30 rounded-xl p-4 bg-card text-left space-y-2">
                      <h3 className="font-serif font-bold text-sm text-foreground">{v.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
