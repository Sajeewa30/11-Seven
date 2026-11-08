import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: { href: string; label: string };
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"} ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className={`eyebrow flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
            {!centered && <span className="h-px w-8 bg-gold-600/70" />}
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">{title}</h2>
        {description && <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-maroon-700 transition-colors hover:text-maroon-500"
        >
          {action.label}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
