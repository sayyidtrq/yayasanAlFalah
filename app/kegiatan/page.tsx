import type { Metadata } from "next";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import KegiatanGallery from "@/components/KegiatanGallery";
import PageHeader from "@/components/PageHeader";
import { kegiatan } from "@/lib/content";

/*
 * Direction (impeccable, surface inside the established world)
 * THESIS: the photos lead; one continuous photo wall instead of a stack of article cards.
 * OWN-WORLD: existing tokens and type; teal filter pills; a dark full-screen viewer.
 * STORY: see what santri life looks like, narrow to one kegiatan, open photos large.
 * FIRST VIEWPORT: page header, then the gallery heading, filters and the wall start.
 * FORM: masonry wall with filters and lightbox (structure 4; seed 62062545).
 *   /kegiatan#slug opens that kegiatan's photos.
 */

export const metadata: Metadata = {
  title: "Kegiatan — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Galeri kegiatan santri Lembaga Kursus Al-Qur'an Al-Falah Surabaya: wisuda dan khataman, Festival Santri, hingga bakti sosial.",
};

export default function KegiatanPage() {
  return (
    <main>
      <PageHeader
        title="Kegiatan"
        intro="Dokumentasi kegiatan santri sepanjang tahun, dari wisuda dan khataman hingga Festival Santri dan bakti sosial."
      />
      <KegiatanGallery items={kegiatan} />
      <CtaDaftar />
      <Footer />
    </main>
  );
}
