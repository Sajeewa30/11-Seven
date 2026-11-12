import Button from "./Button";
import { Check, Mail, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { services, site } from "@/data/site";

/** Printing and everyday counter services, shown under "What we sell". */
export default function Services() {
  return (
    <Reveal>
      <div id="services" className="surface scroll-mt-28 rounded-card p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow">Also at the counter</p>
            <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-ink">Printing &amp; everyday services</h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Send your file or photo on WhatsApp{site.email ? " or by email" : ""}, or bring it to the shop. We’ll
              share a proof before anything custom is printed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.phone.whatsapp} size="md" target="_blank" rel="noreferrer">
                <WhatsApp size={17} />
                WhatsApp a file
              </Button>
              {site.email && (
                <Button href={`mailto:${site.email}`} variant="outline" size="md">
                  <Mail size={17} />
                  Email
                </Button>
              )}
            </div>
          </div>
          <ul className="grid content-start gap-x-6 gap-y-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-tile border border-gold-600/25 bg-page px-4 py-3 text-ink">
                <Check size={18} className="mt-0.5 shrink-0 text-maroon-700" />
                <span className="font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
