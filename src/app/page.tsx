import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import Services from "@/components/Services";
import SectionHeading from "@/components/SectionHeading";
import SchoolSeasonBanner from "@/components/SchoolSeasonBanner";
import ValueProps from "@/components/ValueProps";
import VisitStrip from "@/components/VisitStrip";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What we sell */}
      <section className="container-x pt-8 lg:pt-12">
        <Reveal>
          <SectionHeading
            eyebrow="What we sell"
            title="Three shops in one."
            description="Whether it’s a term’s worth of exercise books, a new phone charger, your next tub of protein or a print job, you’ll find it at 11-seven."
          />
        </Reveal>
        <div className="mt-12">
          <Departments />
        </div>
        <div className="mt-5">
          <Services />
        </div>
      </section>

      {/* School season */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SchoolSeasonBanner />
        </Reveal>
      </section>

      {/* Why us */}
      <section className="container-x pt-20 lg:pt-28">
        <Reveal>
          <SectionHeading eyebrow="Why 11-seven" title="A neighbourhood shop you can rely on." />
        </Reveal>
        <div className="mt-12">
          <ValueProps />
        </div>
      </section>

      <VisitStrip />
    </>
  );
}
