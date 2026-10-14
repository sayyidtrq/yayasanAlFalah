import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import LokasiPanel from "@/components/LokasiPanel";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PHOTO_PLACEHOLDER } from "@/lib/site";

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

const profilPoints = [
  {
    icon: "mosque",
    title: "Di Bawah Naungan Masjid Al-Falah",
    text: "Belajar bersama lembaga yang berada di bawah naungan Masjid Al-Falah Surabaya.",
  },
  {
    icon: "clipboard",
    title: "Penempatan Kelas yang Tepat",
    text: "Tes penempatan untuk membantu menentukan kelas sesuai kemampuan awal santri.",
  },
  {
    icon: "clock",
    title: "Jadwal Belajar Fleksibel",
    text: "Pilih jadwal pagi, siang, sore, atau malam sesuai ketersediaan kelas.",
  },
  {
    icon: "devices",
    title: "Belajar Offline maupun Online",
    text: "Pilih metode belajar tatap muka atau online sesuai kebutuhanmu.",
  },
] as const;

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
    items: ["Sholat dan Hukum Islam", "Al Hadist", "Siroh Nabi", "Aqidah Akhlaq", "Bahasa Arab", "Dakwah & Public Speaking"],
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

// Line icons for the profil points; one stroke weight, brand green.
const pointPaths = {
  mosque: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11" />
      <path d="M9 21v-5h6v5M3 10h18" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 13l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="13" height="10" rx="1.5" />
      <path d="M6 19h6M9 15v4" />
      <rect x="17" y="9" width="4.5" height="10" rx="1" />
    </>
  ),
};

function PointIcon({ name }: { name: keyof typeof pointPaths }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-jewel)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-px shrink-0"
    >
      {pointPaths[name]}
    </svg>
  );
}

export default function TentangKami() {
  return (
    <main>
      <PageHeader
        title="Tentang Kami"
        intro="Salah satu pelopor pendidikan Al-Qur'an berbasis masjid di Kota Surabaya, di bawah naungan Yayasan Masjid Al-Falah Surabaya sejak 1978."
      />

      {/* Profil */}
      <section id="profil" className="bg-white px-6 py-12 md:px-16 md:py-22">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="min-w-0 flex-1">
            <Pill tone="rust">Profil</Pill>
            <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
              Lembaga Kursus Al-Qur&apos;an Al-Falah Surabaya
            </h2>
            <p className="mt-5 text-justify text-base leading-7 text-ink-soft hyphens-auto md:text-[17px]">
              Lembaga Kursus Al-Qur&apos;an (LKA) Al-Falah Surabaya resmi didirikan pada tahun 1978
              sebagai bagian dari unit kegiatan dakwah di bawah naungan Yayasan Masjid Al-Falah
              Surabaya. Pembentukannya dilatarbelakangi oleh tingginya kebutuhan jamaah dan
              masyarakat umum di Surabaya akan tempat pembelajaran Al-Qur&apos;an yang terstruktur,
              khususnya bagi kalangan dewasa dan orang tua yang ingin memperlancar bacaan, memahami
              tajwid, hingga mendalami isi kandungan Al-Qur&apos;an.
            </p>
            <p className="mt-3.5 text-justify text-base leading-7 text-ink-soft hyphens-auto md:text-[17px]">
              Kehadiran LKA ini dimotori oleh pengurus Yayasan Masjid Al-Falah bersama para tokoh
              agama dan pengajar Al-Qur&apos;an setempat yang berkomitmen menjadikan masjid bukan
              hanya sebagai tempat ibadah ritual, melainkan juga pusat pendidikan dan dakwah Islam
              yang inklusif.
            </p>
            <ul className="mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-surface p-5 md:p-6">
              {profilPoints.map(({ icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <PointIcon name={icon} />
                  <div>
                    <h3 className="text-[15px] leading-[22px] font-semibold text-ink">{title}</h3>
                    <p className="mt-0.5 text-sm leading-[22px] text-ink-soft">{text}</p>
                  </div>
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

      {/* Sejarah: the milestone timeline was dropped (client review 14/10); one statement remains. */}
      <section id="sejarah" className="bg-white px-6 py-12 md:px-16 md:py-20">
        <Reveal className="grid items-center gap-6 rounded-[20px] bg-mist px-6 py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 md:px-14 md:py-14">
          <div
            aria-hidden="true"
            className="font-heading text-[96px] leading-none font-bold text-flame md:text-[148px]"
          >
            1978
          </div>
          <div>
            <Pill tone="teal-on-white">Sejarah Singkat</Pill>
            <h2 className="font-heading text-[28px] leading-[34px] font-bold text-ink md:text-4xl md:leading-11">
              Perjalanan Kami <span className="text-teal-deep">Sejak 1978</span>
            </h2>
            <p className="mt-3 max-w-150 text-base leading-7 text-ink-soft md:text-[17px]">
              Lahir dari inisiatif para pemuda dan mahasiswa di Masjid Al-Falah, lalu tumbuh menjadi
              lembaga kursus Al-Qur&apos;an untuk segala usia.
            </p>
          </div>
        </Reveal>
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
            href="/kegiatan"
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

      <LokasiPanel />

      <Footer />
    </main>
  );
}
