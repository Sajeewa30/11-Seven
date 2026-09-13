import Button from "./Button";
import PlaceholderArt from "./PlaceholderArt";
import { ArrowRight } from "./Icons";
import { site } from "@/data/site";
import type { CategorySlug } from "@/data/products";

interface Tile {
  category: CategorySlug;
  label: string;
  sub: string;
  cls: string;
}

const tiles: Tile[] = [
  {
    category: "stationery",
    label: "Stationery",
    sub: "Books · Pens · Art supplies",
    cls: "left-0 top-0 w-[58%] -rotate-4 [animation-delay:0s]",
  },
  {
    category: "phone-accessories",
    label: "Phone accessories",
    sub: "Chargers · Cases · Audio",
    cls: "right-0 top-[12%] z-10 w-[46%] rotate-3 [animation-delay:-2.6s]",
  },
  {
    category: "gym-nutrition",
    label: "Gym & nutrition",
    sub: "Whey · Creatine · Pre-workout",
    cls: "bottom-0 left-[26%] z-20 w-[44%] -rotate-1 [animation-delay:-5.2s]",
  },
];

function TileCard({ tile, index, className = "" }: { tile: Tile; index: number; className?: string }) {
  return (
    <div className={`surface relative aspect-[4/5] overflow-hidden rounded-tile ${className}`}>
      <PlaceholderArt category={tile.category} seed={index} />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/95 via-ink/40 to-transparent p-4 pt-10">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-gold-400">{tile.label}</p>
        <p className="mt-1 hidden text-xs text-cream-muted sm:block">{tile.sub}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[720px] w-[720px] rounded-full bg-maroon-700/40 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-gold-600/10 blur-[120px]" />
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-14 select-none font-brand text-[34vw] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgba(214,166,72,0.09)] lg:-right-10 lg:top-0 lg:text-[26vw]"
      >
        11
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="eyebrow flex animate-rise items-center gap-3">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-pulse-dot absolute inset-0 rounded-full bg-gold-400" />
              <span className="relative h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Now open · Kandy Road, {site.address.city}
          </p>

          <h1 className="mt-7 animate-rise font-display text-[3.4rem] leading-[0.94] text-cream [animation-delay:120ms] sm:text-7xl lg:text-[6.2rem]">
            <span className="block">For the desk,</span>
            <span className="block">the pocket</span>
            <span className="block">
              &amp; the <span className="text-gold-sheen">gym.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-cream-muted [animation-delay:240ms]">
            11-seven brings stationery, genuine phone accessories and trusted gym supplements under one roof in
            Wattegama — with school-season book ordering and KOKO pay-later on the way.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-4 [animation-delay:360ms]">
            <Button href="/shop" size="lg">
              Explore the shop
              <ArrowRight size={18} />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Visit us
            </Button>
          </div>

          <dl className="mt-14 flex animate-rise flex-wrap gap-x-10 gap-y-4 border-t border-gold-500/15 pt-7 text-sm text-cream-muted [animation-delay:480ms]">
            {[
              ["3", "departments"],
              ["100+", "products in store"],
              ["7", "days a week"],
            ].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <dt className="font-display text-3xl text-gold-300">{num}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Desktop: floating composition */}
        <div className="relative hidden h-[600px] animate-fade [animation-delay:300ms] lg:col-span-5 lg:block">
          {tiles.map((tile, i) => (
            <div key={tile.category} className={`absolute animate-float ${tile.cls}`}>
              <TileCard tile={tile} index={i} className="shadow-card" />
            </div>
          ))}
        </div>

        {/* Mobile / tablet: simple strip */}
        <div className="grid animate-rise grid-cols-3 gap-3 [animation-delay:400ms] lg:hidden">
          {tiles.map((tile, i) => (
            <TileCard key={tile.category} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
