import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-primary/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Bio */}
          <div className="flex flex-col space-y-4">
            <span className="font-serif font-bold text-xl tracking-tight">
              Dr. Panji Deoranto
            </span>
            <p className="text-white/70 text-xs leading-relaxed max-w-sm">
              {profile.bioShort}
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h3 className="font-serif font-semibold text-sm tracking-wider uppercase text-accent mb-4">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Journey
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white/70 hover:text-white transition-colors">
                  Research & Publication
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-white/70 hover:text-white transition-colors">
                  International Networks
                </Link>
              </li>
              <li>
                <Link href="/tep-2026" className="text-white/70 hover:text-white transition-colors">
                  TEP 2026 Papua
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-white/70 hover:text-white transition-colors">
                  Impact Cases (UMKM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-serif font-semibold text-sm tracking-wider uppercase text-accent mb-4">
              Kontak Kantor
            </h3>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{profile.affiliation.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>{profile.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${profile.contact.email}`} className="hover:underline">
                  {profile.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Networks */}
          <div>
            <h3 className="font-serif font-semibold text-sm tracking-wider uppercase text-accent mb-4">
              Jejaring Riset
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`https://sinta.kemdikbud.go.id/authors/detail?id=${profile.nip}&view=overview`} // fallback to SINTA author search or general
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-accent" />
                  Profil SINTA (ID: 6038394)
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com" // placeholder Google Scholar profile search
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-accent" />
                  Google Scholar Profile
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.scopus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-accent" />
                  Scopus Author Profile
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50">
          <p>
            &copy; {currentYear} Dr. Panji Deoranto, S.TP., M.P., Ph.D. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span className="hover:text-white">Pemasaran Agroindustri</span>
            <span>&bull;</span>
            <span className="hover:text-white">Pemberdayaan Masyarakat</span>
            <span>&bull;</span>
            <span className="hover:text-white">Internasionalisasi Kampus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
