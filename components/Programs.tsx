import Link from "next/link";
import { programUnggulan } from "@/lib/content";
import Reveal from "./Reveal";
import Slider from "./Slider";

export default function Programs() {
  return (
    <section id="program" className="flex min-h-svh flex-col justify-center gap-8 bg-cream p-6 md:p-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-4xl font-bold text-ink">Program Unggulan</h2>
          <p className="mt-1 text-lg font-semibold text-ink">Temukan Program yang Sesuai untukmu</p>
          <p className="max-w-[68ch] text-base leading-7 text-ink-soft">
            Setiap orang punya tujuan belajar yang berbeda. Kenali berbagai program Al Falah dan
            pilih pembelajaran yang sesuai dengan kebutuhanmu.
          </p>
        </div>
        <Link
          href="/program"
          className="shrink-0 text-[15px] font-semibold text-rust underline-offset-4 hover:underline"
        >
          Lihat Semua Program
        </Link>
      </Reveal>
      <Reveal>
        <Slider
          label="Program unggulan"
          tone="rust"
          slides={programUnggulan.map((p) => ({
            key: p.slug,
            image: p.image,
            alt: "",
            title: p.title,
            desc: p.desc,
            href: `/program#${p.slug}`,
            cta: "Detail Program",
          }))}
        />
      </Reveal>
    </section>
  );
}
