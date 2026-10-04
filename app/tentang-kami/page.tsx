import type { Metadata } from "next";
import Image from "next/image";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import { ADDRESS, PHOTO_PLACEHOLDER, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Profil, visi & misi, dan layanan Lembaga Kursus Al Quran Al Falah, lembaga pendidikan non-formal di bawah Yayasan Masjid Al Falah Surabaya sejak 1978.",
};

/*
 * Sources (researched 2026-10-04):
 * - masjidalfalah.or.id/lembaga-kursus-al-quran-al-falah  (profil, 16 program)
 * - masjidalfalah.or.id/sejarah                            (1973 masjid, 1976 yayasan)
 * - masjidalfalah.or.id/pendaftaran-santri-periode-128     (format kelas, tes penempatan)
 * - kursusquran.blogspot.com "Profil Kursus Al Falah"      (1978, 1981, 2007 TPQ)
 * Visi & misi are not published by LKF; the copy below is derived from its stated tujuan
 * and origin. ponytail: confirm wording with pengurus before launch.
 */

const timeline = [
  { year: "1973", text: "Masjid Al Falah Surabaya diresmikan, bertepatan dengan 1 Ramadhan 1393 H." },
  { year: "1976", text: "Yayasan Masjid Al Falah Surabaya berdiri dengan akta notaris 17 Maret 1976." },
  {
    year: "1978",
    text: "Kursus Al-Qur'an lahir dari inisiatif remaja masjid dan mahasiswa IAIN Sunan Ampel serta ITS.",
  },
  { year: "1981", text: "Dikelola secara profesional dengan sistem periode dan kurikulum bertahap." },
  { year: "2007", text: "Mulai mengelola TPQ untuk anak usia 4 tahun ke atas." },
  { year: "Kini", text: "16 program, kelas tatap muka, online, dan blended untuk segala usia." },
];

const visi =
  // Non-breaking hyphens keep "Al‑Qur'an" on one line in the large display type.
  "Menjadi wadah pembelajaran Al‑Qur'an yang mengajarkan, mengembangkan, dan mewujudkan nilai‑nilai Al‑Qur'an dalam kehidupan sehari‑hari.";

const misi = [
  "Menyelenggarakan pembelajaran Al-Qur'an yang tertib dan bertahap, dari baca tulis hingga tafsir dan hafalan.",
  "Membuka akses belajar bagi segala usia, dari anak-anak hingga lansia, tatap muka maupun online.",
  "Menjadi wadah pengembangan bakat dakwah keagamaan bagi generasi muda.",
  "Mendukung peran Masjid Al Falah sebagai pusat ibadah, dakwah, dan pembinaan umat.",
];

const rumpun = [
  {
    name: "Al-Qur'an",
    blurb: "Dari mengenal huruf hingga memahami makna.",
    items: [
      "Baca Tulis Al-Qur'an",
      "Tartil Al-Qur'an",
      "Tahsin Al-Qur'an",
      "Seni Baca Al-Qur'an",
      "Tafsir Al-Qur'an",
      "Tarjamah Lafdhiyah Al-Qur'an",
      "Hafalan Al-Qur'an",
      "Akselerasi",
    ],
  },
  {
    name: "Studi Islam",
    blurb: "Bekal ilmu untuk ibadah dan keseharian.",
    items: ["Sholat dan Hukum Islam", "Al Hadist", "Siroh Nabi", "Aqidah Akhlaq", "Bahasa Arab", "Dakwah"],
  },
  {
    name: "Praktik Ibadah",
    blurb: "Keterampilan yang dibutuhkan umat.",
    items: ["Imam & Perawatan Jenazah"],
  },
  {
    name: "Anak-Anak",
    blurb: "Fondasi sejak usia dini.",
    items: ["Tahfidz Cilik & TPQ"],
  },
];

const formatKelas = [
  {
    name: "Kelas Dewasa Reguler",
    detail: "Dua kali seminggu, 90 menit per pertemuan. Pilihan hari Senin–Rabu, Selasa–Kamis, Jumat–Sabtu, atau Sabtu saja, dari pagi hingga malam.",
  },
  { name: "TPQ Al Falah", detail: "Blended learning (online dan tatap muka), Senin sampai Kamis sore." },
  { name: "Tahfidz Cilik", detail: "Setiap Sabtu siang. Santri sudah dapat membaca Al-Qur'an." },
  { name: "Kelas Online", detail: "Dua atau empat kali seminggu, dengan jadwal siang hingga malam." },
  { name: "Kelas Offline Sabtu", detail: "Satu sesi panjang setiap Sabtu pagi." },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function TentangKami() {
  return (
    <main>
      <header className="relative flex min-h-105 flex-col text-white">
        <HeroBackdrop />
        <div className="relative flex flex-1 flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col justify-center px-6 pb-12 md:px-16">
            <h1
              style={delay(150)}
              className="rise font-heading text-4xl font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
            >
              Tentang Kami
            </h1>
            <p
              style={delay(300)}
              className="rise mt-5 max-w-[52ch] text-lg leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
            >
              Lembaga pendidikan non-formal di bawah Yayasan Masjid Al Falah Surabaya, membimbing
              santri segala usia sejak 1978.
            </p>
          </div>
        </div>
      </header>

      {/* Profil */}
      <section id="profil" className="bg-cream px-6 py-20 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-heading text-4xl leading-tight font-bold text-ink text-balance md:text-5xl">
              Profil Lembaga
            </h2>
            <p className="max-w-[62ch] text-lg leading-8 text-ink">
              Lembaga Kursus Al Qur&apos;an Al Falah (LKF) adalah lembaga di bawah naungan Yayasan
              Masjid Al Falah Surabaya yang bergerak di bidang pendidikan non-formal: mengajarkan,
              mengembangkan, dan mewujudkan nilai-nilai Al-Qur&apos;an dalam kehidupan sehari-hari.
            </p>
            <p className="max-w-[62ch] text-base leading-7 text-ink-soft">
              Kursus ini lahir dari para pemuda dan mahasiswa yang menginginkan wadah yang mudah
              untuk mengembangkan bakat dakwah keagamaan. Dari puluhan santri di awal, LKF tumbuh
              menjadi salah satu program unggulan Masjid Al Falah dan telah meluluskan ribuan santri
              dari beragam usia.
            </p>
          </Reveal>
          <Reveal delay={150} className="relative min-h-72 overflow-hidden rounded-2xl border border-line">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="font-heading text-2xl font-bold text-ink md:text-3xl">Perjalanan Kami</h3>
        </Reveal>
        <ol className="relative mt-10 grid gap-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {/* Rail behind the year markers on wide screens. */}
          <span aria-hidden="true" className="absolute top-[11px] right-0 left-0 hidden h-px bg-cream-line lg:block" />
          {timeline.map(({ year, text }, i) => (
            <li key={year} className="relative">
              <Reveal delay={i * 90} className="flex flex-col gap-3">
                <span aria-hidden="true" className="relative z-10 size-[23px] rounded-full border-[5px] border-cream bg-rust" />
                <span className="font-heading text-3xl font-bold text-rust">{year}</span>
                <p className="text-sm leading-6 text-ink-soft">{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <Stats />

      {/* Visi & Misi */}
      <section id="visi-misi" className="bg-blue-stone px-6 py-20 text-white md:px-16">
        <Reveal>
          <h2 className="font-heading text-4xl leading-tight font-bold md:text-5xl">Visi &amp; Misi</h2>
        </Reveal>
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-[0.06em] text-white/70 uppercase">Visi</h3>
            <p className="font-heading text-3xl leading-snug font-bold text-balance md:text-[34px] md:leading-[1.3]">
              {visi}
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-[0.06em] text-white/70 uppercase">Misi</h3>
            <ul>
              {misi.map((m) => (
                <li key={m} className="border-t border-white/20 py-5 text-base leading-7 text-white/90 last:border-b">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="bg-mist px-6 py-20 md:px-16">
        <Reveal className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl leading-tight font-bold text-ink md:text-5xl">Layanan Kami</h2>
          <p className="max-w-[62ch] text-lg leading-8 text-ink-soft">
            Enam belas program dalam empat rumpun. Santri baru mengikuti tes penempatan agar mulai
            dari kelas yang sesuai kemampuan.
          </p>
        </Reveal>

        {/* The two single-program groups share the third column so the columns balance. */}
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {[[rumpun[0]], [rumpun[1]], [rumpun[2], rumpun[3]]].map((col, i) => (
            <Reveal key={i} delay={i * 110} className="flex flex-col gap-12">
              {col.map(({ name, blurb, items }) => (
                <div key={name} className="flex flex-col border-t-2 border-ink pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-ink">{name}</h3>
                    <span className="text-sm font-semibold text-teal-deep tabular-nums">
                      {items.length} program
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{blurb}</p>
                  <ul className="mt-5">
                    {items.map((item) => (
                      <li key={item} className="border-b border-line py-3 text-[15px] font-medium text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-bold text-ink md:text-3xl">Format Kelas</h3>
          <p className="text-sm text-ink-soft">
            Satu periode berlangsung sekitar empat bulan. Jadwal dapat berubah tiap periode, konfirmasi
            ke admin sebelum mendaftar.
          </p>
        </Reveal>
        <dl className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
          {formatKelas.map(({ name, detail }, i) => (
            <Reveal
              key={name}
              delay={i * 70}
              className="grid gap-1 border-b border-line px-6 py-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8"
            >
              <dt className="text-base font-semibold text-ink">{name}</dt>
              <dd className="text-[15px] leading-7 text-ink-soft">{detail}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Lokasi */}
      <section className="bg-cream px-6 py-20 md:px-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
          <Reveal className="flex flex-col items-start justify-center gap-4">
            <h2 className="font-heading text-4xl font-bold text-ink">Lokasi &amp; Kontak</h2>
            <p className="text-base leading-7 text-ink-soft">
              {ADDRESS}
              <br />
              Darmo, Wonokromo, Surabaya 60264
            </p>
            <p className="text-base text-ink-soft">WA {WHATSAPP_LABEL}</p>
            <p className="text-sm text-ink-soft">
              Sekretariat buka Senin–Sabtu, 07.00–17.00 WIB. Minggu libur.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift mt-2 flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-7 text-[15px] font-semibold text-white hover:bg-jewel/90"
            >
              <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
              Hubungi via WhatsApp
            </a>
          </Reveal>
          {/* ponytail: map placeholder, swap for an embed or a photo of the location. */}
          <Reveal delay={150} className="relative min-h-64 overflow-hidden rounded-2xl border border-line">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
          </Reveal>
        </div>
      </section>

      <CtaDaftar />
      <Footer />
    </main>
  );
}
