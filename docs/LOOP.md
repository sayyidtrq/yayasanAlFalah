# Mini loop engineering

Satu putaran = satu butir di `docs/revisi-checklist.md`. Checklist adalah sumber kebenaran: jangan baca ulang `chat.md` atau Google Docs.

1. **Pick:** ambil butir `[ ]` teratas yang tidak diblokir. Baca hanya file terkaitnya.
2. **Do:** edit minimal, ikut gaya kode sekitar.
3. **Check:** `npm run lint` dan `npm run build`. Cek aturan PRODUCT.md: copy klien verbatim, tidak mengarang harga/foto/testimoni, body minimal 16px. Butir yang menyentuh layout: 1 screenshot mobile.
4. **Mark:** centang `[x]`. Gagal 2x: tandai `[!] alasan`, lanjut ke butir berikut.
5. **Stop** setelah 3 butir, atau begitu ada butir yang butuh keputusan Sayyid/klien. Lapor 3 baris: berubah apa, gagal apa, butuh apa dari klien.

Hemat token: tanpa subagent kecuali diminta; jangan baca file di luar daftar "file terkait".

Keamanan: jangan simpan password/kode OTP di repo atau docs. Aksi yang mengubah akun (publish, submit, setting) dikonfirmasi dulu ke Sayyid.
