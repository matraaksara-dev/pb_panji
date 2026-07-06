export interface JournalEntry {
  id: string;
  date: string;       // YYYY-MM-DD
  title: string;
  excerpt: string;
  content: string;
  location: string;
  tags: string[];
}

export interface TEPTeamMember {
  name: string;
  role: string;
  institution: string;
}

export const tepTeam: TEPTeamMember[] = [
  {
    name: "Dr. Panji Deoranto, S.TP., M.P., Ph.D.",
    role: "Pakar Pemasaran Agroindustri & Kelayakan Bisnis",
    institution: "Universitas Brawijaya"
  },
  {
    name: "Dr. Elya Mufidah",
    role: "Spesialis Teknologi Pengolahan Pangan",
    institution: "Universitas Brawijaya"
  },
  {
    name: "Dr. Ir. Anang Lastriyanto",
    role: "Pakar Mesin Pengering & Rekayasa Proses",
    institution: "Universitas Brawijaya"
  },
  {
    name: "Yusron Sugiarto, S.TP., M.P., M.Sc., Ph.D.",
    role: "Spesialis Pemberdayaan Masyarakat & Pembangunan Wilayah",
    institution: "Universitas Brawijaya"
  }
];

export const fieldJournal: JournalEntry[] = [
  {
    id: "journal-entri-1",
    date: "2026-06-15",
    title: "Tiba di Sorong: Memulai Penjajakan di Lahan Transmigrasi Segun",
    location: "Sorong, Papua Barat Daya",
    excerpt: "Tim Ekspedisi Patriot 2026 mendarat di Sorong. Kami langsung berkoordinasi dengan dinas transmigrasi setempat untuk melakukan pemetaan awal komoditas jagung lokal di Distrik Segun.",
    content: "Hari pertama diawali dengan koordinasi intensif bersama jajaran dinas ketenagakerjaan dan transmigrasi. Kami mendapati tantangan logistik yang cukup signifikan dalam pemasaran hasil bumi petani transmigran. Rencananya, program R7 King Corn akan diintegrasikan dengan sistem pasokan terstruktur untuk menjamin kestabilan harga jual di tingkat petani.",
    tags: ["Persiapan", "Survey", "Sorong"]
  },
  {
    id: "journal-entri-2",
    date: "2026-06-20",
    title: "Uji Coba Pengering Jagung Vakum bersama Warga Klamono",
    location: "Distrik Klamono, Sorong",
    excerpt: "Melakukan instalasi dan uji fungsi mesin pengering vakum hemat energi. Warga antusias belajar cara menurunkan kadar air pipilan jagung agar tidak mudah berjamur.",
    content: "Kadar air tinggi merupakan kendala utama pengolahan pasca-panen di iklim basah Papua. Dr. Ir. Anang memimpin perakitan unit pengering, sementara saya mendiskusikan model manajemen kepemilikan alat oleh badan usaha milik desa (BUMDes) agar perawatannya berkelanjutan.",
    tags: ["Teknologi", "Pemberdayaan", "Klamono"]
  },
  {
    id: "journal-entri-3",
    date: "2026-06-25",
    title: "Workshop Rantai Nilai Jagung: Menghubungkan Petani dengan Industri Pakan",
    location: "Distrik Segun, Sorong",
    excerpt: "Mempertemukan kelompok tani dengan perwakilan asosiasi pakan ternak. Merumuskan kesepakatan standar mutu minimal jagung yang dapat diserap pasar.",
    content: "Strategi pemasaran agroindustri tidak bisa berjalan jika standar kualitas tidak seragam. Kami mengadakan pelatihan sortasi dan standardisasi grade jagung. Harapannya, hasil panen warga transmigran Klamono-Segun tidak hanya diserap pasar lokal, tapi memiliki nilai jual premium di pasar regional.",
    tags: ["Agro-Marketing", "Kemitraan", "Segun"]
  }
];
