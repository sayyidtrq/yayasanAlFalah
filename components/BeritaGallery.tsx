"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { Kegiatan, KategoriSlug } from "@/lib/content";

type Photo = { src: string; kegiatan: Kegiatan; n: number; total: number };

// The URL hash is the filter's source of truth, so /berita#<kategori> links and back/forward work.
const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readHash = () => decodeURIComponent(location.hash.slice(1));

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

type Kategori = { slug: KategoriSlug; label: string };

export default function BeritaGallery({ items, kategori }: { items: Kegiatan[]; kategori: Kategori[] }) {
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const filter = kategori.some((c) => c.slug === hash) ? hash : "semua";
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const section = useRef<HTMLElement>(null);

  const visible = useMemo(
    () => (filter === "semua" ? items : items.filter((k) => k.kategori === filter)),
    [items, filter],
  );
  // Only real photos enter the wall and the lightbox; a kegiatan without photos gets one
  // honest "foto menyusul" tile instead of fake stand-ins.
  const photos = useMemo<Photo[]>(
    () =>
      visible.flatMap((k) => k.photos.map((src, i) => ({ src, kegiatan: k, n: i + 1, total: k.photos.length }))),
    [visible],
  );
  // Placeholder tiles: each item still without photos, plus each category with no items yet.
  const pending = [
    ...visible.filter((k) => k.photos.length === 0).map((k) => ({ key: k.slug, title: k.badge, note: "Foto dokumentasi menyusul" })),
    ...kategori
      .filter((c) => (filter === "semua" || filter === c.slug) && !items.some((k) => k.kategori === c.slug))
      .map((c) => ({ key: c.slug, title: c.label, note: "Berita menyusul" })),
  ];
  const active = kategori.find((c) => c.slug === filter);

  // Arriving on /berita#<kategori> (from the landing slider): bring the gallery into view.
  useEffect(() => {
    if (kategori.some((c) => c.slug === readHash())) section.current?.scrollIntoView();
  }, [kategori]);

  const choose = (slug: string) => {
    history.replaceState(null, "", slug === "semua" ? location.pathname : `#${slug}`);
    window.dispatchEvent(new HashChangeEvent("hashchange")); // replaceState fires no event itself
  };

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
  const tabs = [{ slug: "semua", label: "Semua berita" }, ...kategori];

  return (
    <section ref={section} id="galeri" className="bg-white px-6 py-12 md:px-16 md:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        {active ? (
          <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">{active.label}</h2>
        ) : (
          <h2 className="sr-only">Galeri Berita</h2>
        )}
        <div role="group" aria-label="Saring berita" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => choose(t.slug)}
              aria-pressed={filter === t.slug}
              className="min-h-11 rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-teal-deep aria-pressed:border-teal-deep aria-pressed:bg-teal-deep aria-pressed:text-white"
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

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

      {pending.length > 0 && (
        <ul className={`mt-8 grid gap-4 ${pending.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
          {pending.map((k) => (
            <li
              key={k.key}
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed ${pending.length > 1 ? "aspect-4/3" : "min-h-56 md:aspect-[3/1] md:min-h-0"} border-ink-muted bg-surface p-6 text-center`}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink-muted">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 17 5-4.5 3.5 3 3-2.5L20 17" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <p className="text-base font-semibold text-ink">{k.title}</p>
              <p className="text-sm text-ink-soft">{k.note}</p>
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
