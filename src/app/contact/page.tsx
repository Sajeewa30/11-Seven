import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Clock, Facebook, Mail, MapPin, PhoneCall, TikTok, WhatsApp } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Call ${site.landline.display} or ${site.phone.display}, WhatsApp, email or visit 11-seven at No. 204 Kandy Road, Wattegama. Open every day, 8 am – 11 pm.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    Icon: PhoneCall,
    label: "Call the shop",
    value: site.landline.display,
    href: `tel:${site.landline.tel}`,
    note: "Shop landline, during opening hours",
    external: false,
  },
  {
    Icon: WhatsApp,
    label: "Call or WhatsApp",
    value: site.phone.display,
    href: site.phone.whatsapp,
    note: "Send a photo of what you need, your book list or a file to print",
    external: true,
  },
  {
    Icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "For printing files, bulk and office orders",
    external: false,
  },
  {
    Icon: MapPin,
    label: "Visit",
    value: `${site.address.line1}, ${site.address.city}`,
    href: site.address.mapsUrl,
    note: "Get directions on Google Maps",
    external: true,
  },
].filter((c) => c.value);

const follow = [
  {
    Icon: TikTok,
    name: "TikTok",
    handle: site.socialHandles.tiktok,
    href: site.social.tiktok,
    qr: "/images/qr-tiktok.svg",
  },
  {
    Icon: Facebook,
    name: "Facebook",
    handle: site.socialHandles.facebook,
    href: site.social.facebook,
    qr: "/images/qr-facebook.svg",
  },
].filter((f) => f.href);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We’re happy to help."
        description="Checking if something is in stock, sending a school book list, a file to print or a bulk order for your office? Call, message or drop in — we’re open every day from 8 am to 11 pm."
      />

      <section className="container-x">
        <div className="grid gap-5 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="surface group flex h-full items-center gap-5 rounded-card p-6 transition-colors hover:border-maroon-700/50 sm:p-7"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-maroon-700 text-cream">
                  <c.Icon size={24} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{c.label}</span>
                  <span className="mt-1 block break-words text-lg font-bold text-ink">{c.value}</span>
                  <span className="mt-0.5 block text-sm text-ink-muted">{c.note}</span>
                </span>
                <ArrowUpRight size={20} className="shrink-0 text-ink-muted transition-colors group-hover:text-maroon-700" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="surface mt-5 flex flex-wrap items-center justify-between gap-4 rounded-card p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              <Clock size={18} />
              Opening hours
            </h2>
            <ul className="space-y-1 text-lg">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-wrap gap-x-4">
                  <span className="text-ink-muted">{h.days}</span>
                  <span className="font-bold tabular-nums text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {follow.length > 0 && (
        <section className="container-x pt-16 lg:pt-20">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">Follow 11-seven</h2>
            <p className="mt-3 max-w-xl text-lg text-ink-muted">
              New stock, school-season offers and printing work — see it first on our pages.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {follow.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="surface flex h-full items-center justify-between gap-6 rounded-card p-6 sm:p-7">
                  <div className="min-w-0">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700 text-cream">
                      <f.Icon size={22} />
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{f.name}</p>
                    <p className="mt-1 text-lg font-bold text-ink">{f.handle}</p>
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-maroon-700 underline-offset-4 hover:underline"
                    >
                      Follow on {f.name}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  {/* QR codes help desktop visitors open the page on their phone; hidden on small screens. */}
                  <figure className="hidden shrink-0 text-center sm:block">
                    <Image
                      src={f.qr}
                      alt={`QR code that opens the 11-seven ${f.name} page`}
                      width={128}
                      height={128}
                      className="h-32 w-32 rounded-lg border border-gold-600/30"
                    />
                    <figcaption className="mt-2 text-xs text-ink-muted">Scan with your phone</figcaption>
                  </figure>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
