import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Store policies",
  description: "Returns, exchanges, KOKO instalment payments and privacy at 11-seven, Wattegama.",
  alternates: { canonical: "/policies" },
};

const sections = [
  {
    id: "returns",
    title: "Returns & exchanges",
    body: [
      "Unused items in their original packaging can be exchanged within 7 days of purchase with the receipt.",
      "For hygiene and safety reasons, opened supplements cannot be returned. Sealed, unopened supplements can be exchanged within 7 days.",
      "Faulty phone accessories are replaced or repaired in line with the manufacturer’s warranty. Please bring the item, its packaging and your receipt.",
      "Textbooks and exercise books can be exchanged if they are unmarked and in the same condition as sold — for example, if the wrong grade or edition was picked up.",
    ],
  },
  {
    id: "koko",
    title: "KOKO instalment payments",
    body: [
      "During the school season you can pay with KOKO, a buy-now-pay-later service that splits your bill into three instalments. The first instalment is paid at the time of purchase and the remaining two are collected by KOKO over the following two months.",
      "KOKO payments are subject to KOKO’s own terms, fees and approval checks. Instalment schedules, card payments and any questions about your KOKO account are handled by KOKO.",
      "If an item bought with KOKO is returned or exchanged, any refund is processed back through KOKO rather than in cash.",
    ],
  },
  {
    id: "orders",
    title: "WhatsApp & phone orders",
    body: [
      "You can send us a book list or a product request on WhatsApp or by phone. We will confirm availability and the total before preparing your order.",
      "Orders are held for collection from the shop for 7 days after we tell you they are ready, unless we agree otherwise.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    body: [
      "This website is for information only. It does not use contact forms, accounts or tracking cookies, and it does not collect personal information.",
      "If you contact us by phone, WhatsApp or email, we use your details only to reply to you and to handle your order. We never sell or share your information with third parties, except KOKO when you choose to pay with KOKO.",
    ],
  },
  {
    id: "general",
    title: "General",
    body: [
      "Product ranges, availability and offers can change without notice, and school-season offers are available while stocks last.",
      "These policies do not affect your statutory rights as a consumer in Sri Lanka.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Store policies"
        title="Returns, payments & privacy."
        description="The simple rules we follow, so you know exactly what to expect when you shop with us."
      />

      <section className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <ul className="space-y-2 lg:sticky lg:top-28">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="font-semibold text-ink-muted hover:text-maroon-700">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-12 lg:col-span-9">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-3xl font-medium text-ink">{s.title}</h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-muted">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-card border border-gold-600/30 bg-linen p-7 text-lg text-ink-muted">
              Questions about any of these policies? Call or WhatsApp us on{" "}
              <a href={`tel:${site.phone.tel}`} className="font-bold text-maroon-700 underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
              {site.email && (
                <>
                  {" "}or email{" "}
                  <a href={`mailto:${site.email}`} className="font-bold text-maroon-700 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </>
              )}
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
