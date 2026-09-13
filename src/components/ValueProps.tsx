import { Clock, Shield, Sparkle, Tag } from "./Icons";
import Reveal from "./Reveal";

const items = [
  {
    n: "01",
    Icon: Shield,
    title: "Genuine brands only",
    text: "Sealed supplements with batch dates and phone accessories from authorised distributors.",
  },
  {
    n: "02",
    Icon: Tag,
    title: "Fair, clear prices",
    text: "The shelf price is the price. Bundles for school kits and bulk office orders.",
  },
  {
    n: "03",
    Icon: Clock,
    title: "Open seven days",
    text: "Early mornings and late evenings on weekdays, so you can drop in on the way home.",
  },
  {
    n: "04",
    Icon: Sparkle,
    title: "Fitted while you wait",
    text: "Free screen-protector fitting and case try-ons at the counter. No appointment needed.",
  },
];

export default function ValueProps() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid gap-px overflow-hidden rounded-card border border-gold-500/15 bg-gold-500/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ n, Icon, title, text }, i) => (
          <Reveal key={n} delay={i * 80} className="bg-coal">
            <div className="group h-full p-8 transition-colors hover:bg-charcoal">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/30 text-gold-400 transition-colors group-hover:border-gold-400 group-hover:bg-gold-500/10">
                  <Icon size={19} />
                </span>
                <span className="font-display text-2xl text-gold-700">{n}</span>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
