import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VisitStrip from "@/components/VisitStrip";
import { Heart, Shield, Tag } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "The story behind 11-seven — the stationery, phone accessories and gym supplements shop on Kandy Road, Wattegama.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    Icon: Shield,
    title: "Genuine, always",
    text: "We stock original products from trusted brands and suppliers. If we wouldn’t use it ourselves, it doesn’t go on our shelves.",
  },
  {
    Icon: Tag,
    title: "Fair prices",
    text: "Good quality shouldn’t mean a trip to the city or a big mark-up. We keep our prices fair for everyday shoppers.",
  },
  {
    Icon: Heart,
    title: "Service with a smile",
    text: "From packing a school book list to choosing the right charger, we take the time to help you get it right.",
  },
];

/** Photo beside "Our story" (5:6 portrait). Swap the file for a real shop photo when one is available,
 *  or set to null to show the story without a photo. */
const storyImage = {
  src: "/images/about.jpg",
  alt: "Inside the shop: supplement tubs on the back shelves, chargers and phone cases on wall hooks, and stationery on the shelves beside the counter",
} as { src: string; alt: string } | null;

const facts = [
  { label: "Opened", value: site.grandOpening },
  { label: "Find us", value: `${site.address.line1}, ${site.address.city}` },
  { label: "We sell", value: "Stationery, phone accessories & gym supplements" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A local shop for everyday needs."
        description={`11-seven opened on Kandy Road, ${site.address.city}, in ${site.openedOn} — bringing stationery, phone accessories and gym supplements together under one roof.`}
      />

      {/* Story */}
      <section className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className={storyImage ? "lg:col-span-7" : "max-w-3xl lg:col-span-12"}>
            <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">Our story</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>
                11-seven started with a simple idea: the things people use every day should be easy to find close to
                home. Too often, a school book list, a replacement phone charger or a tub of protein meant a trip
                into Kandy. We wanted {site.address.city} to have one shop that covers all three — properly stocked
                and fairly priced.
              </p>
              <p>
                We opened our doors at {site.address.line1}, {site.address.city}, on {site.grandOpening}. Today you’ll
                find school and office stationery, genuine mobile phone accessories and trusted gym supplements on
                our shelves, along with a team that’s happy to help.
              </p>
              <p>
                Whether you’re a parent getting ready for the new school term, a student, an office buyer or someone
                training for their next goal, we’d love to see you in the shop.
              </p>
            </div>

            <ul className="mt-8 grid gap-5 rounded-card border border-gold-600/30 bg-linen p-6 sm:grid-cols-3 sm:gap-6">
              {facts.map((f) => (
                <li key={f.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{f.label}</p>
                  <p className="mt-1 font-bold leading-snug text-ink">{f.value}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          {storyImage && (
            <Reveal delay={100} className="lg:col-span-5">
              <div className="surface relative mx-auto aspect-[5/6] max-w-md overflow-hidden rounded-card lg:max-w-none">
                <Image
                  src={storyImage.src}
                  alt={storyImage.alt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 448px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading eyebrow="What we stand for" title="Three promises on every shelf." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="surface h-full rounded-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700 text-cream">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VisitStrip />
    </>
  );
}
