"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const CONTACT_EMAIL = "hello@sktaxation.com";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-muted/70 transition-colors duration-300 focus:border-gold focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const subject = `Consultation request — ${get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      get("phone") && `Phone: ${get("phone")}`,
      get("company") && `Company: ${get("company")}`,
      "",
      get("message"),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              To Become a Client
            </p>
            <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
              Ready to get <em className="text-shine not-italic">started?</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Submit the form to request a consultation. After reviewing your
              query, a member of our team will contact you within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 space-y-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                  Call Us
                </dt>
                <dd className="mt-1 font-serif text-xl">+94 11 234 5678</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                  Mail Us
                </dt>
                <dd className="mt-1 font-serif text-xl">hello@sktaxation.com</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                  Working Hours
                </dt>
                <dd className="mt-1 font-serif text-xl">Mon – Fri, 9 am to 5 pm</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-line bg-surface p-10">
              <span className="mb-4 text-3xl text-gold" aria-hidden>
                ✦
              </span>
              <h3 className="font-serif text-3xl font-medium">Thank you.</h3>
              <p className="mt-3 text-muted">
                Your email app has opened with your request pre-filled — just
                press send. We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-line bg-surface p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input required name="name" placeholder="Your Name" className={inputClasses} />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={inputClasses}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input name="phone" placeholder="Phone Number" className={inputClasses} />
                </label>
                <label className="block">
                  <span className="sr-only">Company</span>
                  <input name="company" placeholder="Company (optional)" className={inputClasses} />
                </label>
              </div>
              <label className="mt-6 block">
                <span className="sr-only">Message</span>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="How can we help you?"
                  className={inputClasses}
                />
              </label>
              <button
                type="submit"
                className="group relative mt-8 w-full overflow-hidden rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
                  Request a Consultation
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-400 ease-out group-hover:translate-x-0" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
