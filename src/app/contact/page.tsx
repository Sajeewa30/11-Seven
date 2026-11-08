import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Clock, Mail, MapPin, PhoneCall, WhatsApp } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Call, WhatsApp${site.email ? ", email" : ""} or visit 11-seven at No. 204 Kandy Road, Wattegama.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    Icon: PhoneCall,
    label: "Call",
    value: site.phone.display,
    href: `tel:${site.phone.tel}`,
    note: "Quickest during opening hours",
    external: false,
  },
  {
    Icon: WhatsApp,
    label: "WhatsApp",
    value: site.phone.display,
    href: site.phone.whatsapp,
    note: "Send a photo of what you need or your book list",
    external: true,
  },
  ...(site.email
    ? [
        {
          Icon: Mail,
          label: "Email",
          value: site.email,
          href: `mailto:${site.email}`,
          note: "For bulk and office orders",
          external: false,
        },
      ]
    : []),
  {
    Icon: MapPin,
    label: "Visit",
    value: `${site.address.line1}, ${site.address.city}`,
    href: site.address.mapsUrl,
    note: "Get directions on Google Maps",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We’re happy to help."
        description="Checking if something is in stock, sending a school book list or placing a bulk order for your office? Call, message or drop in — we’ll get straight back to you."
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
          <div className="surface mt-5 rounded-card p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              <Clock size={18} />
              Opening hours
            </h2>
            <ul className="mt-5 divide-y divide-gold-600/25">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-wrap justify-between gap-2 py-3 text-lg">
                  <span className="text-ink-muted">{h.days}</span>
                  <span className="font-bold tabular-nums text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
