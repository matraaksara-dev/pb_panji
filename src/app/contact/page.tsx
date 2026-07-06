import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, Linkedin, Clock } from "lucide-react";
import { profile } from "@/content/profile";

export const metadata = {
  title: "Hubungi & Kolaborasi",
  description: "Formulir kontak dan informasi kantor Dr. Panji Deoranto untuk kolaborasi riset, pembicara tamu, atau konsultasi UMKM.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-background">
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
            
            {/* Left Column: Office info */}
            <div className="text-left space-y-8">
              <div className="space-y-3">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                  Hubungi
                </span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Mari Memulai Kolaborasi
                </h1>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Apakah Anda merencanakan riset bersama, ingin mengundang sebagai pembicara, atau memerlukan diskusi strategi pemasaran UMKM? Silakan hubungi saya melalui formulir atau kontak resmi.
                </p>
              </div>

              {/* Office Details Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="flex gap-4 p-4 border border-border/40 rounded-2xl bg-card">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-foreground">Email Resmi</h4>
                    <p className="text-muted-foreground">deoranto@ub.ac.id</p>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="flex gap-4 p-4 border border-border/40 rounded-2xl bg-card">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-foreground">Telepon Kantor</h4>
                    <p className="text-muted-foreground">{profile.contact.phone}</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex gap-4 p-4 border border-border/40 rounded-2xl bg-card">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-foreground">Alamat Kantor</h4>
                    <p className="text-muted-foreground">{profile.affiliation.officeAddress}</p>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="flex gap-4 p-4 border border-border/40 rounded-2xl bg-card">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-foreground">Waktu Respon</h4>
                    <p className="text-muted-foreground">Umumnya 1-2 hari kerja akademik.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
