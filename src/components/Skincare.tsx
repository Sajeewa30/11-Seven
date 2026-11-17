import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skincare, site } from "@/data/site";

/** Home page Skincare & Beauty section. Edit the products in `skincare` in src/data/site.ts. */
export default function Skincare() {
  return (
    <section id="skincare" className="container-x scroll-mt-28 pt-20 lg:pt-28">
      <Reveal>
        <SectionHeading
          eyebrow="New · Skincare & beauty"
          title="Skincare for an everyday glow."
          description="Hydrating gels and soothing face masks from SADOER, now on the shelves at 11-seven."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skincare.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="surface flex h-full flex-col overflow-hidden rounded-card">
              <div className="relative aspect-[4/5] bg-linen">
                <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex-1 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{p.brand}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 text-ink-muted">
          Stock changes often, so{" "}
          <a
            href={site.phone.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-maroon-700 underline underline-offset-4 hover:text-maroon-500"
          >
            ask us on WhatsApp
          </a>{" "}
          for prices and what’s in today.
        </p>
      </Reveal>
    </section>
  );
}
