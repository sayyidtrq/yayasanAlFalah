import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { value: "48+", label: "Tahun Mengabdi" },
  { value: "16", label: "Program Kursus" },
  { value: "3", label: "Kategori Kelas" },
  // ponytail: placeholder, fill in once the real data arrives.
  { value: "[Jumlah]", label: "Santri Aktif — data menyusul", pending: true },
];

export default function Stats() {
  return (
    <section className="bg-cream px-6 py-[39px]">
      <dl className="mx-auto flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
        {stats.map(({ value, label, pending }, i) => {
          const num = /^(\d+)(\D*)$/.exec(value);
          return (
            <Reveal key={label} delay={500 + i * 120} className="flex flex-col gap-1 text-center">
              <dd
                className={`order-1 font-heading text-4xl leading-[normal] font-bold ${pending ? "text-rust-muted" : "text-rust"}`}
              >
                {num ? <CountUp value={+num[1]} suffix={num[2]} delay={600 + i * 120} /> : value}
              </dd>
              <dt className={`order-2 text-sm leading-[normal] ${pending ? "text-ink-muted" : "text-ink-soft"}`}>
                {label}
              </dt>
            </Reveal>
          );
        })}
      </dl>
    </section>
  );
}
