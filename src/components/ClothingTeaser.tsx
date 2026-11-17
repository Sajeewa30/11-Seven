import Link from "next/link";
import { ArrowRight, Shirt } from "./Icons";
import Reveal from "./Reveal";
import { forge } from "@/data/site";

/** Home page link to the Clothing page. */
export default function ClothingTeaser() {
  return (
    <section className="container-x pt-20 lg:pt-28">
      <Reveal>
        <Link
          href="/clothing"
          className="group flex flex-col gap-6 rounded-card border border-gold-600/30 bg-linen p-8 transition-shadow hover:shadow-card sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-maroon-700 text-cream">
              <Shirt size={26} />
            </span>
            <div>
              <p className="eyebrow">Custom clothing</p>
              <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Polos and T-shirts with your logo.
              </h2>
              <p className="mt-2 text-ink-muted">
                Made by {forge.name} for staff, teams, clubs and events.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-maroon-700 group-hover:text-maroon-500">
            See clothing
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
