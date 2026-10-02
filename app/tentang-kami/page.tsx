import type { Metadata } from "next";
import Image from "next/image";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import { ADDRESS, PHOTO_PLACEHOLDER, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Profil Lembaga Kursus Al Quran Al Falah, di bawah Yayasan Masjid Al Falah Surabaya sejak 1978.",
};

// ponytail: vision/mission copy is still "[... menyusul]" like the Figma placeholders.
const visiMisi = [
  { title: "Visi", body: "[Visi menyusul]" },
  { title: "Misi", body: "[Misi menyusul]" },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function TentangKami() {
  return (
    <main>
      <header className="relative flex min-h-105 flex-col overflow-hidden text-white">
        <HeroBackdrop />
        <div className="relative flex flex-1 flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col justify-center px-6 pb-12 md:px-16">
            <h1
              style={delay(150)}
              className="rise font-heading text-4xl font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
            >
              Tentang Kami
            </h1>
            <p
              style={delay(300)}
              className="rise mt-5 max-w-120 text-lg leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
            >
              Lembaga Kursus Al Quran Al Falah, di bawah Yayasan Masjid Al Falah Surabaya sejak
              1978.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-mist px-6 py-16 md:px-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
          <Reveal className="relative min-h-64 overflow-hidden rounded-2xl border border-line">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
          </Reveal>
          <Reveal delay={150} className="flex flex-col items-start justify-center gap-4">
            <span className="text-xs font-semibold tracking-[0.48px] text-teal-deep uppercase">
              Profil Lembaga
            </span>
            <h2 className="font-heading text-4xl font-bold text-ink">
              Bimbingan Al-Qur&apos;an untuk Segala Usia
            </h2>
            <p className="text-base leading-7 text-ink-soft">
              Lembaga Kursus Al Quran Al Falah memberikan bimbingan Al-Qur&apos;an dan studi
              keislaman bagi anak-anak hingga lansia, di bawah naungan Yayasan Masjid Al Falah
              Surabaya sejak 1978.
            </p>
            <p className="text-base leading-7 text-ink-soft">
              Kelas diselenggarakan tatap muka maupun online, dengan program yang disusun
              menurut jenjang: Anak-Anak, Dewasa, dan Segala Usia.
            </p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="bg-mist px-6 py-16 md:px-16">
        <Reveal>
          <h2 className="mb-8 font-heading text-4xl font-bold text-ink">Visi &amp; Misi</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {visiMisi.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 140} className="h-full">
              <article className="flex h-full flex-col gap-2 rounded-xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(10,20,14,0.08)] transition-shadow duration-300 hover:shadow-[0_14px_28px_-14px_rgba(10,20,14,0.3)]">
                <h3 className="text-xl leading-[26px] font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-[22px] text-ink-soft">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-16 md:px-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
          <Reveal className="flex flex-col items-start justify-center gap-4">
            <h2 className="font-heading text-4xl font-bold text-ink">Lokasi &amp; Kontak</h2>
            <p className="text-base leading-7 text-ink-soft">{ADDRESS}</p>
            <p className="text-base text-ink-soft">WA {WHATSAPP_LABEL}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift mt-2 flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-7 text-[15px] font-semibold text-white hover:bg-jewel/90"
            >
              <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
              Hubungi via WhatsApp
            </a>
          </Reveal>
          {/* ponytail: map placeholder, swap for an embed or a photo of the location. */}
          <Reveal delay={150} className="relative min-h-64 overflow-hidden rounded-2xl border border-line">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
          </Reveal>
        </div>
      </section>

      <CtaDaftar />
      <Footer />
    </main>
  );
}
