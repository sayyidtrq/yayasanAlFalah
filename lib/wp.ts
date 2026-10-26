// Berita from the client's WordPress (cms.kursusquranalfalah.id) via the public REST API.
// Fails soft: with no WP_API_URL, or when WP is unreachable, callers fall back to lib/content.ts.
import { beritaKategori, type Kegiatan } from "./content";

type WpTerm = { slug: string; taxonomy: string };
type WpPost = {
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string }[];
    "wp:term"?: WpTerm[][];
  };
};

const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…" };

function plain(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => entities[name.toLowerCase()] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

export async function getWpBerita(): Promise<Kegiatan[]> {
  const base = process.env.WP_API_URL;
  if (!base) return [];
  try {
    const res = await fetch(`${base}/posts?_embed=wp:featuredmedia,wp:term&per_page=30`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const posts = (await res.json()) as WpPost[];
    return posts.flatMap((p) => {
      const terms = p._embedded?.["wp:term"]?.flat() ?? [];
      const kategori = beritaKategori.find((c) => terms.some((t) => t.taxonomy === "category" && t.slug === c.slug));
      if (!kategori) return []; // e.g. "Uncategorized": not for the public berita wall
      const photo = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      return [
        {
          slug: `wp-${p.slug}`,
          kategori: kategori.slug,
          badge: kategori.label,
          title: plain(p.title.rendered),
          desc: plain(p.excerpt.rendered),
          date: new Date(p.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          photos: photo ? [photo] : [],
          href: p.link,
        },
      ];
    });
  } catch {
    return [];
  }
}
