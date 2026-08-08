"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "I am really happy with the way the SK Taxation team consults us. It is convenient, professional and genuinely adds value to our organisation.",
    name: "Chief Financial Officer",
    company: "Pharmaceutical Manufacturer",
  },
  {
    quote:
      "Their tax planning advice saved us far more than their fee — and we finally file everything ahead of the deadline instead of scrambling.",
    name: "Managing Director",
    company: "Import & Distribution Group",
  },
  {
    quote:
      "Having a fractional CFO from SK Taxation gave our board the financial clarity we needed to raise our next round with confidence.",
    name: "Founder & CEO",
    company: "Technology Startup",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-gradient-to-br from-cream-dark via-cream-dark to-teal/15 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Testimonials
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
            What our clients say
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl leading-relaxed text-ink-soft italic sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-medium text-ink">{current.name}</p>
                <p className="text-sm text-muted">{current.company}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
