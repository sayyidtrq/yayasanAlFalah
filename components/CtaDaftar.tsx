import Link from "next/link";
import { DAFTAR_HREF } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaDaftar() {
  return (
    <section
      id="daftar"
      className="flex flex-col items-start justify-between gap-8 border-y border-cream-line bg-cream px-6 py-12 md:h-60 md:flex-row md:items-center md:px-16 md:py-0"
    >
      <Reveal className="flex max-w-130 flex-col items-start gap-3">
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold tracking-[0.48px] text-rust-dark uppercase">
          Pendaftaran Dibuka
        </span>
        <h2 className="font-heading text-[28px] font-bold text-ink">
          Yuk, Belajar Al-Qur&apos;an Bareng Al Falah!
        </h2>
        <p className="text-base leading-7 text-ink-soft">
          Mulai langkah baikmu hari ini. Hubungi kami melalui WhatsApp untuk informasi program,
          jadwal kelas, dan pendaftaran.
        </p>
      </Reveal>
      <Reveal delay={150} className="shrink-0">
        <Link
          href={DAFTAR_HREF}
          className="btn-lift flex min-h-11 items-center gap-2.5 rounded-xl bg-jewel px-8 py-4 text-base font-semibold text-white hover:bg-jewel/90"
        >
          Mulai Langkah Baikmu!
        </Link>
      </Reveal>
    </section>
  );
}
