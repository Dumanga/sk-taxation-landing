"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { UPDATES } from "@/lib/updates";

/**
 * Latest Updates as an auto-advancing carousel. Native horizontal scroll with
 * snap points (so it swipes naturally on touch), arrow controls, and a timer
 * that advances one card at a time, pausing while the visitor interacts.
 * Each card links to its full article at /updates/<slug>/.
 */
export function Updates() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  const cardStep = () => {
    const el = scroller.current;
    if (!el || el.children.length < 2) return 0;
    const first = el.children[0] as HTMLElement;
    const second = el.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  };

  const scrollToIndex = useCallback((i: number) => {
    const el = scroller.current;
    const step = cardStep();
    if (!el || !step) return;
    const max = UPDATES.length - 1;
    const next = ((i % UPDATES.length) + UPDATES.length) % UPDATES.length;
    el.scrollTo({ left: Math.min(next, max) * step, behavior: "smooth" });
  }, []);

  /* Auto-advance, pausing on hover/touch and for reduced-motion visitors. */
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => {
      const el = scroller.current;
      const step = cardStep();
      if (!el || !step) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - step / 2;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(id);
  }, [reduce, paused]);

  /* Track the nearest card for the dots. */
  const onScroll = () => {
    const step = cardStep();
    const el = scroller.current;
    if (!el || !step) return;
    setIndex(Math.min(Math.round(el.scrollLeft / step), UPDATES.length - 1));
  };

  return (
    <section
      id="updates"
      className="bg-gradient-to-br from-cream-dark via-cream-dark to-teal/15 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Latest Updates
              </p>
              <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
                What is changing in <em className="text-shine not-italic">Sri Lankan tax</em>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToIndex(index - 1)}
                aria-label="Previous update"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                ←
              </button>
              <button
                onClick={() => scrollToIndex(index + 1)}
                aria-label="Next update"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={scroller}
            onScroll={onScroll}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="-mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Latest tax updates carousel"
          >
            {UPDATES.map((update) => (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
                className="group flex w-[86%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_48px_-24px_rgba(6,51,44,0.3)] sm:w-[46%] lg:w-[31.5%]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold">
                    {update.tag}
                  </span>
                  <time dateTime={update.dateISO} className="text-xs uppercase tracking-[0.14em] text-muted">
                    {update.date}
                  </time>
                </div>
                <h3 className="mt-5 font-serif text-[1.35rem] leading-snug font-medium text-ink">
                  {update.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{update.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal">
                  Read the full update
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2.5">
          {UPDATES.map((u, i) => (
            <button
              key={u.slug}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to update ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">
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
