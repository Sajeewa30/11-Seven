/**
 * Business details for 11-seven.
 * Items marked PLACEHOLDER should be replaced with real values.
 */
export const site = {
  name: "11-seven",
  legalName: "11-seven Stationery & Phone Accessories",
  tagline: "Stationery · Phone Accessories · Gym Supplements",
  // PLACEHOLDER — set to the real domain before deploying (used for canonical + OG URLs)
  url: "https://11seven.lk",
  description:
    "11-seven is Wattegama's one-stop shop for stationery, mobile phone accessories and gym supplements — genuine brands, fair prices and friendly service on Kandy Road.",
  address: {
    line1: "No. 204, Kandy Road",
    city: "Wattegama",
    region: "Central Province",
    country: "Sri Lanka",
    // PLACEHOLDER — replace with the exact Google Maps share link for the shop
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=No.+204+Kandy+Road+Wattegama",
  },
  phone: {
    display: "+94 71 491 3832",
    tel: "+94714913832",
    whatsapp: "https://wa.me/94714913832",
  },
  // PLACEHOLDER
  email: "hello@11seven.lk",
  // PLACEHOLDER — confirm real opening hours
  hours: [
    { days: "Monday – Saturday", time: "8.30 am – 8.00 pm" },
    { days: "Sunday & Poya days", time: "9.00 am – 1.00 pm" },
  ],
  // PLACEHOLDER — add real social profile URLs
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
  openedOn: "June 2026",
  grandOpening: "Thursday, 18 June 2026",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
