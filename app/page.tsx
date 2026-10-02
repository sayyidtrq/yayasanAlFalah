import CtaDaftar from "@/components/CtaDaftar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kegiatan from "@/components/Kegiatan";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Tentang from "@/components/Tentang";

// Four full-viewport blocks: hero+stats, kegiatan, program, tentang+daftar+footer.
export default function Home() {
  return (
    <main>
      <div className="flex min-h-svh flex-col">
        <Hero />
        <Stats />
      </div>
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
