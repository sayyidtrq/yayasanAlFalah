import Link from "next/link";
import { DAFTAR_HREF } from "@/lib/site";
import HeroBackdrop from "./HeroBackdrop";
import Navbar from "./Navbar";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <header className="relative flex min-h-140 flex-1 flex-col text-white">
      <HeroBackdrop />
      <div className="relative flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col justify-center px-6 pb-16 md:px-16 md:pb-28">
          <p
            style={delay(100)}
            className="rise mb-3 text-base font-semibold text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)] md:text-lg"
          >
            Temukan Langkah Belajarmu Bersama Al Falah
          </p>
          <h1
            style={delay(200)}
            className="rise max-w-129 font-heading text-4xl leading-tight font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
          >
            Belajar Al-Qur&apos;an, Bertumbuh dalam Kebaikan.
          </h1>
          <p
            style={delay(320)}
            className="rise mt-5 max-w-130 text-lg leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
          >
            Belajar membaca, memperbaiki bacaan, menghafal, hingga memahami
            Al-Qur&apos;an bersama Lembaga Kursus Al-Qur&apos;an Al Falah. Tersedia
            beragam program untuk anak-anak hingga dewasa, dengan pilihan kelas
            tatap muka maupun online.
          </p>
          <div style={delay(440)} className="rise mt-8 flex flex-wrap gap-4 text-[15px] font-semibold">
            <Link
              href="#program"
              className="btn-lift flex min-h-11 items-center rounded-xl bg-white px-7 text-blue-stone hover:bg-white/90"
            >
              Lihat Program
            </Link>
            <Link
              href={DAFTAR_HREF}
              className="btn-lift flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-7 hover:bg-jewel/90"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
