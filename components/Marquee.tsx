const items = [
  "Tax Planning",
  "Tax Compliance",
  "Bookkeeping",
  "Financial Strategy",
  "Statutory Audits",
  "Payroll",
  "Company Secretarial",
  "CFO Advisory",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.24em] text-cream/80"
          >
            {item}
            <span className="text-gold" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
