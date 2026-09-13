/**
 * Decorative hairline frame with crossing corners — a nod to the gold border on the
 * grand-opening invitation. Desktop only, purely visual, never intercepts clicks.
 */
export default function GoldFrame() {
  const line = "absolute bg-gold-500/40";
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] hidden lg:block">
      <span className={`${line} left-2 right-2 top-5 h-px`} />
      <span className={`${line} bottom-5 left-2 right-2 h-px`} />
      <span className={`${line} bottom-2 left-5 top-2 w-px`} />
      <span className={`${line} bottom-2 right-5 top-2 w-px`} />
    </div>
  );
}
