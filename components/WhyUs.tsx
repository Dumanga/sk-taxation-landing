"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const reasons = [
  {
    title: "Logical Solutions",
    desc: "Every recommendation is rooted in a real business case, so its sustainability is assured to a far greater extent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Integrated Expertise",
    desc: "Solutions built by integrating different experiences, knowledge and talents across tax, accounting and law.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <circle cx="9" cy="12" r="5.5" />
        <circle cx="15" cy="12" r="5.5" />
      </svg>
    ),
  },
  {
    title: "Proven Professionals",
    desc: "A team of chartered accountants, legal counsel and experienced tax professionals working as one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <path d="m12 3 2.5 5.3 5.5.7-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.5-.7L12 3Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Why Choose Us
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
          Trusted, sustainable solutions
        </h2>
        <p className="mt-4 text-muted">
          We increase the ease of doing business — every engagement, every time.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`group h-full rounded-2xl border border-line p-8 transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(22,51,47,0.25)] ${
                [
                  "bg-gradient-to-br from-teal/15 via-surface to-surface",
                  "bg-gradient-to-br from-gold/15 via-surface to-surface",
                  "bg-gradient-to-br from-teal/10 via-surface to-gold/10",
                ][i]
              }`}
            >
              <div className="mb-6 inline-flex rounded-full bg-cream p-4 text-gold transition-colors duration-300 group-hover:bg-ink group-hover:text-cream">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{reason.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
