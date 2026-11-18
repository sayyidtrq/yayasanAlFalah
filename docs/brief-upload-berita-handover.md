# Brief teknis: upload Berita & Galeri lewat WordPress + handover (target Jumat 20/11/2026)

Tujuan: klien bisa menambah, mengubah, dan menghapus **Berita** dan **Galeri** sendiri lewat WordPress di `cms.kursusquranalfalah.id`, tanpa developer dan tanpa deploy. Setelah itu website diserahterimakan hari Jumat.

## 1. Kondisi sekarang (dicek 18/11/2026)

| Bagian | Status | Bukti |
|---|---|---|
| `www.kursusquranalfalah.id` | ✅ Sudah dilayani Vercel | `Server: Vercel`, 200 |
| `kursusquranalfalah.id` (apex) | ⚠️ DNS sudah ke Vercel (A 216.198.79.1), tapi **sertifikat SSL salah** (`SEC_E_WRONG_PRINCIPAL`) via IPv4 dan IPv6 | curl 18/11 |
| Apex AAAA (IPv6) | ⚠️ Masih ada `2001:df0:27b:3::3:e040`, kemungkinan IP lama Rumahweb | nslookup |
| WP REST API cms. | ✅ Publik, 200 | `/wp-json/wp/v2/posts` |
| Kategori WP | ❌ Cuma `uncategorized`. Kategori Kegiatan / Kajian Islam / Hukum Islam belum dibuat (W3) | `/wp-json/wp/v2/categories` |
| Post WP | Cuma `hello-world` (Uncategorized, jadi tidak tampil) | |
| Kode frontend | ✅ Siap: `lib/wp.ts` mengambil post + featured image + kategori, ISR 60 dtk, fallback ke `lib/content.ts` | |
| Halaman detail | ✅ `/berita/wp-<slug>`, dirender saat diminta (dynamicParams default) | `app/berita/[slug]/page.tsx` |
| Galeri | ⚠️ Diambil dari `photos` tiap berita. Untuk post WP, **hanya featured image** (1 foto per post) | `components/BeritaGallery.tsx`, `lib/wp.ts` |

Alur data: editor publish di WP → REST API → Next.js (ISR, maks. 60 dtk) → tampil di beranda (`Kegiatan.tsx`), `/berita`, dan `/berita/wp-<slug>`. Tidak perlu redeploy.

## 2. Keputusan desain: Galeri

**Rekomendasi (opsi A): satu post = satu kegiatan, semua foto di post masuk Galeri.**
- Featured image jadi foto utama (kartu, slider, headline).
- Gambar lain di isi post (blok Image/Gallery WordPress) ikut tampil di Galeri Foto.
- Klien cukup belajar satu alur: "Tambah Post". Hapus post = hapus beritanya sekaligus fotonya dari galeri.

Perubahan kode kecil di `lib/wp.ts`: kumpulkan `src` dari `<img>` di `content.rendered` (setelah featured image, tanpa duplikat), masukkan ke `photos`. `next.config.ts` sudah mengizinkan `cms.kursusquranalfalah.id/wp-content/uploads/**`.

Opsi B (tidak disarankan untuk Jumat): kategori khusus "Galeri" untuk album tanpa artikel. Butuh filter tambahan dan alurnya membingungkan klien.

## 3. Pekerjaan teknis, berurutan

### Rabu malam / Kamis pagi
1. **WP Settings > Permalinks → "Post name"** (runbook langkah 6). Cek `/wp-json/wp/v2/posts` masih 200.
2. **Buat 3 kategori (W3)** dengan slug persis: `kegiatan`, `kajian-islam`, `hukum-islam`. Slug harus sama dengan `beritaKategori` di `lib/content.ts`, kalau tidak post tidak muncul.
3. **Ubah default category** (Settings > Writing) ke `Kegiatan`, supaya post yang lupa dikategorikan tetap tampil.
4. **Implementasi opsi A** di `lib/wp.ts` (foto isi post → galeri). Jalankan `npm run lint` dan `npm run build`.
5. **Post uji**: 1 post per kategori, satu dengan 3+ foto. Cek dalam ±60 dtk muncul di beranda, `/berita`, filter kategori, halaman detail, dan Galeri. Lalu uji edit dan hapus (berita hilang setelah revalidate).
6. **Apex domain**: di Vercel > Domains, cek status `kursusquranalfalah.id` (harus "Valid Configuration" dengan sertifikat terbit). Di DNS Rumahweb, **hapus record AAAA apex** yang menunjuk ke IP lama. Tentukan redirect apex ↔ www (runbook langkah 8).
7. **Akun editor**: buat user WordPress role **Editor** untuk pengurus (bukan Administrator). Admin tetap dipegang satu orang yayasan.

### Kamis malam
8. Tulis **panduan upload** untuk klien (lihat bagian 4) dengan screenshot dari post uji.
9. Hapus post uji dan `hello-world`. Runbook langkah 12: hapus WP lama di domain utama setelah apex valid.
10. Merge ke `main`, deploy, lalu cek ulang semua halaman (Z1 responsive QA singkat di mobile).

## 4. Isi panduan upload (untuk klien)

Format: Google Doc / PDF 2-3 halaman + rekaman layar 3-5 menit.

1. Login: `https://cms.kursusquranalfalah.id/wp-admin`
2. **Tambah berita**: Posts > Add New → Judul → isi artikel → **Kategori** (wajib pilih salah satu dari 3) → **Featured Image** (wajib, ini foto sampul) → tambah foto lain lewat blok Image/Gallery kalau ada → **Excerpt** (ringkasan 1-2 kalimat untuk kartu) → Publish.
3. **Ubah berita**: Posts > All Posts → Edit → Update.
4. **Hapus berita**: Posts > All Posts → Trash. (Bisa dipulihkan dari Trash selama 30 hari.)
5. **Galeri**: tidak ada menu terpisah. Semua foto di sebuah berita otomatis masuk Galeri Foto.
6. Aturan foto: JPG, lebar ±1600 px, maksimal ±1-2 MB per foto. Foto langsung dari HP sebaiknya dikompres dulu.
7. Perubahan tampil di website dalam ±1 menit. Kalau belum muncul, refresh halaman.
8. Yang **tidak** diubah lewat WordPress: program, jadwal, kontak, teks halaman. Ini masih di kode; minta ke developer.

## 5. Rencana handover (Jumat)

**Sebelum sesi**
- Panduan + video sudah dikirim.
- Daftar akses yang diserahkan: WP admin cms., Rumahweb (hosting & DNS), Vercel (project `yayasan-al-falah-fe`), GitHub repo, Google Form. Serahkan lewat password manager atau langsung oleh pemilik akun, **bukan lewat chat**.

**Agenda sesi (±45 menit)**
1. Tur singkat website live (5 mnt).
2. Klien praktik sendiri: tambah 1 berita asli dengan 3 foto, edit, lalu cek di website (20 mnt).
3. Serah terima akses, ganti password admin oleh klien di tempat (10 mnt).
4. Batas dukungan & cara minta perubahan (10 mnt).

**Setelah sesi**
- Masa dukungan (usul: 2 minggu) untuk bug, bukan fitur baru.
- Yang masih menunggu klien: foto profesional, tanggal kegiatan, konfirmasi deskripsi program, jadwal TPQ/Tahfidz periode 133.
- Isi lengkap 4 berita statis di `lib/content.ts`: sebaiknya klien posting ulang di WP, lalu item statis dihapus dari kode supaya tidak dobel.

## 6. Risiko & catatan

- **`docs/chat.md` dan `docs/chat.txt` berisi kredensial akun klien dalam teks biasa.** File ini belum ter-commit; jangan di-commit. Tambahkan ke `.gitignore` atau hapus, dan sarankan klien mengganti password Rumahweb saat handover.
- Post tanpa kategori yang cocok **tidak tampil** (sengaja, `lib/wp.ts`). Ini kesalahan klien yang paling mungkin terjadi; poin 3 di bagian 3 mengurangi risikonya.
- `per_page=30`: website hanya menampilkan 30 post terbaru. Cukup untuk sekarang; paginasi bisa jadi pekerjaan lanjutan.
- Keamanan WP: aktifkan auto-update minor, pakai plugin sesedikit mungkin, dan role Editor untuk pengurus.
- Kalau WP mati, website tetap jalan dengan cache terakhir/data statis (fail-soft), tapi berita baru tidak masuk.
