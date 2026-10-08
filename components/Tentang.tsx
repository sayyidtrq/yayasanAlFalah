import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Tentang() {
  return (
    <section id="tentang" className="flex flex-1 items-center bg-mist px-6 py-8 md:px-16">
      <div className="grid w-full gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
        <Reveal className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-heading text-4xl font-bold text-ink">Mengabdi Sejak 1978</h2>
          <p className="max-w-130 text-base leading-7 text-ink-soft">
            Lembaga Kursus Al Quran Al Falah berada di bawah Yayasan Masjid Al Falah Surabaya.
            Kami membuka kelas Al-Qur&apos;an dan studi keislaman untuk anak-anak hingga lansia,
            tatap muka maupun online.
          </p>
          <Link
            href="/tentang-kami"
            className="pt-2 text-[15px] font-semibold text-teal-deep underline-offset-4 hover:underline"
          >
            Selengkapnya Tentang Kami
          </Link>
        </Reveal>
        <Reveal delay={150} className="relative min-h-56 overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/about-us.jpeg"
            alt="Gedung Masjid Al-Falah Surabaya"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
