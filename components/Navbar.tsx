"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/#kegiatan", label: "Kegiatan" },
  { href: "/#program", label: "Program" },
  { href: "/#kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="drop flex h-22 items-center justify-between px-6 md:px-16">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo.png"
          alt="Lembaga Kursus Al Quran Al Falah"
          width={152}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </Link>
      <ul className="hidden items-center gap-10 text-[15px] font-semibold text-white/90 lg:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                href === pathname
                  ? "border-b-2 border-white pb-2 text-white"
                  : "relative pb-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/#daftar"
        className="btn-lift flex min-h-11 items-center rounded-xl bg-jewel px-6 text-[15px] font-semibold text-white hover:bg-jewel/90"
      >
        Daftar
      </Link>
    </nav>
  );
}
