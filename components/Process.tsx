"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Discover",
    desc: "We start with a conversation — understanding your business, your obligations and where you want to be.",
  },
  {
    title: "Plan",
    desc: "A tailored tax and financial strategy, mapped to your deadlines and designed around your goals.",
  },
  {
    title: "Execute",
    desc: "Filings, accounts and advisory delivered accurately and on time, with proactive communication throughout.",
  },
  {
    title: "Review",
    desc: "Regular reviews keep your strategy current as legislation and your business evolve.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="process" className="bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            How We Work
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight font-medium sm:text-5xl">
            A clear path from first call to{" "}
            <em className="text-shine not-italic">full confidence</em>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-cream/15 lg:block" />
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-gold lg:block"
          />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.15}>
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ink font-serif text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
