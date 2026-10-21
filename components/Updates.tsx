"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

/* Keep these current: each entry is a short, factual note on a Sri Lankan
   tax development, newest first. Facts verified against IRD notices, the
   gazetted Acts and KPMG tax alerts; swap entries as the client sends new
   ones. */
const updates = [
  {
    date: "June 2026",
    tag: "Income Tax",
    title: "Inland Revenue (Amendment) Act No. 11 of 2026",
    summary:
      "Capital gains tax for individuals and partnerships rose to 15%, and payments of Rs. 500,000 or more must now go through banking channels. An interest waiver on old tax arrears is available if the principal is settled in time.",
  },
  {
    date: "April 2025",
    tag: "Income Tax",
    title: "Personal relief increased to Rs. 1.8 million",
    summary:
      "The annual personal relief rose from Rs. 1.2 million with effect from 1 April 2025, and the first tax band was widened to Rs. 1 million at 6%. Employees under APIT should see the change in monthly deductions.",
  },
  {
    date: "April 2025",
    tag: "Withholding Tax",
    title: "Tax withheld on interest doubled to 10%",
    summary:
      "Advance income tax withheld on interest income rose from 5% to 10% with effect from 1 April 2025. Depositors and treasury managers should review cash flow forecasts and confirm banks are deducting correctly.",
  },
];

export function Updates() {
  return (
    <section id="updates" className="bg-gradient-to-br from-cream-dark via-cream-dark to-teal/15 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Latest Updates
              </p>
              <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
                What is changing in <em className="text-shine not-italic">Sri Lankan tax</em>
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Short notes on the developments that matter, and what they mean
              for your filings.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {updates.map((update, i) => (
            <Reveal key={update.title} delay={i * 0.12} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_24px_48px_-24px_rgba(6,51,44,0.3)]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold">
                    {update.tag}
                  </span>
                  <time className="text-xs uppercase tracking-[0.14em] text-muted">
                    {update.date}
                  </time>
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-snug font-medium text-ink">
                  {update.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {update.summary}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal"
                >
                  How does this affect you? Ask us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted">
            These notes are general information, not advice.{" "}
            <a href="#contact" className="font-medium text-teal underline-offset-4 hover:underline">
              Speak to us
            </a>{" "}
            before acting on any of them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
