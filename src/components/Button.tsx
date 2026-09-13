import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost" | "maroon";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "btn-shine bg-gold-500 text-ink hover:bg-gold-400 hover:shadow-gold",
  maroon: "btn-shine bg-maroon-700 text-cream hover:bg-maroon-600 border border-maroon-500/40",
  outline: "border border-gold-500/55 text-gold-300 hover:border-gold-400 hover:bg-gold-500/10",
  ghost: "text-cream-muted hover:text-cream",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.8rem]",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-[0.95rem]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.04em] transition-all duration-300 ease-out select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none";

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
  const { variant = "gold", size = "md", className = "", children } = props;
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
