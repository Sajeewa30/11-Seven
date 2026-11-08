import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const Bag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 8h12l1 12H5L6 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const PhoneCall = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Pen = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4 20 4-1L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z" />
    <path d="m14 7 3 3" />
  </svg>
);

export const Dumbbell = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 8v8" />
    <path d="M3 10v4" />
    <path d="M18 8v8" />
    <path d="M21 10v4" />
    <path d="M6 12h12" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-6-5.2-6-11a6 6 0 0 1 12 0c0 5.8-6 11-6 11Z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
    <path d="m9.5 12 2 2 3.5-4" />
  </svg>
);

export const Tag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 12.5V4.5h8l9 9-8 8-9-9Z" />
    <circle cx="8" cy="9" r="1.3" />
  </svg>
);

export const Book = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
    <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    <path d="M8 7h8" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20l1.3-3.8A8.5 8.5 0 1 1 8 19.1L4 20Z" />
    <path d="M9.2 9.3c.2 1.9 2.2 4.1 4.1 4.6l1.2-1.2 1.6.8-.2 1.4c-3.2.7-7.5-3.6-6.8-6.8l1.4-.2.8 1.6-1.2 1.2" strokeWidth="1.3" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5c0-.3.2-.5.5-.5Z" />
  </svg>
);

export const TikTok = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 4c.5 2.5 2 4 4.5 4.5" />
  </svg>
);

export const CreditCard = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 9.5h19" />
    <path d="M6 15h4" />
  </svg>
);

export const Store = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 10v10h16V10" />
    <path d="M3 10 5 4h14l2 6a2.5 2.5 0 0 1-4.5 1.5A2.5 2.5 0 0 1 12 12a2.5 2.5 0 0 1-4.5-.5A2.5 2.5 0 0 1 3 10Z" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />
  </svg>
);

export const ListCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11 6h9M11 12h9M11 18h9" />
    <path d="m3.5 6 1.5 1.5L7.5 5M3.5 12l1.5 1.5 2.5-2.5M3.5 18l1.5 1.5 2.5-2.5" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);
