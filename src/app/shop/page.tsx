import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PhoneCall, WhatsApp } from "@/components/Icons";
import { categories, products, productsIn } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse stationery, phone accessories and gym supplements at 11-seven, Kandy Road, Wattegama.",
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

function Chip({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "page" : undefined}
      className={`rounded-full border px-5 py-2.5 text-[0.74rem] font-bold uppercase tracking-[0.18em] transition-all ${
        active
          ? "border-gold-500 bg-gold-500 text-ink shadow-gold"
          : "border-gold-500/25 text-cream-muted hover:border-gold-500/60 hover:text-gold-200"
      }`}
    >
      {label}
    </Link>
  );
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const active = categories.find((c) => c.slug === category);
  const list = active ? productsIn(active.slug) : products;

  return (
    <>
      <PageHero
        eyebrow="The shop"
        title={
          active ? (
            active.name
          ) : (
            <>
              Everything on the <span className="text-gold-sheen">shelves.</span>
            </>
          )
        }
        description={
          active
            ? active.description
            : "Browse all three departments. Online ordering and KOKO pay-later are on the way — until then, call or WhatsApp to reserve anything you see here."
        }
      >
        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:300ms]">
          <Chip href="/shop" label="All" active={!active} />
          {categories.map((c) => (
            <Chip key={c.slug} href={`/shop?category=${c.slug}`} label={c.name} active={active?.slug === c.slug} />
          ))}
        </div>
      </PageHero>

      <section className="container-x">
        <div className="flex items-center justify-between border-b border-gold-500/15 pb-5 text-sm text-cream-muted">
          <p>
            <span className="font-semibold text-cream">{list.length}</span> {list.length === 1 ? "product" : "products"}
          </p>
          <p className="hidden sm:block">Prices in LKR · In-store stock</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 60}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <div className="surface flex flex-col items-start justify-between gap-6 rounded-card p-8 sm:flex-row sm:items-center lg:p-10">
            <div>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Don’t see what you need?</h2>
              <p className="mt-2 max-w-lg text-cream-muted">
                We stock far more than what’s online. Ask us — we’ll check the shelf and hold it for you.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href={`tel:${site.phone.tel}`}>
                <PhoneCall size={17} />
                Call
              </Button>
              <Button href={site.phone.whatsapp} variant="outline" target="_blank" rel="noreferrer">
                <WhatsApp size={17} />
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
