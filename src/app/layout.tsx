import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Italiana, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldFrame from "@/components/GoldFrame";
import { site } from "@/data/site";

/* Display serif — echoes the thin Didone lettering on the grand-opening invitation. */
const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-italiana", display: "swap" });
/* Body / UI. */
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
/* Brand wordmark — the "11-seven" lettering is set in Poppins Extra Bold. */
const poppins = Poppins({ weight: ["600", "700", "800"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Stationery, Phone Accessories & Gym Supplements in Wattegama`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Stationery, Phone Accessories & Gym Supplements`,
    description: site.description,
    locale: "en_LK",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0f0a0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${italiana.variable} ${manrope.variable} ${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-coal font-body text-cream">
        <div className="grain" aria-hidden />
        <GoldFrame />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
