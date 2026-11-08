import Image from "next/image";
import { departments } from "@/data/site";
import DepartmentIcon from "./DepartmentIcon";
import { Check } from "./Icons";
import Reveal from "./Reveal";

export default function Departments() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {departments.map((d, i) => (
        <Reveal key={d.slug} delay={i * 80}>
          <article id={d.slug} className="surface flex h-full scroll-mt-28 flex-col overflow-hidden rounded-card">
            {d.image && (
              <div className="relative aspect-[4/3] bg-linen">
                <Image src={d.image} alt={d.imageAlt ?? ""} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-7 lg:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-maroon-700 text-cream">
                  <DepartmentIcon icon={d.icon} size={22} />
                </span>
                <h3 className="text-xl font-bold text-ink">{d.name}</h3>
              </div>
              <p className="mt-5 leading-relaxed text-ink-muted">{d.summary}</p>
              <div className="gold-hairline my-6" />
              <ul className="space-y-2.5">
                {d.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                    <Check size={18} className="mt-0.5 shrink-0 text-maroon-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
