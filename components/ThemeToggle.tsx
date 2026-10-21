"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Reads the .dark class as an external store: no setState-in-effect, and the
   button stays in sync even if something else flips the theme. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export function ThemeToggle({ overlay = false }: { overlay?: boolean }) {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false // server snapshot: light is the default theme
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("sk-theme-v2", next ? "dark" : "light");
    } catch {
      /* private browsing — theme just won't persist */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
        overlay
          ? "border-white/30 text-[#f4faf7] hover:border-[#f0b452] hover:text-[#f0b452]"
          : "border-line text-ink hover:border-gold hover:text-gold"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {dark ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <circle cx="12" cy="12" r="4.5" />
              <path
                d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.3-6.8-1.5 1.5M6.7 17.3l-1.5 1.5m14.1 0-1.5-1.5M6.7 6.7 5.2 5.2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
