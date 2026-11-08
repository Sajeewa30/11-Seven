import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import InstalmentBar from "@/components/InstalmentBar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VisitStrip from "@/components/VisitStrip";
import { ArrowRight, Book, Calendar, Check, CreditCard, ListCheck, PhoneCall, WhatsApp } from "@/components/Icons";
import { schoolSeason, site } from "@/data/site";

export const metadata: Metadata = {
  title: "School season — pay in 3 with KOKO",
  description: `Get your child’s full school book list from 11-seven, Wattegama, at special school-season prices — and split the bill into three instalments with KOKO. ${schoolSeason.window}.`,
  alternates: { canonical: "/school-season" },
  openGraph: {
    title: "School season at 11-seven — pay in 3 with KOKO",
    description: "Textbooks, exercise books and stationery for the new school year. Special prices, three easy instalments.",
    images: [
      {
        url: "/images/school-season.jpg",
        width: 919,
        height: 689,
        alt: "School books tied with a maroon ribbon, ready for the new term",
      },
    ],
  },
};

const included = [
  { title: "Textbooks & workbooks", text: "For all grades, from primary to A/L — subject to availability." },
  { title: "Exercise books", text: "Single-ruled, square-ruled, CR books and more, by the piece or by the dozen." },
  { title: "Writing essentials", text: "Pens, pencils, erasers, rulers, sharpeners and geometry boxes." },
  { title: "Art & craft supplies", text: "Colour pencils, crayons, paints, drawing books and craft paper." },
  { title: "Files & covers", text: "Book covers, labels, files, folders and everything to stay organised." },
  { title: "Bulk orders", text: "Buying for a class, school or tuition class? Ask us about bulk orders." },
];

const steps = [
  {
    Icon: ListCheck,
    title: "Share your book list",
    text: "Bring the school’s book list to the shop, or send us a clear photo of it on WhatsApp.",
  },
  {
    Icon: Book,
    title: "We pack your order",
    text: "We gather everything on the list, confirm the total with you and let you know when it’s ready.",
  },
  {
    Icon: CreditCard,
    title: "Pay in 3 with KOKO",
    text: "Pay one-third today and the rest over the next two months — or pay in full if you prefer. Then collect.",
  },
];

const faqs = [
  {
    q: "What is KOKO?",
    a: "KOKO is a Sri Lankan buy-now-pay-later service. It lets you split a purchase into three instalments — the first when you buy, then one each month for the next two months — using your debit or credit card.",
  },
  {
    q: "Do I need a KOKO account?",
    a: "Yes. You can sign up on the KOKO app or website in a few minutes using your NIC and a debit or credit card. KOKO’s own terms and approval checks apply.",
  },
  {
    q: "When is the school-season offer available?",
    a: `Throughout ${schoolSeason.window}, ahead of the new school term in January — while stocks last.`,
  },
  {
    q: "Can I order without coming to the shop?",
    a: "Yes. Send a photo of your book list on WhatsApp and we’ll confirm what’s available and the total. You can collect from the shop when it’s ready.",
  },
  {
    q: "Can I still pay in cash?",
    a: "Of course. KOKO is optional — you’re welcome to pay the full amount in the shop.",
  },
];

export default function SchoolSeasonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-[4.5rem] overflow-hidden bg-maroon-900 pb-16 pt-14 text-cream lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[120px]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex animate-rise items-center gap-2 rounded-full bg-gold-400 px-4 py-1.5 text-sm font-bold text-ink">
              <Calendar size={16} />
              {schoolSeason.window}
            </p>
            <h1 className="mt-6 animate-rise font-display text-[2.6rem] font-medium leading-[1.06] [animation-delay:80ms] sm:text-6xl">
              Ready for the new school year? Pay in 3 with KOKO.
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream-muted [animation-delay:160ms]">
              Bring your child’s book list to 11-seven this November and December. We’ll pack everything they need for
              January at special school-season prices — and you can split the bill into three easy instalments.
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
              <Button href={site.phone.whatsapp} variant="gold" size="lg" target="_blank" rel="noreferrer">
                <WhatsApp size={18} />
                WhatsApp your book list
              </Button>
              <Button href={`tel:${site.phone.tel}`} variant="outlineLight" size="lg">
                <PhoneCall size={18} />
                Call {site.phone.display}
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:200ms] lg:col-span-5">
            <div className="relative rounded-card border border-gold-500/30 bg-maroon-950/50 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-300">How KOKO works</p>
              <p className="mt-4 font-display text-3xl leading-tight text-cream">One bill, three equal payments.</p>
              <InstalmentBar className="mt-8" />
              <p className="mt-8 border-t border-gold-500/25 pt-6 text-sm leading-relaxed text-cream-muted">
                Pay with your debit or credit card through KOKO. KOKO’s terms and approval checks apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Three simple steps." />
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="surface relative h-full rounded-card p-8">
                  <span className="absolute right-7 top-6 font-display text-5xl text-maroon-700/20" aria-hidden>
                    {i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700 text-cream">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-ink">
                    <span className="sr-only">Step {i + 1}: </span>
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* What's included */}
      <section className="container-x pt-20 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Everything on the list"
                title="One stop for the whole term."
                description="Special school-season prices apply across books and stationery. Ask us in store or on WhatsApp for the latest offers."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-card border border-gold-600/30 shadow-card">
                <Image
                  src="/images/school-season.jpg"
                  alt="A stack of school books tied with a maroon ribbon, a pencil case, pencils and a water bottle"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-px overflow-hidden rounded-card border border-gold-600/30 bg-gold-600/30 sm:grid-cols-2 lg:col-span-7">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 70} className="bg-paper">
                <div className="flex h-full gap-4 p-7">
                  <Check size={22} className="mt-0.5 shrink-0 text-maroon-700" />
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pt-20 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title="Good to know." />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <div className="divide-y divide-gold-600/30 rounded-card border border-gold-600/30 bg-paper">
                {faqs.map((f) => (
                  <details key={f.q} className="group p-6 sm:p-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span
                        aria-hidden
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-maroon-700/40 text-maroon-700 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-card border border-gold-600/30 bg-linen p-8 sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Beat the January rush.
              </h2>
              <p className="mt-3 max-w-xl text-lg text-ink-muted">
                Send us your book list today and have everything ready before school starts.
              </p>
            </div>
            <Button href={site.phone.whatsapp} size="lg" target="_blank" rel="noreferrer">
              Send your list on WhatsApp
              <ArrowRight size={18} />
            </Button>
          </div>
        </Reveal>
      </section>

      <VisitStrip />
    </>
  );
}
