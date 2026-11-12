import { CreditCard, Heart, Shield, Store } from "./Icons";
import Reveal from "./Reveal";

const items = [
  {
    Icon: Shield,
    title: "Genuine products",
    text: "Trusted brands and original stock — the same quality you’d expect from a big-city store.",
  },
  {
    Icon: Store,
    title: "One stop, close to home",
    text: "Stationery, phone accessories, supplements and printing in one place on Kandy Road — open every day, 8 am to 11 pm.",
  },
  {
    Icon: Heart,
    title: "Friendly, honest advice",
    text: "Not sure what you need? Ask us — we’ll help you pick the right item for the job.",
  },
  {
    Icon: CreditCard,
    title: "Easy ways to pay",
    text: "This school season, split your book bill into three instalments with KOKO.",
  },
];

export default function ValueProps() {
  return (
    <div className="grid gap-px overflow-hidden rounded-card border border-gold-600/30 bg-gold-600/30 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 70} className="bg-paper">
          <div className="h-full p-7 lg:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700/10 text-maroon-700">
              <Icon size={22} />
            </span>
            <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
