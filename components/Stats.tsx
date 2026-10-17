import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { value: 48, suffix: "+", label: "Tahun Mengabdi" },
  { value: 14, suffix: "", label: "Program Kursus" },
  { value: 2750, suffix: "+", label: "Santri Aktif" },
];

export default function Stats() {
  return (
    <section className="bg-cream px-6 py-[39px]">
      <dl className="mx-auto flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
        {stats.map(({ value, suffix, label }, i) => (
          <Reveal key={label} delay={500 + i * 120} className="flex flex-col gap-1 text-center">
            <dd className="order-1 font-heading text-4xl leading-[normal] font-bold text-rust">
              <CountUp value={value} suffix={suffix} delay={600 + i * 120} />
            </dd>
            <dt className="order-2 text-sm leading-[normal] text-ink-soft">{label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
