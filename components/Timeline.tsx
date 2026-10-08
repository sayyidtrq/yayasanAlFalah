import Image from "next/image";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";

export type Milestone = { year: string; title: string; text: string; note?: string };

// Desktop placement on the design's 1440×1040 canvas: [left, top, width] of each item,
// the dot it sits under, and the two round photos. Converted to % so the S-curve scales.
const W = 1440;
const H = 1040;
const place = [
  { at: [120, 136, 500], dot: [152, 80] },
  { at: [680, 136, 380], dot: [712, 80] },
  { at: [880, 476, 460], dot: [912, 420] },
  { at: [400, 476, 420], dot: [432, 420] },
  { at: [300, 816, 460], dot: [332, 760] },
  { at: [820, 816, 500], dot: [852, 760] },
];
const photos = [
  { left: 1080, top: 140, alt: "Kelompok santri dewasa belajar melingkar di ruang utama masjid" },
  { left: 140, top: 480, alt: "Kelas santri anak bersama ustadzah" },
];
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function Year({ year, size }: { year: string; size: "lg" | "md" }) {
  const lg = size === "lg";
  // Desktop stacks a four-digit year as "19 / 78", as in the design.
  const stacked = lg && /^\d{4}$/.test(year);
  return (
    <div
      className={`shrink-0 font-heading font-bold text-flame ${
        !lg
          ? "text-[40px] leading-11"
          : stacked
            ? "w-21 text-[clamp(44px,4.4vw,64px)] leading-[0.85]"
            : "text-[clamp(40px,3.9vw,56px)] leading-[0.95]" // "Kini": natural width, as in the design
      }`}
    >
      {stacked ? (
        <>
          {year.slice(0, 2)}
          <br />
          {year.slice(2)}
        </>
      ) : (
        year
      )}
    </div>
  );
}

function Note({ children }: { children: string }) {
  return (
    <span className="mt-2.5 inline-block rounded-md border border-dashed border-ink-muted bg-surface px-2 py-0.75 text-xs leading-[18px] font-semibold text-ink-soft">
      {children}
    </span>
  );
}

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <>
      {/* Desktop: teal S-curve ribbon with items pinned along it. */}
      <div className="relative mt-14 hidden aspect-[1440/1040] w-full lg:block">
        <svg aria-hidden="true" viewBox={`0 0 ${W} ${H}`} fill="none" className="absolute inset-0 size-full">
          <path
            d="M -40 80 H 1178 A 170 170 0 0 1 1178 420 H 262 A 170 170 0 0 0 262 760 H 1480"
            stroke="var(--color-ribbon)"
            strokeWidth="56"
          />
          {place.map(({ dot: [cx, cy] }) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="11" fill="#fff" stroke="var(--color-teal-deep)" strokeWidth="5" />
          ))}
        </svg>
        {photos.map(({ left, top, alt }) => (
          <div
            key={left}
            className="absolute aspect-square overflow-hidden rounded-full"
            style={{ left: pct(left, W), top: pct(top, H), width: pct(220, W) }}
          >
            <Image src={PHOTO_PLACEHOLDER} alt={alt} fill className="object-cover" />
          </div>
        ))}
        <ol>
          {items.map((m, i) => {
            const [left, top, width] = place[i].at;
            return (
              <li
                key={m.year}
                className="absolute"
                style={{ left: pct(left, W), top: pct(top, H), width: pct(width, W) }}
              >
                <Reveal delay={i * 90} className="flex items-start gap-5">
                  <Year year={m.year} size="lg" />
                  <div>
                    <h3 className="mt-0.5 mb-1.5 text-lg leading-[26px] font-bold text-ink">{m.title}</h3>
                    <p className="text-[15px] leading-6 text-ink-soft">{m.text}</p>
                    {m.note && <Note>{m.note}</Note>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile / tablet: wavy ribbon down the left, items stacked beside it. */}
      <div className="relative mt-8 lg:hidden">
        <svg
          aria-hidden="true"
          viewBox="0 0 60 1800"
          preserveAspectRatio="none"
          fill="none"
          className="absolute top-2.5 bottom-0 left-0 h-[calc(100%-10px)] w-[60px]"
        >
          <path
            d="M 24 20 C 44 120, 4 220, 24 320 C 44 420, 4 520, 24 620 C 44 720, 4 820, 24 920 C 44 1020, 4 1120, 24 1220 C 44 1320, 4 1420, 24 1520 C 44 1620, 4 1700, 24 1790"
            stroke="var(--color-ribbon)"
            strokeWidth="18"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="flex flex-col gap-12">
          {items.map((m, i) => (
            <li key={m.year} className="relative pl-16">
              <span
                aria-hidden="true"
                className="absolute top-2.5 left-[15px] size-[18px] rounded-full border-4 border-teal-deep bg-white"
              />
              <Reveal delay={i * 60}>
                <Year year={m.year} size="md" />
                <h3 className="mt-1 mb-1.5 text-[17px] leading-6 font-bold text-ink">{m.title}</h3>
                <p className="text-[15px] leading-6 text-ink-soft">{m.text}</p>
                {m.note && <Note>{m.note}</Note>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
