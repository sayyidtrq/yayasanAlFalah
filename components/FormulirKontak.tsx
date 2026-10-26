import Image from "next/image";
import { GOOGLE_FORM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/site";
import Reveal from "./Reveal";

// Registration / contact form on /kontak. Every "Daftar" button on the site lands here
// (/kontak#formulir). The form itself is an embedded Google Form owned by the client.
export default function FormulirKontak() {
  return (
    <section id="formulir" className="bg-white px-6 py-12 md:px-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-heading text-[28px] leading-tight font-bold text-ink md:text-4xl">Hubungi Kami</h2>
          <p className="max-w-[46ch] text-base leading-7 text-ink-soft">
            Ingin mendaftar atau bertanya tentang program? Isi formulir berikut dan admin kami akan
            menghubungimu. Santri baru akan mengikuti tes penempatan agar mulai dari kelas yang tepat.
          </p>
          <div className="mt-2 flex flex-col gap-2 border-t border-line pt-5">
            <p className="text-sm font-semibold text-ink-soft">Ingin Terhubung Langsung dengan Kami?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-base font-semibold text-teal-deep underline-offset-4 hover:underline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 20l1.4-4.2A8 8 0 1 1 9.4 19L4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8.5 10.5c.3 2 2 3.7 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              WhatsApp {WHATSAPP_LABEL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {GOOGLE_FORM_URL ? (
            <iframe
              title="Formulir pendaftaran Lembaga Kursus Al-Qur'an Al-Falah"
              src={GOOGLE_FORM_URL}
              loading="lazy"
              className="h-[1100px] w-full rounded-2xl border border-line bg-surface"
            >
              Memuat formulir…
            </iframe>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-ink-muted bg-surface p-8 text-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink-muted">
                <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p className="text-lg font-semibold text-ink">Formulir pendaftaran segera tersedia</p>
              <p className="max-w-[40ch] text-base leading-7 text-ink-soft">
                Sementara itu, kamu bisa mendaftar dan bertanya langsung lewat WhatsApp admin kami.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift mt-2 flex min-h-11 items-center gap-2 rounded-xl bg-jewel px-6 text-[15px] font-semibold text-white hover:bg-jewel/90"
              >
                <Image src="/images/whatsapp.svg" alt="" width={18} height={18} />
                Daftar lewat WhatsApp
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
