# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Prospective santri and their families** in Surabaya: adults and older learners who want to read the Qur'an fluently, improve tajwid or deepen understanding, and parents enrolling children (TPQ from age 4, Tahfidz Cilik). They decide which program fits, then register through WhatsApp.
- **Current santri and alumni** who come back to see activities (Wisuda & Khataman, Festival Santri, Bakti Sosial).
- Audience skews toward older, less tech-fluent visitors on phones; WhatsApp is the expected channel.

## Product Purpose

Website for **Lembaga Kursus Al-Qur'an (LKA) Al-Falah Surabaya**, a non-formal Qur'an education institution under Yayasan Masjid Al-Falah Surabaya since 1978. It explains the institution and its programs and moves visitors to register via WhatsApp (+62 822-4516-8338). Success: a visitor understands which program suits them and contacts the admin.

## Positioning

One of the pioneers of mosque-based Qur'an education in Surabaya: classes for every age, held at Masjid Al-Falah (Jl. Raya Darmo 137A, Lt. 2), with placement tests, flexible morning-to-evening schedules, and both in-person and online classes.

## Operating Context

- Registration runs per period (about four months); new santri take a placement test.
- Class formats (period 128, 2024): Kelas Dewasa Reguler twice a week, 90 minutes, day pairs Senin & Rabu / Selasa & Kamis / Jumat & Sabtu or Sabtu only, morning to evening; TPQ Al Falah blended, Senin–Kamis afternoon; Tahfidz Cilik on Saturday; online classes two or four times a week (Senin–Kamis, or Selasa & Kamis); offline class every Saturday 08.00–11.00 WIB.
- Fees change each period and are NOT shown on the site; visitors ask via WhatsApp (client decision, 14/10).

## Capabilities and Constraints

- Next.js 16 app router, Tailwind v4, deployed on Vercel from the `app/` folder.
- 16 official programs. Five are featured ("Program Unggulan"): Baca Tulis Al-Qur'an, Tafsir Al-Qur'an, Sholat dan Hukum Islam, Akselerasi, Dakwah & Public Speaking.
- Pages: Beranda, Tentang Kami, Program, Kegiatan, Kontak. Per-program detail lives on /program.
- Open: per-program descriptions are drafts awaiting client confirmation; activity dates are not yet supplied.

## Brand Commitments

- Name: Lembaga Kursus Al-Qur'an Al-Falah Surabaya (LKA / LKF). Logo in `public/images/logo.png` and `logo-white.png`.
- Client-supplied copy for Profil and Tujuan Awal must stay verbatim.
- Voice: warm, inviting, Indonesian, second person ("-mu"), e.g. "Yuk, Belajar Al-Qur'an Bareng Al Falah!".
- Every registration action opens WhatsApp.

## Evidence on Hand

- Hero photo `public/images/hero.png`; building render `public/images/about-us.jpeg`.
- No per-program or per-activity photos yet; placeholders stand in. Do not use photos of identifiable santri without client consent.
- Stats confirmed by client: 48+ tahun, 16 program, 2.750+ santri aktif.
- No testimonials, prices, or teacher credentials on hand; do not invent them.

## Product Principles

1. WhatsApp is the single path to registration; every page ends there.
2. Help a visitor choose: who a program is for and what they will learn come before anything else.
3. Honest placeholders over invented facts; mark what the client must still supply.
4. Readable for older visitors on phones: large text, clear tap targets.

## Accessibility & Inclusion

WCAG 2.1 AA contrast; keyboard-operable navigation; motion respects prefers-reduced-motion. Older audience: body text at least 16px on content pages.
