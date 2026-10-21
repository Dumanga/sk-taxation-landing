import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { UPDATES, getUpdate } from "@/lib/updates";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return UPDATES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) return { title: "Update not found | SK Taxation" };
  const title = `${update.title} | SK Taxation`;
  return {
    title,
    description: update.summary,
    alternates: { canonical: `${SITE_URL}/updates/${update.slug}/` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/updates/${update.slug}/`,
      siteName: BUSINESS.name,
      title,
      description: update.summary,
      publishedTime: update.dateISO,
    },
    twitter: { card: "summary_large_image", title, description: update.summary },
  };
}

export default async function UpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: update.title,
        description: update.summary,
        datePublished: update.dateISO,
        articleSection: update.tag,
        inLanguage: "en",
        mainEntityOfPage: `${SITE_URL}/updates/${update.slug}/`,
        author: { "@type": "Organization", name: BUSINESS.name },
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Latest Updates", item: `${SITE_URL}/#updates` },
          { "@type": "ListItem", position: 3, name: update.title, item: `${SITE_URL}/updates/${update.slug}/` },
        ],
      },
    ],
  };

  const others = UPDATES.filter((u) => u.slug !== update.slug).slice(0, 2);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <article className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-36">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs tracking-wide text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-line">
              /
            </li>
            <li>
              <Link href="/#updates" className="transition-colors hover:text-gold">
                Latest Updates
              </Link>
            </li>
            <li aria-hidden className="text-line">
              /
            </li>
            <li aria-current="page" className="text-ink-soft">
              {update.tag}
            </li>
          </ol>
        </nav>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold">
            {update.tag}
          </span>
          <time dateTime={update.dateISO} className="text-xs uppercase tracking-[0.14em] text-muted">
            {update.date}
          </time>
        </div>

        <h1 className="mt-5 font-serif text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
          {update.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{update.intro}</p>

        {update.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl font-medium text-ink">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2.5">
                {section.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex items-start gap-3 leading-relaxed text-muted">
                    <span aria-hidden className="mt-1 text-gold">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* What to do now */}
        <aside className="mt-12 rounded-2xl border border-line bg-cream-dark p-7">
          <h2 className="font-serif text-2xl font-medium text-ink">What you should do now</h2>
          <ul className="mt-4 space-y-2.5">
            {update.actions.map((a) => (
              <li key={a.slice(0, 32)} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-1 text-teal">
                  →
                </span>
                {a}
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="group relative mt-6 inline-block overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1d2a26]">
              Talk this through with us
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-400 ease-out group-hover:translate-x-0" />
          </Link>
        </aside>

        {/* Sources */}
        <section className="mt-10 border-t border-line pt-6">
          <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
            Sources and further reading
          </h2>
          <ul className="mt-3 space-y-2">
            {update.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal underline-offset-4 hover:underline"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            This note is general information, not advice. Rules change and individual
            circumstances differ, so speak to us before acting on it.
          </p>
        </section>

        {/* More updates */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">More updates</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/updates/${o.slug}`}
                className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_36px_-20px_rgba(6,51,44,0.3)]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-gold">
                    {o.tag}
                  </span>
                  <time dateTime={o.dateISO} className="text-[11px] uppercase tracking-[0.14em] text-muted">
                    {o.date}
                  </time>
                </div>
                <p className="mt-3 font-serif text-lg leading-snug font-medium text-ink">
                  {o.title}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-teal transition-transform duration-300 group-hover:translate-x-1">
                  Read the update →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
