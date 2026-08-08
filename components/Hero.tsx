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
 * Premium dark hero in BOTH themes (photo + teal overlay), but theme-reactive:
 * the overlay tone, glass brightness and the bottom fade all shift with the
 * toggle so switching themes is visible even while on the hero.
 * Vertical rhythm is compressed so the stats row fits a laptop's first screen.
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
        aria-hidden
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hero-bg.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_55%]"
        />
        <div className="absolute inset-0 bg-(--hero-overlay) transition-colors duration-500" />
        {/* Left scrim keeps the headline readable in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03120f]/75 via-[#03120f]/35 to-transparent" />
      </motion.div>

      {/* Gold + teal glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-12%] h-[480px] w-[480px] rounded-full bg-[#f0b452]/15 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-12%] h-[420px] w-[420px] rounded-full bg-[#35d0bc]/15 blur-3xl" />
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
            className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-[#f0b452]"
          >
            <span className="h-px w-10 bg-[#f0b452]" />
            Tax Advisers &amp; Consultants
          </motion.p>

          <h1 className="font-serif text-[2.5rem] leading-[1.06] font-medium text-[#f4faf7] sm:text-5xl xl:text-[3.6rem]">
            <SplitText text="Clarity in every number." delay={0.2} />
            <br />
            <SplitText text="Confidence in every" delay={0.5} />{" "}
            <em className="text-[#f0b452] not-italic">
              <SplitText text="decision." delay={0.8} />
            </em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-6 max-w-xl leading-relaxed text-[#b9d2c9]"
          >
            SK Taxation guides businesses and individuals through tax planning,
            compliance and financial strategy — personalised advice that
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
              className="group relative overflow-hidden rounded-full bg-[#f0b452] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#08221d]"
            >
              <span className="relative z-10">Book a Consultation</span>
              <span className="absolute inset-0 -translate-x-full bg-[#35d0bc] transition-transform duration-400 ease-out group-hover:translate-x-0" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#f4faf7]"
            >
              Explore Services
              <span className="inline-block text-[#f0b452] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-medium text-[#f4faf7]">
                  <Counter to={stat.value} />
                  <span className="text-[#f0b452]">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#93b1a7]">
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
