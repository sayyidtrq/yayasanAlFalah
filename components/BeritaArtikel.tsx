"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import type { Kegiatan, KategoriSlug } from "@/lib/content";
import { PHOTO_PLACEHOLDER } from "@/lib/site";

type Kategori = { slug: KategoriSlug; label: string };

// The URL hash is the filter's source of truth (shared with the photo gallery below), so
// /berita#<kategori> links and back/forward work.
const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readHash = () => decodeURIComponent(location.hash.slice(1));

// Article list: each card opens the full article. The description is shown by default (client, 2/11).
export default function BeritaArtikel({ items, kategori }: { items: Kegiatan[]; kategori: Kategori[] }) {
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const filter = kategori.some((c) => c.slug === hash) ? hash : "semua";
  const visible = useMemo(
    () => (filter === "semua" ? items : items.filter((k) => k.kategori === filter)),
    [items, filter],
  );
  const tabs = [{ slug: "semua", label: "Semua berita" }, ...kategori];
  const section = useRef<HTMLElement>(null);

  // Arriving on /berita#<kategori> (e.g. from a link elsewhere): bring the list into view.
  useEffect(() => {
    if (kategori.some((c) => c.slug === readHash())) section.current?.scrollIntoView();
  }, [kategori]);

  const choose = (slug: string) => {
    history.replaceState(null, "", slug === "semua" ? location.pathname : `#${slug}`);
    window.dispatchEvent(new HashChangeEvent("hashchange")); // replaceState fires no event itself
  };

  return (
    <section ref={section} id="semua" className="scroll-mt-20 bg-white px-6 py-12 md:px-16 md:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Semua Berita</h2>
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

      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-ink-muted bg-surface p-8 text-center text-base text-ink-soft">
          Berita untuk kategori ini segera hadir.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((k) => (
            <li key={k.slug} className="h-full">
              <Link
                href={`/berita/${k.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
              >
                <span className="relative block aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={k.photos[0] ?? PHOTO_PLACEHOLDER}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-[13px] font-semibold text-rust">{k.badge}</span>
                  <span className="font-heading text-xl leading-snug font-bold text-ink group-hover:text-teal-deep">
                    {k.title}
                  </span>
                  <span className="line-clamp-4 text-[15px] leading-6 text-ink-soft">{k.desc}</span>
                  <span className="mt-auto pt-2 text-[13px] text-ink-muted">{k.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
