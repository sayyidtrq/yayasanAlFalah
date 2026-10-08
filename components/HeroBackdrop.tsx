import Image from "next/image";

// Photo + green gradient overlay shared by the landing hero and inner page headers.
// Clips itself, so the header can stay unclipped and let the nav dropdown overflow.
// `inner` is the slightly deeper recipe used on inner pages, with a top fade behind the nav.
export default function HeroBackdrop({ inner = false }: { inner?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="settle object-cover object-[center_55%]"
      />
      {inner ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,92,79,0.82)_0%,rgba(0,92,79,0.62)_40%,rgba(0,92,79,0.38)_72%,rgba(0,92,79,0.26)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,60,52,0.55)_0%,rgba(0,60,52,0)_100%)]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,92,79,0.75)_0%,rgba(0,92,79,0.55)_40%,rgba(0,92,79,0.26)_72%,rgba(0,92,79,0.1)_100%)]" />
      )}
    </div>
  );
}
