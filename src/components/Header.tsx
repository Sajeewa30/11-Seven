"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { Close, Menu, PhoneCall, WhatsApp } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Remember which path the menu was opened on; it derives to "closed" as soon as the route changes.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const closeMenu = () => setOpenOn(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        className={`fixed inset-x-0 top-0 z-50 border-b bg-page transition-[border-color,box-shadow] duration-300 ${
          solid ? "border-gold-600/30 shadow-[0_8px_24px_-18px_rgb(59_12_21/0.35)]" : "border-gold-600/15"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Logo size="md" />

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-draw text-[0.95rem] font-semibold transition-colors ${
                    active ? "text-maroon-700" : "text-ink-muted hover:text-ink"
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
              className="hidden h-11 items-center gap-2 rounded-full bg-maroon-700 px-5 text-sm font-semibold text-cream transition-colors hover:bg-maroon-600 sm:inline-flex"
            >
              <PhoneCall size={17} />
              <span className="hidden lg:inline">{site.phone.display}</span>
              <span className="lg:hidden">Call</span>
            </a>

            <button
              type="button"
              onClick={() => setOpenOn(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon-700/40 text-ink transition-colors hover:border-maroon-700 md:hidden"
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
        inert={!open}
        className={`fixed inset-0 z-40 bg-maroon-900 transition-opacity duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-2 font-display text-4xl ${isActive(item.href) ? "text-gold-300" : "text-cream"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-cream-muted">
            <div className="gold-hairline" />
            <p>
              {site.address.line1}, {site.address.city}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gold-400 px-6 font-semibold text-ink"
              >
                <PhoneCall size={17} /> Call
              </a>
              <a
                href={site.phone.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/60 px-6 font-semibold text-cream"
              >
                <WhatsApp size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
