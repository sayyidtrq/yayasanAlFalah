import type { Metadata } from "next";
import BeritaArtikel from "@/components/BeritaArtikel";
import BeritaGallery from "@/components/BeritaGallery";
import BeritaTerbaru from "@/components/BeritaTerbaru";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { beritaKategori } from "@/lib/content";
import { getBerita } from "@/lib/wp";

/*
 * Direction (client revision 2/11, third iteration on berita)
 * THESIS: berita is a blog, not only a photo wall: latest headlines first, then the full article
 *   list (each card opens its own article page), and the photo gallery last.
 * ORDER: Berita Terbaru (slider + Headline rail, as on the landing page) > Semua Berita (cards
 *   with the description visible, filter Kegiatan / Kajian Islam / Hukum Islam) > Galeri Foto.
 * OWN-WORLD: existing tokens and type; teal filter pills; cards in the same rounded, hairline style.
 */

export const metadata: Metadata = {
  title: "Berita — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Berita dan artikel Lembaga Kursus Al-Qur'an Al-Falah Surabaya: kegiatan santri, kajian Islam, dan hukum Islam.",
};

// Static page, refreshed from WordPress at most every 60 seconds (see lib/wp.ts).
export const revalidate = 60;

export default async function BeritaPage() {
  const items = await getBerita();
  return (
    <main>
      <PageHeader
        title="Berita"
        intro="Kabar terbaru, artikel, dan dokumentasi kegiatan santri, kajian Islam, dan hukum Islam di Lembaga Kursus Al-Qur'an Al-Falah Surabaya."
      />
      <section id="terbaru" className="bg-mist px-6 py-12 md:px-16 md:py-20">
        <Reveal>
          <h2 className="mb-8 font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Berita Terbaru</h2>
        </Reveal>
        <BeritaTerbaru items={items} />
      </section>
      <BeritaArtikel items={items} kategori={[...beritaKategori]} />
      <BeritaGallery items={items} />
      <CtaDaftar />
      <Footer />
    </main>
  );
}
