import Image from "next/image";
import Button from "./Button";
import { Check, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { phonePosters, site } from "@/data/site";

const range = [
  "Phone cases & back covers",
  "Chargers & USB cables",
  "Earphones",
  "Power banks",
  "Screen protectors",
  "Car holders",
  "OTG card readers",
  "And more in store",
];

/** Home page spotlight for phone accessories, with the shop's own posters. */
export default function PhoneSpotlight() {
  return (
    <section className="container-x pt-20 lg:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Phone accessories"
              title="All your mobile needs, in one place."
              description="Cases for popular iPhone models, fast chargers, cables, earphones and more. Quality accessories that are stylish, reliable and affordable."
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {range.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <Check size={18} className="mt-0.5 shrink-0 text-maroon-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href={site.phone.whatsapp} target="_blank" rel="noreferrer">
                <WhatsApp size={17} />
                Ask if your model is in stock
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 items-start gap-4 sm:gap-5 lg:col-span-7">
          {phonePosters.map((p, i) => (
            <Reveal key={p.src} delay={100 + i * 100} className={i === 1 ? "mt-10 sm:mt-16" : ""}>
              <div className="overflow-hidden rounded-card border border-gold-600/30 bg-linen shadow-card">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
