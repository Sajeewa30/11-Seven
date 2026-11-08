/**
 * Business details for 11-seven — the single place to edit shop information.
 *
 * Optional fields (email, social links, map link) render only when filled in,
 * so the site never shows a fake value.
 */
export const site = {
  name: "11-seven",
  legalName: "11-seven Stationery & Phone Accessories",
  tagline: "Stationery · Phone Accessories · Gym Supplements",
  /** Live address of the site — used for canonical URLs, the sitemap and social previews.
   *  Set NEXT_PUBLIC_SITE_URL in Vercel once the final domain is connected. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://11-seven.netlify.app",
  description:
    "11-seven is a stationery, mobile phone accessories and gym supplements shop at No. 204 Kandy Road, Wattegama. Genuine products, fair prices and friendly service — all in one stop.",
  address: {
    line1: "No. 204, Kandy Road",
    city: "Wattegama",
    region: "Central Province",
    country: "Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/U1p9GfakWGwrepps7",
  },
  phone: {
    display: "+94 71 491 3832",
    tel: "+94714913832",
    whatsapp: "https://wa.me/94714913832",
  },
  /** Shop email — leave empty to hide it everywhere. */
  email: "",
  hours: [
    { days: "Monday – Saturday", time: "8.30 am – 8.00 pm" },
    { days: "Sunday & Poya days", time: "9.00 am – 1.00 pm" },
  ],
  /** Social profile links — any left empty are hidden. */
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
  openedOn: "June 2026",
  grandOpening: "Thursday, 18 June 2026",
} as const;

/** School-season KOKO offer — dates shown on the School Season page and banners. */
export const schoolSeason = {
  label: "School season",
  window: "November – December 2026",
  short: "Nov – Dec",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/school-season", label: "School Season" },
  { href: "/contact", label: "Contact" },
] as const;

export type DepartmentIcon = "book" | "phone" | "dumbbell";

export interface Department {
  slug: string;
  name: string;
  icon: DepartmentIcon;
  summary: string;
  items: string[];
  /** Optional photo under /public (e.g. "/images/stationery.jpg"), 4:3. */
  image?: string;
  /** Short description of the photo for screen readers. */
  imageAlt?: string;
}

export const departments: Department[] = [
  {
    slug: "stationery",
    name: "Stationery & Books",
    icon: "book",
    summary: "School and office essentials — from a single pen to a full term’s book list.",
    items: ["Exercise books", "Textbooks & workbooks", "Pens, pencils & geometry boxes", "Art & craft supplies", "Files & office supplies"],
    image: "/images/stationery.jpg",
    imageAlt: "Exercise books, coloured pencils, rulers, pens and a geometry box on a desk",
  },
  {
    slug: "phone-accessories",
    name: "Phone Accessories",
    icon: "phone",
    summary: "Genuine accessories that keep your phone protected, charged and connected.",
    items: ["Chargers & cables", "Back covers & cases", "Tempered glass", "Earphones & headsets", "Power banks"],
    image: "/images/phone-accessories.jpg",
    imageAlt: "A phone charger with a coiled cable next to a maroon phone case",
  },
  {
    slug: "gym-supplements",
    name: "Gym Supplements",
    icon: "dumbbell",
    summary: "Trusted supplements and gym basics for training and recovery.",
    items: ["Whey protein", "Creatine", "Pre-workout", "Mass gainers", "Shakers & gym accessories"],
    image: "/images/gym-supplements.jpg",
    imageAlt: "Protein tubs, a scoop of protein powder, a shaker bottle and a dumbbell",
  },
];
