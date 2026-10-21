import { Reveal } from "./Reveal";

const points = [
  "Personalised advice for every stage of your business",
  "Integrated tax, accounting and advisory under one roof",
  "Ethical, compliant and always deadline-ready",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              About Us
            </p>
            <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">
              Your business is <em className="text-shine not-italic">our responsibility</em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ["Advisory", "Forward-looking tax strategy"],
                ["Compliance", "Filings done right, on time"],
                ["Assurance", "Numbers you can stand behind"],
                ["Growth", "Finance that scales with you"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-cream p-6">
                  <p className="font-serif text-xl text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              SK Taxation is a firm of tax advisers specialised in tax and
              regulatory consultation. Real-life business experience gained by
              our team over the years has led us to redefine what clients should
              expect from their advisers.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              We provide a personalised level of service aimed at maximising our
              clients&apos; wealth, delivering integrated solutions that help
              secure and grow businesses without compromising ethics or social
              responsibility.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {points.map((point, i) => (
              <Reveal key={point} delay={0.2 + i * 0.1}>
                <li className="flex items-start gap-4 border-b border-line pb-4">
                  <span className="mt-1 text-gold" aria-hidden>
                    ✦
                  </span>
                  <span className="text-ink-soft">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
