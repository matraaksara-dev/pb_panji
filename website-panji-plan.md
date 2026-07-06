# WEBSITE PERSONAL BRANDING — Dr. Panji Deoranto, S.TP., M.P., Ph.D.
## Master Plan: Archetype → Color → Theme → UI/UX Anatomy → Implementation → Task.md (AI-Agent Ready)

> **Target eksekusi**: Google Antigravity (Gemini 3 Flash)
> **Stack acuan**: react-fullstack-pro skill — Next.js 15 App Router, React 19, Tailwind CSS v4, shadcn/ui, Framer Motion, TypeScript strict
> **Sumber data**: final-profile-panji.md + detail_profile_panji2.md (Profile Intelligence Report)
> **Positioning**: *"The Agro-Marketing Bridge Builder"*

---

## BAGIAN 1 — BRAND ARCHETYPE ANALYSIS

### 1.1 Metodologi
Analisis menggunakan 12 Jungian Brand Archetypes, di-cross-reference terhadap: (a) rekam jejak karier (akademisi → administrator → praktisi lapangan), (b) core story/hero's journey (Jawa Tengah → Filipina → Papua Barat Daya), (c) tone komunikasi (formal-akademik, data-driven, minim personal branding aktif), dan (d) USP (peneliti kuantitatif + jembatan akademia-industri-komunitas).

### 1.2 Skoring Archetype (relevansi terhadap data profil)

| Archetype | Relevansi | Skor (1-5) | Alasan |
|---|---|---|---|
| **The Sage** | Sangat Tinggi | 5 | Dosen Ph.D., 200+ publikasi, pendekatan kuantitatif (AHP, FMEA, OMAX), tujuan hidup: mencari & membagikan kebenaran/pengetahuan |
| **The Explorer** | Tinggi | 4 | Ph.D. di Filipina (SEARCA), mengajar di Malaysia/Filipina, penugasan lapangan ke perbatasan Papua Barat Daya — pola "pergi ke tempat baru untuk menemukan sesuatu" |
| **The Caregiver** | Tinggi | 4 | Fokus pemberdayaan UMKM, komunitas transmigran, mentor puluhan mahasiswa — motivasi: melindungi & memajukan orang lain |
| **The Ruler** | Sedang | 3 | Jenjang struktural (Sekretaris Jurusan → Kepala Badan → Ketua Pusat Double Degree → Ketua IRO) menunjukkan kapabilitas kepemimpinan institusional |
| **The Creator** | Rendah-Sedang | 2 | Inovasi produk/kemasan UMKM ada, tapi bukan inti narasi |

### 1.3 Keputusan Archetype

**Primary Archetype: THE SAGE**
- Ekspresi brand: kredibilitas berbasis data, edukatif, tenang, otoritatif tanpa arogan, visual bersih dan tidak berlebihan.
- Voice: analitis, presisi angka (H-index, sitasi, metodologi disebut eksplisit), tapi tetap dapat diakses (bukan jargon-heavy).

**Secondary Archetype: THE EXPLORER (dengan nuansa Caregiver)**
- Ekspresi brand: narasi perjalanan geografis nyata (Jawa Tengah → Los Baños → Sorong/Papua), semangat "pergi ke lapangan", foto field-attire, peta rute.
- Fungsi: memberi *emotional arc* pada kredibilitas Sage — tanpa ini, situs akan terasa seperti CV digital biasa.

**Formula Brand Personality**: **70% Sage + 30% Explorer**, dengan sentuhan Caregiver di bagian dampak/UMKM/mentoring.

> Implikasi desain: layout editorial-akademik (Sage) yang diselingi elemen storytelling/peta perjalanan/field-photography (Explorer) — bukan template dosen generik, bukan juga startup-flashy.

---

## BAGIAN 2 — COLOR PALETTE ANALYSIS

### 2.1 Dasar Analisis
Kombinasi dari: (a) warna signature yang sudah direkomendasikan di riset (hijau alam, biru kepercayaan, earth tones), (b) psikologi warna archetype Sage (biru/indigo — kepercayaan, kedalaman intelektual) dan Explorer (earth tone/terracotta — bumi, perjalanan, otentik), (c) benchmark warna industri sejenis (situs akademisi senior, konsultan agri-tech, lembaga riset internasional seperti IRRI, CGIAR, SEARCA sendiri — dominan navy/forest green + neutral, minim warna saturasi tinggi agar kredibel).

### 2.2 Palet Final

| Role | Warna | Hex | Alasan |
|---|---|---|---|
| **Primary (Brand)** | Forest/Deep Green | `#1F4D3A` | Pertanian berkelanjutan + Sage (kedalaman, stabilitas) — dominan di header, CTA utama, aksen tipografi |
| **Secondary (Trust)** | Academic Navy Blue | `#1B2E4B` | Sisi akademik-internasional, dipakai untuk teks judul besar / bagian riset & publikasi |
| **Accent (Explorer)** | Corn Yellow / Ochre | `#D9A441` | Hasil bumi (jagung), dipakai sangat terbatas: highlight, badge "TEP 2026", quote card |
| **Accent 2 (Earth)** | Terracotta/Coffee Brown | `#8C5A3C` | Kopi/tanah, dipakai untuk elemen field-notes/Papua/foto lapangan |
| **Neutral Light** | Warm Off-White | `#FAF7F2` | Background utama — hangat, bukan putih steril, kesan "kertas premium" |
| **Neutral Dark (Text)** | Charcoal | `#22252A` | Body text, kontras AA/AAA terhadap background |
| **Neutral Mid (Border/Divider)** | Sage Grey-Green | `#C8CFC6` | Border, divider, subtle backgrounds |
| **Success/Data Highlight** | Muted Teal | `#3A7267` | Chart/infografis metrik (sitasi, H-index) agar tidak bentrok dengan primary |

### 2.3 Rasio Penggunaan (60-30-10 Rule)
- 60% Neutral Light (`#FAF7F2`) + Charcoal text — dominasi editorial/whitespace
- 30% Forest Green (`#1F4D3A`) + Navy (`#1B2E4B`) — header, section band, tipografi besar
- 10% Ochre (`#D9A441`) + Terracotta (`#8C5A3C`) — aksen, badge, CTA sekunder, ilustrasi peta

### 2.4 Dark Mode Mapping
- Background: `#14171A` (near-black warm), Surface: `#1C201F`, Primary tetap `#3E8368` (green lebih terang untuk kontras), Accent Ochre dinaikkan brightness ke `#E5B85C`.

---

## BAGIAN 3 — TEMA BESAR (THEME DIRECTION)

### 3.1 Nama Tema
**"Bridge Builder Editorial"** — perpaduan *academic editorial* (seperti Harvard Kennedy School faculty page / SEARCA institutional site) dengan *narrative field journal* (seperti National Geographic Explorer profile).

### 3.2 Prinsip Desain
1. **Editorial-first, bukan corporate-flashy**: grid presisi, tipografi besar untuk judul (serif untuk headline, sans-serif untuk body).
2. **Data as design element**: metrik (298 sitasi, H-index 8/20, 200+ artikel) ditampilkan sebagai infografis/counter animasi, bukan tabel mentah.
3. **Peta sebagai motif berulang**: garis rute Jawa Tengah → Los Baños (Filipina) → Sorong (Papua Barat Daya) muncul di Hero, About, dan Field Notes sebagai visual signature.
4. **Whitespace generous**: mengikuti kesan "jurnal ilmiah premium", bukan padat seperti company profile UMKM.
5. **Mobile-first mutlak**: karena target share utama adalah LinkedIn (mobile traffic tinggi).
6. **Micro-interaction purposeful**: fade-up saat scroll untuk timeline karier, counter animation untuk metrik, bukan animasi dekoratif berlebihan (sesuai etos Sage — kredibel, tidak norak).

### 3.3 Tipografi
- **Headline/Display**: Serif modern — *Fraunces* atau *Newsreader* (kesan akademik-editorial, hangat, bukan serif klasik kaku)
- **Body/UI**: Sans-serif — *Inter* atau *Plus Jakarta Sans* (readability tinggi, modern)
- **Data/Mono (angka metrik)**: *JetBrains Mono* atau *IBM Plex Mono* (untuk H-index, sitasi, tahun — kesan presisi ilmiah)

---

## BAGIAN 4 — SITE ARCHITECTURE (SITEMAP)

```
/ (Home)
├── /about                  → Hero's Journey + Core Story + Bio panjang
├── /research               → Publikasi, metrik SINTA/Scopus/GS, 11 tema riset
├── /international          → IRO, SEARCA, UC network, roadshow (Filipina/Malaysia)
├── /tep-2026               → Field Notes Klamono Segun, Sorong (pilar konten baru)
├── /impact                 → Studi kasus UMKM (kopi, kerupuk, klaster emping jagung, dll)
├── /media                  → Content hub (artikel, video, press mentions)
├── /speaking-consulting    → CTA kolaborasi, undangan pembicara, konsultasi
└── /contact                → Form kontak + link LinkedIn/institusional
```

**Catatan navigasi mobile**: 8 item terlalu banyak untuk bottom-nav; gunakan hamburger + sticky CTA "Contact" mengambang di mobile.

---

## BAGIAN 5 — UI/UX ANATOMY PER HALAMAN (DESKTOP + MOBILE)

### 5.1 Global Elements (semua halaman)
| Elemen | Desktop | Mobile |
|---|---|---|
| Header | Sticky, logo/nama kiri, nav horizontal kanan, transparan di Hero lalu solid on-scroll | Sticky, logo kiri, hamburger kanan, drawer full-screen on open |
| Footer | 4 kolom (Bio ringkas, Sitemap, Kontak, Sosial) | 1 kolom accordion-style, CTA kontak menonjol |
| Floating CTA | Tidak ada (nav cukup) | Sticky bottom bar "Hubungi/Kolaborasi" muncul setelah scroll 30% |

### 5.2 Halaman: HOME (`/`)
**Struktur (top-to-bottom):**
1. **Hero Section**
   - Desktop: Split 60/40 — kiri headline + tagline + 2 CTA ("Lihat Riset" / "Kolaborasi"), kanan foto profesional (blazer+batik) dengan garis peta rute tipis di background
   - Mobile: Stack vertikal, foto di atas (crop portrait), headline di bawah, CTA full-width
   - Headline: *"Menjembatani Riset Akademik dengan Pemberdayaan Agroindustri — dari Jawa Tengah hingga Papua Barat Daya"*
   - Badge kecil: "Anggota Tim Ekspedisi Patriot 2026" (ochre accent, menonjolkan momentum terbaru)
2. **Quick Stats Bar** (counter animation on scroll)
   - 4 kolom: H-Index • Sitasi • Publikasi • Tahun Pengalaman
   - Mobile: 2x2 grid
3. **Positioning Statement Section**
   - Kutipan besar core story, tipografi serif besar, centered, background forest green dengan teks putih
4. **Content Pillars Preview** (3 dari 10 pillar utama, card style dengan icon)
5. **Hero's Journey Timeline (Preview)**
   - Horizontal scroll-snap timeline (desktop), vertical stacked timeline (mobile) — 4 titik: UGM → UPLB/SEARCA → UB Struktural → TEP 2026 Papua
6. **Featured Impact/Case Study** (1-2 card UMKM, link ke `/impact`)
7. **Latest from Field (TEP 2026 teaser)** — foto + progress badge, link ke `/tep-2026`
8. **CTA Section Penutup** — undangan kolaborasi/speaking, dual CTA

### 5.3 Halaman: ABOUT (`/about`)
1. Hero kecil (breadcrumb + judul "Hero's Journey")
2. **Full Narrative Timeline** — 4 babak (Awal Mula UGM, Titik Balik UPLB, Kembali & Naik Jenjang Struktural, Puncak TEP 2026) dengan peta rute geografis sebagai visual anchor tiap babak
3. **USP & Positioning block**
4. **Bio panjang** (2 versi: ID/EN toggle)
5. **Brand Personality / Nilai Inti** (grid ikon: Sustainability, Kolaborasi, Data-Driven, Pemberdayaan)
6. **Pendidikan formal** (table ringkas: S1 UGM, S2 UGM, Ph.D. UPLB)
- Mobile: seluruh timeline jadi vertical stepper dengan foto kecil di tiap step

### 5.4 Halaman: RESEARCH (`/research`)
1. **Metrics Dashboard** (SINTA vs Google Scholar vs Scopus — 3 card berdampingan, catatan disclaimer perbedaan metodologi)
2. **11 Tema Riset** — accordion/tab per tema (Marketing Mix, Klaster UMKM, SWOT/QSPM, VSM/OMAX, Fuzzy FMEA, Green Marketing, dll)
3. **Filterable Publication List** — filter by tahun/tema/metode, search box
4. **Metode Signature** (kartu penjelasan singkat: AHP, FMEA, OMAX, QSPM — edukatif untuk awam)
- Mobile: dashboard jadi carousel swipe, filter jadi bottom-sheet modal

### 5.5 Halaman: INTERNATIONAL (`/international`)
1. Hero: peta jaringan UC SEARCA (UB, IPB, UGM, UPM, Kasetsart, UPLB, Tokyo NODAI, NTU, dll) — interactive map/graph
2. **Jabatan & Peran** — Ketua IRO, Koordinator SEARCA (card timeline jabatan struktural)
3. **Program & Kolaborasi** — REI USA, Hokkaido roadshow, DGTF Maejo University
4. **Gallery** kunjungan/summer course

### 5.6 Halaman: TEP 2026 FIELD NOTES (`/tep-2026`)
1. Hero dengan badge program resmi + lokasi peta (Klamono Segun, Sorong, Papua Barat Daya)
2. **Konteks Program** — apa itu TEP 2026, seleksi >10.000 pendaftar
3. **Tim** — 4 dosen FTAB UB yang terpilih (card kolaborator: Dr. Elya Mufidah, Dr. Ir. Anang Lastriyanto, Yusron Sugiarto Ph.D.)
4. **Proyek R7 King Corn** — penjelasan fokus program
5. **Field Journal/Log** (struktur CMS: entries bertanggal, foto, video diary) — didesain sebagai *living page* yang di-update berkala
- Mobile: journal list jadi vertical feed ala Instagram-story-card

### 5.7 Halaman: IMPACT / CASE STUDIES (`/impact`)
1. Grid case study (UMKM emping jagung Lamongan, koperasi kopra Halmahera, kerupuk atom Bintan, kopi robusta OMAX, dll)
2. Tiap case study: Problem → Metode → Hasil (format 3-kolom desktop, stacked mobile)

### 5.8 Halaman: MEDIA/CONTENT HUB (`/media`)
1. Tab: Artikel | Video | Press Mentions
2. Card grid dengan thumbnail, kategori sesuai 10 content pillars
3. Newsletter signup ("Agro Insight" monthly)

### 5.9 Halaman: SPEAKING & CONSULTING (`/speaking-consulting`)
1. Value proposition untuk undangan (webinar, guest lecture, konsultasi UMKM)
2. Topik yang bisa dibawakan (list dari content pillars)
3. Rekam jejak pembicara (Maejo University, webinar SEARCA, dll)
4. CTA form booking

### 5.10 Halaman: CONTACT (`/contact`)
1. Form (nama, institusi, keperluan, pesan) — validasi Zod + React Hook Form
2. Info kontak institusional (email @ub.ac.id, kantor FTAB, LinkedIn)
3. Peta lokasi kantor (embed, opsional)

---

## BAGIAN 6 — DESIGN SYSTEM RINGKAS

| Token | Value |
|---|---|
| Border radius | `0.5rem` (cards), `9999px` (badge/pill) |
| Container max-width | `1280px` desktop, full-bleed mobile dengan padding `1rem` |
| Breakpoints | `sm:640px md:768px lg:1024px xl:1280px` (Tailwind default) |
| Spacing scale | Tailwind default (4px base) |
| Shadow | Soft/diffused only (`shadow-sm`/`shadow-md`), no harsh drop shadow — kesan editorial premium |
| Grid | 12-col desktop, 4-col mobile |
| Animasi | Framer Motion — fade-up 0.4s ease-out on scroll (stagger untuk list/timeline), counter animation untuk metrik |
| Aksesibilitas | WCAG 2.2 AA — kontras teks min 4.5:1, focus ring visible, alt text semua foto/peta |

---

## BAGIAN 7 — IMPLEMENTATION PLAN

| Fase | Durasi Estimasi | Deliverable |
|---|---|---|
| **Fase 0 — Persiapan Aset** | 3-5 hari | Foto profesional (formal+field), verifikasi angka Google Scholar/Scopus live, finalisasi copy bio (ID/EN), logo/wordmark sederhana |
| **Fase 1 — Setup & Design System** | 2-3 hari | Next.js 15 project scaffold, Tailwind v4 + shadcn/ui config, design tokens (warna, tipografi), komponen dasar (Button, Card, Badge, Nav) |
| **Fase 2 — Halaman Inti** | 5-7 hari | Home, About, Research (dengan data statis dari profil) |
| **Fase 3 — Halaman Sekunder** | 4-6 hari | International, TEP 2026, Impact, Media |
| **Fase 4 — Interaksi & Polish** | 3-4 hari | Framer Motion animasi, form Contact + validasi, responsive QA di semua breakpoint |
| **Fase 5 — SEO, Performance, Deploy** | 2-3 hari | Metadata API, OG image, sitemap.xml, lighthouse audit (Core Web Vitals), deploy (Vercel disarankan) |
| **Fase 6 — Konten Berkelanjutan** | Ongoing | Update Field Notes TEP 2026 berkala, publikasi artikel sesuai 10 content pillars |

**Catatan penting sebelum development**: item di *Gap Section §17 laporan profil* (tahun pasti S1/S2, verifikasi akun Twitter/X, angka live Google Scholar/Scopus/ResearchGate, preferensi foto) **wajib dikonfirmasi ke Dr. Panji langsung** sebelum publish — jangan hardcode angka yang belum terverifikasi sebagai klaim final.

---

## BAGIAN 8 — TASK.MD (HYPER-DETAIL, AI-AGENT READY UNTUK GOOGLE ANTIGRAVITY / GEMINI 3 FLASH)

> Format di bawah ini ditulis sebagai instruksi eksekusi langkah-demi-langkah untuk AI coding agent. Setiap task memiliki: ID, Goal, Files, Acceptance Criteria. Gunakan urutan task_id secara sekuensial.

```markdown
# TASK.MD — Website Personal Branding Dr. Panji Deoranto

## KONTEKS PROYEK (baca sebelum eksekusi apapun)
- Project type: Marketing/personal-branding website (static-heavy, content-driven), BUKAN aplikasi transaksional
- Tech stack WAJIB: Next.js 15 (App Router), React 19, TypeScript strict mode, Tailwind CSS v4, shadcn/ui, Framer Motion, next-themes (dark mode), Zod + React Hook Form (form contact)
- Data source: konten statis di /content/*.ts atau *.mdx (bukan database — tidak perlu Prisma/Postgres untuk versi awal)
- Deployment target: Vercel
- Prinsip arsitektur: Server Components default; "use client" HANYA untuk komponen interaktif (form, animasi scroll-trigger, toggle bahasa, nav mobile drawer)
- Design tokens WAJIB dipakai (lihat TASK-002)

---

## TASK-001: Project Scaffolding
**Goal**: Inisialisasi project Next.js 15 App Router dengan TypeScript strict, Tailwind v4, shadcn/ui terpasang.//
**Steps**:
1. `npx create-next-app@latest panji-deoranto-site --typescript --tailwind --app --src-dir --import-alias "@/*"`
2. Inisialisasi shadcn/ui: `npx shadcn@latest init` — pilih style "new-york", base color "neutral" (akan di-override oleh design tokens custom)
3. Install dependencies tambahan: `framer-motion next-themes zod react-hook-form @hookform/resolvers lucide-react`
4. Setup struktur folder:
```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                 (Home)
│   │   ├── about/page.tsx
│   │   ├── research/page.tsx
│   │   ├── international/page.tsx
│   │   ├── tep-2026/page.tsx
│   │   ├── impact/page.tsx
│   │   ├── media/page.tsx
│   │   ├── speaking-consulting/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/            (shadcn generated components)
│   ├── layout/         (Header, Footer, MobileNav)
│   ├── sections/        (HeroSection, StatsBar, Timeline, etc.)
│   └── shared/         (AnimatedCounter, RouteMap, LanguageToggle)
├── content/            (data statis: profile.ts, publications.ts, timeline.ts, caseStudies.ts)
├── lib/               (utils.ts, constants.ts)
└── types/             (index.ts — TypeScript interfaces)
```
**Acceptance Criteria**: `npm run dev` berjalan tanpa error, struktur folder sesuai di atas ada.

---

## TASK-002: Design Tokens Setup
**Goal**: Implementasi color palette & typography sebagai CSS variables + Tailwind config extension.
**Files**: `src/app/globals.css`, `tailwind.config.ts`
**Detail warna (WAJIB persis, jangan diubah tanpa approval)**:
```css
:root {
  --color-primary: #1F4D3A;       /* Forest Green */
  --color-secondary: #1B2E4B;     /* Academic Navy */
  --color-accent: #D9A441;        /* Corn Yellow/Ochre */
  --color-accent-2: #8C5A3C;      /* Terracotta */
  --color-bg: #FAF7F2;            /* Warm Off-White */
  --color-text: #22252A;          /* Charcoal */
  --color-border: #C8CFC6;        /* Sage Grey-Green */
  --color-data: #3A7267;          /* Muted Teal */
}
.dark {
  --color-bg: #14171A;
  --color-primary: #3E8368;
  --color-accent: #E5B85C;
  --color-text: #F2F0EB;
}
```
**Font setup** (`next/font/google`):
- Display/Headline: `Fraunces` (weight 400,600, italic variant untuk quote)
- Body: `Plus Jakarta Sans` (weight 400,500,600,700)
- Mono/Data: `JetBrains Mono` (weight 400,500)

**Acceptance Criteria**: Semua warna dapat diakses via Tailwind class (`bg-primary`, `text-accent`, dll) melalui `theme.extend.colors` yang mereferensi CSS variables. Font ter-load dan teraplikasi di body/headline.

---

## TASK-003: Content Data Layer
**Goal**: Buat single source of truth untuk semua konten (agar AI/manusia mudah update tanpa sentuh komponen).
**Files**: `src/content/profile.ts`, `src/content/timeline.ts`, `src/content/publications.ts`, `src/content/caseStudies.ts`, `src/content/tep2026.ts`
**Struktur data minimal (`profile.ts`)**:
```typescript
export const profile = {
  name: "Dr. Panji Deoranto, S.TP., M.P., Ph.D.",
  tagline: "The Agro-Marketing Bridge Builder",
  headline: "Menjembatani Riset Akademik dengan Pemberdayaan Agroindustri — dari Jawa Tengah hingga Papua Barat Daya",
  currentRoles: [
    "Ketua International Relations Office (IRO), FTAB Universitas Brawijaya (2023-2028)",
    "Koordinator SEARCA Universitas Brawijaya",
    "Anggota Tim Ekspedisi Patriot (TEP) 2026, Kementerian Transmigrasi RI"
  ],
  metrics: {
    sinta: { citations: 298, hIndex: 8, i10Index: 2, documents: 9 },
    googleScholar: { citations: "1900+", hIndex: "~20", articles: "200+" }, // TODO: verifikasi live sebelum publish
  },
  bioShort: "...", // dari §15.2 laporan profil
  bioLong: "...",  // dari §15.4 laporan profil
} as const;
```
**PENTING — Data Integrity Rule**: Semua angka yang ditandai ⚠️ "belum terverifikasi independen" di laporan profil (akun Twitter/X @deoranto, angka live Google Scholar/Scopus, tahun pasti S1/S2) HARUS diberi komentar `// TODO: VERIFY BEFORE PUBLISH` di kode. AI agent TIDAK BOLEH menghapus komentar ini secara otomatis.

**Acceptance Criteria**: Semua komponen halaman mengambil data dari `src/content/*`, bukan hardcoded string di dalam JSX.

---

## TASK-004: Layout Components (Header, Footer, MobileNav)
**Goal**: Header sticky dengan transisi transparent→solid, mobile drawer nav, footer 4-kolom (desktop) / accordion (mobile).
**Files**: `src/components/layout/Header.tsx` (client component — perlu scroll listener), `Footer.tsx` (server component), `MobileNav.tsx` (client component)
**Detail interaksi Header**:
- Gunakan `useEffect` + scroll listener (atau `useScroll` dari Framer Motion) untuk toggle background dari `transparent` ke `bg-bg/95 backdrop-blur` setelah scroll > 50px
- Di halaman selain Home, header selalu solid dari awal
**Acceptance Criteria**: Header berfungsi identik di semua halaman, mobile drawer bisa dibuka/tutup dengan animasi slide, keyboard-accessible (Esc menutup drawer).

---

## TASK-005: Hero Section (Home)
**Goal**: Implementasi hero split 60/40 sesuai BAGIAN 5.2 poin 1.
**Files**: `src/components/sections/HeroSection.tsx`
**Detail**:
- Grid: `grid-cols-1 lg:grid-cols-[60%_40%]`
- Background: subtle route-map SVG line (Java → Philippines → Papua) sebagai decorative element (low opacity, `pointer-events-none`)
- Badge "Anggota Tim Ekspedisi Patriot 2026" — gunakan shadcn `<Badge>` dengan `bg-accent text-white`
- 2 CTA button: primary (solid forest green) "Lihat Riset" → `/research`, secondary (outline) "Kolaborasi" → `/speaking-consulting`
**Acceptance Criteria**: Responsive sempurna dari 320px-1920px, foto pakai `next/image` dengan `priority` (LCP optimization).

---

## TASK-006: Animated Stats Counter
**Goal**: Komponen reusable counter yang animasi dari 0 ke nilai target saat masuk viewport.
**Files**: `src/components/shared/AnimatedCounter.tsx` (client component)
**Detail teknis**: gunakan Framer Motion `useInView` + `useMotionValue` + `useTransform`, trigger sekali (`once: true`) agar tidak re-run tiap scroll.
**Props**: `{ value: number, suffix?: string, label: string, duration?: number }`
**Acceptance Criteria**: Counter tidak re-trigger saat scroll bolak-balik, accessible (nilai final tetap terbaca oleh screen reader via `aria-label`).

---

## TASK-007: Hero's Journey Timeline Component
**Goal**: Timeline 4 babak — horizontal scroll-snap (desktop) / vertical stepper (mobile).
**Files**: `src/components/sections/Timeline.tsx`
**Detail**: Gunakan CSS `scroll-snap-type: x mandatory` untuk desktop horizontal scroll; ubah ke `flex-col` di breakpoint `<lg`. Setiap timeline-item: tahun, judul babak, deskripsi singkat, ikon lokasi geografis.
**Acceptance Criteria**: Berfungsi via touch-swipe di mobile, keyboard arrow-navigable di desktop (opsional tapi disarankan untuk a11y).

---

## TASK-008: Research Page — Metrics Dashboard + Filterable List
**Goal**: 3-card metrics comparison (SINTA/GS/Scopus) + daftar publikasi dengan filter tahun/tema.
**Files**: `src/app/(site)/research/page.tsx`, `src/components/sections/MetricsDashboard.tsx`, `src/components/sections/PublicationList.tsx` (client component — perlu state filter)
**Detail filter**: gunakan `useState` untuk filter tema/tahun, `useMemo` untuk hasil filtered list — TIDAK perlu backend/API, semua client-side filtering dari static data.
**Acceptance Criteria**: Filter berfungsi tanpa reload, empty-state ditampilkan jika hasil filter kosong, disclaimer perbedaan metodologi SINTA vs GS ditampilkan sebagai tooltip/small text (sesuai §7.2 laporan profil).

---

## TASK-009: TEP 2026 Field Notes Page (Living Page Structure)
**Goal**: Halaman yang didesain agar mudah di-update berkala dengan entry jurnal baru.
**Files**: `src/app/(site)/tep-2026/page.tsx`, `src/content/tep2026.ts` (array of journal entries, sorted by date desc)
**Struktur data entry**:
```typescript
interface FieldJournalEntry {
  date: string;       // ISO format
  title: string;
  excerpt: string;
  imageUrl?: string;
  tags: string[];
}
```
**Acceptance Criteria**: Menambah entry baru cukup dengan menambah object baru di `tep2026.ts` tanpa menyentuh komponen. Tampilan mobile = vertical feed card.

---

## TASK-010: Contact Form
**Goal**: Form kontak dengan validasi Zod + React Hook Form.
**Files**: `src/app/(site)/contact/page.tsx`, `src/components/sections/ContactForm.tsx` (client component)
**Schema Zod**:
```typescript
const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  institution: z.string().optional(),
  purpose: z.enum(["kolaborasi", "speaking", "konsultasi", "media", "lainnya"]),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
  email: z.string().email("Format email tidak valid"),
});
```
**Submission**: Untuk versi awal (tanpa backend), gunakan Next.js Route Handler (`app/api/contact/route.ts`) yang mengirim via email service (Resend/Nodemailer — pilih salah satu, dokumentasikan API key di `.env.local.example`) ATAU cukup `mailto:` fallback jika tidak ada budget untuk email service.
**Acceptance Criteria**: Validasi inline real-time, loading state saat submit, success/error toast (gunakan shadcn `<Toast>` atau `sonner`).

---

## TASK-011: SEO & Metadata
**Goal**: Metadata API Next.js untuk setiap halaman, OG image, JSON-LD structured data (Person schema).
**Files**: `src/app/layout.tsx` (metadata default), tiap `page.tsx` (metadata per-halaman via `export const metadata`)
**JSON-LD Person Schema wajib include**: name, jobTitle, affiliation (Universitas Brawijaya), alumniOf (UGM, UPLB), sameAs (LinkedIn URL, ResearchGate jika ada)
**Acceptance Criteria**: Lighthouse SEO score ≥95, semua halaman punya unique title+description, OG image tergenerate (statis atau via `next/og`).

---

## TASK-012: Responsive QA & Performance Pass
**Goal**: Audit menyeluruh di breakpoint 320px/375px/768px/1024px/1440px/1920px.
**Checklist**:
- [ ] Tidak ada horizontal scroll tidak disengaja di mobile
- [ ] Semua tap target ≥44x44px (a11y mobile)
- [ ] Image menggunakan `next/image` dengan `sizes` attribute yang benar
- [ ] Lighthouse Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms
- [ ] Dark mode konsisten di semua komponen (tidak ada hardcoded white/black yang bocor)
**Acceptance Criteria**: Semua checklist checked, Lighthouse Performance score ≥90 (mobile).

---

## TASK-013: Deployment
**Goal**: Deploy ke Vercel, custom domain (jika tersedia), environment variables terset.
**Steps**: Connect repo ke Vercel → set env vars (email service API key) → deploy production → verifikasi semua route accessible → submit sitemap ke Google Search Console.
**Acceptance Criteria**: Live URL accessible, tidak ada 404 di internal links, sitemap.xml valid.

---

## CATATAN UNTUK AI AGENT (Google Antigravity / Gemini 3 Flash)
1. Kerjakan task secara SEKUENSIAL (TASK-001 → TASK-013) — jangan lompat kecuali dependency sudah terpenuhi.
2. Setiap task selesai, jalankan `npm run build` untuk memastikan tidak ada type error sebelum lanjut ke task berikutnya.
3. Jangan pernah menghapus komentar `// TODO: VERIFY BEFORE PUBLISH` — ini menandai data yang belum dikonfirmasi manusia.
4. Prioritaskan Server Components; hanya tambahkan `"use client"` jika benar-benar butuh interaktivitas/state/effect.
5. Semua copy/teks Bahasa Indonesia sebagai default; sediakan struktur untuk toggle EN (opsional, TASK terpisah jika diminta lanjutan).
```

---

## CATATAN PENUTUP

Dokumen ini adalah blueprint lengkap siap pakai. Sebelum menyerahkan `task.md` di atas ke AI Antigravity, disarankan:
1. Konfirmasi ke Dr. Panji Deoranto terkait item di Gap Section (foto, angka Google Scholar live, preferensi gaya komunikasi formal vs hangat) — akan mempengaruhi keputusan final copywriting.
2. Siapkan aset foto (formal + field-attire) sebelum TASK-005 dieksekusi, karena hero section bergantung pada foto berkualitas tinggi.
3. File ini dapat langsung di-paste sebagai system prompt/context awal ke Google Antigravity, atau dipecah per-TASK jika context window terbatas.
