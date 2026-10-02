import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";
import HeroBackdrop from "./HeroBackdrop";
import Navbar from "./Navbar";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <header className="relative flex min-h-140 flex-1 flex-col overflow-hidden text-white">
      <HeroBackdrop />
      <div className="relative flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col justify-center px-6 pb-16 md:px-16 md:pb-44">
          <h1
            style={delay(150)}
            className="rise max-w-129 font-heading text-4xl leading-tight font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
          >
            Bimbingan Al-Qur&apos;an Profesional untuk Segala Usia
          </h1>
          <p
            style={delay(300)}
            className="rise mt-5 max-w-120 text-lg leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
          >
            Di bawah Yayasan Masjid Al Falah Surabaya sejak 1978 — kelas
            Al-Qur&apos;an untuk anak-anak hingga lansia, tatap muka maupun
            online.
          </p>
          <div style={delay(450)} className="rise mt-8 flex flex-wrap gap-4 text-[15px] font-semibold">
            <Link
              href="#program"
              className="btn-lift flex min-h-11 items-center rounded-xl bg-white px-7 text-blue-stone hover:bg-white/90"
            >
              Lihat Program
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-7 hover:bg-jewel/90"
            >
              <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
              Daftar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
