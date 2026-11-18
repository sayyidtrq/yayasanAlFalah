import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kegiatan from "@/components/Kegiatan";
import NilaiUnggulan from "@/components/NilaiUnggulan";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Tentang from "@/components/Tentang";

// Berita Terbaru comes from WordPress: refresh at most every 60 seconds, like /berita (lib/wp.ts).
export const revalidate = 60;

// Full-viewport blocks: hero+stats, nilai unggulan, berita, program, tentang+daftar+footer.
export default function Home() {
  return (
    <main>
      <div className="flex min-h-svh flex-col">
        <Hero />
        <Stats />
      </div>
      <NilaiUnggulan />
      <Kegiatan />
      <Programs />
      <div className="flex min-h-svh flex-col">
        <Tentang />
        <CtaDaftar />
        <Footer />
      </div>
    </main>
  );
}
