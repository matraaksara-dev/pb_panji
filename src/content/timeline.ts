export interface TimelineItem {
  year: string;
  title: string;
  location: string;
  description: string;
  badge?: string;
  category: "education" | "career" | "international";
}

export const timeline: TimelineItem[] = [
  {
    year: "1998",
    title: "Sarjana Teknologi Pertanian (S.TP.)",
    location: "Universitas Gadjah Mada (UGM), Yogyakarta",
    description: "Menyelesaikan studi sarjana di Departemen Teknologi Industri Pertanian UGM, mendalami irisan teknologi pengolahan hasil pertanian dengan manajemen industri.",
    category: "education"
  },
  {
    year: "2001",
    title: "Magister Pertanian (M.P.)",
    location: "Universitas Gadjah Mada (UGM), Yogyakarta",
    description: "Menyelesaikan studi master bidang Ekonomi Pertanian UGM, memperkuat dasar riset ekonomi terapan dan pemasaran agro.",
    category: "education"
  },
  {
    year: "2002",
    title: "Bergabung sebagai Dosen FTAB UB",
    location: "Universitas Brawijaya, Malang",
    description: "Memulai karir akademis di Departemen Teknologi Industri Pertanian, membawakan kuliah pemasaran agroindustri dan manajemen rantai pasok.",
    category: "career"
  },
  {
    year: "2011",
    title: "Gelar Ph.D. Agricultural Economics",
    location: "University of the Philippines Los Baños (UPLB), Filipina",
    description: "Menempuh studi doktoral sebagai SEARCA Scholar. Meneliti kebijakan pangan regional, membuka wawasan internasional dan jaringan akademisi Asia Tenggara.",
    badge: "SEARCA Scholar",
    category: "education"
  },
  {
    year: "2019",
    title: "Sertifikasi Kompetensi Pemasaran UMKM",
    location: "Badan Nasional Sertifikasi Profesi (BNSP)",
    description: "Mendapatkan sertifikasi resmi pemasaran UMKM untuk memperkuat jembatan pendampingan industri kecil-menengah berbasis metodologi profesional.",
    category: "career"
  },
  {
    year: "2023",
    title: "Ketua International Relations Office (IRO)",
    location: "FTAB Universitas Brawijaya, Malang",
    description: "Dilantik sebagai Ketua IRO FTP (sekarang FTAB) UB periode 2023-2028 untuk mengoordinasi program global mahasiswa, summer course, dan kemitraan luar negeri.",
    badge: "2023 - 2028",
    category: "career"
  },
  {
    year: "2024",
    title: "Internasionalisasi & Roadshow Akademik",
    location: "Kawasan ASEAN (Filipina, Malaysia)",
    description: "Aktif mengajar di Maejo University, mengoordinasikan University Consortium SEARCA, dan riset bersama dalam skema DGTF (Malaysia-Filipina).",
    category: "international"
  },
  {
    year: "2026",
    title: "Tim Ekspedisi Patriot (TEP) 2026",
    location: "Klamono Segun, Sorong, Papua Barat Daya",
    description: "Terpilih dalam program strategis Kementerian Transmigrasi RI. Turun ke lapangan untuk riset, kajian ilmiah, dan pengabdian penguatan wilayah transmigrasi di Papua.",
    badge: "Ekspedisi Utama",
    category: "international"
  }
];
