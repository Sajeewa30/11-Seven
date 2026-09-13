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
    <section className="relative overflow-hidden pb-14 pt-36 lg:pb-20 lg:pt-44">
      <div className="pointer-events-none absolute -left-32 top-10 h-[480px] w-[480px] rounded-full bg-maroon-700/35 blur-[120px]" />
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />
      <div className="container-x relative">
        <p className="eyebrow flex animate-rise items-center gap-3">
          <span className="h-px w-8 bg-gold-500/70" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl animate-rise font-display text-5xl leading-[0.98] text-cream [animation-delay:100ms] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-cream-muted [animation-delay:200ms]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
