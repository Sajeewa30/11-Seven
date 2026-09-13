import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryShowcase from "@/components/CategoryShowcase";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import SchoolSeasonBanner from "@/components/SchoolSeasonBanner";
import ValueProps from "@/components/ValueProps";
import AboutTeaser from "@/components/AboutTeaser";
import VisitStrip from "@/components/VisitStrip";
import Reveal from "@/components/Reveal";
import { featuredSlugs, getProduct, type Product } from "@/data/products";

export default function HomePage() {
  const featured = featuredSlugs.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <>
      <Hero />
      <Marquee />

      {/* Departments */}
      <section className="container-x pt-24 lg:pt-32">
        <Reveal>
          <SectionHeading
            eyebrow="Departments"
            title={
              <>
                Three counters. <span className="text-gold-sheen">One</span> shop.
              </>
            }
            description="Stationery on the left, phones in the middle, protein at the back — and one friendly team across all of it."
          />
        </Reveal>
        <div className="mt-12">
          <CategoryShowcase />
        </div>
      </section>

      {/* Featured products */}
      <section className="container-x pt-24 lg:pt-32">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="Fresh on the shelf."
            description="A few of the things people keep coming back for. Prices in Sri Lankan Rupees."
            action={{ href: "/shop", label: "View all products" }}
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 70}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* School season */}
      <section className="container-x pt-24 lg:pt-32">
        <Reveal>
          <SchoolSeasonBanner />
        </Reveal>
      </section>

      <ValueProps />
      <AboutTeaser />
      <VisitStrip />
    </>
  );
}
