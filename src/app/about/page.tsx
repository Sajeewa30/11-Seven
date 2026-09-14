import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VisitStrip from "@/components/VisitStrip";
import { Shield, Sparkle, Tag } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description: "The story behind 11-seven — the stationery, phone accessories and gym supplement shop on Kandy Road, Wattegama.",
};

/* ── All copy below is PLACEHOLDER — replace with the real story, dates, names and photos. ── */

const values = [
  {
    Icon: Shield,
    title: "Genuine, always",
    text: "Sealed supplements with batch dates. Chargers and cables from authorised distributors. If we would not use it ourselves, we do not sell it.",
  },
  {
    Icon: Tag,
    title: "Priced for the neighbourhood",
    text: "City-shop range without the city-shop mark-up. Bundles for school kits, and honest prices on everything else.",
  },
  {
    Icon: Sparkle,
    title: "Service you can lean on",
    text: "Free screen-protector fitting, book-list packing and advice on what actually works — from people who use it themselves.",
  },
];

const milestones = [
  {
    when: "June 2026",
    what: "Grand opening on Kandy Road",
    text: `Ribbon cut on ${site.grandOpening} — stationery and phone accessories from day one.`,
  },
  {
    when: "Late 2026",
    what: "Gym & nutrition counter",
    text: "Whey, creatine and pre-workout join the shelves. (Placeholder date.)",
  },
  {
    when: "Next",
    what: "Online ordering with KOKO",
    text: "Reserve online, pay in instalments, collect in store or have it delivered.",
  },
  {
    when: "School season",
    what: "Book-list pre-orders",
    text: "Send us the list, we pack the bag. Launching ahead of the new term.",
  },
];

const team = [
  { name: "Owner Name", role: "Founder & owner", initials: "ON" },
  { name: "Manager Name", role: "Store manager", initials: "MN" },
  { name: "Specialist Name", role: "Phone accessories & fitting", initials: "SN" },
];

const story = [
  "Placeholder paragraph one. Describe the moment the idea for 11-seven came about — the trip to Kandy for a term’s worth of exercise books, the phone cable that failed on the way back, and the thought that Wattegama deserved a shop that covered both.",
  "Placeholder paragraph two. Explain the name “11-seven”, the choice of Kandy Road, and how the gym supplements counter came about — perhaps from customers asking for genuine protein they no longer had to order from Colombo.",
  "Placeholder paragraph three. Where the shop is heading: online ordering, KOKO instalments, school-season pre-orders and delivery around Wattegama.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Built for <span className="text-gold-sheen">Wattegama</span>, stocked like the city.
          </>
        }
        description="Placeholder: two sentences on why 11-seven exists, who started it and who it serves."
      />

      {/* Story */}
      <section className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 -rotate-2 rounded-card border border-gold-600/40" aria-hidden />
              <div className="surface relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src="/brand/grand-opening-invitation.jpeg"
                  alt={`11-seven grand opening invitation — ${site.grandOpening}, ${site.address.line1}, ${site.address.city}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-dim">
                Our grand-opening invitation · {site.grandOpening}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold-600/70" />
              Our story
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-[3.5rem]">
              It started with a book list and a broken charger.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
              {story.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-gold-600 pl-6 font-display text-3xl leading-tight text-ink sm:text-4xl">
              “Placeholder quote from the owner — one sentence on what the shop stands for.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x pt-24 lg:pt-32">
        <Reveal>
          <SectionHeading eyebrow="What we stand for" title="Three promises on every shelf." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="surface group h-full rounded-card p-8 transition-colors hover:border-maroon-500/40">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700/10 text-maroon-700 transition-colors group-hover:bg-maroon-700 group-hover:text-cream">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 font-display text-3xl text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="container-x pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Milestones" title="Where we’ve been, where we’re going." />
          </Reveal>
          <ol className="relative space-y-10 border-l border-gold-600/35 pl-8 lg:col-span-8 lg:pl-12">
            {milestones.map((m, i) => (
              <Reveal key={m.what} delay={i * 90}>
                <li className="relative">
                  <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-maroon-700 bg-page lg:-left-[3.55rem]" />
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold-700">{m.when}</p>
                  <h3 className="mt-2 font-display text-3xl text-ink">{m.what}</h3>
                  <p className="mt-2 max-w-xl text-ink-muted">{m.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="container-x pt-24 lg:pt-32">
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="The people behind the counter."
            description="Placeholder names and roles — swap in real photos when ready."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="surface rounded-card p-6 text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-gold-600/40 bg-linear-to-br from-linen to-sand">
                  <span className="absolute inset-0 grid place-items-center font-display text-6xl text-maroon-700">{t.initials}</span>
                  <span className="absolute inset-x-0 bottom-4 text-[0.55rem] font-bold uppercase tracking-[0.22em] text-gold-700/70">
                    Photo placeholder
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VisitStrip />
    </>
  );
}
