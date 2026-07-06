export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  sinta?: number;
  doi?: string;
  doiUrl?: string;
  summary: string;
  keywords: string[];
  type: "latest" | "popular";
}

export const publications: Publication[] = [
  {
    id: "bsfl-extraction-2024",
    title: "Optimasi Ekstraksi Minyak BSFL (Hermetia illucens) dengan Metode Microwave Assisted Extraction (MAE) sebagai Bahan Baku Biodiesel",
    authors: "Novianti Adi Rohmanna, Panji Deoranto, Muhammad Arwani, Zuliyan Agus Nur Muchlis Majid",
    year: 2024,
    journal: "Jurnal Agroindustri, BPFP Faperta Universitas Bengkulu — Vol. 14 No. 1, hlm. 11–25",
    sinta: 2,
    doi: "10.31186/jagroindustri.14.1.11-25",
    doiUrl: "https://doi.org/10.31186/jagroindustri.14.1.11-25",
    summary: "Riset ini mengkaji proses ekstraksi minyak dari larva lalat tentara hitam (Hermetia illucens / BSFL) menggunakan teknik microwave assisted extraction untuk menghasilkan bahan baku biodiesel alternatif. Publikasi ini menunjukkan perluasan minat riset Dr. Panji ke arah bioenergi dan valorisasi limbah organik.",
    keywords: ["BSFL", "Hermetia illucens", "microwave assisted extraction", "biodiesel", "energi terbarukan"],
    type: "latest"
  },
  {
    id: "robusta-productivity-2023",
    title: "Robusta Coffee Processing Productivity Analysis Using Objective Matrix (OMAX) Method (Case Study at PT Tinkerbels Permata Indah, Bogor, West Java)",
    authors: "Panji Deoranto, Abiyyu Yazid Hilal, Isti Purwaningsih",
    year: 2023,
    journal: "Advances in Food Science, Sustainable Agriculture and Agroindustrial Engineering (AFSSAAE) — Vol. 6, No. 4, hlm. 350–361",
    sinta: 2,
    doi: "10.21776/ub.afssaae.2023.006.04.3",
    doiUrl: "https://doi.org/10.21776/ub.afssaae.2023.006.04.3",
    summary: "Menganalisis tingkat produktivitas pengolahan kopi robusta menggunakan metode Objective Matrix (OMAX) — pendekatan multi-kriteria untuk mengintegrasikan berbagai rasio kinerja ke dalam skor terintegrasi. Relevan bagi peningkatan efisiensi pengolah kopi menengah.",
    keywords: ["produktivitas", "OMAX", "kopi robusta", "agroindustri", "efisiensi produksi"],
    type: "latest"
  },
  {
    id: "rural-women-empowerment-2023",
    title: "Fostering Empowerment and Building Capacities of Rural Women Through Community-Based Agroindustry: A Case Study in Donowarih Village, Indonesia",
    authors: "Sri Suhartini, Susinggih Wijana, Widya Dwi Rukmi Putri, Panji Deoranto, Rohma, Novita Ainur Rahma, Masud Effendi",
    year: 2023,
    journal: "Journal of Innovation and Applied Technology (JIAT), LPPM Universitas Brawijaya — Vol. 9, No. 2, hlm. 50–56",
    sinta: 5,
    doi: "10.21776/ub.jiat.2023.9.2.08",
    doiUrl: "https://doi.org/10.21776/ub.jiat.2023.9.2.08",
    summary: "Mendokumentasikan program pemberdayaan kelompok perempuan di Desa Donowarih melalui pendekatan agroindustri berbasis komunitas. Menekankan pengolahan pangan lokal menjadi produk bernilai tambah tinggi.",
    keywords: ["pemberdayaan perempuan", "agroindustri komunitas", "community empowerment", "pengabdian masyarakat"],
    type: "latest"
  },
  {
    id: "green-marketing-2021",
    title: "Green Marketing Mix: An Example of Its Influences on Purchasing Decision",
    authors: "Retno Astuti, Panji Deoranto, M. L. A. Wicaksono, Ayman Nazzal",
    year: 2021,
    journal: "IOP Conference Series: Earth and Environmental Science, Vol. 733 — ICGAB 2020, Malang",
    doi: "10.1088/1755-1315/733/1/012064",
    doiUrl: "https://doi.org/10.1088/1755-1315/733/1/012064",
    summary: "Riset ini menguji pengaruh bauran pemasaran hijau (green marketing mix) terhadap keputusan pembelian konsumen keju mozzarella menggunakan Partial Least Square (PLS). Menjadi acuan populer untuk kajian pemasaran hijau di Indonesia.",
    keywords: ["green marketing mix", "purchasing decision", "PLS", "consumer behavior", "keberlanjutan"],
    type: "popular"
  },
  {
    id: "marketing-mix-7p-2021",
    title: "Pengaruh Marketing Mix (7P) dan Perilaku Konsumen terhadap Keputusan Pembelian Produk Healthy Food Bar di Malang",
    authors: "Etty Caroline, Imam Santoso, Panji Deoranto",
    year: 2021,
    journal: "Jurnal Manajemen Pemasaran, Universitas Kristen Petra — Vol. 15, No. 1, hlm. 10–19",
    sinta: 4,
    doi: "10.9744/pemasaran.15.1.10-19",
    doiUrl: "https://doi.org/10.9744/pemasaran.15.1.10-19",
    summary: "Menguji elemen bauran pemasaran 7P serta perilaku konsumen terhadap keputusan pembelian healthy food bar di Malang. Menjadi rujukan dalam kajian pangan fungsional terapan.",
    keywords: ["marketing mix 7P", "perilaku konsumen", "healthy food bar", "keputusan pembelian"],
    type: "popular"
  },
  {
    id: "employee-performance-2020",
    title: "Employee Performance Assessment Using Analytical Network Process and Rating Scale",
    authors: "Riska Septifani, Panji Deoranto, Tiyas Widya Armanda",
    year: 2020,
    journal: "Jurnal Teknik Industri, Universitas Muhammadiyah Malang — Vol. 21, No. 1, hlm. 70–79",
    sinta: 2,
    doi: "10.22219/JTIUMM.Vol21.No1.70-79",
    doiUrl: "https://doi.org/10.22219/JTIUMM.Vol21.No1.70-79",
    summary: "Memadukan Analytical Network Process (ANP) dan rating scale untuk evaluasi kinerja karyawan yang objektif, memperhitungkan interdependensi kriteria penilaian.",
    keywords: ["ANP", "rating scale", "penilaian kinerja karyawan", "multi-criteria decision making"],
    type: "popular"
  },
  {
    id: "waste-analysis-2022",
    title: "Waste Analysis of Coated Peanut Production Using Fuzzy Analytical Hierarchy Process (Fuzzy AHP)",
    authors: "Erika Ayu Yuanita, Panji Deoranto, Arif Hidayat, Riska Septifani, Wendra Gandhatyasri Rohmah",
    year: 2022,
    journal: "Advances in Food Science, Sustainable Agriculture and Agroindustrial Engineering (AFSSAAE) — Special Issue ICGAB 2022, hlm. 123–133",
    sinta: 2,
    summary: "Menerapkan Fuzzy AHP untuk menganalisis dan memprioritaskan limbah produksi pada proses pembuatan kacang salut. Merepresentasikan keahlian kuantitatif Dr. Panji dalam logika fuzzy untuk efisiensi produksi.",
    keywords: ["fuzzy AHP", "waste analysis", "coated peanut", "efisiensi produksi", "agroindustri berkelanjutan"],
    type: "popular"
  }
];
