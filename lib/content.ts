// Shared content for the landing sliders and the /kegiatan and /program pages.

export type Kegiatan = {
  slug: string;
  badge: string;
  title: string;
  desc: string;
  date: string;
  /** Photo paths under /public. Empty until the client supplies documentation. */
  photos: string[];
};

export const kegiatan: Kegiatan[] = [
  {
    slug: "wisuda-khataman",
    badge: "Wisuda & Khataman",
    title: "Wisuda dan Khataman Al-Qur'an Santri LKF",
    desc: "Momen puncak bagi santri yang menyelesaikan hafalan dan khataman Al-Qur'an di Lembaga Kursus Al Quran Al Falah Surabaya.",
    date: "[Tanggal menyusul]",
    photos: [],
  },
  {
    slug: "festival-santri",
    badge: "Festival Santri",
    title: "Festival Santri (FASI) Lembaga Kursus Al Quran Al Falah",
    desc: "Rangkaian lomba dan kegiatan keagamaan tahunan untuk santri dari segala jenjang kelas.",
    date: "[Tanggal menyusul]",
    photos: [],
  },
  {
    slug: "bakti-sosial",
    badge: "Bakti Sosial",
    title: "Wisata Bakti Sosial Lembaga Kursus Al Quran Al Falah",
    desc: "Kegiatan sosial tahunan, bagian dari rangkaian Bulan Miladiyah yang mempererat kebersamaan santri dan pengajar.",
    date: "[Tanggal menyusul]",
    photos: [],
  },
];

export type Program = {
  slug: string;
  title: string;
  desc: string;
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
    forWho: "Pemula dari segala usia yang belum lancar membaca Al-Qur'an",
    startFrom: "Belum mengenal huruf hijaiyah",
    topics: ["Huruf hijaiyah dan harakat", "Membaca kata dan ayat pendek", "Dasar-dasar tajwid", "Menulis huruf Arab"],
  },
  {
    slug: "tafsir-al-quran",
    title: "Tafsir Al-Qur'an",
    desc: "Memahami makna dan kandungan ayat agar nilainya hidup dalam keseharian.",
    forWho: "Santri yang ingin memahami isi Al-Qur'an",
    startFrom: "Sudah lancar membaca Al-Qur'an",
    topics: ["Makna ayat dan konteksnya", "Kandungan hukum dan hikmah", "Penerapan dalam keseharian"],
  },
  {
    slug: "sholat-dan-hukum-islam",
    title: "Sholat dan Hukum Islam",
    desc: "Memantapkan tata cara ibadah dan hukum Islam yang dipakai sehari-hari.",
    forWho: "Siapa saja yang ingin ibadahnya lebih mantap",
    startFrom: "Terbuka untuk semua tingkat",
    topics: ["Thaharah dan wudhu", "Tata cara dan bacaan sholat", "Fiqih ibadah sehari-hari"],
  },
  {
    slug: "akselerasi",
    title: "Akselerasi",
    desc: "Jalur percepatan menuju bacaan Al-Qur'an yang lancar.",
    forWho: "Dewasa yang ingin lebih cepat lancar membaca",
    startFrom: "Bacaan masih terbata-bata",
    topics: ["Metode baca cepat", "Latihan membaca intensif", "Perbaikan makhraj", "Evaluasi bacaan berkala"],
  },
  {
    slug: "dakwah-public-speaking",
    title: "Dakwah & Public Speaking",
    desc: "Melatih keberanian dan keterampilan menyampaikan ilmu di depan umum.",
    forWho: "Santri yang ingin menyampaikan ilmu di depan umum",
    startFrom: "Sudah lancar membaca Al-Qur'an",
    topics: ["Menyusun materi kultum dan ceramah", "Teknik berbicara di depan umum", "Praktik tampil dan evaluasi"],
  },
];

// Class formats from the period-128 registration notice (masjidalfalah.or.id). No fees: they
// change every period and the client wants them asked via WhatsApp.
export const formatKelas = [
  {
    name: "Kelas Dewasa Reguler",
    detail: "Dua kali seminggu, 90 menit per pertemuan.",
    schedule: "Senin & Rabu, Selasa & Kamis, Jumat & Sabtu, atau Sabtu saja; pagi sampai malam",
  },
  { name: "Kelas Online", detail: "Belajar dari rumah bersama pengajar.", schedule: "Dua atau empat kali seminggu" },
  { name: "Kelas Offline Sabtu", detail: "Tatap muka di Masjid Al-Falah.", schedule: "Setiap Sabtu, 08.00–11.00 WIB" },
];

// The remaining official programs (16 total with the five above).
export const programLainnya = [
  "Tartil Al-Qur'an",
  "Tahsin Al-Qur'an",
  "Seni Baca Al-Qur'an",
  "Tarjamah Lafdhiyah Al-Qur'an",
  "Hafalan Al-Qur'an",
  "Al Hadist",
  "Siroh Nabi",
  "Aqidah Akhlaq",
  "Bahasa Arab",
  "Imam & Perawatan Jenazah",
  "Tahfidz Cilik & TPQ",
];
