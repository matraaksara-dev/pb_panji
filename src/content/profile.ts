export const profile = {
  name: "Dr. Panji Deoranto, S.TP., M.P., Ph.D.",
  tagline: "The Agro-Marketing Bridge Builder",
  headline: "Menjembatani Riset Akademik dengan Pemberdayaan Agroindustri — dari Jawa Tengah hingga Papua Barat Daya",
  nip: "197108062002121002",
  affiliation: {
    faculty: "Fakultas Teknologi Agroindustri dan Biosistem (FTAB)",
    university: "Universitas Brawijaya",
    department: "Teknologi Industri Pertanian",
    officeAddress: "Fakultas Teknologi Pertanian UB, Jl. Veteran, Malang 65145"
  },
  contact: {
    email: "deoranto@ub.ac.id", // TODO: VERIFY BEFORE PUBLISH (Check if correct personal institutional email)
    phone: "(+62-341) 564398",
    linkedin: "https://www.linkedin.com/in/panji-deoranto-a8a431143",
    twitter: "https://twitter.com/deoranto", // TODO: VERIFY BEFORE PUBLISH (Low-activity personal account)
  },
  metrics: {
    sinta: {
      citations: 298,
      hIndex: 8,
      i10Index: 2,
      documents: 9,
    },
    googleScholar: {
      citations: "1.900+", // TODO: VERIFY BEFORE PUBLISH (Live Scholar count verification)
      hIndex: "~20",
      articles: "200+"
    },
    scopus: {
      articles: 11,
      hIndex: 3 // TODO: VERIFY BEFORE PUBLISH (Scopus H-Index live verification)
    },
    researchGate: {
      works: "39+"
    }
  },
  currentRoles: [
    "Ketua International Relations Office (IRO), FTAB Universitas Brawijaya (2023-2028)",
    "Koordinator SEARCA Universitas Brawijaya",
    "Anggota Tim Ekspedisi Patriot (TEP) 2026, Kementerian Transmigrasi RI"
  ],
  bioShort: "Dr. Panji Deoranto, S.TP., M.P., Ph.D., adalah Assistant Professor di Departemen Teknologi Industri Pertanian, FTAB Universitas Brawijaya. Ia pakar pemasaran agroindustri, preferensi konsumen, dan manajemen rantai pasok berkelanjutan dengan fokus pemberdayaan UMKM.",
  bioLong: "Dosen senior di Universitas Brawijaya dengan spesialisasi pemasaran dan manajemen agroindustri. Lulusan UGM dan University of the Philippines Los Baños, ia telah menerbitkan puluhan riset, memimpin kolaborasi internasional, dan mendedikasikan karirnya untuk pemberdayaan UMKM serta ketahanan pangan melalui pendekatan ilmiah dan kolaboratif. Saat ini memimpin upaya internasionalisasi fakultas sambil terus menginspirasi generasi muda akademisi.",
  usp: "Pakar pemasaran agroindustri yang mengintegrasikan riset konsumen, manajemen risiko, dan praktik hijau (green practices) untuk mentransformasi UMKM menuju pasar global yang berkelanjutan.",
  coreValues: [
    { title: "Keberlanjutan (Sustainability)", desc: "Mendukung ekonomi hijau dan ramah lingkungan sesuai SDGs." },
    { title: "Kolaborasi (Collaboration)", desc: "Menghubungkan akademisi, pelaku industri, dan institusi ASEAN." },
    { title: "Berbasis Data (Data-Driven)", desc: "Pengambilan keputusan strategis menggunakan metode kuantitatif yang presisi." },
    { title: "Pemberdayaan (Empowerment)", desc: "Mengangkat potensi lokal UMKM dan masyarakat transmigran." }
  ],
  methodologies: [
    { name: "AHP / FAHP", desc: "Analytical Hierarchy Process untuk pemeringkatan dan keputusan terstruktur." },
    { name: "Fuzzy FMEA", desc: "Failure Mode and Effects Analysis berbasis logika fuzzy untuk mitigasi risiko." },
    { name: "Objective Matrix (OMAX)", desc: "Pengukuran produktivitas multi-kriteria untuk lini industri." },
    { name: "Value Stream Mapping (VSM)", desc: "Pemetaan alur nilai produksi untuk mengurangi pemborosan." }
  ]
} as const;
