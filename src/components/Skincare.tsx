import Image from "next/image";
import Button from "./Button";
import { PhoneCall } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skincare, skincareBrand } from "@/data/site";

/** Home page skincare section (SachiSkin). Edit the products in `skincare` and the name/number in `skincareBrand` in src/data/site.ts. */
export default function Skincare() {
  return (
    <section id="skincare" className="container-x scroll-mt-28 pt-20 lg:pt-28">
      <Reveal>
        <SectionHeading
          eyebrow={`${skincareBrand.name} · Skincare & beauty`}
          title="Skincare for an everyday glow."
          description={`${skincareBrand.name} brings hydrating gels and soothing face masks from SADOER to the shelves at 11-seven.`}
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
        <div className="mt-6 flex flex-col gap-5 rounded-card border border-gold-600/30 bg-linen p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xl font-bold text-ink">{skincareBrand.name}</p>
            <p className="mt-1 text-ink-muted">Call for prices and what’s in stock today.</p>
          </div>
          <Button href={`tel:${skincareBrand.phone.tel}`} size="md">
            <PhoneCall size={17} />
            Call {skincareBrand.phone.display}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
