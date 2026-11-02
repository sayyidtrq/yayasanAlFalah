import Link from "next/link";
import { getBerita } from "@/lib/wp";
import BeritaTerbaru from "./BeritaTerbaru";
import Reveal from "./Reveal";

// Landing-page copy of "Berita Terbaru". The full version, with the article list, lives at /berita.
export default async function Kegiatan() {
  const items = await getBerita();

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
      <BeritaTerbaru items={items} />
    </section>
  );
}
