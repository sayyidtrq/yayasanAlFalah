import Image from "next/image";
import Link from "next/link";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";

// Row ratios per column come straight from the Figma grid (tall/short cards alternate).
const columns = [
  {
    rows: "lg:grid-rows-[minmax(0,1.3fr)_minmax(0,0.85fr)_minmax(0,0.85fr)]",
    items: [
      { badge: "Anak-Anak", title: "Tahfidz Cilik & TPQ" },
      { badge: "Segala Usia", title: "Baca Tulis Al-Qur'an" },
      { badge: "Segala Usia", title: "Tahsin Al-Qur'an" },
    ],
  },
  {
    rows: "lg:grid-rows-[minmax(0,0.85fr)_minmax(0,1.3fr)_minmax(0,0.85fr)]",
    items: [
      { badge: "Dewasa", title: "Bahasa Arab" },
      { badge: "Dewasa", title: "Tafsir Al-Qur'an" },
      { badge: "Segala Usia", title: "Tartil Al-Qur'an" },
    ],
  },
  {
    rows: "lg:grid-rows-[minmax(0,0.9fr)_minmax(0,0.85fr)_minmax(0,1.25fr)]",
    items: [
      { badge: "Tahfidz", title: "Hafalan Al-Qur'an" },
      { badge: "Segala Usia", title: "Seni Baca Al-Qur'an" },
      { badge: "Dewasa", title: "Imam & Perawatan Jenazah" },
    ],
  },
];

export default function Programs() {
  return (
    <section id="program" className="flex min-h-svh flex-col justify-center gap-8 bg-cream p-6 md:p-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-4xl font-bold text-ink">Program Unggulan</h2>
          <p className="text-base text-ink-soft">
            Sembilan program unggulan Lembaga Kursus Al Quran Al Falah, dari anak-anak hingga
            dewasa dan lansia.
          </p>
        </div>
        <Link
          href="#program"
          className="shrink-0 text-[15px] font-semibold text-rust underline-offset-4 hover:underline"
        >
          Lihat Semua Program
        </Link>
      </Reveal>
      <div className="flex flex-col gap-0.75 overflow-hidden rounded-2xl bg-line lg:h-[clamp(520px,calc(100svh_-_232px),880px)] lg:flex-row">
        {columns.map(({ rows, items }, i) => (
          <Reveal key={i} delay={i * 140} className={`grid flex-1 gap-0.75 ${rows}`}>
            {items.map(({ badge, title }) => (
              <div key={title} className="group flex min-h-0 flex-col bg-white">
                <div className="relative h-56 overflow-hidden lg:h-auto lg:flex-1">
                  <Image
                    src={PHOTO_PLACEHOLDER}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded-[5px] bg-rust px-2.25 py-0.75 text-[11px] leading-[normal] font-semibold text-white">
                    {badge}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 px-3.5 py-3">
                  <h3 className="text-sm leading-[18px] font-semibold text-ink">{title}</h3>
                  <Link
                    href="#"
                    className="shrink-0 text-xs font-semibold text-rust underline-offset-4 group-hover:underline"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
