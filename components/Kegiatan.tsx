import Image from "next/image";
import Link from "next/link";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";

const items = [
  {
    badge: "Wisuda & Khataman",
    title: "Wisuda dan Khataman Al-Qur'an Santri LKF",
    desc: "Momen puncak bagi santri yang menyelesaikan hafalan dan khataman Al-Qur'an di Lembaga Kursus Al Quran Al Falah Surabaya.",
  },
  {
    badge: "Festival Santri",
    title: "Festival Santri (FASI) Lembaga Kursus Al Quran Al Falah",
    desc: "Rangkaian lomba dan kegiatan keagamaan tahunan untuk santri dari segala jenjang kelas.",
  },
  {
    badge: "Bakti Sosial",
    title: "Wisata Bakti Sosial Lembaga Kursus Al Quran Al Falah",
    desc: "Kegiatan sosial tahunan, bagian dari rangkaian Bulan Miladiyah yang mempererat kebersamaan santri dan pengajar.",
  },
  // ponytail: placeholders in the same "[... menyusul]" style as the Figma, replace with real activities.
  ...Array.from({ length: 3 }, () => ({
    badge: "Kegiatan",
    title: "[Judul kegiatan menyusul]",
    desc: "[Deskripsi kegiatan menyusul]",
  })),
];

export default function Kegiatan() {
  return (
    <section id="kegiatan" className="flex min-h-svh flex-col justify-start gap-8 bg-mist p-6 md:p-16">
      <Reveal className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-4xl font-bold text-ink">Kegiatan Terbaru</h2>
        <Link
          href="#kegiatan"
          className="shrink-0 text-[15px] font-semibold text-teal-deep underline-offset-4 hover:underline"
        >
          Lihat Semua Kegiatan
        </Link>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ badge, title, desc }, i) => (
          <Reveal key={i} delay={(i % 3) * 120} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(10,20,14,0.08)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(10,20,14,0.3)]">
              <div className="relative h-42 shrink-0 overflow-hidden">
                <Image
                  src={PHOTO_PLACEHOLDER}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-2 p-5">
                <span className="rounded-md bg-teal-badge px-2.5 py-0.75 text-[13px] leading-4 font-semibold text-ink">
                  {badge}
                </span>
                <h3 className="pt-1 text-xl leading-[26px] font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-[normal] text-ink-soft">[Tanggal menyusul]</p>
                <p className="text-sm leading-[22px] text-ink-soft">{desc}</p>
                <Link
                  href="#"
                  className="mt-auto pt-1 text-[15px] leading-[normal] font-semibold text-teal-deep underline-offset-4 group-hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
