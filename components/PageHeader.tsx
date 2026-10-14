import HeroBackdrop from "./HeroBackdrop";
import Navbar from "./Navbar";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Inner-page hero: photo backdrop, navbar, page title and one-line intro.
export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="relative flex min-h-90 flex-col text-white md:min-h-120">
      <HeroBackdrop inner />
      <div className="relative flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col justify-center px-6 pb-12 md:px-16 md:pb-14">
          <h1
            style={delay(150)}
            className="rise font-heading text-4xl font-bold text-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[52px] md:leading-[58px]"
          >
            {title}
          </h1>
          <p
            style={delay(300)}
            className="rise mt-5 max-w-130 text-base leading-7 text-white/92 text-shadow-[0_1px_8px_rgba(0,0,0,0.2)] md:text-lg"
          >
            {intro}
          </p>
        </div>
      </div>
    </header>
  );
}
