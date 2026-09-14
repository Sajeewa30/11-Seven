import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import VisitStrip from "@/components/VisitStrip";
import { ArrowUpRight, Clock, Mail, MapPin, PhoneCall, WhatsApp } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Call, WhatsApp, email or visit 11-seven at No. 204 Kandy Road, Wattegama.",
};

interface ContactPageProps {
  searchParams: Promise<{ topic?: string }>;
}

const channels = [
  {
    Icon: PhoneCall,
    label: "Call",
    value: site.phone.display,
    href: `tel:${site.phone.tel}`,
    note: "Fastest during opening hours",
    external: false,
  },
  {
    Icon: WhatsApp,
    label: "WhatsApp",
    value: "Message the shop",
    href: site.phone.whatsapp,
    note: "Send a photo of what you need",
    external: true,
  },
  {
    Icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Replies within one working day",
    external: false,
  },
  {
    Icon: MapPin,
    label: "Visit",
    value: `${site.address.line1}, ${site.address.city}`,
    href: site.address.mapsUrl,
    note: "Open in Google Maps",
    external: true,
  },
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { topic } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Talk to a <span className="text-gold-sheen">human</span> at the counter.
          </>
        }
        description="Questions about stock, a school book list, a bulk order for the office — send it over and we’ll get straight back to you."
      />

      <section className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="surface rounded-card p-6 sm:p-10">
              <h2 className="font-display text-3xl text-ink sm:text-4xl">Send a message</h2>
              <p className="mt-2 text-sm text-ink-muted">We reply within one working day.</p>
              <div className="mt-8">
                <ContactForm defaultTopic={topic} />
              </div>
            </div>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={80 + i * 70}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="surface group flex items-center gap-5 rounded-tile p-5 transition-all hover:border-maroon-500/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-maroon-700/10 text-maroon-700 transition-colors group-hover:bg-maroon-700 group-hover:text-cream">
                    <c.Icon size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-700">{c.label}</span>
                    <span className="mt-1 block truncate font-semibold text-ink">{c.value}</span>
                    <span className="mt-0.5 block text-xs text-ink-dim">{c.note}</span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-ink-dim transition-colors group-hover:text-maroon-700" />
                </a>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="surface rounded-tile p-5">
                <p className="flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-700">
                  <Clock size={16} />
                  Opening hours
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 text-ink-muted">
                      <span className="text-ink">{h.days}</span>
                      <span className="tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-16">
        <VisitStrip compact />
      </div>
    </>
  );
}
