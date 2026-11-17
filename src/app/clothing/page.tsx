import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, Facebook, MapPin, Pen, PhoneCall, Shirt, Store, Tag, WhatsApp } from "@/components/Icons";
import { forge, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom clothing — polos & T-shirts by FORGE creations",
  description: `Premium polo shirts, sublimation-printed T-shirts and branded apparel by ${forge.name}, with island-wide delivery. Call ${forge.phone.display} or message on Facebook.`,
  alternates: { canonical: "/clothing" },
  openGraph: {
    title: `Custom clothing by ${forge.name}`,
    description: "Premium polos, sublimation T-shirts and branded apparel. Island-wide delivery.",
    images: [
      {
        url: "/images/forge/forge-workshop.jpg",
        width: 1200,
        height: 670,
        alt: "FORGE creations workbench with branded polo shirts and T-shirts",
      },
    ],
  },
};

/** Everything here comes from FORGE's own Facebook page and posters. */
const makes = [
  {
    Icon: Shirt,
    title: "Premium polo collection",
    text: "Polo shirts from FORGE’s own collection, for online sellers and shop owners buying 100 or more.",
  },
  {
    Icon: Shirt,
    title: "Sublimation T-shirts",
    text: "Full-colour graphics, sporty designs and custom prints on wetlook, honeycomb, close mesh, baby pique and interlock fabrics.",
  },
  {
    Icon: Store,
    title: "Branded apparel",
    text: "Polos and T-shirts with your company, school or club logo, for staff and teams.",
  },
  {
    Icon: Tag,
    title: "Mugs & plates",
    text: "Custom printed mugs and plates, like a recent order for Nugawela Central College, Kandy.",
  },
  {
    Icon: Pen,
    title: "Flex, digital & offset printing",
    text: "Flex banners, posters and flyers, plus business cards, brochures, labels and books.",
  },
  {
    Icon: MapPin,
    title: "Island-wide delivery",
    text: "Delivered to your doorstep anywhere in Sri Lanka, and overseas too.",
  },
];

/** FORGE's own photos and posters, from its Facebook page. Shown in a masonry gallery. */
const gallery = [
  {
    src: "/images/forge/forge-workshop.jpg",
    width: 1200,
    height: 670,
    alt: "FORGE creations workbench with branded polo shirts and T-shirts, thread spools and sewing machines behind",
    caption: "Branded polos and T-shirts",
  },
  {
    src: "/images/forge/forge-sublimation.jpg",
    width: 720,
    height: 894,
    alt: "FORGE creations poster: T-shirt sublimation printing with vibrant sporty designs, full-colour graphics and custom prints, available for wetlook, honeycomb, close mesh, baby pique and interlock fabrics",
    caption: "T-shirt sublimation printing",
  },
  {
    src: "/images/forge/forge-mugs.jpg",
    width: 1200,
    height: 640,
    alt: "Rows of white mugs printed with the Nugawela Central College crest, a recent FORGE creations custom order",
    caption: "Custom mugs for Nugawela Central College, Kandy",
  },
  {
    src: "/images/forge/forge-printing-promo.jpg",
    width: 1200,
    height: 527,
    alt: "FORGE creations printing and promotional services: mug printing, branded apparel, plate printing and flex printing",
    caption: "Printing & promotional services",
  },
  {
    src: "/images/forge/forge-printing.jpg",
    width: 640,
    height: 1010,
    alt: "FORGE creations printing solutions: digital printing for posters and flyers, and offset printing for business cards, brochures, labels and books, with island-wide delivery",
    caption: "Digital and offset printing",
  },
];

const checklist = [
  "Polo or T-shirt, and the colours",
  "Fabric, if you have a preference",
  "Sizes, and how many of each",
  "Your logo or design (a clear image or PDF)",
  "Where it goes: front, back or sleeve",
  "The date you need them by",
];

function ContactButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href={`tel:${forge.phone.tel}`} variant={dark ? "gold" : "primary"} size="lg">
        <PhoneCall size={18} />
        Call {forge.phone.display}
      </Button>
      <Button href={forge.facebook} variant={dark ? "outlineLight" : "outline"} size="lg" target="_blank" rel="noreferrer">
        <Facebook size={18} />
        Message on Facebook
      </Button>
    </div>
  );
}

export default function ClothingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-[4.5rem] overflow-hidden bg-maroon-900 pb-16 pt-14 text-cream lg:pb-24 lg:pt-20">
        <Image
          src="/images/forge/forge-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-maroon-900/60" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex animate-rise items-center gap-2 rounded-full bg-gold-400 px-4 py-1.5 text-sm font-bold text-ink">
              <Shirt size={16} />
              Clothing by {forge.name}
            </p>
            <h1 className="mt-6 animate-rise font-display text-[2.6rem] font-medium leading-[1.06] [animation-delay:80ms] sm:text-6xl">
              Custom polos and T-shirts, with your logo.
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream-muted [animation-delay:160ms]">
              {forge.name} makes premium polos, full-colour sublimation T-shirts and branded apparel, along with
              printing and promotional items, and delivers island-wide. Contact FORGE directly for designs, prices and
              orders.
            </p>
            <div className="mt-9 animate-rise [animation-delay:240ms]">
              <ContactButtons dark />
            </div>
          </div>

          <div className="animate-rise [animation-delay:200ms] lg:col-span-5">
            <div className="rounded-card border border-gold-500/30 bg-maroon-950/70 p-8 backdrop-blur-sm sm:p-10">
              <div className="flex items-center gap-5">
                <Image
                  src={forge.logo}
                  alt={`${forge.name} logo`}
                  width={96}
                  height={96}
                  className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-300">Order direct from</p>
                  <p className="mt-1 font-display text-3xl leading-tight text-cream">{forge.name}</p>
                </div>
              </div>
              <p className="mt-4 italic text-cream-muted">“{forge.tagline}”</p>
              <ul className="mt-7 space-y-4">
                <li className="flex gap-4">
                  <PhoneCall size={22} className="mt-0.5 shrink-0 text-gold-300" />
                  <a href={`tel:${forge.phone.tel}`} className="text-lg font-semibold text-cream hover:underline">
                    {forge.phone.display}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Facebook size={22} className="mt-0.5 shrink-0 text-gold-300" />
                  <a href={forge.facebook} target="_blank" rel="noreferrer" className="text-lg font-semibold text-cream hover:underline">
                    {forge.name} on Facebook
                  </a>
                </li>
              </ul>
              <p className="mt-8 border-t border-gold-500/25 pt-6 text-sm leading-relaxed text-cream-muted">
                Designs, prices and delivery for custom clothing are handled by {forge.name}, so please contact them
                directly rather than the 11-seven counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New polo collection */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading
            eyebrow="New collection"
            title="Premium polos, in bulk."
            description="FORGE’s new polo collection is sold to online sellers and shop owners, with a minimum order of 100 pieces."
            action={{ href: `tel:${forge.phone.tel}`, label: "Call about bulk prices" }}
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-card border border-gold-600/30 bg-linen shadow-card">
            <Image
              src="/images/forge/forge-collection-wide.jpg"
              alt="FORGE creations new premium polo collection: three men in brown, green and black polo shirts beside a car. Call for bulk purchasing, minimum order quantity 100 or above, for online sellers and shop owners"
              width={1600}
              height={470}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="hidden h-auto w-full md:block"
            />
            <Image
              src="/images/forge/forge-collection.jpg"
              alt="FORGE creations new premium polo collection: three men in brown, green and black polo shirts. Call for bulk purchasing, minimum order quantity 100 or above, for online sellers and shop owners"
              width={720}
              height={859}
              sizes="100vw"
              className="h-auto w-full md:hidden"
            />
          </div>
        </Reveal>
      </section>

      {/* What FORGE makes */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading
            eyebrow="What FORGE makes"
            title="Clothing that carries your name."
            description="Custom clothing first, with printing and promotional items alongside."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {makes.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="h-full">
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

      {/* Gallery */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading
            eyebrow="FORGE’s work"
            title="From the workshop."
            description={`Photos and posters from ${forge.name}’s Facebook page.`}
            action={{ href: forge.facebook, label: "See more on Facebook" }}
          />
        </Reveal>
        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 80} className="mb-5 break-inside-avoid">
              <figure className="surface overflow-hidden rounded-card">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-5 py-4 text-sm font-semibold text-ink">{g.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before you call */}
      <section className="container-x pt-20 lg:pt-28">
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="surface h-full rounded-card p-8 sm:p-10">
              <p className="eyebrow">Before you call</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Have these ready for a quick quote.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-tile border border-gold-600/25 bg-page px-4 py-3 text-ink">
                    <Check size={18} className="mt-0.5 shrink-0 text-maroon-700" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-card border border-gold-600/30 bg-linen p-8 sm:p-10">
              <p className="eyebrow">Just one shirt?</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink">
                We print single T-shirts at the 11-seven counter.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                For one photo or name T-shirt, send us the picture on WhatsApp or bring it to the shop on{" "}
                {site.address.line1}, {site.address.city}.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
                <Button href={site.phone.whatsapp} size="md" target="_blank" rel="noreferrer">
                  <WhatsApp size={17} />
                  WhatsApp 11-seven
                </Button>
                <Link
                  href="/#services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-maroon-700 hover:text-maroon-500"
                >
                  Printing services
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-card border border-gold-600/30 bg-paper p-8 shadow-card sm:p-12 lg:flex-row lg:items-center">
            <div className="flex items-center gap-5">
              <Image src={forge.logo} alt="" width={72} height={72} className="hidden h-16 w-16 shrink-0 sm:block" />
              <div>
                <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Get a free quote from {forge.name}.
                </h2>
                <p className="mt-3 max-w-xl text-lg text-ink-muted">
                  Call or message on Facebook with what you need, and FORGE will take it from there.
                </p>
              </div>
            </div>
            <ContactButtons />
          </div>
        </Reveal>
      </section>
    </>
  );
}
