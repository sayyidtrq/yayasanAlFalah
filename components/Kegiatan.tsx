import Link from "next/link";
import { kegiatan } from "@/lib/content";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";
import Slider from "./Slider";

export default function Kegiatan() {
  return (
    <section id="berita" className="flex min-h-svh flex-col justify-center gap-8 bg-mist p-6 md:p-16">
      <Reveal className="flex items-end justify-between gap-4">
        <h2 className="font-heading text-4xl font-bold text-ink">Berita Terbaru</h2>
        <Link
          href="/berita"
          className="shrink-0 text-[15px] font-semibold text-teal-deep underline-offset-4 hover:underline"
        >
          Lihat Semua Berita
        </Link>
      </Reveal>
      <Reveal>
        <Slider
          label="Berita terbaru"
          autoPlayMs={5000}
          slides={kegiatan.map((k) => ({
            key: k.slug,
            image: k.photos[0] ?? PHOTO_PLACEHOLDER,
            alt: "",
            badge: k.badge,
            title: k.title,
            meta: k.date,
            desc: k.desc,
            href: `/berita#${k.kategori}`,
            cta: "Baca Selengkapnya",
          }))}
        />
      </Reveal>
    </section>
  );
}
