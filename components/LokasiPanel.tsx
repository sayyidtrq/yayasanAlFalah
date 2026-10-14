import Image from "next/image";
import Link from "next/link";
import { ADDRESS, EMAIL, PHOTO_PLACEHOLDER, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";
import Reveal from "./Reveal";

const MAPS_QUERY = "Masjid+Al+Falah+Surabaya";
const icon = { stroke: "var(--color-teal-deep)", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const rows = [
  {
    text: ADDRESS.replace(", Surabaya", ", Darmo, Kec. Wonokromo, Surabaya"),
    icon: (
      <>
        <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" {...icon} />
        <circle cx="12" cy="10.5" r="2.4" {...icon} />
      </>
    ),
  },
  {
    text: `WhatsApp ${WHATSAPP_LABEL}`,
    href: WHATSAPP_URL,
    icon: (
      <>
        <path d="M4 20l1.4-4.2A8 8 0 1 1 9.4 19L4 20Z" {...icon} />
        <path d="M8.5 10.5c.3 2 2 3.7 4 4" {...icon} />
      </>
    ),
  },
  {
    text: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" {...icon} />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" {...icon} />
      </>
    ),
  },
  {
    // ponytail: hours from the period-128 registration notice; confirm with sekretariat.
    text: "Senin–Sabtu, 07.00–17.00 WIB",
    muted: true,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" {...icon} />
        <path d="M12 7.5V12l3 2" {...icon} />
      </>
    ),
  },
];

// Invitation banner joined to the map and sekretariat details (Tentang Kami, Kontak).
export default function LokasiPanel() {
  return (
    <section id="lokasi" className="bg-white px-6 pb-12 md:px-16 md:pb-24">
      <Reveal className="overflow-hidden rounded-[20px] bg-mist">
        <div className="relative overflow-hidden">
          <Image src={PHOTO_PLACEHOLDER} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,92,79,0.92)_0%,rgba(0,92,79,0.8)_45%,rgba(0,92,79,0.55)_100%)]" />
          <div className="relative flex flex-col gap-6 px-6 py-8 md:min-h-50 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12">
            <div className="min-w-0">
              <h2 className="font-heading text-[28px] leading-[34px] font-bold text-white text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[34px] md:leading-[42px]">
                Mari Belajar Al-Qur&apos;an Bersama Kami
              </h2>
              <p className="mt-2.5 max-w-150 text-[15px] leading-6 text-white/94 md:text-base md:leading-[26px]">
                Datang langsung ke sekretariat di Masjid Al-Falah Surabaya, atau tanyakan dulu ke admin
                kami lewat WhatsApp.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/program"
                className="btn-lift flex min-h-12 items-center justify-center rounded-xl bg-white px-7 text-[15px] font-semibold text-blue-stone hover:bg-surface"
              >
                Lihat Program
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift flex min-h-12 items-center justify-center gap-2 rounded-xl bg-jewel px-7 text-[15px] font-semibold text-white hover:bg-jewel/90"
              >
                <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
                Daftar via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-10 lg:flex-row lg:items-stretch lg:gap-12">
          <div className="relative min-h-60 overflow-hidden rounded-xl border border-frost bg-white lg:w-130 lg:shrink-0">
            <iframe
              title="Peta lokasi Masjid Al-Falah Surabaya"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h3 className="font-heading text-2xl leading-8 font-bold text-ink">
              Sekretariat di Masjid Al-Falah Surabaya
            </h3>
            <ul className="mt-[18px] flex flex-col gap-3 text-base leading-6">
              {rows.map((r) => {
                const body = (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-px shrink-0">
                      {r.icon}
                    </svg>
                    {r.text}
                  </>
                );
                return (
                  <li key={r.text} className={r.muted ? "text-ink-soft" : "text-ink"}>
                    {r.href ? (
                      <a
                        href={r.href}
                        {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-start gap-3 underline-offset-4 hover:underline"
                      >
                        {body}
                      </a>
                    ) : (
                      <span className="flex items-start gap-3">{body}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-12 items-center self-start rounded-xl border-2 border-blue-stone px-[26px] text-[15px] font-semibold text-blue-stone transition-colors hover:bg-white"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
