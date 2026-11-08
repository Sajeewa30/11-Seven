import Button from "@/components/Button";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow animate-rise">Error 404</p>
      <h1 className="mt-5 animate-rise font-display text-5xl font-medium text-ink [animation-delay:80ms] sm:text-7xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md animate-rise text-lg text-ink-muted [animation-delay:160ms]">
        The page you’re looking for has moved or doesn’t exist. Head back home or get in touch.
      </p>
      <div className="mt-10 flex animate-rise flex-wrap justify-center gap-3 [animation-delay:240ms]">
        <Button href="/">
          Back to home
          <ArrowRight size={18} />
        </Button>
        <Button href="/contact" variant="outline">
          Contact us
        </Button>
      </div>
    </section>
  );
}
