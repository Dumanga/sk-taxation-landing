import { Logo } from "./Logo";
import { BUSINESS } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#updates", label: "Latest Updates" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo tone="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Expert tax advisory and financial services for businesses at any
              stage, delivered with quality in every step and values throughout
              the profession.
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:items-center" aria-label="Footer">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-cream/70 md:items-end md:text-right">
            <a href={`tel:${BUSINESS.phones[0]}`} className="transition-colors hover:text-gold">
              {BUSINESS.phonesDisplay[0]}
            </a>
            <a href={`tel:${BUSINESS.phones[1]}`} className="transition-colors hover:text-gold">
              {BUSINESS.phonesDisplay[1]}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-gold">
              {BUSINESS.email}
            </a>
            <p>{BUSINESS.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>{BUSINESS.descriptor}</p>
        </div>
      </div>
    </footer>
  );
}
