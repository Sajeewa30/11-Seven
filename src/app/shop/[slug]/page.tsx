import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PlaceholderArt from "@/components/PlaceholderArt";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { ArrowRight, Bag, Check, PhoneCall, WhatsApp } from "@/components/Icons";
import { categories, formatPrice, getCategory, getProduct, products, productsIn } from "@/data/products";
import { site } from "@/data/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.blurb };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category) ?? categories[0];
  const related = productsIn(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const index = Math.max(0, products.findIndex((p) => p.slug === product.slug));

  return (
    <>
      <section className="container-x pt-32 lg:pt-40">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream-dim"
        >
          <Link href="/shop" className="transition-colors hover:text-gold-300">
            Shop
          </Link>
          <span className="text-gold-700">/</span>
          <Link href={`/shop?category=${category.slug}`} className="transition-colors hover:text-gold-300">
            {category.name}
          </Link>
          <span className="text-gold-700">/</span>
          <span className="text-cream-muted">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="surface relative aspect-[4/5] animate-fade overflow-hidden rounded-card lg:sticky lg:top-28">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderArt category={product.category} label={product.name} seed={index} />
              )}
              {product.badge && (
                <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="eyebrow animate-rise">{category.name}</p>
            <h1 className="mt-4 animate-rise font-display text-4xl leading-[1.02] text-cream [animation-delay:80ms] sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <div className="mt-6 flex animate-rise items-baseline gap-4 [animation-delay:160ms]">
              <p className="font-brand text-3xl font-bold tabular-nums text-gold-300">{formatPrice(product.price)}</p>
              {product.compareAt && (
                <p className="text-lg tabular-nums text-cream-dim line-through">{formatPrice(product.compareAt)}</p>
              )}
            </div>

            <p className="mt-6 animate-rise text-lg leading-relaxed text-cream-muted [animation-delay:240ms]">{product.blurb}</p>

            <ul className="mt-8 grid animate-rise gap-3 [animation-delay:320ms] sm:grid-cols-2">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-cream-muted">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                    <Check size={12} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:400ms]">
              <Button size="lg" disabled title="Online ordering coming soon">
                <Bag size={18} />
                Add to bag — coming soon
              </Button>
              <Button href={`tel:${site.phone.tel}`} variant="outline" size="lg">
                <PhoneCall size={18} />
                Call to reserve
              </Button>
              <Button href={site.phone.whatsapp} variant="ghost" size="lg" target="_blank" rel="noreferrer">
                <WhatsApp size={18} />
                WhatsApp
              </Button>
            </div>

            <div className="mt-10 animate-rise rounded-tile border border-gold-500/20 bg-maroon-950/60 p-5 text-sm leading-relaxed text-cream-muted [animation-delay:480ms]">
              <p className="font-semibold text-cream">Buy in-store today.</p>
              <p className="mt-1">
                {site.address.line1}, {site.address.city}. Online checkout with KOKO pay-later is on its way — call ahead
                and we’ll hold any item for 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x pt-24 lg:pt-32">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">More in {category.name}</h2>
              <Link
                href={`/shop?category=${category.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-400 transition-colors hover:text-gold-200"
              >
                View all
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProductCard product={p} index={i + 3} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
