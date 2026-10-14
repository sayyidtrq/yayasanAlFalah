import type { Metadata } from "next";
import CtaDaftar from "@/components/CtaDaftar";
import FeatureRow from "@/components/FeatureRow";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { kegiatan } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kegiatan — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Kegiatan santri Lembaga Kursus Al-Qur'an Al-Falah Surabaya: wisuda dan khataman, Festival Santri, hingga bakti sosial.",
};

export default function KegiatanPage() {
  return (
    <main>
      <PageHeader
        title="Kegiatan"
        intro="Kegiatan santri di dalam maupun di luar kelas, yang mempererat kebersamaan santri dan pengajar sepanjang tahun."
      />

      <section className="flex flex-col gap-16 bg-white px-6 py-12 md:gap-24 md:px-16 md:py-24">
        {kegiatan.map((k, i) => (
          <FeatureRow key={k.slug} id={k.slug} flip={i % 2 === 1} badge={k.badge} title={k.title} meta={k.date}>
            <p>{k.desc}</p>
          </FeatureRow>
        ))}
      </section>

      <CtaDaftar />
      <Footer />
    </main>
  );
}
