import Button from "@/components/Button";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow animate-rise">Error 404</p>
      <h1 className="mt-5 animate-rise font-display text-6xl text-cream [animation-delay:100ms] sm:text-8xl">
        This shelf is empty.
      </h1>
      <p className="mt-6 max-w-md animate-rise text-lg text-cream-muted [animation-delay:200ms]">
        The page you’re after has moved or never existed. Try the shop, or head back home.
      </p>
      <div className="mt-10 flex animate-rise flex-wrap justify-center gap-4 [animation-delay:300ms]">
        <Button href="/shop">
          Browse the shop
          <ArrowRight size={18} />
        </Button>
        <Button href="/" variant="outline">
          Home
        </Button>
      </div>
    </section>
  );
}
