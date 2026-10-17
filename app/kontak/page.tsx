import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FormulirKontak from "@/components/FormulirKontak";
import LokasiPanel from "@/components/LokasiPanel";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Kontak — Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Formulir pendaftaran, alamat sekretariat, WhatsApp, email, dan peta lokasi Lembaga Kursus Al-Qur'an Al-Falah Surabaya di Masjid Al-Falah, Jl. Raya Darmo.",
};

export default function KontakPage() {
  return (
    <main>
      <PageHeader
        title="Kontak"
        intro="Daftar atau tanyakan program lewat formulir di bawah, datang langsung ke sekretariat di Masjid Al-Falah Surabaya, atau hubungi admin kami lewat WhatsApp dan email."
      />
      <FormulirKontak />
      <LokasiPanel />
      <Footer />
    </main>
  );
}
