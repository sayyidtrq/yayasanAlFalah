import type { Metadata } from "next";
import Image from "next/image";
import CtaDaftar from "@/components/CtaDaftar";
import FeatureRow from "@/components/FeatureRow";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { programLainnya, programUnggulan } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Program — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "16 program Al-Qur'an dan studi keislaman di Lembaga Kursus Al-Qur'an Al-Falah Surabaya, untuk anak-anak hingga dewasa, tatap muka maupun online.",
};

export default function ProgramPage() {
  return (
    <main>
      <PageHeader
        title="Program"
        intro="16 program Al-Qur'an dan studi keislaman untuk anak-anak hingga dewasa, dengan pilihan kelas tatap muka maupun online."
      />

      <section className="flex flex-col gap-16 bg-white px-6 py-12 md:gap-24 md:px-16 md:py-24">
        {programUnggulan.map((p, i) => (
          <FeatureRow
            key={p.slug}
            id={p.slug}
            flip={i % 2 === 1}
            badge="Program Unggulan"
            badgeTone="rust"
            title={p.title}
            actions={
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-6 text-[15px] font-semibold text-white hover:bg-jewel/90"
              >
                <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
                Tanya Program Ini
              </a>
            }
          >
            <p>{p.desc}</p>
          </FeatureRow>
        ))}
      </section>

      <section id="program-lainnya" className="bg-cream px-6 py-12 md:px-16 md:py-24">
        <Reveal>
          <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Program Lainnya</h2>
          <p className="mt-3 max-w-[62ch] text-base leading-7 text-ink-soft">
            Santri baru mengikuti tes penempatan agar mulai dari kelas yang sesuai kemampuan. Tanyakan
            jadwal dan ketersediaan kelas ke admin kami.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {programLainnya.map((name) => (
              <li key={name} className="border-b border-cream-line py-4 text-[15px] font-medium text-ink">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaDaftar />
      <Footer />
    </main>
  );
}
