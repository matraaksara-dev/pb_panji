import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Timeline } from "@/components/sections/Timeline";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { ArrowRight, BookOpen, Heart, Compass, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Quick Stats Bar */}
        <section className="py-12 bg-muted/40 border-b border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimatedCounter value={20} suffix="" label="H-Index Scholar" />
              <AnimatedCounter value={1900} suffix="+" label="Total Sitasi" />
              <AnimatedCounter value={200} suffix="+" label="Artikel Ilmiah" />
              <AnimatedCounter value={24} suffix="" label="Tahun Pengabdian" />
            </div>
          </div>
        </section>

        {/* 3. Positioning Statement Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <Heart className="h-10 w-10 text-accent mx-auto" />
            <h2 className="font-serif italic text-2xl md:text-3xl leading-relaxed font-medium">
              &ldquo;Menghubungkan riset akademik dengan praktik UMKM dan jaringan ASEAN demi mewujudkan ketahanan pangan serta pertumbuhan ekonomi hijau yang berkelanjutan.&rdquo;
            </h2>
            <div className="pt-2">
              <p className="font-serif font-bold text-base md:text-lg">
                Dr. Panji Deoranto, S.TP., M.P., Ph.D.
              </p>
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mt-1">
                The Agro-Marketing Bridge Builder
              </p>
            </div>
          </div>
        </section>

        {/* 4. Content Pillars Preview */}
        <section className="py-20 border-b border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                Fokus Kepakaran
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Pilar Keilmuan & Riset Utama
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tiga pilar utama pengabdian yang menjadi fokus riset, pengajaran, dan kolaborasi terapan saya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Pillar 1 */}
              <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  Pemasaran Hijau & Perilaku Konsumen
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Meneliti preferensi pembelian produk hijau, bauran pemasaran 7P, dan kepuasan konsumen terhadap produk agroindustri lokal berkelanjutan.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent w-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  Manajemen Risiko Rantai Pasok
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Mengembangkan kerangka mitigasi risiko rantai dingin komoditas pangan segar dengan Fuzzy FMEA dan optimasi multi-kriteria AHP.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary w-fit">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  Pemberdayaan UMKM & Pembangunan Kawasan
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Menyalurkan teknologi pemrosesan pangan pasca-panen, redesain kemasan komersial, serta mendampingi warga transmigran daerah perbatasan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Timeline Preview (Displays the Component directly) */}
        <Timeline />

        {/* 6. Latest from Field Section (TEP-2026 tease) */}
        <section className="py-20 bg-muted/20 border-b border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                  <Compass className="h-3.5 w-3.5 animate-spin-slow" />
                  <span>Kabar Terkini Dari Lapangan</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Ekspedisi Patriot 2026: Papua Barat Daya
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Ikuti kisah harian lapangan tim dosen FTAB UB saat mendampingi warga transmigran di Klamono dan Segun, Sorong. Kami mendirikan mesin pengering jagung vakum dan merumuskan strategi penyerapan pasar jagung bersama industri pakan lokal.
                </p>
                <Link href="/tep-2026">
                  <button className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-all group">
                    Buka Catatan Harian Lapangan
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-border/40">
                <Image
                  src="/images/panji.jpg"
                  alt="Ekspedisi Patriot 2026 Papua Barat Daya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Penutup CTA Section */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Tertarik Berkolaborasi?
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
              Saya selalu menyambut kerja sama riset, tawaran mengajar di kelas internasional, webinar akademis, maupun proyek pembinaan UMKM strategis.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <button className="rounded-full bg-primary hover:bg-primary/95 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-md">
                  Hubungi Kontak Saya
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
