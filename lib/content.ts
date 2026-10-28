// Shared content for the landing sliders and the /berita and /program pages.

// Berita categories (client revision 17/10). The gallery filters by these.
export const beritaKategori = [
  { slug: "kegiatan", label: "Kegiatan" },
  { slug: "kajian-islam", label: "Kajian Islam" },
  { slug: "hukum-islam", label: "Hukum Islam" },
] as const;
export type KategoriSlug = (typeof beritaKategori)[number]["slug"];

export type Kegiatan = {
  slug: string;
  kategori: KategoriSlug;
  badge: string;
  title: string;
  desc: string;
  date: string;
  /** Photo paths under /public. Empty until the client supplies documentation. */
  photos: string[];
  /** External article about this kegiatan; shown as a link while there are no photos. */
  href?: string;
};

export const kegiatan: Kegiatan[] = [
  {
    slug: "wisuda-khataman",
    kategori: "kegiatan",
    badge: "Wisuda & Khataman",
    title: "Wisuda dan Khataman Al-Qur'an Santri LKF",
    desc: "Momen puncak bagi santri yang menyelesaikan hafalan dan khataman Al-Qur'an di Lembaga Kursus Al Quran Al Falah Surabaya.",
    date: "[Tanggal menyusul]",
    photos: ["/images/kegiatan/wisuda-1.jpg", "/images/kegiatan/wisuda-2.jpg"],
  },
  {
    slug: "festival-santri",
    kategori: "kegiatan",
    badge: "Festival Santri",
    title: "Festival Santri (FASI) Lembaga Kursus Al Quran Al Falah",
    desc: "Rangkaian lomba dan kegiatan keagamaan tahunan untuk santri dari segala jenjang kelas.",
    date: "[Tanggal menyusul]",
    photos: ["/images/kegiatan/festival-1.jpg", "/images/kegiatan/festival-2.jpg"],
  },
  {
    slug: "bakti-sosial",
    kategori: "kegiatan",
    badge: "Bakti Sosial",
    title: "Wisata Bakti Sosial Lembaga Kursus Al Quran Al Falah",
    desc: "Kegiatan sosial tahunan, bagian dari rangkaian Bulan Miladiyah yang mempererat kebersamaan santri dan pengajar.",
    date: "[Tanggal menyusul]",
    photos: ["/images/kegiatan/baksos.jpg"],
  },
  // Photos below are the client's visual placement (28/10); the news photo is the one from the portal article.
  {
    slug: "pembelajar-dewasa",
    kategori: "kegiatan",
    badge: "Pembelajar Dewasa",
    title: "Fasilitasi Pembelajar Dewasa: Program Fleksibel Bebas Buta Aksara Al-Qur'an",
    desc: "Program dasar membaca Al-Qur'an dan tadarus untuk orang dewasa dan pekerja, dengan jadwal fleksibel.",
    date: "28 Juli 2026",
    photos: ["/images/kegiatan/pembelajar-dewasa.jpg"],
    href: "https://wartapoint.id/2026/07/28/fasilitasi-pembelajar-dewasa-lkq-al-falah-surabaya-hadirkan-program-fleksibel-bebas-buta-aksara-al-quran/",
  },
];

export type Program = {
  slug: string;
  title: string;
  desc: string;
  /** Photo path under /public, shown in the landing slider. */
  image: string;
  forWho: string;
  startFrom: string;
  topics: string[];
};

// The five programs featured in the landing slider (client review, 14/10).
// ponytail: desc / forWho / startFrom / topics are drafts derived from masjidalfalah.or.id's
// program list; the client must confirm them before launch.
export const programUnggulan: Program[] = [
  {
    slug: "baca-tulis-al-quran",
    title: "Baca Tulis Al-Qur'an",
    desc: "Fondasi membaca Al-Qur'an dengan benar, dari huruf pertama hingga lancar menulis.",
    image: "/images/program/baca-tulis-al-quran.jpg",
    forWho: "Pemula dari segala usia yang belum lancar membaca Al-Qur'an",
    startFrom: "Belum mengenal huruf hijaiyah",
    topics: ["Huruf hijaiyah dan harakat", "Membaca kata dan ayat pendek", "Dasar-dasar tajwid", "Menulis huruf Arab"],
  },
  {
    slug: "tafsir-al-quran",
    title: "Tafsir Al-Qur'an",
    desc: "Memahami makna dan kandungan ayat agar nilainya hidup dalam keseharian.",
    image: "/images/program/tafsir-al-quran.jpg",
    forWho: "Santri yang ingin memahami isi Al-Qur'an",
    startFrom: "Sudah lancar membaca Al-Qur'an",
    topics: ["Makna ayat dan konteksnya", "Kandungan hukum dan hikmah", "Penerapan dalam keseharian"],
  },
  {
    slug: "sholat-dan-hukum-islam",
    title: "Sholat dan Hukum Islam",
    desc: "Memantapkan tata cara ibadah dan hukum Islam yang dipakai sehari-hari.",
    image: "/images/program/sholat-dan-hukum-islam.jpg",
    forWho: "Siapa saja yang ingin ibadahnya lebih mantap",
    startFrom: "Terbuka untuk semua tingkat",
    topics: ["Thaharah dan wudhu", "Tata cara dan bacaan sholat", "Fiqih ibadah sehari-hari"],
  },
  {
    slug: "akselerasi",
    title: "Akselerasi",
    desc: "Jalur percepatan menuju bacaan Al-Qur'an yang lancar.",
    image: "/images/program/akselerasi.jpg",
    forWho: "Dewasa yang ingin lebih cepat lancar membaca",
    startFrom: "Bacaan masih terbata-bata",
    topics: ["Metode baca cepat", "Latihan membaca intensif", "Perbaikan makhraj", "Evaluasi bacaan berkala"],
  },
  {
    slug: "dakwah-public-speaking",
    title: "Dakwah & Public Speaking",
    desc: "Melatih keberanian dan keterampilan menyampaikan ilmu di depan umum.",
    image: "/images/program/dakwah-public-speaking.jpg",
    forWho: "Santri yang ingin menyampaikan ilmu di depan umum",
    startFrom: "Sudah lancar membaca Al-Qur'an",
    topics: ["Menyusun materi kultum dan ceramah", "Teknik berbicara di depan umum", "Praktik tampil dan evaluasi"],
  },
];

export type JadwalKelas = {
  name: string;
  detail: string;
  groups: { days: string; slots: string[] }[];
  note?: string;
};

// Class schedule. Kelas Reguler: period 133 timetable supplied by the client (17/10).
// TPQ and Tahfidz: period 128 notice on masjidalfalah.or.id, the newest published; flagged until
// the client confirms period 133. No fees: they change every period (client decision).
const REGULER_SLOTS = ["05.30–07.00", "08.00–09.30", "09.45–11.15", "13.00–14.30", "15.30–17.00", "19.30–21.00"];
export const jadwalKelas: JadwalKelas[] = [
  {
    name: "Kelas Reguler",
    detail:
      "Pembelajaran diselenggarakan 2 kali dalam seminggu dengan durasi 90 menit per sesi. Silakan tentukan opsi kombinasi hari dan sesi jam yang Anda inginkan.",
    groups: [
      { days: "Senin & Rabu", slots: REGULER_SLOTS },
      { days: "Selasa & Kamis", slots: REGULER_SLOTS },
      { days: "Jumat & Sabtu", slots: ["05.30–07.00"] },
      { days: "Sabtu", slots: ["08.00–11.15"] },
    ],
  },
  {
    name: "Kelas TPQ",
    detail: "Untuk anak, belajar tatap muka dan online (blended).",
    groups: [
      { days: "Senin – Kamis", slots: ["15.30–17.00"] },
      { days: "Sabtu", slots: ["08.00–11.15"] },
    ],
    note: "Jadwal periode 128, menunggu konfirmasi",
  },
  {
    name: "Kelas Tahfidz untuk TK – SMP",
    detail: "Hafalan Al-Qur'an untuk anak yang sudah bisa membaca Al-Qur'an.",
    groups: [{ days: "Sabtu", slots: ["13.00–14.30"] }],
    note: "Jadwal periode 128, menunggu konfirmasi",
  },
];

// The remaining programs (14 total with the five above; Siroh Nabi and Imam & Perawatan Jenazah
// were dropped by the client, 17/10).
export const programLainnya = [
  "Tartil Al-Qur'an",
  "Tahsin Al-Qur'an",
  "Seni Baca Al-Qur'an",
  "Tarjamah Lafdhiyah Al-Qur'an",
  "Hafalan Al-Qur'an",
  "Al Hadist",
  "Aqidah Akhlaq",
  "Bahasa Arab",
  "Tahfidz Cilik & TPQ",
];
