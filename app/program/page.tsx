import type { Metadata } from "next";
import Image from "next/image";
import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import HashHighlight from "@/components/HashHighlight";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { jadwalKelas, programLainnya, programUnggulan } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

/*
 * Direction (impeccable, surface inside the established world)
 * THESIS: the visitor chooses by comparing; five programs stand side by side on the same rows
 *   instead of five marketing blocks to scroll through.
 * OWN-WORLD: existing tokens (cream/mist grounds, Philosopher display, Montserrat text, rust and
 *   teal accents, hairline rules); no new colours or faces.
 * STORY: see who each program is for and where it starts, pick one, ask about it on WhatsApp.
 * FIRST VIEWPORT: page header, then the comparison matrix opens immediately below.
 * FORM: comparison matrix (structure 4, re-rolled; seed 631daf9d). Arriving via /program#slug
 *   highlights that program's column (HashHighlight).
 */

export const metadata: Metadata = {
  title: "Program — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Bandingkan program unggulan Lembaga Kursus Al-Qur'an Al-Falah Surabaya: untuk siapa, mulai dari mana, apa yang dipelajari, dan jadwal kelasnya.",
};

const rows = [
  { key: "forWho", label: "Cocok untuk" },
  { key: "startFrom", label: "Mulai dari" },
  { key: "topics", label: "Yang dipelajari" },
] as const;

const waFor = (title: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(`Saya ingin mendapatkan penjelasan tentang program ${title}.`)}`;

export default function ProgramPage() {
  return (
    <main>
      <PageHeader
        title="Program"
        intro="Bandingkan lima program pilihan kami dan temukan yang sesuai denganmu. Santri baru mengikuti tes penempatan, jadi kamu akan mulai dari kelas yang tepat."
      />

      {/* Comparison matrix */}
      <section className="bg-white px-6 py-12 md:px-16 md:py-20">
        <h2 className="sr-only">Program Unggulan</h2>
        {/* 3: per-program details are drafts until the client signs them off. */}
        <p className="inline-flex rounded-md border border-dashed border-ink-muted bg-surface px-3 py-1.5 text-sm font-semibold text-ink-soft">
          Rincian program menunggu konfirmasi
        </p>

        <Reveal className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[150px_repeat(5,minmax(0,1fr))] lg:grid-rows-[auto_auto_auto_auto_auto] lg:gap-0 xl:grid-cols-[170px_repeat(5,minmax(0,1fr))]">
            {/* Row labels, desktop only: each column repeats them for phones. */}
            <div aria-hidden="true" className="hidden lg:row-span-5 lg:grid lg:grid-rows-subgrid">
              <div />
              {rows.map((r) => (
                <div key={r.key} className="border-t border-line py-5 pr-4 text-sm font-semibold text-ink-soft">
                  {r.label}
                </div>
              ))}
              <div className="border-t border-line" />
            </div>

            {programUnggulan.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="group/col relative scroll-mt-24 rounded-2xl border border-line bg-white p-5 transition-colors duration-300 data-[selected]:border-rust data-[selected]:bg-cream lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:rounded-none lg:border-0 lg:border-l lg:p-0 lg:px-5 lg:data-[selected]:rounded-2xl lg:data-[selected]:outline-2 lg:data-[selected]:outline-rust lg:hover:bg-surface"
              >
                <header className="flex flex-col gap-2 pb-5 lg:pt-1">
                  <h3 className="font-heading text-2xl leading-tight font-bold text-ink text-balance">
                    {p.title}
                    <span className="sr-only hidden group-data-[selected]/col:inline"> (dipilih)</span>
                  </h3>
                  <p className="text-base leading-7 text-ink-soft">{p.desc}</p>
                </header>
                <dl className="contents">
                  {rows.map((r) => (
                    <div key={r.key} className="border-t border-line py-4 lg:py-5">
                      <dt className="mb-1.5 text-sm font-semibold text-ink-soft lg:sr-only">
                        {r.label}
                      </dt>
                      <dd className="text-base leading-7 text-ink">
                        {r.key === "topics" ? (
                          <ul className="flex flex-col gap-2">
                            {p.topics.map((t) => (
                              <li key={t} className="flex gap-2">
                                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-deep" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          p[r.key]
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-line pt-5 pb-1">
                  <a
                    href={waFor(p.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lift flex min-h-11 items-center justify-center gap-2 rounded-xl bg-jewel px-4 text-sm font-semibold text-white hover:bg-jewel/90"
                  >
                    <Image src="/images/whatsapp.svg" alt="" width={16} height={16} />
                    Tanya program ini
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <HashHighlight ids={programUnggulan.map((p) => p.slug)} />
      </section>

      {/* Jadwal kelas: a timetable board, every slot readable at a glance. */}
      <section id="jadwal" className="bg-blue-stone px-6 py-12 text-white md:px-16 md:py-20">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[56ch]">
            <h2 className="font-heading text-[28px] leading-tight font-bold md:text-4xl">Jadwal Kelas</h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              Seluruh program diselenggarakan secara periodik dengan durasi sekitar empat bulan.
              Silakan pilih jadwal hari dan jam yang paling sesuai dengan kebutuhan Anda.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85">
              Periode 136 berlangsung Desember 2026 – April 2027. Pendaftaran dibuka 21 November –
              17 Desember 2026.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-xl bg-white px-6 text-[15px] font-semibold text-blue-stone hover:bg-white/90 lg:self-auto"
          >
            Tanya jadwal & biaya
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {jadwalKelas.map((k, i) => {
            const wide = k.groups.length > 1;
            return (
              <Reveal
                key={k.name}
                delay={i * 100}
                className={`flex flex-col gap-5 rounded-2xl border border-white/20 bg-white/[0.06] p-6 md:p-8 ${
                  wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="font-heading text-2xl leading-tight font-bold md:text-[28px]">{k.name}</h3>
                  {k.note && (
                    <span className="self-start rounded-md border border-dashed border-white/50 px-2.5 py-1 text-sm font-semibold text-white/85">
                      {k.note}
                    </span>
                  )}
                </div>
                <p className="text-base leading-7 text-white/85">{k.detail}</p>
                <dl className={`grid gap-6 ${wide ? "sm:grid-cols-2 xl:grid-cols-4" : ""}`}>
                  {k.groups.map((g) => (
                    <div key={g.days} className="border-t border-white/20 pt-4">
                      <dt className="text-base font-semibold">{g.days}</dt>
                      <dd className="mt-3">
                        <ul className="flex flex-wrap gap-2">
                          {g.slots.map((t) => (
                            <li
                              key={t}
                              className="rounded-lg bg-white px-3 py-1.5 text-[15px] font-semibold text-blue-stone tabular-nums"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-white/75">Semua jam dalam WIB.</p>
      </section>

      {/* Program lainnya */}
      <section id="program-lainnya" className="bg-cream px-6 py-12 md:px-16 md:py-20">
        <Reveal>
          <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Program Lainnya</h2>
          <p className="mt-3 max-w-[60ch] text-base leading-7 text-ink-soft">
            Selain lima program unggulan, tersedia {programLainnya.length} program lain untuk anak-anak hingga
            dewasa. Pilih salah satu untuk bertanya langsung ke admin kami.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {programLainnya.map((name) => (
              <li key={name} className="border-b border-cream-line">
                <a
                  href={waFor(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between gap-4 text-base font-medium text-ink transition-colors hover:text-rust"
                >
                  {name}
                  <span className="text-sm font-semibold text-rust-dark">
                    Tanya
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaDaftar />
      <Footer />
    </main>
  );
}
