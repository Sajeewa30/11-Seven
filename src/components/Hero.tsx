import Link from "next/link";
import Button from "./Button";
import InstalmentBar from "./InstalmentBar";
import DepartmentIcon from "./DepartmentIcon";
import { ArrowRight, WhatsApp } from "./Icons";
import { departments, schoolSeason, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-rise">Now open · {site.address.line1}, {site.address.city}</p>

          <h1 className="mt-6 animate-rise font-display text-[2.75rem] font-medium leading-[1.05] text-ink [animation-delay:80ms] sm:text-6xl lg:text-[4.25rem]">
            Everything for school, your phone &amp; the gym.
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-ink-muted [animation-delay:160ms]">
            11-seven is your local shop in {site.address.city} for stationery, mobile phone accessories and gym
            supplements — genuine products, fair prices and friendly service, all under one roof.
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Button href="/contact" size="lg">
              Visit the shop
              <ArrowRight size={18} />
            </Button>
            <Button href={site.phone.whatsapp} variant="outline" size="lg" target="_blank" rel="noreferrer">
              <WhatsApp size={18} />
              WhatsApp us
            </Button>
          </div>

          <ul className="mt-10 flex animate-rise flex-wrap gap-2.5 [animation-delay:320ms]">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`#${d.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-600/40 bg-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-maroon-700 hover:text-maroon-700"
                >
                  <DepartmentIcon icon={d.icon} size={16} className="text-maroon-700" />
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Current offer */}
        <div className="animate-rise [animation-delay:200ms] lg:col-span-5">
          <Link
            href="/school-season"
            className="group relative block overflow-hidden rounded-card bg-maroon-900 p-8 text-cream shadow-lift sm:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-3 rounded-[0.9rem] border border-gold-500/30" />

            <p className="relative inline-flex items-center gap-2 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">
              {schoolSeason.short} · {schoolSeason.label}
            </p>
            <h2 className="relative mt-6 font-display text-3xl font-medium leading-tight sm:text-[2.4rem]">
              School books now, pay in 3 with KOKO.
            </h2>
            <p className="relative mt-4 leading-relaxed text-cream-muted">
              Bring your book list — we’ll pack everything for the new term, at special school-season prices.
            </p>

            <InstalmentBar className="relative mt-8" />

            <span className="relative mt-8 inline-flex items-center gap-2 font-semibold text-gold-300">
              See the school-season offer
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
