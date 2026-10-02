import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";
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
          Tertarik Mendaftar di Lembaga Kursus Al Quran Al Falah?
        </h2>
        <p className="text-base text-ink-soft">Tim admin kami siap membantu lewat WhatsApp.</p>
      </Reveal>
      <Reveal delay={150} className="shrink-0">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lift flex min-h-11 items-center gap-2.5 rounded-xl bg-jewel px-8 py-4 text-base font-semibold text-white hover:bg-jewel/90"
        >
          <Image src="/images/whatsapp.svg" alt="" width={20} height={20} />
          Daftar via WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
