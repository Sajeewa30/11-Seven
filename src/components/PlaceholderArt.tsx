import { useId } from "react";
import type { CategorySlug } from "@/data/products";

interface PlaceholderArtProps {
  category: CategorySlug;
  /** Optional caption drawn on the tile (e.g. the product name). */
  label?: string;
  /** Varies the composition so neighbouring tiles don't look identical. */
  seed?: number;
  className?: string;
}

const palettes: Record<CategorySlug, { from: string; to: string; accent: string; glow: string }> = {
  stationery: { from: "#3d0c17", to: "#0f0a0c", accent: "#d6a648", glow: "#a52541" },
  "phone-accessories": { from: "#221619", to: "#070506", accent: "#e5be5e", glow: "#6b1428" },
  "gym-nutrition": { from: "#561120", to: "#1a0508", accent: "#f0d488", glow: "#c43a58" },
};

/**
 * Styled placeholder tile used wherever a real product / category photo hasn't been supplied yet.
 * Replace by passing an `image` on the product, or by swapping this component's usage for <Image />.
 */
export default function PlaceholderArt({ category, label, seed = 0, className = "" }: PlaceholderArtProps) {
  // useId() can contain characters (":" or "«»") that are invalid inside url(#…) references.
  const id = `ph${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const p = palettes[category];
  const variant = seed % 3;
  const glowX = [25, 70, 45][variant];
  const glowY = [20, 30, 75][variant];
  const iconScale = [1, 0.85, 1.12][variant];
  const iconRot = [-8, 6, -3][variant];

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      role="img"
      aria-label={label ? `${label} — placeholder image` : "Placeholder image"}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.from} />
          <stop offset="1" stopColor={p.to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx={`${glowX}%`} cy={`${glowY}%`} r="55%">
          <stop offset="0" stopColor={p.glow} stopOpacity="0.55" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4c05f" />
          <stop offset="1" stopColor="#a86e2e" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill={`url(#${id}-bg)`} />
      <rect width="400" height="500" fill={`url(#${id}-glow)`} />

      {/* Category pattern */}
      {category === "stationery" && (
        <g stroke={p.accent} strokeOpacity="0.14" strokeWidth="1">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={i} x1="0" x2="400" y1={40 + i * 30} y2={40 + i * 30} />
          ))}
          <line x1="64" x2="64" y1="0" y2="500" stroke="#c43a58" strokeOpacity="0.45" strokeWidth="1.5" />
        </g>
      )}
      {category === "phone-accessories" && (
        <g fill="none" stroke={p.accent} strokeOpacity="0.12" strokeWidth="1">
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={i} cx={300 - variant * 80} cy={120 + variant * 60} r={40 + i * 48} />
          ))}
        </g>
      )}
      {category === "gym-nutrition" && (
        <g stroke={p.accent} strokeOpacity="0.12" strokeWidth="1">
          {Array.from({ length: 22 }, (_, i) => (
            <line key={i} x1={-200 + i * 40} y1="500" x2={100 + i * 40} y2="0" />
          ))}
        </g>
      )}

      {/* Category glyph */}
      <g
        transform={`translate(200 230) rotate(${iconRot}) scale(${iconScale})`}
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      >
        {category === "stationery" && (
          <>
            <path d="M-70 70 L-58 30 L50 -78 a14 14 0 0 1 20 20 L-38 50 Z" />
            <path d="M-58 30 L-38 50" />
            <path d="M30 -58 L50 -38" />
            <path d="M-70 70 L-56 66" />
          </>
        )}
        {category === "phone-accessories" && (
          <>
            <rect x="-48" y="-88" width="96" height="176" rx="16" />
            <path d="M-14 -70 h28" />
            <circle cx="0" cy="66" r="6" />
            <path d="M-70 -30 a80 80 0 0 0 0 60" strokeOpacity="0.6" />
            <path d="M70 -30 a80 80 0 0 1 0 60" strokeOpacity="0.6" />
          </>
        )}
        {category === "gym-nutrition" && (
          <>
            <path d="M-60 0 h120" />
            <rect x="-96" y="-34" width="26" height="68" rx="6" />
            <rect x="-120" y="-22" width="18" height="44" rx="5" />
            <rect x="70" y="-34" width="26" height="68" rx="6" />
            <rect x="102" y="-22" width="18" height="44" rx="5" />
          </>
        )}
      </g>

      {/* Gold hairline corner accents */}
      <g stroke={p.accent} strokeOpacity="0.5" strokeWidth="1">
        <path d="M22 60 V22 H60" fill="none" />
        <path d="M378 440 V478 H340" fill="none" />
      </g>

      {label && (
        <g fontFamily="ui-sans-serif, system-ui, sans-serif">
          <text x="22" y="468" fill={p.accent} fillOpacity="0.9" fontSize="15" fontWeight="600">
            {label.length > 30 ? `${label.slice(0, 28)}…` : label}
          </text>
          <text x="22" y="486" fill={p.accent} fillOpacity="0.45" fontSize="9" letterSpacing="2.5" fontWeight="700">
            IMAGE PLACEHOLDER
          </text>
        </g>
      )}
    </svg>
  );
}
