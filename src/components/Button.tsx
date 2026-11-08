import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * primary      — maroon fill, cream text (default; use on light surfaces)
 * gold         — gold fill, ink text (use on dark maroon panels)
 * outline      — maroon hairline (light surfaces)
 * outlineLight — cream hairline (dark panels)
 * ghost        — text only
 */
type Variant = "primary" | "gold" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-maroon-700 text-cream hover:bg-maroon-600 hover:shadow-lift",
  gold: "bg-gold-400 text-ink hover:bg-gold-300 hover:shadow-lift",
  outline: "border-2 border-maroon-700 text-maroon-700 hover:border-maroon-700 hover:bg-maroon-700/10",
  outlineLight: "border-2 border-cream/70 text-cream hover:border-cream hover:bg-cream/10",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.8rem]",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-[0.95rem]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 ease-out select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
