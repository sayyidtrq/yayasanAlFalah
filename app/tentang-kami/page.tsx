import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Timeline, { type Milestone } from "@/components/Timeline";
import { ADDRESS, PHOTO_PLACEHOLDER, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Profil, sejarah, visi & misi, dan layanan Lembaga Kursus Al-Qur'an Al-Falah Surabaya, di bawah naungan Yayasan Masjid Al-Falah Surabaya sejak 1978.",
};

/*
 * Layout and copy follow the "Tentang Kami" boards of the client design
 * (claude.ai/artifact/Mso8LCUGEoeXCA9t5airgV). Profil and Tujuan Awal use the client's
 * supplied text verbatim. Layanan Kami is kept from the 04/10 meeting notes (not in the design).
 * Program list: masjidalfalah.or.id/lembaga-kursus-al-quran-al-falah.
 */

const profilChecks = [
  "Di bawah naungan Masjid Al-Falah Surabaya",
  "Tes penempatan untuk santri baru",
  "Pilihan jam pagi, siang, sore, dan malam",
  "Kelas tatap muka dan online",
];

// "[Perlu konfirmasi …]" notes are carried over from the design for the client to verify.
const milestones: Milestone[] = [
  {
    year: "1978",
    title: "Berawal dari Remaja Masjid",
    text: "Seksi Dakwah Remaja Masjid Al-Falah mulai menghimpun jamaah untuk belajar membaca Al-Qur'an. Angkatan awal diikuti sekitar 75 sampai 125 santri, tanpa dipungut biaya.",
  },
  {
    year: "1984",
    title: "Mulai dikelola profesional",
    text: "Kursus dikelola lebih serius dengan sistem infaq. Jumlah santri tumbuh dari ratusan hingga sekitar 1.500 orang.",
    note: "[Perlu konfirmasi: sumber menyebut 1981 dan 1984]",
  },
  {
    year: "1986",
    title: "Di bawah Majelis Pemuda Al-Falah",
    text: "Seiring berdirinya Majelis Pemuda Al-Falah, pengelolaan kursus berada di bawah tanggung jawab majelis tersebut.",
    note: "[Perlu konfirmasi: tahun perkiraan]",
  },
  {
    year: "1990",
    title: "Semi otonom di bawah Yayasan",
    text: "Kursus berdiri semi otonom, langsung di bawah bidang Pendidikan Yayasan Masjid Al-Falah Surabaya. Jajaran pembina bertambah hingga sekitar 45 ustadz.",
  },
  {
    year: "2007",
    title: "Membuka kelas anak (TPQ)",
    text: "Kursus diamanahi mengelola TPQ. Sejak itu anak usia 4 tahun sampai SMP ikut dibina bacaan Al-Qur'an, aqidah, dan akhlaknya.",
  },
  {
    year: "Kini",
    title: "Belajar untuk segala usia",
    text: "Melayani anak-anak hingga lansia melalui 16 program kursus, dengan kelas tatap muka dan online.",
    note: "[Perlu konfirmasi: tonggak setelah 2008]",
  },
];

const misi = [
  "Menyelenggarakan metode pembelajaran Al-Qur'an yang efektif dan efisien untuk semua jenjang usia.",
  "Membina hafalan dan pemahaman tajwid santri melalui tenaga pendidik kompeten dan berpengalaman.",
  "Memfasilitasi fleksibilitas belajar melalui kelas offline dan online.",
  "Membangun ekosistem dakwah Al-Qur'an yang ramah, inklusif, dan tertata rapi berbasis teknologi.",
];

const nilai = [
  { name: "Aksesibel", text: "Pilihan jam pagi sampai malam, tatap muka maupun online." },
  { name: "Berkelanjutan", text: "Belajar bertahap dan terstruktur, periode demi periode." },
  { name: "Bimbingan Profesional", text: "Tes penempatan dan pengajar yang kompeten di bidangnya." },
  { name: "Rabbani", text: "Berpegang pada nilai-nilai Al-Qur'an dalam keseharian." },
];

const rumpun = [
  {
    name: "Al-Qur'an",
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
    items: ["Sholat dan Hukum Islam", "Al Hadist", "Siroh Nabi", "Aqidah Akhlaq", "Bahasa Arab", "Dakwah"],
  },
  { name: "Praktik Ibadah", items: ["Imam & Perawatan Jenazah"] },
  { name: "Anak-Anak", items: ["Tahfidz Cilik & TPQ"] },
];

const kegiatan = [
  {
    title: "Festival Santri (FASI)",
    text: "Rangkaian lomba dan kegiatan keagamaan untuk santri dari semua jenjang kelas.",
    alt: "Peserta memenuhi ruang acara Festival Santri",
  },
  {
    title: "Haflah, Wisuda, dan Khataman",
    text: "Momen puncak bagi santri yang menyelesaikan hafalan dan khataman Al-Qur'an.",
    alt: "Wisudawati berselempang Wisuda Al-Qur'an melambaikan tangan",
  },
  {
    title: "Wisata Bakti Sosial",
    text: "Kegiatan sosial tahunan yang mempererat kebersamaan santri dan pengajar.",
    alt: "Warga menerima paket bantuan dalam kegiatan bakti sosial",
  },
];

const MAPS_QUERY = "Masjid+Al+Falah+Surabaya";
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function Pill({ tone, children }: { tone: "rust" | "teal" | "teal-on-white"; children: string }) {
  const tones = {
    rust: "bg-cream text-rust-dark",
    teal: "bg-mist text-blue-stone",
    "teal-on-white": "bg-white text-blue-stone",
  };
  return (
    <span
      className={`mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.04em] uppercase md:text-xs ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Label({ children }: { children: string }) {
  return <div className="text-[13px] leading-5 font-bold tracking-[0.08em] text-blue-stone uppercase">{children}</div>;
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="12" cy="12" r="9" stroke="var(--color-rust)" strokeWidth="1.8" />
      <path d="M8 12.4l2.6 2.6L16 9.6" stroke="var(--color-rust)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icon = { stroke: "var(--color-teal-deep)", strokeWidth: 1.7 };
function PinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-px shrink-0">
      <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" {...icon} strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="2.4" {...icon} />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-px shrink-0">
      <path d="M4 20l1.4-4.2A8 8 0 1 1 9.4 19L4 20Z" {...icon} strokeLinejoin="round" />
      <path d="M8.5 10.5c.3 2 2 3.7 4 4" {...icon} strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-px shrink-0">
      <circle cx="12" cy="12" r="8.5" {...icon} />
      <path d="M12 7.5V12l3 2" {...icon} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TentangKami() {
  return (
    <main>
      {/* Hero */}
      <header className="relative flex min-h-90 flex-col text-white md:min-h-120">
        <HeroBackdrop inner />
        <div className="relative flex flex-1 flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col justify-center px-6 pb-12 md:px-16 md:pb-14">
            <h1
              style={delay(150)}
              className="rise font-heading text-4xl font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
            >
              Tentang Kami
            </h1>
            <p
              style={delay(300)}
              className="rise mt-5 max-w-130 text-base leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)] md:text-lg"
            >
              Salah satu pelopor pendidikan Al-Qur&apos;an berbasis masjid di Kota Surabaya, di bawah
              naungan Yayasan Masjid Al-Falah Surabaya sejak 1978.
            </p>
          </div>
        </div>
      </header>

      {/* Profil */}
      <section id="profil" className="bg-white px-6 py-12 md:px-16 md:py-22">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="min-w-0 flex-1">
            <Pill tone="rust">Profil</Pill>
            <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
              Lembaga Kursus Al-Qur&apos;an Al-Falah Surabaya
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-soft md:text-[17px]">
              Lembaga Kursus Al-Qur&apos;an (LKA) Al-Falah Surabaya resmi didirikan pada tahun 1978
              sebagai bagian dari unit kegiatan dakwah di bawah naungan Yayasan Masjid Al-Falah
              Surabaya. Pembentukannya dilatarbelakangi oleh tingginya kebutuhan jamaah dan
              masyarakat umum di Surabaya akan tempat pembelajaran Al-Qur&apos;an yang terstruktur,
              khususnya bagi kalangan dewasa dan orang tua yang ingin memperlancar bacaan, memahami
              tajwid, hingga mendalami isi kandungan Al-Qur&apos;an.
            </p>
            <p className="mt-3.5 text-base leading-7 text-ink-soft md:text-[17px]">
              Kehadiran LKA ini dimotori oleh pengurus Yayasan Masjid Al-Falah bersama para tokoh
              agama dan pengajar Al-Qur&apos;an setempat yang berkomitmen menjadikan masjid bukan
              hanya sebagai tempat ibadah ritual, melainkan juga pusat pendidikan dan dakwah Islam
              yang inklusif.
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {profilChecks.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[15px] leading-[22px] font-medium text-ink">
                  <Check />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Two overlapping photos, as in the design. */}
          <Reveal delay={150} className="relative mx-auto aspect-[520/460] w-full max-w-130 shrink-0 lg:w-130">
            <div className="absolute top-0 left-0 h-full w-[73%] overflow-hidden rounded-[20px]">
              <Image
                src={PHOTO_PLACEHOLDER}
                alt="Santri dewasa belajar membaca Al-Qur'an bersama pembimbing di ruang utama masjid"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-[7%] h-[63%] w-[48%] overflow-hidden rounded-[20px] border-[6px] border-white">
              <Image
                src={PHOTO_PLACEHOLDER}
                alt="Ustadzah membimbing dua santri anak membaca buku dasar"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sejarah */}
      <section id="sejarah" className="bg-white px-6 pt-12 pb-8 md:px-16 lg:px-0 lg:pt-24">
        <Reveal className="lg:px-16 lg:text-center">
          <Pill tone="teal">Sejarah Singkat</Pill>
          <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
            Perjalanan Kami <span className="text-teal-deep">Sejak 1978</span>
          </h2>
          <p className="mt-3 max-w-160 text-[15px] leading-6 text-ink-soft md:text-base md:leading-[26px] lg:mx-auto">
            Lahir dari inisiatif para pemuda dan mahasiswa di Masjid Al-Falah, lalu tumbuh menjadi
            lembaga kursus Al-Qur&apos;an untuk segala usia.
          </p>
        </Reveal>
        <Timeline items={milestones} />
      </section>

      {/* Visi, Misi, Nilai */}
      <section id="visi-misi" className="bg-mist px-6 py-12 md:px-16 md:py-24">
        <Reveal className="md:text-center">
          <Pill tone="teal-on-white">Visi, Misi, dan Nilai</Pill>
          <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
            Arah yang Kami Pegang
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-240 rounded-2xl border border-frost bg-white px-6 py-6 md:px-10 md:py-7 md:text-center">
          <Label>Tujuan Awal</Label>
          <p className="mt-2.5 text-base leading-7 text-ink md:text-[17px]">
            Tujuan awal didirikannya Lembaga Kursus Al-Qur&apos;an Al-Falah adalah untuk mengentaskan
            buta aksara Al-Qur&apos;an di kalangan masyarakat luas serta menyediakan metode
            pembelajaran yang fleksibel dan aplikatif bagi berbagai kelompok usia. Melalui program
            pengajaran yang sistematis, lembaga ini dirancang untuk membimbing masyarakat agar mampu
            membaca Al-Qur&apos;an secara tartil, memahami hukum-hukum bacaan, serta menanamkan
            nilai-nilai Al-Qur&apos;an dalam kehidupan sehari-hari, sehingga menjadikan Masjid
            Al-Falah sebagai salah satu pelopor pendidikan Al-Qur&apos;an berbasis masjid di Kota
            Surabaya.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:text-center">
          <Label>Visi</Label>
          <p className="mx-auto mt-3.5 max-w-250 font-heading text-[26px] leading-[34px] font-bold text-balance text-ink md:text-4xl md:leading-12">
            Menjadi <span className="text-teal-deep">pusat bimbingan Al&#8209;Qur&apos;an terdepan</span>{" "}
            yang melahirkan masyarakat berakhlak mulia, fasih membaca Al&#8209;Qur&apos;an, dan
            berpegang teguh pada nilai&#8209;nilai Rabbani.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <Label>Misi</Label>
          </Reveal>
          <ol className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {misi.map((m, i) => (
              <li key={m}>
                <Reveal delay={i * 90} className="border-t-2 border-teal-deep pt-[18px]">
                  <div className="font-heading text-[28px] leading-[34px] font-bold text-teal-deep">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-2 text-base leading-[26px] text-ink">{m}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <Reveal>
            <Label>Nilai</Label>
          </Reveal>
          <Reveal className="mt-4 grid divide-y divide-line rounded-2xl border border-frost bg-white sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4 xl:divide-x">
            {nilai.map(({ name, text }, i) => (
              <div
                key={name}
                className={`px-7 py-6 ${i % 2 === 1 ? "sm:border-l sm:border-line xl:border-l-0" : ""} ${
                  i >= 2 ? "sm:border-t sm:border-line xl:border-t-0" : ""
                }`}
              >
                <h3 className="text-[17px] leading-6 font-bold text-ink">{name}</h3>
                <p className="mt-1.5 text-sm leading-[22px] text-ink-soft">{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Layanan Kami (from the 04/10 meeting notes; styled to match the design) */}
      <section id="layanan" className="bg-cream px-6 py-12 md:px-16 md:py-24">
        <Reveal className="flex flex-col">
          <div>
            <Pill tone="rust">Layanan Kami</Pill>
          </div>
          <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
            16 Program untuk Segala Usia
          </h2>
          <p className="mt-3 max-w-160 text-[15px] leading-6 text-ink-soft md:text-base md:leading-[26px]">
            Program tersusun dalam empat rumpun. Santri baru mengikuti tes penempatan agar mulai dari
            kelas yang sesuai kemampuan.
          </p>
        </Reveal>
        {/* The two single-program groups share the third column so the columns balance. */}
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {[[rumpun[0]], [rumpun[1]], [rumpun[2], rumpun[3]]].map((col, i) => (
            <Reveal key={i} delay={i * 110} className="flex flex-col gap-10">
              {col.map(({ name, items }) => (
                <div key={name} className="border-t-2 border-rust pt-[18px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-ink">{name}</h3>
                    <span className="text-sm font-semibold text-rust tabular-nums">{items.length} program</span>
                  </div>
                  <ul className="mt-4">
                    {items.map((item) => (
                      <li key={item} className="border-b border-cream-line py-3 text-[15px] font-medium text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Kegiatan Tahunan */}
      <section id="kegiatan-tahunan" className="bg-white px-6 py-12 md:px-16 md:py-24">
        <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Pill tone="rust">Di Luar Kelas</Pill>
            <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
              Kegiatan Tahunan Santri
            </h2>
          </div>
          <Link
            href="/#kegiatan"
            className="text-[15px] font-semibold whitespace-nowrap text-rust underline-offset-4 hover:underline"
          >
            Lihat Semua Kegiatan
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {kegiatan.map(({ title, text, alt }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <article className="group h-full overflow-hidden rounded-xl border border-line bg-white">
                <div className="relative h-50 overflow-hidden md:h-65">
                  <Image
                    src={PHOTO_PLACEHOLDER}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl leading-[26px] font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-[22px] text-ink-soft">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ajakan + Lokasi */}
      <section id="lokasi" className="bg-white px-6 pb-12 md:px-16 md:pb-24">
        <Reveal className="overflow-hidden rounded-[20px] bg-mist">
          <div className="relative overflow-hidden">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,92,79,0.92)_0%,rgba(0,92,79,0.8)_45%,rgba(0,92,79,0.55)_100%)]" />
            <div className="relative flex flex-col gap-6 px-6 py-8 md:min-h-50 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12">
              <div className="min-w-0">
                <h2 className="font-heading text-[28px] leading-[34px] font-bold text-white text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[34px] md:leading-[42px]">
                  Mari Belajar Al-Qur&apos;an Bersama Kami
                </h2>
                <p className="mt-2.5 max-w-150 text-[15px] leading-6 text-white/94 md:text-base md:leading-[26px]">
                  Datang langsung ke sekretariat di Masjid Al-Falah Surabaya, atau tanyakan dulu ke
                  admin kami lewat WhatsApp.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/#program"
                  className="btn-lift flex min-h-12 items-center justify-center rounded-xl bg-white px-7 text-[15px] font-semibold text-blue-stone hover:bg-surface"
                >
                  Lihat Program
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift flex min-h-12 items-center justify-center gap-2 rounded-xl bg-jewel px-7 text-[15px] font-semibold text-white hover:bg-jewel/90"
                >
                  <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
                  Daftar via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-10 lg:flex-row lg:items-stretch lg:gap-12">
            <div className="relative min-h-60 overflow-hidden rounded-xl border border-frost bg-white lg:w-130 lg:shrink-0">
              <iframe
                title="Peta lokasi Masjid Al-Falah Surabaya"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <h3 className="font-heading text-2xl leading-8 font-bold text-ink">
                Sekretariat di Masjid Al-Falah Surabaya
              </h3>
              <ul className="mt-[18px] flex flex-col gap-3 text-base leading-6">
                <li className="flex items-start gap-3 text-ink">
                  <PinIcon />
                  {ADDRESS.replace(", Surabaya", ", Darmo, Kec. Wonokromo, Surabaya")}
                </li>
                <li className="flex items-start gap-3 text-ink">
                  <ChatIcon />
                  WhatsApp {WHATSAPP_LABEL}
                </li>
                <li className="flex items-start gap-3 text-ink-soft">
                  <ClockIcon />
                  {/* ponytail: hours from the period-128 registration notice; confirm with sekretariat. */}
                  Senin–Sabtu, 07.00–17.00 WIB
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-12 items-center self-start rounded-xl border-2 border-blue-stone px-[26px] text-[15px] font-semibold text-blue-stone transition-colors hover:bg-white"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
