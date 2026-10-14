"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Slide = {
  key: string;
  image: string;
  alt: string;
  badge?: string;
  title: string;
  desc: string;
  meta?: string;
  href: string;
  cta: string;
};

// One large visual per slide. Native scroll-snap does the swiping (touch, trackpad, keyboard);
// the arrows and dots just scroll the track.
export default function Slider({
  label,
  slides,
  tone = "teal",
}: {
  label: string;
  slides: Slide[];
  tone?: "teal" | "rust";
}) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = (i + slides.length) % slides.length;
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: n * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
  };

  const accent = tone === "rust" ? "bg-rust" : "bg-teal-deep";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="relative">
      <div
        ref={track}
        tabIndex={0}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl outline-offset-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <article
            key={s.key}
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${slides.length}`}
            className="relative h-[clamp(440px,62svh,620px)] w-full shrink-0 snap-start overflow-hidden"
          >
            <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 90vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,30,24,0.88)_0%,rgba(10,30,24,0.55)_45%,rgba(10,30,24,0.05)_80%)]" />
            <div className="absolute inset-x-0 bottom-0 flex max-w-180 flex-col items-start gap-3 p-6 text-white md:p-12">
              {s.badge && (
                <span className={`rounded-md ${accent} px-2.5 py-0.75 text-[13px] leading-4 font-semibold`}>{s.badge}</span>
              )}
              <h3 className="font-heading text-[28px] leading-tight font-bold text-balance md:text-[40px]">{s.title}</h3>
              {s.meta && <p className="text-sm text-white/75">{s.meta}</p>}
              <p className="max-w-[60ch] text-[15px] leading-7 text-white/90 md:text-base">{s.desc}</p>
              <Link
                href={s.href}
                tabIndex={i === index ? 0 : -1}
                className="btn-lift mt-2 flex min-h-11 items-center rounded-xl bg-white px-6 text-[15px] font-semibold text-blue-stone hover:bg-white/90"
              >
                {s.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ke slide ${i + 1}`}
              aria-current={i === index}
              className="flex h-11 items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                  i === index ? `w-8 ${accent}` : "w-3 bg-ink/20"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => go(index + (dir === "next" ? 1 : -1))}
              aria-label={dir === "next" ? "Slide berikutnya" : "Slide sebelumnya"}
              className="flex size-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d={dir === "next" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
