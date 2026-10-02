import type { Metadata } from "next";
import { Montserrat, Philosopher } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Lembaga Kursus Al Qur'an Al Falah",
  description:
    "Bimbingan Al-Qur'an profesional untuk segala usia di bawah Yayasan Masjid Al Falah Surabaya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${philosopher.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Without JS nothing would ever reveal, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
