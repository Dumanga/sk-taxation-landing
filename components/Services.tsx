"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Tax Services",
    desc: "Tax planning and tax compliance for companies and individuals — we optimise your position and keep you fully compliant with every taxing statute.",
  },
  {
    title: "Accounting Services",
    desc: "Bookkeeping, management accounts and payroll support that free you to concentrate on your core business.",
  },
  {
    title: "Financial Advisory",
    desc: "Corporate advisory that identifies untapped opportunities and turns your numbers into a strategy for sustainable growth.",
  },
  {
    title: "Audit & Assurance",
    desc: "Independent assurance that delivers real value, strengthens investor confidence and stands up to scrutiny.",
  },
  {
    title: "Fractional CFO Services",
    desc: "Senior financial leadership on demand — budgeting, forecasting and board-level insight without the full-time cost.",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="bg-gradient-to-b from-cream-dark via-cream-dark to-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-10 bg-gold" />
                What We Do
              </p>
              <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
                Services built around <em className="text-shine not-italic">your business</em>
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Assurance and non-assurance services for all kinds of businesses —
              at any stage.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} y={20}>
              <div
                className="group cursor-pointer border-b border-line"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-6 py-8">
                  <div className="flex items-baseline gap-6">
                    <span className="font-serif text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-3xl font-medium text-ink transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-4xl">
                      {service.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-gold"
                    aria-hidden
                  >
                    ↗
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-[52px] text-muted sm:pl-[60px]">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-cream"
            >
              Need more help?
              <span className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
