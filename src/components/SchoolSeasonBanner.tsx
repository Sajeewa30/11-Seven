import Image from "next/image";
import Button from "./Button";
import { ArrowRight, WhatsApp } from "./Icons";
import { schoolSeason, site } from "@/data/site";

/** Deep-maroon accent panel promoting the school-season KOKO offer. */
export default function SchoolSeasonBanner() {
  return (
    <div className="relative overflow-hidden rounded-card bg-maroon-900 shadow-card">
      <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-gold-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute inset-3 rounded-[0.9rem] border border-gold-500/25" />

      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">
            {schoolSeason.label} · {schoolSeason.window}
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-cream sm:text-5xl">
            Get the whole book list now. Pay in 3 with KOKO.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-muted">
            Textbooks, exercise books and stationery for the new school year — packed for you at special
            school-season prices, with the bill split into three monthly instalments.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/school-season" variant="gold" size="lg">
              How it works
              <ArrowRight size={18} />
            </Button>
            <Button href={site.phone.whatsapp} variant="outlineLight" size="lg" target="_blank" rel="noreferrer">
              <WhatsApp size={18} />
              Send your book list
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-tile border border-gold-500/40 shadow-lift">
            <Image
              src="/images/school-season.jpg"
              alt="A stack of school books tied with a maroon ribbon, a pencil case, pencils and a water bottle"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-gold-300">
            <span className="h-px w-8 bg-gold-400/70" />
            One bill, three easy monthly payments
          </div>
        </div>
      </div>
    </div>
  );
}
