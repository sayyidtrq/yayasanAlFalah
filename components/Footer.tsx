import Image from "next/image";
import Link from "next/link";
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";
import Reveal from "./Reveal";

// ponytail: lynk.id and WhatsApp channel URLs unknown, "#" until provided.
const columns = [
  {
    title: "Tautan",
    links: [
      { href: "/tentang-kami", label: "Tentang Kami" },
      { href: "/#program", label: "Program" },
      { href: "/#kegiatan", label: "Kegiatan" },
    ],
  },
  {
    title: "Ikuti Kami",
    links: [
      { href: INSTAGRAM_URL, label: "Instagram @kursusalfalahsby" },
      { href: "#", label: "Semua Tautan (lynk.id)" },
      { href: "#", label: "Channel WhatsApp" },
    ],
  },
];

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
          <p className="pt-1">{ADDRESS}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            WA {WHATSAPP_LABEL}
          </a>
        </div>
        {columns.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-2">
            <h4 className="text-[15px] font-semibold">{title}</h4>
            <ul className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
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
        ))}
      </Reveal>
      <div className="mt-16 border-t border-frost pt-6 text-[13px] md:mt-23">
        © 2026 Lembaga Kursus Al Quran Al Falah
      </div>
    </footer>
  );
}
