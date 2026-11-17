import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar, Check, Facebook, MapPin, PhoneCall, Shirt, Store, Tag, WhatsApp } from "@/components/Icons";
import { forge, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom clothing — polos & T-shirts by FORGE creations",
  description: `Custom polo shirts and T-shirts with your logo, for staff, teams and events. Made by ${forge.name}, supplying branded clothing and promotional items island-wide. Call ${forge.phone.display}.`,
  alternates: { canonical: "/clothing" },
  openGraph: {
    title: `Custom clothing by ${forge.name}`,
    description: "Polo shirts and T-shirts with your logo, for staff, teams, clubs and events.",
  },
};

const makes = [
  {
    Icon: Shirt,
    title: "Polo shirts",
    text: "Collared polos with your company, school or club logo, smart enough for staff uniforms.",
  },
  {
    Icon: Shirt,
    title: "T-shirts",
    text: "T-shirts printed with your name, logo or design, in the colours you choose.",
  },
  {
    Icon: Store,
    title: "Staff & team wear",
    text: "Matching shirts for shops, offices, sports teams and societies.",
  },
  {
    Icon: Calendar,
    title: "Event shirts",
    text: "Shirts for school events, trips, tournaments, launches and get-togethers.",
  },
  {
    Icon: Tag,
    title: "Promotional items",
    text: "Branded giveaways and promotional items for your business, alongside the clothing.",
  },
  {
    Icon: MapPin,
    title: "Island-wide & overseas",
    text: "FORGE supplies customers all around Sri Lanka, as well as overseas.",
  },
];

const checklist = [
  "Polo or T-shirt, and the colours",
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
        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[120px]" />
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
              Branded clothing for your staff, team, club or event is made by {forge.name}: {forge.intro.charAt(0).toLowerCase() + forge.intro.slice(1)}
            </p>
            <div className="mt-9 animate-rise [animation-delay:240ms]">
              <ContactButtons dark />
            </div>
          </div>

          <div className="animate-rise [animation-delay:200ms] lg:col-span-5">
            <div className="rounded-card border border-gold-500/30 bg-maroon-950/50 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-300">Order direct from FORGE</p>
              <p className="mt-4 font-display text-3xl leading-tight text-cream">{forge.name}</p>
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

      {/* What FORGE makes */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading
            eyebrow="What FORGE makes"
            title="Clothing that carries your name."
            description="From a handful of shirts for a small team to a full set of staff uniforms."
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
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Get a quote from {forge.name}.
              </h2>
              <p className="mt-3 max-w-xl text-lg text-ink-muted">
                Call or message with what you need, and FORGE will take it from there.
              </p>
            </div>
            <ContactButtons />
          </div>
        </Reveal>
      </section>
    </>
  );
}
