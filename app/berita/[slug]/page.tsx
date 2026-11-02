import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { kegiatan } from "@/lib/content";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import { getBerita, getBeritaBySlug } from "@/lib/wp";

// One article. Static items are prerendered; WordPress posts are rendered on first visit and
// refreshed at most every 60 seconds (lib/wp.ts), so a new post needs no deploy.
export const revalidate = 60;

export function generateStaticParams() {
  return kegiatan.map((k) => ({ slug: k.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const k = await getBeritaBySlug(slug);
  if (!k) return {};
  return {
    title: `${k.title} — Lembaga Kursus Al Qur'an Al Falah`,
    description: k.desc,
    ...(k.photos[0] ? { openGraph: { images: [k.photos[0]] } } : {}),
  };
}

export default async function BeritaDetail({ params }: Props) {
  const { slug } = await params;
  const [k, all] = await Promise.all([getBeritaBySlug(slug), getBerita()]);
  if (!k) notFound();

  const more = all.filter((x) => x.slug !== k.slug).slice(0, 3);
  const extraPhotos = k.photos.slice(1);

  return (
    <main>
      <header className="relative bg-blue-stone text-white">
        <Navbar />
        <div className="h-20 md:h-24" aria-hidden="true" />
      </header>

      <article className="bg-white px-6 py-10 md:px-16 md:py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/berita"
            className="inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-teal-deep underline-offset-4 hover:underline"
          >
            <span aria-hidden="true">←</span> Semua berita
          </Link>

          <p className="mt-4 text-sm font-semibold text-rust">{k.badge}</p>
          <h1 className="mt-2 font-heading text-[32px] leading-tight font-bold text-ink text-balance md:text-[44px] md:leading-[1.15]">
            {k.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">{k.date}</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
            <Image
              src={k.photos[0] ?? PHOTO_PLACEHOLDER}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 flex flex-col gap-5 text-[17px] leading-8 text-ink-soft">
            {k.html ? (
              // Trusted: the HTML comes from the institution's own WordPress (see lib/wp.ts).
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: k.html }} />
            ) : (
              <>
                <p className="text-lg font-medium text-ink">{k.desc}</p>
                {!k.href && (
                  <p className="rounded-xl border border-dashed border-ink-muted bg-surface p-4 text-base">
                    Artikel lengkap segera hadir.
                  </p>
                )}
              </>
            )}
            {k.href && (
              <a
                href={k.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex min-h-11 items-center self-start rounded-xl bg-blue-stone px-6 text-[15px] font-semibold text-white hover:bg-blue-stone/90"
              >
                Baca artikel lengkap di sumber
              </a>
            )}
          </div>

          {extraPhotos.length > 0 && (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {extraPhotos.map((src) => (
                <li key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                  <Image src={src} alt="" fill sizes="(min-width: 768px) 372px, 100vw" className="object-cover" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-mist px-6 py-12 md:px-16 md:py-16">
          <h2 className="font-heading text-[28px] leading-tight font-bold text-ink">Berita Lainnya</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/berita/${x.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
                >
                  <span className="relative block aspect-[16/10] bg-surface">
                    <Image
                      src={x.photos[0] ?? PHOTO_PLACEHOLDER}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-col gap-1 p-5">
                    <span className="text-[13px] font-semibold text-rust">{x.badge}</span>
                    <span className="font-heading text-lg leading-snug font-bold text-ink group-hover:text-teal-deep">
                      {x.title}
                    </span>
                    <span className="text-[13px] text-ink-muted">{x.date}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaDaftar />
      <Footer />
    </main>
  );
}
