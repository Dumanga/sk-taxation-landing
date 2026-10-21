import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | SK Taxation",
  description:
    "The page you were looking for does not exist. Return to the SK Taxation home page for tax consultancy, audit, accounting and CFO services.",
  robots: { index: false },
};

/** Static 404. GitHub Pages serves the exported 404.html automatically. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <Logo />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-6 pb-24">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Error 404
        </p>
        <h1 className="max-w-2xl font-serif text-5xl leading-[1.05] font-medium text-ink sm:text-7xl">
          This page took an <em className="text-gold not-italic">unexpected deduction.</em>
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          The address you followed does not exist. Everything we offer lives on
          one page, so you are never more than a click from the right place.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="group relative overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1d2a26]">
              Back to the home page
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-400 ease-out group-hover:translate-x-0" />
          </Link>
          <a
            href={`tel:${BUSINESS.phones[0]}`}
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink"
          >
            Or call us: {BUSINESS.phonesDisplay[0]}
            <span className="inline-block text-gold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
