"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Kegiatan } from "@/lib/content";

type Photo = { src: string; kegiatan: Kegiatan; n: number; total: number };

const arrow = (dir: "prev" | "next") => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d={dir === "next" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const navBtn =
  "flex size-12 items-center justify-center rounded-full border border-white/40 bg-black/55 text-white transition-colors hover:bg-black/75";

// Photo wall with a full-screen viewer. Only real photos appear; the article list above covers
// the news without photos.
export default function BeritaGallery({ items }: { items: Kegiatan[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const photos = useMemo<Photo[]>(
    () => items.flatMap((k) => k.photos.map((src, i) => ({ src, kegiatan: k, n: i + 1, total: k.photos.length }))),
    [items],
  );

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open !== null && !el.open) el.showModal();
    if (open === null && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open === null ? null : photos[open];

  if (photos.length === 0) return null;

  return (
    <section id="galeri" className="scroll-mt-20 bg-mist px-6 py-12 md:px-16 md:py-20">
      <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Galeri Foto</h2>

      {photos.length > 0 && (
        <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {photos.map((p, i) => (
            <li key={`${p.kegiatan.slug}-${p.n}`} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Buka foto ${p.n} dari ${p.total}: ${p.kegiatan.badge}`}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.src}
                  alt=""
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(10,30,24,0.75),transparent)] px-4 pt-10 pb-3 text-left text-sm font-semibold text-white">
                  {p.kegiatan.badge}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        aria-label="Foto berita"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-[#0a1410] p-0 text-white backdrop:bg-transparent"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
              <p className="text-sm">
                <span className="font-semibold">{current.kegiatan.badge}</span>
                <span className="text-white/75"> · Foto {current.n} dari {current.total}</span>
              </p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Tutup"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={current.src} alt="" fill sizes="100vw" className="object-contain px-4 md:px-24" />
              {/* Desktop: arrows beside the photo. Phones get them in the bottom bar. */}
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Foto sebelumnya"
                className={`${navBtn} absolute top-1/2 left-8 hidden -translate-y-1/2 md:flex`}
              >
                {arrow("prev")}
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Foto berikutnya"
                className={`${navBtn} absolute top-1/2 right-8 hidden -translate-y-1/2 md:flex`}
              >
                {arrow("next")}
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-5 md:justify-center md:px-8">
              <button type="button" onClick={() => step(-1)} aria-label="Foto sebelumnya" className={`${navBtn} md:hidden`}>
                {arrow("prev")}
              </button>
              <p className="text-center text-sm text-white/85">{current.kegiatan.title}</p>
              <button type="button" onClick={() => step(1)} aria-label="Foto berikutnya" className={`${navBtn} md:hidden`}>
                {arrow("next")}
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
