import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./Icons";
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
          <div className="flex items-center gap-5">
            <Image src={forge.logo} alt={`${forge.name} logo`} width={72} height={72} className="h-16 w-16 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]" />
            <div>
              <p className="eyebrow">Custom clothing</p>
              <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Polos and T-shirts with your logo.
              </h2>
              <p className="mt-2 text-ink-muted">
                Premium polos, sublimation T-shirts and branded apparel by {forge.name}.
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
