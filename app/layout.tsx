import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { BUSINESS, SERVICES, SITE_ORIGIN, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "SK Taxation | Tax Advisers & Consultants in Sri Lanka",
  description:
    "SK Taxation provides tax consultancy, audit and assurance, accounting, CFO and company secretarial services for corporate and non-corporate clients in Sri Lanka.",
  keywords: [
    "tax consultancy Sri Lanka",
    "tax advisers",
    "Inland Revenue",
    "audit and assurance",
    "accounting services",
    "CFO services",
    "company secretarial",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: BUSINESS.name,
    title: "SK Taxation | Tax Advisers & Consultants in Sri Lanka",
    description:
      "Clarity in every number, confidence in every decision. Tax consultancy, audit, accounting, CFO and company secretarial services in Sri Lanka.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Taxation | Tax Advisers & Consultants in Sri Lanka",
    description:
      "Tax consultancy, audit and assurance, accounting, CFO and company secretarial services in Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Applies the theme before first paint; LIGHT is the default unless the
   visitor explicitly chose dark. */
const themeInit = `(function(){try{if(localStorage.getItem("sk-theme-v2")==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`;

/* Structured data: the business, its service catalogue, the website and a
   breadcrumb trail for the page's main sections. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      alternateName: BUSINESS.descriptor,
      description: BUSINESS.description,
      url: `${SITE_URL}/`,
      telephone: BUSINESS.phones[0],
      areaServed: BUSINESS.areaServed,
      openingHours: "Mo-Fr 09:00-17:00",
      contactPoint: BUSINESS.phones.map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        areaServed: "LK",
        availableLanguage: ["en", "si"],
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.blurb,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BUSINESS.name,
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#about` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${SITE_URL}/#services` },
        { "@type": "ListItem", position: 4, name: "Latest Updates", item: `${SITE_URL}/#updates` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${SITE_URL}/#contact` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${grotesk.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
