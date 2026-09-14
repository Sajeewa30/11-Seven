import Button from "./Button";
import { ArrowRight, Book, PhoneCall } from "./Icons";
import { site } from "@/data/site";

const books = [
  { w: "w-[92%]", bg: "bg-maroon-600", label: "Mathematics · Grade 10" },
  { w: "w-[86%]", bg: "bg-charcoal", label: "Science" },
  { w: "w-[96%]", bg: "bg-maroon-800", label: "English Language" },
  { w: "w-[80%]", bg: "bg-smoke", label: "Exercise books × 10" },
];

/** Deep-maroon accent panel — one of the few intentionally dark surfaces on the light site. */
export default function SchoolSeasonBanner() {
  return (
    <div className="relative overflow-hidden rounded-card border border-gold-500/30 bg-linear-to-br from-maroon-700 via-maroon-900 to-coal shadow-card">
      <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-gold-500/15 blur-[110px]" />

      <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-300">
            <Book size={16} />
            Coming this school season
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-cream sm:text-5xl lg:text-[3.4rem]">
            Textbooks, exercise books &amp; full school kits — ordered online.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
            Hand us the term’s book list and collect everything in one bag. Pay in instalments with KOKO at
            checkout. Pre-orders open before the new term — leave your number and we’ll tell you first.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact?topic=school-books" variant="gold" size="lg">
              Get notified
              <ArrowRight size={18} />
            </Button>
            <Button href={`tel:${site.phone.tel}`} variant="outlineLight" size="lg">
              <PhoneCall size={18} />
              Call to pre-order
            </Button>
          </div>
        </div>

        {/* CSS-only book stack illustration */}
        <div className="relative mx-auto w-full max-w-sm lg:col-span-5" aria-hidden>
          <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-coal/70 blur-2xl" />
          <div className="relative space-y-2.5">
            {books.map((b, i) => (
              <div
                key={b.label}
                className={`${b.w} ${b.bg} ${i % 2 ? "ml-auto" : ""} flex h-14 items-center justify-between rounded-lg border border-gold-500/25 px-5 shadow-card`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-muted">{b.label}</span>
                <span className="h-6 w-1.5 rounded-full bg-linear-to-b from-gold-300 to-gold-700" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold-300">
            <span className="rounded-full border border-gold-500/40 px-3 py-1.5">Pay in 3 with KOKO</span>
            <span className="text-cream-muted">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
