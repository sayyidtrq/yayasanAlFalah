import type { Metadata } from "next";
import BeritaGallery from "@/components/BeritaGallery";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { beritaKategori, kegiatan } from "@/lib/content";

/*
 * Direction (impeccable, surface inside the established world)
 * THESIS: the photos lead; one continuous photo wall instead of a stack of article cards.
 * OWN-WORLD: existing tokens and type; teal filter pills; a dark full-screen viewer.
 * STORY: see santri life, narrow to one category, open photos large.
 * FIRST VIEWPORT: page header, then the category filters and the wall start.
 * FORM: masonry wall with category filters and lightbox (structure 4; seed 62062545).
 *   Renamed from Kegiatan to Berita with categories Kegiatan / Kajian Islam / Hukum Islam (17/10).
 *   /berita#<kategori> pre-filters.
 */

export const metadata: Metadata = {
  title: "Berita — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Berita dan dokumentasi Lembaga Kursus Al-Qur'an Al-Falah Surabaya: kegiatan santri, kajian Islam, dan hukum Islam.",
};

export default function BeritaPage() {
  return (
    <main>
      <PageHeader
        title="Berita"
        intro="Dokumentasi kegiatan santri, kajian Islam, dan hukum Islam di Lembaga Kursus Al-Qur'an Al-Falah Surabaya."
      />
      <BeritaGallery items={kegiatan} kategori={[...beritaKategori]} />
      <CtaDaftar />
      <Footer />
    </main>
  );
}
