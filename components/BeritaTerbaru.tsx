import Image from "next/image";
import Link from "next/link";
import type { Kegiatan } from "@/lib/content";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";
import Slider from "./Slider";

const FEATURED = 2; // slides; everything after goes to the Headline rail

// A large slider beside a "Headline" rail that lists the other news by headline only
// (client reference pwmu.co). Used on the landing page and at the top of /berita.
export default function BeritaTerbaru({ items }: { items: Kegiatan[] }) {
  const featured = items.slice(0, FEATURED);
  const headlines = items.slice(FEATURED);

  return (
    <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
      <div className="min-w-0">
        <Slider
          label="Berita terbaru"
          autoPlayMs={3500}
          slides={featured.map((k) => ({
            key: k.slug,
            image: k.photos[0] ?? PHOTO_PLACEHOLDER,
            alt: "",
            badge: k.badge,
            title: k.title,
            meta: k.date,
            desc: k.desc,
            href: `/berita/${k.slug}`,
            cta: "Baca Selengkapnya",
          }))}
        />
      </div>

      <aside
        aria-labelledby="headline-title"
        className="flex min-w-0 flex-col rounded-2xl bg-white p-5 lg:h-[clamp(440px,62svh,620px)]"
      >
        <h3 id="headline-title" className="font-heading text-xl font-bold text-ink">
          Headline
        </h3>
        <ul className="mt-3 flex flex-col overflow-y-auto lg:min-h-0 lg:flex-1">
          {headlines.map((k) => (
            <li key={k.slug} className="border-t border-line first:border-t-0">
              <Link href={`/berita/${k.slug}`} className="group flex min-h-11 items-center gap-3 py-3">
                <span className="relative size-18 shrink-0 overflow-hidden rounded-lg bg-surface">
                  <Image
                    src={k.photos[0] ?? PHOTO_PLACEHOLDER}
                    alt=""
                    fill
                    sizes="72px"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0">
                  <span className="line-clamp-3 text-[15px] leading-5 font-semibold text-ink group-hover:text-teal-deep">
                    {k.title}
                  </span>
                  <span className="mt-1 block text-[13px] text-ink-soft">{k.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/berita#semua"
          className="mt-3 inline-flex min-h-11 items-center text-[15px] font-semibold text-teal-deep underline-offset-4 hover:underline"
        >
          Semua berita
        </Link>
      </aside>
    </Reveal>
  );
}
