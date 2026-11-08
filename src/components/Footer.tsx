import Link from "next/link";
import Logo from "./Logo";
import { departments, nav, site } from "@/data/site";
import { Clock, Facebook, Instagram, Mail, MapPin, PhoneCall, TikTok, WhatsApp } from "./Icons";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTok },
].filter((s) => s.href);

const colHeading = "text-xs font-bold uppercase tracking-[0.2em] text-gold-700";
const colLink = "text-[0.95rem] text-ink-muted transition-colors hover:text-maroon-700";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-linen lg:mt-32">
      <div className="gold-hairline absolute inset-x-0 top-0" />
      <div className="container-x pb-10 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo size="lg" withTagline />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-muted">
              Your everyday shop on Kandy Road, Wattegama — open since {site.openedOn}.
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-maroon-700/30 bg-paper text-maroon-700 transition-colors hover:bg-maroon-700 hover:text-cream"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2">
            <h2 className={colHeading}>Pages</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/policies" className={colLink}>
                  Store policies
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className={colHeading}>We sell</h2>
            <ul className="mt-5 space-y-3">
              {departments.map((d) => (
                <li key={d.slug}>
                  <Link href={`/#${d.slug}`} className={colLink}>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h2 className={colHeading}>Visit or contact</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-ink-muted">
              <li className="flex gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-maroon-700" />
                <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-maroon-700">
                  {site.address.line1}, {site.address.city}, {site.address.country}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneCall size={19} className="mt-0.5 shrink-0 text-maroon-700" />
                <a href={`tel:${site.phone.tel}`} className="hover:text-maroon-700">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsApp size={19} className="mt-0.5 shrink-0 text-maroon-700" />
                <a href={site.phone.whatsapp} target="_blank" rel="noreferrer" className="hover:text-maroon-700">
                  WhatsApp {site.phone.display}
                </a>
              </li>
              {site.email && (
                <li className="flex gap-3">
                  <Mail size={19} className="mt-0.5 shrink-0 text-maroon-700" />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-maroon-700">
                    {site.email}
                  </a>
                </li>
              )}
              <li className="flex gap-3">
                <Clock size={19} className="mt-0.5 shrink-0 text-maroon-700" />
                <div className="space-y-1">
                  {site.hours.map((h) => (
                    <p key={h.days}>
                      <span className="font-semibold text-ink">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gold-600/30 pt-8 text-sm text-ink-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            <Link href="/school-season" className="font-semibold text-maroon-700 hover:underline">
              School season: pay in 3 with KOKO
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
