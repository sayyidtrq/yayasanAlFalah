import Image from "next/image";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";

// Sourced from masjidalfalah.or.id (LKF profile, pendaftaran periode 128) and the LKF history write-up.
const values = [
  {
    title: "Mengabdi Sejak 1978",
    body: "Lahir dari inisiatif remaja masjid dan mahasiswa, kini lembaga pendidikan non-formal di bawah Yayasan Masjid Al Falah Surabaya.",
  },
  {
    title: "Ribuan Alumni",
    body: "Telah membimbing ribuan santri dari beragam usia dan latar belakang di Surabaya dan sekitarnya.",
  },
  {
    title: "Untuk Segala Usia",
    body: "Dari TPQ untuk anak usia 4 tahun, Tahfidz Cilik, hingga kelas dewasa dan lansia.",
  },
  {
    title: "Belajar Fleksibel",
    body: "Kelas tatap muka, online, maupun blended, dengan pilihan jadwal dari pagi hingga malam.",
  },
  {
    title: "Sesuai Kemampuan",
    body: "Santri baru mengikuti tes penempatan agar belajar di kelas yang tepat dan bertahap.",
  },
  {
    title: "Berpusat di Masjid",
    body: "Belajar di lingkungan Masjid Al Falah, pusat ibadah, dakwah, dan pembinaan umat di jantung Surabaya.",
  },
];

export default function NilaiUnggulan() {
  return (
    <section
      id="nilai-unggulan"
      className="flex min-h-svh items-center bg-blue-stone px-6 py-20 text-white md:px-16"
    >
      <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-16 lg:self-start">
          <h2 className="font-heading text-4xl leading-tight font-bold text-balance md:text-5xl md:leading-[1.1]">
            Nilai Unggulan
          </h2>
          <p className="max-w-[46ch] text-lg leading-8 text-white/85">
            Hampir lima dekade, Lembaga Kursus Al Quran Al Falah menjadi tempat belajar
            Al-Qur&apos;an yang tertib, terjangkau, dan terbuka bagi siapa saja.
          </p>
          <div className="relative mt-2 hidden aspect-4/3 overflow-hidden rounded-2xl lg:block">
            <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover opacity-90" />
          </div>
        </Reveal>

        <dl className="grid gap-x-12 sm:grid-cols-2">
          {values.map(({ title, body }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 120 + Math.floor(i / 2) * 80}
              className="flex flex-col gap-3 border-t border-white/20 py-8"
            >
              <dt className="font-heading text-2xl leading-snug font-bold">{title}</dt>
              <dd className="text-[15px] leading-7 text-white/80">{body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
