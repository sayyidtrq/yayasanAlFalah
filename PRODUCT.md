# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Prospective santri and their families** in Surabaya: adults and older learners who want to read the Qur'an fluently, improve tajwid or deepen understanding, and parents enrolling children (TPQ from age 4, Tahfidz Cilik). They decide which program fits, then register through WhatsApp.
- **Current santri and alumni** who come back to see activities (Wisuda & Khataman, Festival Santri, Bakti Sosial).
- Audience skews toward older, less tech-fluent visitors on phones; WhatsApp is the expected channel.

## Product Purpose

Website for **Lembaga Kursus Al-Qur'an (LKA) Al-Falah Surabaya**, a non-formal Qur'an education institution under Yayasan Masjid Al-Falah Surabaya since 1978. It explains the institution and its programs and moves visitors to register through the form on /kontak (Google Form) or WhatsApp (+62 822-4516-8338). Success: a visitor understands which program suits them and registers or contacts the admin.

## Positioning

One of the pioneers of mosque-based Qur'an education in Surabaya: classes for every age, held at Masjid Al-Falah (Jl. Raya Darmo 137A, Lt. 2), with placement tests, flexible morning-to-evening schedules, and both in-person and online classes.

## Operating Context

- Registration runs per period (about four months); new santri take a placement test.
- Class schedule shown on /program: Kelas Reguler (period 133 timetable from the client): Senin & Rabu and Selasa & Kamis at 05.30, 08.00, 09.45, 13.00, 15.30, 19.30 (90 minutes each); Jumat & Sabtu 05.30–07.00; Sabtu 08.00–11.15. Kelas TPQ (blended) Senin–Kamis 15.30–17.00 and Kelas Tahfidz untuk TK–SMP Sabtu 13.00–14.30 are period-128 data awaiting confirmation.
- Fees change each period and are NOT shown on the site; visitors ask via WhatsApp (client decision, 14/10).

## Capabilities and Constraints

- Next.js 16 app router, Tailwind v4, deployed on Vercel from the `app/` folder.
- 14 programs (Siroh Nabi and Imam & Perawatan Jenazah dropped, 17/10). Five are featured ("Program Unggulan"): Baca Tulis Al-Qur'an, Tafsir Al-Qur'an, Sholat dan Hukum Islam, Akselerasi, Dakwah & Public Speaking.
- Pages: Beranda, Tentang Kami, Program, Berita (photo gallery; categories Kegiatan / Kajian Islam / Hukum Islam; /kegiatan redirects), Kontak. Per-program detail lives on /program.
- Every "Daftar" button leads to the form on /kontak#formulir; "Tanya" buttons open WhatsApp with "Saya ingin mendapatkan penjelasan tentang program …". The Google Form embed URL is still to be supplied (lib/site.ts GOOGLE_FORM_URL).
- Open: per-program descriptions are drafts awaiting client confirmation; activity dates are not yet supplied.

## Brand Commitments

- Name: Lembaga Kursus Al-Qur'an Al-Falah Surabaya (LKA / LKF). Logo in `public/images/logo.png` and `logo-white.png`.
- Client-supplied copy for Profil and Tujuan Awal must stay verbatim.
- Voice: warm, inviting, Indonesian, second person ("-mu"), e.g. "Yuk, Belajar Al-Qur'an Bareng Al Falah!".
- Registration goes through the /kontak form; questions go to WhatsApp. Email: kursusalquran@gmail.com.

## Evidence on Hand

- Client-supplied visuals (28/10, "Visual Placement" tab of the revision doc), optimised in `public/images`: hero `hero.jpg`, facade `fasad.jpg`, nilai `nilai-unggulan.jpg`, `program/*.jpg` (one per Program Unggulan), `kegiatan/*.jpg` (wisuda, festival, baksos, pembelajar dewasa).
- Photos of identifiable santri are used because the client supplied them for exactly these placements; do not add others without client consent.
- Stats confirmed by client: 48+ tahun, 14 program, 2.750+ santri aktif.
- No testimonials, prices, or teacher credentials on hand; do not invent them.

## Product Principles

1. Every page ends at registration: the /kontak form, with WhatsApp as the direct alternative.
2. Help a visitor choose: who a program is for and what they will learn come before anything else.
3. Honest placeholders over invented facts; mark what the client must still supply.
4. Readable for older visitors on phones: large text, clear tap targets.

## Accessibility & Inclusion

WCAG 2.1 AA contrast; keyboard-operable navigation; motion respects prefers-reduced-motion. Older audience: body text at least 16px on content pages.
