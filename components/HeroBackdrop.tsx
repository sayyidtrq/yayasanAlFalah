import Image from "next/image";

// Photo + green gradient overlay shared by the landing hero and inner page headers.
// Clips itself, so the header can stay unclipped and let the nav dropdown overflow.
export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image src="/images/hero-placeholder.svg" alt="" fill priority className="settle object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,92,79,0.75)_0%,rgba(0,92,79,0.55)_40%,rgba(0,92,79,0.26)_72%,rgba(0,92,79,0.1)_100%)]" />
    </div>
  );
}
