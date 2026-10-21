"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/site";

/**
 * Editorial accordion of the firm's five services. Each row expands to show
 * the full list of sub-services supplied by the client.
 */
export function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-cream-dark via-cream-dark to-cream py-24 sm:py-32"
    >
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
              Five practice areas, one team. Open each service to see exactly
              what we handle for you.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {SERVICES.map((service, i) => {
            const isOpen = active === i;
            return (
              <Reveal key={service.title} delay={i * 0.06} y={20}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="flex items-baseline gap-5 sm:gap-6">
                      <span className="font-serif text-sm text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl font-medium text-ink transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-4xl">
                        {service.title}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-2xl text-gold"
                      aria-hidden
                    >
                      ↗
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 sm:pl-[60px]">
                          <p className="max-w-2xl text-muted">{service.blurb}</p>
                          <ul className="mt-5 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                            {service.items.map((item, j) => (
                              <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: 0.1 + j * 0.03 }}
                                className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                              >
                                <span className="mt-0.5 text-gold" aria-hidden>
                                  ✓
                                </span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                          <a
                            href="#contact"
                            className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal"
                          >
                            Talk to us about {service.title.toLowerCase()}
                            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                              →
                            </span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
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
