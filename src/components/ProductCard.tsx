import Image from "next/image";
import Link from "next/link";
import { formatPrice, getCategory, type Product } from "@/data/products";
import PlaceholderArt from "./PlaceholderArt";
import { ArrowUpRight } from "./Icons";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const category = getCategory(product.category);

  return (
    <article className="group relative">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="surface relative aspect-[4/5] overflow-hidden rounded-tile transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold-500/45 group-hover:shadow-gold">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <PlaceholderArt
              category={product.category}
              label={product.name}
              seed={index}
              className="transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}

          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
              {product.badge}
            </span>
          )}

          <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-gold-500 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold-600">{category?.shortName}</p>
            <h3 className="mt-1 text-[0.95rem] font-semibold leading-snug text-cream transition-colors group-hover:text-gold-200">
              {product.name}
            </h3>
          </div>
          <div className="flex items-baseline gap-2 sm:block sm:shrink-0 sm:text-right">
            <p className="font-semibold tabular-nums text-gold-300">{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="text-xs tabular-nums text-cream-dim line-through">{formatPrice(product.compareAt)}</p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
