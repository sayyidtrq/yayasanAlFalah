import Image from "next/image";
import type { ReactNode } from "react";
import { PHOTO_PLACEHOLDER } from "@/lib/site";
import Reveal from "./Reveal";

// Image + text row for the /program and /kegiatan pages; `flip` alternates the image side.
export default function FeatureRow({
  id,
  flip,
  badge,
  badgeTone = "teal",
  title,
  meta,
  children,
  actions,
}: {
  id: string;
  flip?: boolean;
  badge?: string;
  badgeTone?: "teal" | "rust";
  title: string;
  meta?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <article id={id} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <Reveal className={`relative aspect-4/3 overflow-hidden rounded-[20px] ${flip ? "md:order-2" : ""}`}>
        <Image src={PHOTO_PLACEHOLDER} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </Reveal>
      <Reveal delay={120} className="flex flex-col items-start gap-3">
        {badge && (
          <span
            className={`rounded-md px-2.5 py-0.75 text-[13px] leading-4 font-semibold text-white ${
              badgeTone === "rust" ? "bg-rust" : "bg-teal-deep"
            }`}
          >
            {badge}
          </span>
        )}
        <h2 className="font-heading text-[28px] leading-tight font-bold text-ink text-balance md:text-4xl">{title}</h2>
        {meta && <p className="text-sm text-ink-soft">{meta}</p>}
        <div className="max-w-[60ch] text-base leading-7 text-ink-soft">{children}</div>
        {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
      </Reveal>
    </article>
  );
}
