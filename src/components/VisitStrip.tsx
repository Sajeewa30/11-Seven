import Button from "./Button";
import { ArrowUpRight, Clock, MapPin, PhoneCall, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { site } from "@/data/site";

interface VisitStripProps {
  /** Tighter vertical padding when the parent page already has a heading. */
  compact?: boolean;
}

export default function VisitStrip({ compact = false }: VisitStripProps) {
  return (
    <section className={`container-x ${compact ? "py-4" : "py-20 lg:py-28"}`}>
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Map placeholder — replace with a Google Maps embed */}
        <Reveal className="lg:col-span-7">
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="surface group relative block min-h-[360px] overflow-hidden rounded-card lg:min-h-[460px]"
          >
            <div className="dot-grid absolute inset-0 opacity-90" />
            <div className="absolute inset-0 bg-linear-to-br from-maroon-900/60 via-transparent to-ink/80" />
            <div className="absolute inset-0" aria-hidden>
              <div className="absolute left-[-10%] top-[55%] h-px w-[120%] -rotate-12 bg-gold-500/30" />
              <div className="absolute left-[-10%] top-[60%] h-px w-[120%] -rotate-12 bg-gold-500/15" />
              <div className="absolute left-[38%] top-[-10%] h-[120%] w-px rotate-[20deg] bg-gold-500/20" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-500 text-ink shadow-gold transition-transform duration-500 group-hover:-translate-y-1">
                <span className="animate-pulse-dot absolute inset-0 rounded-full" />
                <MapPin size={28} />
              </span>
              <p className="mt-5 font-display text-3xl text-cream">{site.address.line1}</p>
              <p className="mt-1 text-sm text-cream-muted">
                {site.address.city}, {site.address.country}
              </p>
            </div>
            <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-ink/60 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur transition-colors group-hover:bg-gold-500 group-hover:text-ink">
              Open in Google Maps
              <ArrowUpRight size={14} />
            </span>
            <span className="absolute left-5 top-5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-gold-600/70">
              Map placeholder
            </span>
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="surface flex h-full flex-col justify-between rounded-card p-8 lg:p-10">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500/70" />
                Visit the shop
              </p>
              <h2 className="mt-5 font-display text-4xl leading-none text-cream sm:text-5xl">Come say hello.</h2>

              <ul className="mt-8 space-y-6 text-sm text-cream-muted">
                <li className="flex gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-semibold text-cream">{site.address.line1}</p>
                    <p>
                      {site.address.city}, {site.address.region}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-gold-500" />
                  <div className="space-y-1.5">
                    {site.hours.map((h) => (
                      <p key={h.days}>
                        <span className="font-semibold text-cream">{h.days}</span>
                        <span className="mx-2 text-gold-700">·</span>
                        {h.time}
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <PhoneCall size={20} className="mt-0.5 shrink-0 text-gold-500" />
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-cream hover:text-gold-200">
                    {site.phone.display}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={`tel:${site.phone.tel}`} size="md">
                <PhoneCall size={17} />
                Call the shop
              </Button>
              <Button href={site.phone.whatsapp} variant="outline" size="md" target="_blank" rel="noreferrer">
                <WhatsApp size={17} />
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
