/**
 * Catalogue data — all PLACEHOLDER content.
 * Swap names, prices, descriptions and add `image` paths (e.g. "/images/products/whey.jpg")
 * as real product photos become available. When `image` is omitted the site renders
 * a styled placeholder tile automatically.
 */
export type CategorySlug = "stationery" | "phone-accessories" | "gym-nutrition";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  index: string;
  tagline: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "stationery",
    name: "Stationery",
    shortName: "Stationery",
    index: "01",
    tagline: "For the desk, the classroom and the studio.",
    description:
      "Exercise books, pens, art supplies, office essentials and school kits — everything from a single pencil to a full back-to-school bundle.",
  },
  {
    slug: "phone-accessories",
    name: "Phone Accessories",
    shortName: "Phone",
    index: "02",
    tagline: "Protect it, charge it, hear it better.",
    description:
      "Genuine chargers, cables, cases, tempered glass, earbuds and power banks for every major brand.",
  },
  {
    slug: "gym-nutrition",
    name: "Gym & Nutrition",
    shortName: "Gym",
    index: "03",
    tagline: "Protein, creatine and the gear to go with them.",
    description:
      "Authentic whey, creatine, pre-workout and shakers from trusted brands — sealed, dated and priced fairly.",
  },
];

export type Badge = "New" | "Best seller" | "Bundle" | "Coming soon";

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number; // LKR
  compareAt?: number; // LKR, shown struck-through when present
  badge?: Badge;
  blurb: string;
  details: string[];
  /** Optional real image path under /public — falls back to a placeholder tile. */
  image?: string;
}

export const products: Product[] = [
  // ── Stationery ────────────────────────────────────────────────
  {
    slug: "a4-exercise-book-pack",
    name: "A4 Exercise Book Pack (10)",
    category: "stationery",
    price: 1450,
    badge: "Best seller",
    blurb: "Ten single-ruled 120-page books with sturdy covers, ready for the new term.",
    details: ["120 pages, single ruled", "Laminated cover", "Pack of 10", "Also available in double-ruled and square-ruled"],
  },
  {
    slug: "gel-pen-set-12",
    name: "Gel Pen Set — 12 Colours",
    category: "stationery",
    price: 890,
    blurb: "Smooth 0.5 mm gel pens in twelve vivid colours for notes that actually get read.",
    details: ["0.5 mm tip", "Quick-dry ink", "12 colours", "Refills available"],
  },
  {
    slug: "hardcover-sketch-journal",
    name: "Hardcover Sketch Journal",
    category: "stationery",
    price: 1990,
    badge: "New",
    blurb: "A5 dot-grid journal with thick 120 gsm paper, ribbon marker and elastic closure.",
    details: ["A5, 192 pages", "120 gsm paper", "Dot-grid", "Elastic closure & ribbon"],
  },
  {
    slug: "maths-instrument-set",
    name: "Geometry & Maths Instrument Set",
    category: "stationery",
    price: 650,
    blurb: "Compass, protractor, set squares and ruler in a hard case — exam-day essentials.",
    details: ["Metal compass", "180° protractor", "Two set squares", "15 cm ruler"],
  },
  {
    slug: "desk-organiser-bundle",
    name: "Desk Organiser Bundle",
    category: "stationery",
    price: 3200,
    compareAt: 3850,
    badge: "Bundle",
    blurb: "Pen cup, tray, sticky notes, stapler and tape dispenser — a tidy desk in one box.",
    details: ["5-piece set", "Matte black finish", "Includes 400 sticky notes", "Gift-ready box"],
  },
  // ── Phone accessories ─────────────────────────────────────────
  {
    slug: "tempered-glass-protector",
    name: "Tempered Glass Screen Protector",
    category: "phone-accessories",
    price: 1200,
    blurb: "9H hardness, oleophobic coating and edge-to-edge fit. Fitted in-store for free.",
    details: ["9H hardness", "Oleophobic coating", "Free in-store fitting", "Models for all major brands"],
  },
  {
    slug: "20w-fast-charger",
    name: "20W Fast Charger + Type-C Cable",
    category: "phone-accessories",
    price: 3490,
    badge: "Best seller",
    blurb: "USB-C PD charger with a braided 1 m cable — 0 to 50% in about half an hour.",
    details: ["20W USB-C Power Delivery", "Braided 1 m cable", "Over-current protection", "6-month warranty"],
  },
  {
    slug: "wireless-earbuds-anc",
    name: "Wireless Earbuds with ANC",
    category: "phone-accessories",
    price: 8900,
    compareAt: 10500,
    badge: "New",
    blurb: "Active noise cancelling, 30-hour total battery and a pocket-sized charging case.",
    details: ["Active noise cancelling", "30 h with case", "Bluetooth 5.3", "IPX4 splash resistant"],
  },
  {
    slug: "shockproof-clear-case",
    name: "Shockproof Clear Case",
    category: "phone-accessories",
    price: 1650,
    blurb: "Crystal-clear TPU with reinforced corners and raised edges around the camera.",
    details: ["Military-grade drop protection", "Anti-yellowing", "Raised camera lip", "Wireless-charging safe"],
  },
  {
    slug: "power-bank-10000",
    name: "10,000 mAh Power Bank",
    category: "phone-accessories",
    price: 5990,
    blurb: "Slim dual-output power bank with USB-C in/out and a four-LED battery indicator.",
    details: ["10,000 mAh", "USB-C + USB-A", "22.5W fast output", "Charges most phones twice"],
  },
  // ── Gym & nutrition ───────────────────────────────────────────
  {
    slug: "whey-protein-isolate-1kg",
    name: "Whey Protein Isolate — 1 kg",
    category: "gym-nutrition",
    price: 14500,
    badge: "Best seller",
    blurb: "25 g protein per scoop, low lactose, sealed and batch-dated. Chocolate or vanilla.",
    details: ["25 g protein per serving", "~33 servings", "Low lactose", "Sealed with batch date"],
  },
  {
    slug: "creatine-monohydrate-300g",
    name: "Creatine Monohydrate — 300 g",
    category: "gym-nutrition",
    price: 6900,
    blurb: "Micronised, unflavoured creatine monohydrate. 5 g a day, 60 servings.",
    details: ["Micronised powder", "5 g per serving", "60 servings", "Unflavoured — mixes with anything"],
  },
  {
    slug: "pre-workout-30",
    name: "Pre-Workout — 30 Servings",
    category: "gym-nutrition",
    price: 7900,
    badge: "New",
    blurb: "Caffeine, beta-alanine and citrulline for focus and pump. Blue raspberry.",
    details: ["200 mg caffeine", "3.2 g beta-alanine", "6 g citrulline", "30 servings"],
  },
  {
    slug: "steel-shaker-700ml",
    name: "Stainless Steel Shaker — 700 ml",
    category: "gym-nutrition",
    price: 2200,
    blurb: "Leak-proof steel shaker with a wire whisk ball and a compartment for a spare scoop.",
    details: ["700 ml", "Leak-proof lid", "Stainless whisk ball", "Dishwasher safe"],
  },
];

export const featuredSlugs = [
  "whey-protein-isolate-1kg",
  "20w-fast-charger",
  "a4-exercise-book-pack",
  "wireless-earbuds-anc",
  "hardcover-sketch-journal",
  "creatine-monohydrate-300g",
  "power-bank-10000",
  "desk-organiser-bundle",
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsIn(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-US")}`;
}
