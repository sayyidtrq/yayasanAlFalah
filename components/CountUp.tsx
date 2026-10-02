"use client";

import { useLayoutEffect, useRef } from "react";

// Counts 0 -> value when scrolled into view. SSR renders the final number (no-JS / SEO safe);
// the reset to 0 happens before first paint, and the text node is mutated directly so React never diffs it.
export default function CountUp({
  value,
  suffix = "",
  duration = 2000,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const text = el?.firstChild;
    if (!el || !text || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    text.nodeValue = `0${suffix}`;
    let timer = 0;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = p === 1 ? 1 : 1 - 2 ** (-10 * p); // ease-out expo
            text.nodeValue = `${Math.round(value * eased)}${suffix}`;
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      text.nodeValue = `${value}${suffix}`;
    };
  }, [value, suffix, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {`${value}${suffix}`}
    </span>
  );
}
