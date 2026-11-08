import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

/** Standard top-of-page banner for inner pages. */
export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 lg:pb-16 lg:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />
      <div className="container-x relative">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-rise font-display text-[2.6rem] font-medium leading-[1.06] text-ink [animation-delay:80ms] sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-ink-muted [animation-delay:160ms]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
