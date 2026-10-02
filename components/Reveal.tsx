"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Fades/slides its children in the first time they scroll into view. Styles live in globals.css.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        io.disconnect();
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
