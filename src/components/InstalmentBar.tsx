const steps = [
  { label: "1st", when: "Today" },
  { label: "2nd", when: "Next month" },
  { label: "3rd", when: "Month after" },
];

interface InstalmentBarProps {
  /** "dark" for maroon panels (default), "light" for cream/white surfaces. */
  tone?: "dark" | "light";
  className?: string;
}

/** Three-part bar that shows a KOKO purchase split into equal monthly instalments. */
export default function InstalmentBar({ tone = "dark", className = "" }: InstalmentBarProps) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <p className="sr-only">Split the bill into three equal payments: one today, one next month and one the month after.</p>
      <ol className="grid grid-cols-3 gap-2" aria-hidden>
        {steps.map((s, i) => (
          <li key={s.label}>
            <div
              className={`h-2.5 rounded-full ${
                i === 0 ? "bg-gold-400" : dark ? "bg-gold-400/35" : "bg-maroon-700/25"
              }`}
            />
            <p className={`mt-3 text-sm font-bold ${dark ? "text-cream" : "text-ink"}`}>{s.label} payment</p>
            <p className={`text-sm ${dark ? "text-cream-muted" : "text-ink-muted"}`}>{s.when}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
