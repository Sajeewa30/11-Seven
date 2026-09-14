import Link from "next/link";

interface WordmarkProps {
  className?: string;
}

/** The "11-seven" wordmark — gold metallic gradient recreated from the grand-opening artwork. */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`font-brand font-extrabold leading-none tracking-[-0.045em] text-gold-gradient ${className}`}>
      11-seven
    </span>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  withTagline?: boolean;
  linked?: boolean;
  className?: string;
}

const sizes: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-2xl",
  md: "text-[1.8rem]",
  lg: "text-5xl",
  xl: "text-6xl sm:text-7xl",
};

export default function Logo({ size = "md", withTagline = false, linked = true, className = "" }: LogoProps) {
  const inner = (
    <span className="inline-flex flex-col items-start gap-2">
      <Wordmark className={sizes[size]} />
      {withTagline && (
        <>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-700 sm:text-[0.66rem]">
            Stationery · Phone Accessories · Gym Supplements
          </span>
          <span className="gold-hairline w-full" />
        </>
      )}
    </span>
  );

  if (!linked) return <span className={className}>{inner}</span>;

  return (
    <Link href="/" aria-label="11-seven — home" className={`group inline-block ${className}`}>
      {inner}
    </Link>
  );
}
