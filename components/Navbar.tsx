"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string; hint: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Beranda" },
  {
    href: "/tentang-kami",
    label: "Tentang Kami",
    children: [
      { href: "/tentang-kami#profil", label: "Profil Lembaga", hint: "Sejarah dan perjalanan sejak 1978" },
      { href: "/tentang-kami#visi-misi", label: "Visi & Misi", hint: "Arah dan tujuan lembaga" },
      { href: "/tentang-kami#layanan", label: "Layanan Kami", hint: "16 program dalam empat rumpun" },
    ],
  },
  { href: "/#kegiatan", label: "Kegiatan" },
  { href: "/#program", label: "Program" },
  { href: "/#kontak", label: "Kontak" },
];

const linkBase = "relative flex items-center gap-1.5 pb-2 transition-colors duration-200";
const linkActive = "border-b-2 border-white text-white";
const linkIdle =
  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100";

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Solid, compact bar once the page leaves the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll, Escape closes, focus moves in and back out,
  // and the menu closes itself if the viewport grows past the desktop breakpoint.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
      toggle?.focus();
    };
  }, [open]);

  const solid = scrolled || open;
  const close = () => setOpen(false);

  return (
    <>
      {/* Keeps the hero layout identical now that the bar itself is fixed. */}
      <div aria-hidden="true" className="h-22 shrink-0" />

      <nav
        className={`drop fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 text-white transition-[height,background-color,box-shadow] duration-300 ease-out md:px-16 ${
          solid
            ? "h-16 border-b border-white/10 bg-blue-stone shadow-[0_8px_24px_-12px_rgba(0,30,25,0.45)]"
            : "h-22 border-b border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="shrink-0" onClick={close}>
          <Image
            src="/images/logo.png"
            alt="Lembaga Kursus Al Quran Al Falah"
            width={152}
            height={48}
            priority
            className={`w-auto transition-[height] duration-300 ${solid ? "h-10" : "h-12"}`}
          />
        </Link>

        <ul className="hidden items-center gap-10 pt-2 text-[15px] font-semibold text-white/90 lg:flex">
          {links.map(({ href, label, children }) => {
            const cls = `${linkBase} ${isActive(href, pathname) ? linkActive : linkIdle}`;
            if (!children) {
              return (
                <li key={href}>
                  <Link href={href} className={cls}>
                    {label}
                  </Link>
                </li>
              );
            }
            // Opens on hover and on keyboard focus (focus-within), so Tab reaches the submenu.
            return (
              <li key={href} className="group relative">
                <Link href={href} aria-haspopup="true" className={cls}>
                  {label}
                  <Chevron className="transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility,translate] duration-200 ease-out group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-safe:translate-y-1 motion-safe:group-focus-within:translate-y-0 motion-safe:group-hover:translate-y-0">
                  <ul className="rounded-xl bg-white p-2 shadow-[0_18px_40px_-16px_rgba(10,20,14,0.4)] ring-1 ring-ink/5">
                    {children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded-lg px-3.5 py-3 text-ink outline-none transition-colors hover:bg-mist focus-visible:bg-mist"
                        >
                          <span className="block text-sm font-semibold">{c.label}</span>
                          <span className="mt-0.5 block text-xs font-normal text-ink-soft">{c.hint}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#daftar"
            onClick={close}
            className="btn-lift flex min-h-11 items-center rounded-xl bg-jewel px-5 text-[15px] font-semibold text-white hover:bg-jewel/90 md:px-6"
          >
            Daftar
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex size-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-[top,rotate] duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-[top,rotate] duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu: full-screen panel under the bar. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-blue-stone px-6 pt-6 pb-10 text-white transition-[opacity,translate] duration-300 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0 motion-safe:-translate-y-3"
        }`}
      >
        <ul className="flex flex-col">
          {links.map(({ href, label, children }, i) => (
            <li
              key={href}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              className={`border-b border-white/15 transition-[opacity,translate] duration-300 ease-out ${
                open ? "opacity-100" : "opacity-0 motion-safe:-translate-y-2"
              }`}
            >
              <Link
                href={href}
                onClick={close}
                aria-current={isActive(href, pathname) ? "page" : undefined}
                className="flex min-h-14 items-center justify-between font-heading text-2xl font-bold aria-[current=page]:text-frost"
              >
                {label}
                {isActive(href, pathname) && <span className="size-2 rounded-full bg-frost" aria-hidden="true" />}
              </Link>
              {children && (
                <ul className="-mt-1 flex flex-col pb-4">
                  {children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={close}
                        className="flex min-h-11 items-center pl-4 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/#daftar"
          onClick={close}
          className="mt-8 flex min-h-12 items-center justify-center rounded-xl bg-white text-[15px] font-semibold text-blue-stone"
        >
          Daftar Sekarang
        </Link>
      </div>
    </>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
