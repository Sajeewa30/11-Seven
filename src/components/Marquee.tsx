const items = [
  "Stationery",
  "Phone Accessories",
  "Protein & Creatine",
  "School Books — Coming Soon",
  "No. 204 Kandy Road, Wattegama",
  "Open 7 Days",
];

/** Gold ticker strip. The content is duplicated once so the -50% translate loops seamlessly. */
export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold-500/20 bg-maroon-900 py-3.5">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {items.map((text) => (
              <li
                key={text}
                className="flex items-center gap-10 pr-10 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-gold-300"
              >
                <span>{text}</span>
                <span className="text-[0.5rem] text-gold-600">◆</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
