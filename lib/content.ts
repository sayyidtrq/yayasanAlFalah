// Shared content for the landing sliders and the /kegiatan and /program pages.

export type Kegiatan = {
  slug: string;
  badge: string;
  title: string;
  desc: string;
  date: string;
};

export const kegiatan: Kegiatan[] = [
  {
    slug: "wisuda-khataman",
    badge: "Wisuda & Khataman",
    title: "Wisuda dan Khataman Al-Qur'an Santri LKF",
    desc: "Momen puncak bagi santri yang menyelesaikan hafalan dan khataman Al-Qur'an di Lembaga Kursus Al Quran Al Falah Surabaya.",
    date: "[Tanggal menyusul]",
  },
  {
    slug: "festival-santri",
    badge: "Festival Santri",
    title: "Festival Santri (FASI) Lembaga Kursus Al Quran Al Falah",
    desc: "Rangkaian lomba dan kegiatan keagamaan tahunan untuk santri dari segala jenjang kelas.",
    date: "[Tanggal menyusul]",
  },
  {
    slug: "bakti-sosial",
    badge: "Bakti Sosial",
    title: "Wisata Bakti Sosial Lembaga Kursus Al Quran Al Falah",
    desc: "Kegiatan sosial tahunan, bagian dari rangkaian Bulan Miladiyah yang mempererat kebersamaan santri dan pengajar.",
    date: "[Tanggal menyusul]",
  },
];

export type Program = { slug: string; title: string; desc: string };

// The five programs featured in the landing slider (client review, 14/10).
// ponytail: descriptions are drafts from masjidalfalah.or.id's program list; confirm with the client.
export const programUnggulan: Program[] = [
  {
    slug: "baca-tulis-al-quran",
    title: "Baca Tulis Al-Qur'an",
    desc: "Belajar mengenal huruf hijaiyah, membaca Al-Qur'an dengan benar, memahami dasar-dasar tajwid, hingga menulis huruf Arab. Cocok untuk pemula dari segala usia.",
  },
  {
    slug: "tafsir-al-quran",
    title: "Tafsir Al-Qur'an",
    desc: "Mendalami makna dan kandungan ayat-ayat Al-Qur'an agar nilai-nilainya dapat dipahami dan diamalkan dalam kehidupan sehari-hari.",
  },
  {
    slug: "sholat-dan-hukum-islam",
    title: "Sholat dan Hukum Islam",
    desc: "Mempelajari tata cara ibadah, khususnya sholat, beserta hukum-hukum Islam yang dibutuhkan dalam keseharian.",
  },
  {
    slug: "akselerasi",
    title: "Akselerasi",
    desc: "Program percepatan bagi santri yang ingin lancar membaca Al-Qur'an dalam waktu yang lebih singkat.",
  },
  {
    slug: "dakwah-public-speaking",
    title: "Dakwah & Public Speaking",
    desc: "Melatih kemampuan menyampaikan dakwah dan berbicara di depan umum dengan percaya diri, runtut, dan santun.",
  },
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
