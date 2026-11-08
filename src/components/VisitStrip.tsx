import Button from "./Button";
import { ArrowUpRight, Clock, Mail, MapPin, PhoneCall, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { site } from "@/data/site";

/** Address, hours and contact buttons — used at the foot of most pages. */
export default function VisitStrip() {
  return (
    <section className="container-x pt-20 lg:pt-28">
      <Reveal>
        <div className="grid overflow-hidden rounded-card border border-gold-600/30 bg-paper shadow-card lg:grid-cols-12">
          <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="eyebrow">Visit the shop</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">Come say hello.</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <MapPin size={22} className="mt-0.5 shrink-0 text-maroon-700" />
                <div>
                  <p className="font-bold text-ink">Address</p>
                  <p className="mt-1 text-ink-muted">
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.country}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={22} className="mt-0.5 shrink-0 text-maroon-700" />
                <div>
                  <p className="font-bold text-ink">Opening hours</p>
                  {site.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-ink-muted">
                      {h.days}
                      <br />
                      <span className="font-semibold text-ink">{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <PhoneCall size={22} className="mt-0.5 shrink-0 text-maroon-700" />
                <div>
                  <p className="font-bold text-ink">Phone &amp; WhatsApp</p>
                  <p className="mt-1">
                    <a href={`tel:${site.phone.tel}`} className="text-ink-muted underline-offset-4 hover:text-maroon-700 hover:underline">
                      {site.phone.display}
                    </a>
                  </p>
                </div>
              </div>
              {site.email && (
                <div className="flex gap-4">
                  <Mail size={22} className="mt-0.5 shrink-0 text-maroon-700" />
                  <div>
                    <p className="font-bold text-ink">Email</p>
                    <p className="mt-1">
                      <a href={`mailto:${site.email}`} className="break-all text-ink-muted underline-offset-4 hover:text-maroon-700 hover:underline">
                        {site.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative flex flex-col justify-center gap-4 bg-maroon-900 p-8 sm:p-10 lg:col-span-5 lg:p-12">
            <div className="pointer-events-none absolute inset-3 rounded-[0.9rem] border border-gold-500/25" />
            <p className="relative font-display text-3xl leading-tight text-cream">
              Call ahead to check stock, or just drop in.
            </p>
            <div className="relative mt-2 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={`tel:${site.phone.tel}`} variant="gold" size="md">
                <PhoneCall size={17} />
                Call the shop
              </Button>
              <Button href={site.phone.whatsapp} variant="outlineLight" size="md" target="_blank" rel="noreferrer">
                <WhatsApp size={17} />
                WhatsApp
              </Button>
            </div>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative mt-2 inline-flex items-center gap-2 font-semibold text-gold-300 underline-offset-4 hover:underline"
            >
              Get directions on Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
