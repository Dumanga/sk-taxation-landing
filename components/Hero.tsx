"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SplitText } from "./Reveal";
import { Counter } from "./Counter";
import { HeroIllustration } from "./HeroIllustration";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Clients Advised" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

/**
 * The hero follows the theme: a light mint wash over the photo in light mode
 * (the client asked for a light-coloured site), a deep teal treatment in dark
 * mode. All colours come from theme tokens, so both renditions stay on-brand.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const yIllustration = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-28">
      {/* Accounting photo + theme-reactive overlay */}
      <motion.div
        style={reduce ? undefined : { y: yBg }}
        className="absolute inset-x-0 -inset-y-[8%]"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hero-bg.jpg`}
          alt="Tax documents, a calculator and a pen on an accountant's desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_55%]"
        />
        <div className="absolute inset-0 bg-(--hero-overlay) transition-colors duration-500" />
        {/* Left scrim keeps the headline readable in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-(--hero-scrim) via-(--hero-scrim-mid) to-transparent transition-colors duration-500" />
      </motion.div>

      {/* Gold + teal glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-12%] h-[480px] w-[480px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-12%] h-[420px] w-[420px] rounded-full bg-teal/15 blur-3xl" />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity }}
        className="relative mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            Tax Advisers &amp; Consultants
          </motion.p>

          <h1 className="font-serif text-[2.5rem] leading-[1.06] font-medium text-ink sm:text-5xl xl:text-[3.6rem]">
            <SplitText text="Clarity in every number." delay={0.2} />
            <br />
            <SplitText text="Confidence in every" delay={0.5} />{" "}
            <em className="text-gold not-italic">
              <SplitText text="decision." delay={0.8} />
            </em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-6 max-w-xl leading-relaxed text-muted"
          >
            SK Taxation guides businesses and individuals through tax planning,
            compliance and financial strategy, with personalised advice that
            protects your wealth and keeps you ahead of every deadline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1d2a26]">
                Book a Consultation
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-400 ease-out group-hover:translate-x-0" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink"
            >
              Explore Services
              <span className="inline-block text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6 transition-colors duration-500"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-medium text-ink">
                  <Counter to={stat.value} />
                  <span className="text-gold">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* On laptops the cards start on the headline's line, not the kicker's */}
        <motion.div style={reduce ? undefined : { y: yIllustration }} className="lg:pt-9">
          <HeroIllustration />
        </motion.div>
      </motion.div>
    </section>
  );
}
