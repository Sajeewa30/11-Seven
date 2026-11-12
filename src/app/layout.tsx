import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bodoni_Moda, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

/* Display serif — a sturdier Didone that echoes the lettering on the grand-opening invitation. */
const bodoni = Bodoni_Moda({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-bodoni", display: "swap" });
/* Body / UI. */
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
/* Brand wordmark — the "11-seven" lettering is set in Poppins Extra Bold. */
const poppins = Poppins({ weight: ["800"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Stationery, Phone Accessories & Gym Supplements in Wattegama`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Stationery, Phone Accessories & Gym Supplements`,
    description: site.description,
    locale: "en_LK",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "11-seven — Stationery, Phone Accessories & Gym Supplements, No. 204 Kandy Road, Wattegama" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
  colorScheme: "light",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.landline.tel,
  ...(site.email ? { email: site.email } : {}),
  openingHours: site.openingHoursSchema,
  hasMap: site.address.mapsUrl,
  sameAs: Object.values(site.social).filter(Boolean),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "LK",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodoni.variable} ${manrope.variable} ${poppins.variable} h-full`}
    >
      <head>
        {/* Lets scroll-reveal animations run only when JavaScript is available. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body className="flex min-h-full flex-col bg-page font-body text-ink">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-maroon-700 px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
