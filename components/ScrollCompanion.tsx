"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * A little character pinned to the right edge that travels from the top of
 * the viewport to the bottom as the page scrolls — a sun in light mode, a
 * moon in dark mode. Hidden for reduced-motion users.
 */
export function ScrollCompanion() {
  const reduce = useReducedMotion();
  const [travel, setTravel] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const measure = () => setTravel(Math.max(window.innerHeight - 150, 0));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Track the .dark class on <html> so the character matches the theme. */
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 16 });
  const y = useTransform(smooth, [0, 1], [20, travel]);
  const rotate = useTransform(smooth, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.015, 0.03], [0, 0, 1]);

  if (reduce) return null;

  return (
    <motion.div
      style={{ y, opacity }}
      className="pointer-events-none fixed top-0 right-2 z-40 sm:right-4"
      aria-hidden
    >
      <motion.div
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="h-12 w-12 sm:h-14 sm:w-14"
      >
        {dark ? <Moon /> : <Sun rotate={rotate} />}
      </motion.div>
    </motion.div>
  );
}

/* Blinking eyes + smile, shared by both characters. */
function Face({ color }: { color: string }) {
  return (
    <>
      <motion.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{ duration: 3.4, times: [0, 0.45, 0.5, 0.55, 1], repeat: Infinity }}
        className="origin-[32px_28px]"
      >
        <circle cx="24.5" cy="28" r="2.6" fill={color} />
        <circle cx="39.5" cy="28" r="2.6" fill={color} />
      </motion.g>
      <path
        d="M25 38c2.2 2.6 4.6 3.9 7 3.9s4.8-1.3 7-3.9"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </>
  );
}

function Sun({ rotate }: { rotate: ReturnType<typeof useTransform<number, number>> }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full drop-shadow-[0_6px_14px_rgba(201,139,45,0.45)]">
      {/* Rays spin with scroll progress */}
      <motion.g style={{ rotate }} className="origin-center">
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 32 + Math.cos(angle) * 24;
          const y1 = 32 + Math.sin(angle) * 24;
          const x2 = 32 + Math.cos(angle) * 30;
          const y2 = 32 + Math.sin(angle) * 30;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--gold)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          );
        })}
      </motion.g>
      <circle cx="32" cy="32" r="19" fill="var(--gold)" />
      <circle cx="32" cy="32" r="19" fill="url(#sun-shine)" />
      <Face color="#3d2a08" />
      <defs>
        <radialGradient id="sun-shine" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Moon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full drop-shadow-[0_6px_14px_rgba(53,208,188,0.25)]">
      {/* Twinkling stars */}
      <motion.path
        d="M10 12l1.8 4.2 4.2 1.8-4.2 1.8L10 24l-1.8-4.2L4 18l4.2-1.8L10 12Z"
        fill="var(--gold)"
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="origin-[10px_18px]"
      />
      <motion.path
        d="M55 34l1.4 3.3 3.3 1.4-3.3 1.4L55 43.4l-1.4-3.3-3.3-1.4 3.3-1.4L55 34Z"
        fill="var(--teal)"
        animate={{ opacity: [1, 0.25, 1], scale: [1.05, 0.85, 1.05] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="origin-[55px_38.7px]"
      />
      {/* Moon body */}
      <circle cx="32" cy="32" r="21" fill="#e3e9f2" />
      <circle cx="32" cy="32" r="21" fill="url(#moon-shade)" />
      {/* Craters */}
      <circle cx="22" cy="20" r="3.4" fill="#c6d0e0" />
      <circle cx="43" cy="24" r="2.4" fill="#c6d0e0" />
      <circle cx="41" cy="45" r="3" fill="#c6d0e0" />
      <Face color="#2b3550" />
      <defs>
        <radialGradient id="moon-shade" cx="0.3" cy="0.28" r="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#8fa3c4" stopOpacity="0.25" />
        </radialGradient>
      </defs>
    </svg>
  );
}
