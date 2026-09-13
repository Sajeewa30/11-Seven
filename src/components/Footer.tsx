import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { categories } from "@/data/products";
import { Clock, Facebook, Instagram, Mail, MapPin, PhoneCall, TikTok } from "./Icons";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTok },
];

const colHeading = "text-[0.68rem] font-bold uppercase tracking-[0.26em] text-gold-500";
const colLink = "text-sm text-cream-muted transition-colors hover:text-gold-200";

export default function Footer() {
  return (
    <footer className="relative mt-28 bg-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="container-x pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="lg" withTagline />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-muted">{site.description}</p>
            <ul className="mt-7 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/25 text-cream-muted transition-all hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={colHeading}>Shop</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/shop" className={colLink}>
                  All products
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop?category=${c.slug}`} className={colLink}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={colHeading}>Company</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className={colHeading}>Visit</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-muted">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold-200">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.country}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneCall size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a href={`tel:${site.phone.tel}`} className="hover:text-gold-200">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-200">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <div className="space-y-1">
                  {site.hours.map((h) => (
                    <p key={h.days}>
                      <span className="text-cream">{h.days}</span>
                      <br />
                      {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gold-500/10 pt-8 text-xs text-cream-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Online ordering &amp; KOKO pay-later — coming soon.</p>
        </div>
      </div>
    </footer>
  );
}
