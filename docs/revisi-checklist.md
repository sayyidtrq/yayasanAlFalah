# Revisi checklist (sumber: dokumen revisi + keputusan Jalur B)

Keputusan: frontend tetap di Vercel, WordPress (Rumahweb) jadi CMS untuk Berita/Kegiatan lewat REST API + ISR. Program, jadwal, dan copy halaman tetap di kode.

Format: `[ ] id | butir | file terkait | selesai jika`

## Form & kontak
- [x] F1 | Buat Google Form (Nama, No HP, Alamat, Materi, Jam, Hari) di akun yayasan, ambil URL embed `viewform?embedded=true` | lib/site.ts | `GOOGLE_FORM_URL` terisi, iframe tampil di /kontak di mobile
- [x] F2 | Kontak & "Ikuti kami" pakai ikon saja (WA, email, IG) yang bisa diklik | components/Footer.tsx, app/kontak/page.tsx | ikon tampil dan link benar
- [x] F3 | Cek copy: "Ingin Terhubung Langsung dengan Kami?", teks durasi 4 bulan, 2x seminggu 90 menit, Periode 136 (Des 2026-Apr 2027, daftar 21 Nov-17 Des 2026) | components/FormulirKontak.tsx, app/program/page.tsx | teks sama persis dengan dokumen revisi

## Jadwal
- [x] J1 | Kelas TPQ: tambah Sabtu 08.00-11.15 | app/program/page.tsx | jadwal tampil
- [x] J2 | Teks paragraf di-justify | app/globals.css atau komponen terkait | rapi di mobile

## Berita (statis dulu)
- [x] B1 | Tambah berita "pembelajar dewasa bebas buta aksara" sebagai preview (tanpa foto, foto di-hold) | lib/content.ts | muncul di /berita kategori Kegiatan

## WordPress sebagai CMS (Jalur B)
- [x] W1 | Cek WP: versi, REST API aktif, domain utama dipakai WP atau tidak, tipe hosting | (Chrome, read-only) | ringkasan 5 baris ke Sayyid
- [~] W2 | Keputusan: WP ke cms.kursusquranalfalah.id, domain utama ke Vercel. Langkah di docs/runbook-w2-domain.md (dikerjakan Sayyid di cPanel/Rumahweb/Vercel) | (DNS Rumahweb) | cms. aktif dan domain utama menampilkan Next.js
- [ ] W3 | Buat kategori WP: Kegiatan, Kajian Islam, Hukum Islam | (WP admin) | 3 kategori ada
- [x] W4 | Fetch post WP di /berita (ISR, revalidate 60 dtk), fallback ke data statis kalau WP gagal | app/berita/page.tsx, lib/ (baru) | post WP uji muncul tanpa deploy
- [ ] W5 | Halaman detail berita dari post WP | app/berita/[slug] (baru) | slug dan gambar WP tampil

## Penutup
- [ ] Z1 | Responsive QA mobile seluruh halaman | semua halaman | tidak ada layout pecah
- [ ] Z2 | Update sheet tracker ke kondisi Next.js + Jalur B | Google Sheet | status sesuai

## Menunggu klien
- Foto profesional (hold, minggu ini)
- Tanggal kegiatan, konfirmasi deskripsi program, jadwal TPQ/Tahfidz periode 133

## Hasil W1 (26/10/2026)
- Domain: kursusquranalfalah.id. Hosting Rumahweb "Unlimited M" (cPanel/LiteSpeed), aktif sampai 16 Jul 2027.
- WordPress 7.1.3 sudah terpasang di domain utama, tema Zakra, isi masih bawaan (1 post "Hello world", kategori Uncategorized saja).
- REST API publik aktif (/wp-json/wp/v2/posts terbaca tanpa login); CORS membalas Origin yang diminta.
- /wp-login.php membalas 401 dari server (proteksi level hosting); cara login admin perlu dicek lewat cPanel.
