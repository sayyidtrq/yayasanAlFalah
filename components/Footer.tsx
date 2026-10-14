import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ADDRESS, EMAIL, INSTAGRAM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";
import Reveal from "./Reveal";

const pages = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kontak", label: "Kontak" },
];

// Brand-neutral line icons, one stroke weight. Paths are drawn at 24×24.
const icons: Record<string, ReactNode> = {
  whatsapp: (
    <>
      <path d="M4 20l1.4-4.2A8 8 0 1 1 9.4 19L4 20Z" />
      <path d="M8.5 10.5c.3 2 2 3.7 4 4" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  channel: (
    <>
      <path d="M4 10v4h3l5 4V6L7 10H4Z" />
      <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
};

// ponytail: lynk.id and WhatsApp channel URLs unknown, "#" until provided.
const contact = [
  { icon: "whatsapp", label: `WhatsApp ${WHATSAPP_LABEL}`, href: WHATSAPP_URL },
  { icon: "email", label: `Email ${EMAIL}`, href: `mailto:${EMAIL}` },
];
const social = [
  { icon: "instagram", label: "Instagram @kursusalfalahsby", href: INSTAGRAM_URL },
  { icon: "link", label: "Semua Tautan (lynk.id)", href: "#" },
  { icon: "channel", label: "Channel WhatsApp", href: "#" },
];

function IconLinks({ items }: { items: { icon: string; label: string; href: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-3 pt-1">
      {items.map(({ icon, label, href }) => {
        const external = href.startsWith("http");
        return (
          <li key={icon}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex size-11 items-center justify-center rounded-full border border-white/30 transition-[background-color,border-color,transform] duration-200 hover:border-white hover:bg-white/10 motion-safe:hover:-translate-y-0.5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[icon]}
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-frost bg-forest px-6 pt-16 pb-8 text-sm text-white md:px-16"
    >
      <Reveal className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/logo-white.png"
            alt="Lembaga Kursus Al Quran Al Falah"
            width={152}
            height={48}
            className="h-12 w-auto self-start"
          />
          <p className="max-w-80 leading-[22px]">
            Bimbingan Al-Qur&apos;an dan studi keislaman untuk segala usia, di bawah Yayasan
            Masjid Al Falah Surabaya sejak 1978.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[15px] font-semibold">Kontak</h4>
          <p className="pt-1 pb-1 leading-[22px]">{ADDRESS}</p>
          <IconLinks items={contact} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[15px] font-semibold">Tautan</h4>
          <ul className="flex flex-col gap-2">
            {pages.map(({ href, label }) => (
              <li key={label} className="pt-1">
                <Link
                  href={href}
                  className="inline-block transition-[opacity,transform] duration-200 hover:opacity-80 motion-safe:hover:translate-x-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[15px] font-semibold">Ikuti Kami</h4>
          <IconLinks items={social} />
        </div>
      </Reveal>
      <div className="mt-16 border-t border-frost pt-6 text-[13px] md:mt-23">
        © 2026 Lembaga Kursus Al Quran Al Falah
      </div>
    </footer>
  );
}
