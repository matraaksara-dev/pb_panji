import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Globe, Award, Compass, Network, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Jejaring Internasional & SEARCA",
  description: "Kolaborasi global, program pertukaran, Summer Course, dan koordinasi konsorsium SEARCA oleh Dr. Panji Deoranto.",
};

const networkUniversities = [
  { name: "Universitas Brawijaya", country: "Indonesia (Host)" },
  { name: "Universitas Gadjah Mada", country: "Indonesia" },
  { name: "Institut Pertanian Bogor", country: "Indonesia" },
  { name: "Universiti Putra Malaysia (UPM)", country: "Malaysia" },
  { name: "Kasetsart University", country: "Thailand" },
  { name: "University of the Philippines Los Baños (UPLB)", country: "Filipina" },
  { name: "Tokyo University of Agriculture (Tokyo NODAI)", country: "Jepang" },
  { name: "National Taiwan University (NTU)", country: "Taiwan" },
];

export default function InternationalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        {/* Banner Section */}
        <section className="py-16 bg-secondary text-white text-left relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
              Global Partnerships
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Jejaring Internasional
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
              Membangun kemitraan akademik global dan mengoordinasikan konsorsium regional SEARCA untuk memfasilitasi pertukaran ilmiah serta pemberdayaan di tingkat regional ASEAN.
            </p>
          </div>
        </section>

        {/* Roles Details */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
            
            {/* Column 1: Roles narrative */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Ketua International Relations Office (IRO)
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Menjabat sebagai Ketua IRO FTAB Universitas Brawijaya periode 2023–2028, saya bertanggung jawab penuh untuk mengawal peta jalan internasionalisasi fakultas. Peran ini mencakup pemetaan kerja sama dengan mitra global, fasilitasi kurikulum double-degree, mobilisasi mahasiswa inbound/outbound, serta penyelenggaraan program Summer Course internasional tahunan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2">
                  <Network className="h-6 w-6 text-primary" />
                  Koordinator Konsorsium SEARCA
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Sebagai koordinator perwakilan UB untuk SEARCA (Southeast Asian Regional Center for Graduate Study and Research in Agriculture), saya memfasilitasi kerja sama lintas-negara di bawah jejaring University Consortium (UC). Konsorsium ini berfokus pada kolaborasi riset pertanian, program pertukaran pascasarjana, dan perumusan rekomendasi kebijakan pangan Asia Tenggara.
                </p>
              </div>
            </div>

            {/* Column 2: Konsorsium List */}
            <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary animate-pulse" />
                Anggota Konsorsium SEARCA UC
              </h3>
              <div className="space-y-3">
                {networkUniversities.map((uni) => (
                  <div
                    key={uni.name}
                    className="flex justify-between items-center text-xs border-b border-border/20 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="font-bold text-foreground">{uni.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider shrink-0 ml-4">
                      {uni.country}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
