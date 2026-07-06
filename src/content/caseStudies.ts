export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  problem: string;
  methodology: string;
  result: string;
  category: "UMKM" | "koperasi" | "pemberdayaan" | "efisiensi";
  imageUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "emping-jagung-lamongan",
    title: "Klasterisasi & Strategi Pengembangan UMKM Emping Jagung",
    location: "Kabupaten Lamongan, Jawa Timur",
    problem: "Kurangnya fokus pengembangan strategis berdasarkan kinerja kelompok usaha emping jagung lokal yang bervariasi dalam hal kapasitas produksi dan mutu.",
    methodology: "Klasterisasi menggunakan algoritma K-Means dilanjutkan perumusan strategi prioritas dengan metode Fuzzy Analytical Hierarchy Process (Fuzzy AHP).",
    result: "Terbentuknya kelompok klaster berkinerja tinggi, sedang, dan pemula, yang membantu pemda memberikan intervensi alat produksi secara tertarget serta meningkatkan produktivitas agregat kelompok.",
    category: "UMKM"
  },
  {
    id: "kopra-halmahera",
    title: "Strategi Pengembangan Agroindustri Kopra Rakyat",
    location: "Kabupaten Halmahera Timur, Maluku Utara",
    problem: "Rendahnya nilai tambah kelapa petani lokal karena dominan menjual kopra asalan dengan rantai pemasaran yang panjang dan ketergantungan tengkulak.",
    methodology: "Analisis SWOT terintegrasi dengan Quantitative Strategic Planning Matrix (QSPM) untuk menentukan prioritas strategi pengembangan.",
    result: "Menghasilkan rekomendasi pendirian koperasi pengolah minyak kelapa murni (VCO) terintegrasi serta memperpendek rantai distribusi pemasaran luar pulau.",
    category: "koperasi"
  },
  {
    id: "kerupuk-atom-bintan",
    title: "Desain Ulang Kemasan & Legalitas Pasar Kerupuk Atom",
    location: "Desa Pengudang, Bintan, Kepulauan Riau",
    problem: "Kelompok Usaha Bersama (KUBE) Jaya Abadi menghasilkan produk kerupuk atom berkualitas tinggi namun kemasannya polos, tidak kedap udara, dan belum memiliki izin edar komersial.",
    methodology: "Pendampingan partisipatif pengabdian masyarakat, redesain kemasan modern berbahan aluminium foil dengan label informatif, serta pengurusan izin PIRT.",
    result: "Peningkatan omzet penjualan hingga 40% setelah masuk ke toko oleh-oleh premium Bintan dan peningkatan daya tahan simpan produk dari 2 minggu menjadi 6 bulan.",
    category: "pemberdayaan"
  },
  {
    id: "kopi-herbal-bromo",
    title: "Formulasi Kopi Robusta Herbal Berbasis Biji Adas & Jahe",
    location: "Kawasan Wisata Bromo, Jawa Timur",
    problem: "Ketergantungan petani kopi robusta lereng Bromo pada penjualan biji mentah dengan harga fluktuatif, serta minimnya variasi oleh-oleh khas daerah wisata.",
    methodology: "Response Surface Methodology (RSM) untuk menentukan optimasi formulasi perbandingan bubuk kopi, ekstrak jahe, dan biji adas agar didapatkan rasa terbaik.",
    result: "Terciptanya formula kopi herbal instan yang disukai wisatawan secara organoleptik dan berpotensi meningkatkan harga jual produk olahan kopi petani hingga 3 kali lipat.",
    category: "UMKM"
  },
  {
    id: "susu-pasteurisasi-vsm",
    title: "Analisis & Reduksi Pemborosan Lini Produksi Susu Pasteurisasi",
    location: "Industri Pengolahan Susu, Jawa Timur",
    problem: "Tingginya waktu tunggu (idle time) di beberapa workstation produksi susu pasteurisasi yang mengakibatkan risiko kerusakan bahan baku segar.",
    methodology: "Value Stream Mapping (VSM) untuk memetakan alur fisik dan informasi serta mengidentifikasi aktivitas non-value-added.",
    result: "Berhasil memangkas lead time produksi sebesar 18% dan mereorganisasi tata letak mesin pasteurisasi guna mengurangi pergerakan operator yang tidak perlu.",
    category: "efisiensi"
  }
];
