import Link from "next/link";

type Tone = "default" | "footer" | "overlay";

/**
 * Text-based name logo: serif wordmark with a gold accent.
 * - `default`: theme ink (page background)
 * - `footer`: token cream (for `bg-ink` bands — flips with the theme)
 * - `overlay`: fixed light (for the dark hero photo, identical in both themes)
 */
export function Logo({ tone = "default" }: { tone?: Tone }) {
  const main =
    tone === "default"
      ? "text-ink"
      : tone === "footer"
        ? "text-cream"
        : "text-[#f4faf7]";
  const sub =
    tone === "default"
      ? "text-muted"
      : tone === "footer"
        ? "text-cream/60"
        : "text-[#f4faf7]/60";

  return (
    <Link href="#top" className="group inline-flex items-baseline gap-2">
      <span
        className={`font-serif text-2xl font-semibold tracking-tight transition-colors duration-500 ${main}`}
      >
        SK
        <span className="text-gold">&nbsp;Taxation</span>
      </span>
      <span
        className={`hidden text-[10px] font-medium uppercase tracking-[0.28em] transition-colors duration-500 sm:inline ${sub}`}
      >
        Tax Advisers
      </span>
    </Link>
  );
}
