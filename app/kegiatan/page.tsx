import { permanentRedirect } from "next/navigation";

// "Kegiatan" was renamed "Berita" (client revision 17/10); keep old links working.
export default function KegiatanRedirect() {
  permanentRedirect("/berita");
}
