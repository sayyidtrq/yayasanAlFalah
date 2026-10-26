# W2: WordPress ke cms., domain utama ke Vercel

Keputusan (26/10/2026): WordPress pindah ke `cms.kursusquranalfalah.id`; `kursusquranalfalah.id` dan `www` diarahkan ke Vercel.

Kondisi awal: hosting Rumahweb "Unlimited M" (cPanel, IP 202.10.43.103). WP 7.1.3 di domain utama masih kosong (Hello world), jadi tidak perlu dipindah-clone; cukup pasang baru di cms. lalu hapus yang lama. Tidak ada layanan email di Rumahweb untuk domain ini (Email: 0), jadi mengubah DNS tidak memutus email.

Urutan penting: siapkan cms. dulu, baru ubah domain utama. Tiap langkah tandai selesai di sini.

## A. Di cPanel (Rumahweb, Kelola Hosting)
1. [x] Backup penuh dulu (menu Backup, atau Softaculous Backup untuk WP).
2. [x] Buat subdomain `cms.kursusquranalfalah.id` (menu Domains/Subdomains). Catat folder dokumennya.
3. [x] Pasang WordPress baru di cms. lewat Softaculous/WordPress Toolkit. Pakai https, username admin bukan "admin", password kuat. Simpan kredensial di password manager, bukan di repo/chat.
4. [ ] Pastikan SSL untuk cms. aktif (AutoSSL/Let's Encrypt). Buka https://cms.kursusquranalfalah.id dan cek gembok.
5. [ ] Login admin cms. berhasil. (Catatan: /wp-login.php di domain lama membalas 401, kemungkinan proteksi hosting; cek apakah ikut berlaku di cms.)
6. [ ] Settings > Permalinks: pilih "Post name". Cek https://cms.kursusquranalfalah.id/wp-json/wp/v2/posts terbaca.

## B. Vercel
7. [ ] Project yayasan-al-falah > Settings > Domains > tambah `kursusquranalfalah.id` dan `www.kursusquranalfalah.id`. Vercel menampilkan record DNS yang dipakai; salin persis dari layar itu, jangan dari catatan ini.
8. [ ] Tentukan satu domain utama (disarankan apex) dan yang lain redirect.

## C. DNS (Rumahweb, Kelola Domain > DNS / nameserver)
9. [ ] Tambah/ubah record domain utama dan www sesuai yang diminta Vercel (biasanya A untuk apex, CNAME untuk www). Hapus record A lama yang menunjuk ke 202.10.43.103 untuk apex/www.
10. [ ] Pastikan `cms` tetap menunjuk ke hosting (A ke IP hosting). Kalau DNS dikelola Rumahweb dan subdomain dibuat lewat cPanel, ini otomatis.
11. [ ] Tunggu propagasi, cek https://kursusquranalfalah.id menampilkan website Next.js dan Vercel menandai domain "Valid".

## D. Pembersihan
12. [ ] Setelah domain utama lancar, hapus WP lama di domain utama (sudah dibackup) agar tidak membingungkan.
13. [ ] Update lib/site.ts / env: `WP_API_URL=https://cms.kursusquranalfalah.id/wp-json/wp/v2` (dipakai W4).

## Risiko
- Selama propagasi DNS (menit sampai beberapa jam) sebagian pengunjung masih melihat versi lama.
- Jangan hapus WP lama sebelum langkah 11 lolos.
- Jangan ubah record email/MX; belum ada, tapi jangan tambahkan tanpa rencana.

## Status (26/10/2026, ditahan)
- Selesai: backup DB (langkah 1), subdomain cms. (2), WP baru terpasang di cms. (3).
- Tahan: langkah 4-6. SSL cms. masih self-signed (AutoSSL belum terbit) dan /wp-login.php (domain utama maupun cms.) membalas 401 Basic Auth "buktikan Anda bukan robot" dari server Rumahweb, bukan dari .htaccess/WP Toolkit. 401 ini sudah ada sejak pengecekan W1 sebelum ada aksi browser apa pun, dan sama di Edge.
- Berikutnya: tanya Live Support Rumahweb (kredensial/penonaktifan proteksi wp-login + percepat AutoSSL cms.), atau coba lagi nanti.
- Jangan lanjut ke bagian B/C (Vercel/DNS) sebelum langkah 4-6 beres.
