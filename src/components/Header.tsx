"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { Bag, Close, Menu, PhoneCall } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Remember which path the menu was opened on; it derives to "closed" as soon as the route changes,
  // so no effect is needed to reset it on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const closeMenu = () => setOpenOn(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          solid ? "border-gold-500/15 bg-coal/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo size="md" />

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-draw text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-gold-300" : "text-cream-muted hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.tel}`}
              className="hidden items-center gap-2 text-sm font-medium text-cream-muted transition-colors hover:text-gold-300 lg:inline-flex"
            >
              <PhoneCall size={17} />
              {site.phone.display}
            </a>

            <Link
              href="/shop"
              title="Online ordering coming soon"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/25 text-cream-muted transition-colors hover:border-gold-500/60 hover:text-gold-300"
            >
              <Bag size={19} />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-maroon-600 px-1 text-[0.65rem] font-bold text-cream">
                0
              </span>
              <span className="sr-only">Bag, 0 items. Online ordering coming soon.</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpenOn(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/25 text-cream transition-colors hover:border-gold-500/60 md:hidden"
            >
              {open ? <Close /> : <Menu />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div className="absolute inset-0 bg-maroon-950/95 backdrop-blur-xl" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <nav aria-label="Mobile" className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul className="space-y-3">
            {nav.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`font-display text-5xl leading-tight ${isActive(item.href) ? "text-gold-300" : "text-cream"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-sm text-cream-muted">
            <div className="gold-hairline" />
            <p>
              {site.address.line1}, {site.address.city}
            </p>
            <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-2 text-gold-300">
              <PhoneCall size={16} /> {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
