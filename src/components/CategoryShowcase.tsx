import Link from "next/link";
import { categories, productsIn } from "@/data/products";
import PlaceholderArt from "./PlaceholderArt";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

const layout: Record<string, string> = {
  stationery: "lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[620px]",
  "phone-accessories": "lg:col-span-5 min-h-[300px]",
  "gym-nutrition": "lg:col-span-5 min-h-[300px]",
};

export default function CategoryShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
      {categories.map((c, i) => {
        const count = productsIn(c.slug).length;
        return (
          <Reveal key={c.slug} delay={i * 90} className={layout[c.slug]}>
            <Link
              href={`/shop?category=${c.slug}`}
              className="surface group relative block h-full min-h-[inherit] overflow-hidden rounded-card transition-all duration-500 hover:border-maroon-500/40"
            >
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
                <PlaceholderArt category={c.slug} seed={i + 1} />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-paper via-paper/60 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-maroon-700">
                <span>{c.index}</span>
                <span className="h-px w-8 bg-gold-600/60" />
                <span>{count} products</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="font-display text-4xl leading-none text-ink lg:text-5xl">{c.name}</h3>
                <p className="mt-3 max-w-md text-sm text-ink-muted lg:text-base">{c.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-maroon-700">
                  Browse
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
