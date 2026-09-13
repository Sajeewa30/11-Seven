import Link from "next/link";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function AboutTeaser() {
  return (
    <section className="container-x py-12 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          {/* Typographic panel — swap for a photo of the shopfront when available */}
          <div className="surface relative aspect-[4/5] overflow-hidden rounded-card bg-linear-to-br from-maroon-800 via-maroon-950 to-ink">
            <div className="dot-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_30%_30%,black,transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.26em] text-gold-500">Established</p>
              <p className="mt-2 font-display text-7xl leading-none text-gold-sheen sm:text-8xl">2026</p>
              <p className="mt-4 font-display text-3xl text-cream">Kandy Road, {site.address.city}</p>
            </div>
            <div className="absolute right-6 top-6 h-24 w-px bg-gold-500/40" />
            <div className="absolute right-6 top-6 h-px w-24 bg-gold-500/40" />
            <p className="absolute left-8 top-8 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-gold-600/70">
              Image placeholder
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/70" />
            About 11-seven
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-cream sm:text-5xl lg:text-[3.5rem]">
            A neighbourhood shop with big-city standards.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-muted sm:text-lg">
            <p>
              We opened our doors on Kandy Road in {site.openedOn} with a simple idea: the things people in Wattegama
              travel to Kandy for should be available right here — properly stocked, honestly priced and sold by
              people who actually use them.
            </p>
            <p>
              Placeholder copy — replace with the owner’s story, what the “11-seven” name means and what makes the
              shop different.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-400 transition-colors hover:text-gold-200"
          >
            Our story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
