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
  /** Live address of the site — used for canonical URLs, the sitemap and link-preview images.
   *  On Netlify, `URL` is the site's primary domain at build time: the netlify.app address until
   *  11seven.lk is set as the primary domain, then https://11seven.lk automatically.
   *  NEXT_PUBLIC_SITE_URL overrides it on any host. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    "https://11seven.lk",
  description:
    "11-seven is a stationery, mobile phone accessories and gym supplements shop at No. 204 Kandy Road, Wattegama, with printing, photo and reload services. Open every day, 8 am – 11 pm.",
  address: {
    line1: "No. 204, Kandy Road",
    city: "Wattegama",
    region: "Central Province",
    country: "Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/U1p9GfakWGwrepps7",
  },
  /** Main number — mobile, for calls and WhatsApp. */
  phone: {
    display: "077 210 3832",
    tel: "+94772103832",
    whatsapp: "https://wa.me/94772103832",
  },
  /** Shop landline — calls only. */
  landline: {
    display: "081 222 3912",
    tel: "+94812223912",
  },
  /** Shop email — leave empty to hide it everywhere. */
  email: "elevensevencommunication@gmail.com",
  hours: [{ days: "Monday – Sunday", time: "8.00 am – 11.00 pm" }],
  /** schema.org opening hours, kept in step with `hours`. */
  openingHoursSchema: ["Mo-Su 08:00-23:00"],
  /** Social profile links — any left empty are hidden. */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61590578387934",
    instagram: "",
    tiktok: "https://www.tiktok.com/@11seven46",
  },
  socialHandles: {
    facebook: "11-seven",
    tiktok: "@11seven46",
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

/** Printing and everyday services offered at the counter (listed under "What we sell"). */
export const services = [
  "Printouts & photocopies",
  "Photo printing",
  "Mug & T-shirt printing",
  "Banners",
  "Wedding & visiting cards",
  "Typesetting",
  "Awards & plaques",
  "Mobile reloads",
  "Bill payments",
];
