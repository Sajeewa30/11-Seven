import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Store policies",
  description:
    "Privacy, returns and refunds, terms and conditions, delivery and store pickup, and payment policies for 11-seven, Wattegama.",
  alternates: { canonical: "/policies" },
};

interface PolicySection {
  id: string;
  title: string;
  intro: string;
  items: { label: string; text: string }[];
}

const openingHours = site.hours.map((h) => `${h.time}, ${h.days}`).join("; ");

const sections: PolicySection[] = [
  {
    id: "privacy",
    title: "1. Privacy Policy",
    intro:
      "We handle personal details and documents for printing, reloads and other services, so we take your privacy seriously.",
    items: [
      {
        label: "What we collect",
        text: "When you place an order, we only ask for your name, phone number, address and email address.",
      },
      {
        label: "Your documents and photos",
        text: "Personal files and photos you send us for printouts, photo prints, mug prints or typesetting are never shared with any third party.",
      },
      {
        label: "Deleting your files",
        text: "Once your print job is finished and handed over to you, the files are securely removed from our systems.",
      },
      {
        label: "This website",
        text: "This website is for information only. It has no forms, accounts or tracking cookies and does not collect any personal information.",
      },
    ],
  },
  {
    id: "returns",
    title: "2. Returns, Refunds & Exchanges",
    intro: "We sell products and also offer custom printing and payment services, so this policy has three parts.",
    items: [
      {
        label: "Phone accessories and stationery",
        text: "If a phone accessory or stationery item has a manufacturing defect, bring it back with your bill within 3–7 days of purchase and we will exchange it for another item.",
      },
      {
        label: "Custom printing",
        text: "For custom orders such as mug prints, T-shirt prints, banners, wedding cards and visiting cards, we cannot give refunds once you have approved the proof and printing has been done.",
      },
      {
        label: "Reloads and bill payments",
        text: "Reloads and bill payments made to an incorrect phone or account number given by the customer cannot be refunded.",
      },
      {
        label: "KOKO purchases",
        text: "If an item paid for with KOKO is exchanged or refunded, any refund is processed back through KOKO rather than in cash.",
      },
    ],
  },
  {
    id: "terms",
    title: "3. Terms & Conditions",
    intro: "These are the rules we follow when accepting orders and providing our services.",
    items: [
      {
        label: "Checking your proof",
        text: "For typesetting and printing work, we share a draft (proof) before the final print. Checking it carefully, including spelling, and approving it is the customer’s responsibility.",
      },
      {
        label: "Advance payment",
        text: "Large print jobs, wedding cards, banners and awards (plaques) are confirmed only after a 50% advance payment.",
      },
      {
        label: "Copyright",
        text: "The customer is responsible for having the legal right to any documents and designs they give us to print.",
      },
      {
        label: "Offers and availability",
        text: "Product ranges, availability and offers may change without notice. School-season offers are available while stocks last. These terms do not affect your statutory rights as a consumer in Sri Lanka.",
      },
    ],
  },
  {
    id: "delivery",
    title: "4. Delivery & Store Pickup",
    intro: "How and when you can receive your order.",
    items: [
      {
        label: "Store pickup",
        text: `Orders placed by phone, WhatsApp or email can be collected from our shop at ${site.address.line1}, ${site.address.city}, during opening hours (${openingHours}).`,
      },
      {
        label: "Courier delivery",
        text: "We deliver island-wide by courier. Orders reach you within 2–4 working days.",
      },
      {
        label: "Delivery charges",
        text: "Delivery charges depend on the weight of the parcel and the distance.",
      },
    ],
  },
  {
    id: "payment",
    title: "5. Payments & Contact",
    intro: "The ways you can pay us and how to reach us for help.",
    items: [
      {
        label: "Payment methods",
        text: "You can pay by bank transfer, by online payment, or in cash at the shop.",
      },
      {
        label: "KOKO instalments",
        text: "During the school season you can also pay with KOKO, a buy-now-pay-later service that splits your bill into three instalments: the first at the time of purchase and the other two over the following two months. KOKO payments are subject to KOKO’s own terms, fees and approval checks.",
      },
      {
        label: "Customer support",
        text: `For any problem, call us on ${site.landline.display} or ${site.phone.display}, or WhatsApp ${site.phone.display}.${site.email ? ` You can also email ${site.email}.` : ""}`,
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Store policies"
        title="Our policies."
        description="Privacy, returns, terms, delivery and payments — the simple rules we follow, so you know exactly what to expect when you shop with us."
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
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{s.intro}</p>
                <ul className="mt-6 space-y-4">
                  {s.items.map((item) => (
                    <li key={item.label} className="rounded-tile border border-gold-600/25 bg-paper p-5">
                      <h3 className="font-bold text-ink">{item.label}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-muted">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="rounded-card border border-gold-600/30 bg-linen p-7 text-lg text-ink-muted">
              Questions about any of these policies? Call{" "}
              <a href={`tel:${site.landline.tel}`} className="font-bold text-maroon-700 underline-offset-4 hover:underline">
                {site.landline.display}
              </a>{" "}
              or{" "}
              <a href={`tel:${site.phone.tel}`} className="font-bold text-maroon-700 underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
              {site.email && (
                <>
                  , or email{" "}
                  <a href={`mailto:${site.email}`} className="break-all font-bold text-maroon-700 underline-offset-4 hover:underline">
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
