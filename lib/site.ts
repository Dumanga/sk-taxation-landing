/** Central place for business facts and site URLs, so SEO markup, the
 *  contact section and the footer never drift apart. */

/* Origin and full site URL are separate because Next already prefixes
   basePath onto metadata routes: metadataBase must be the bare origin or
   generated asset URLs double the repo segment.
   Both derive from GITHUB_REPOSITORY at build time (set by GitHub Actions),
   so the client's sk-taxation/official-website and the development copy at
   Dumanga/sk-taxation-landing each emit self-consistent absolute URLs.
   The fallback is the client's official repo. */
const [ghOwner, ghRepo] = (
  process.env.GITHUB_REPOSITORY ?? "sk-taxation/official-website"
).split("/");
export const SITE_ORIGIN = `https://${ghOwner.toLowerCase()}.github.io`;
export const SITE_URL = `${SITE_ORIGIN}/${ghRepo}`;

export const BUSINESS = {
  name: "SK Taxation",
  legalName: "SK Taxation",
  descriptor: "Tax Advisers & Consultants",
  description:
    "SK Taxation is a Sri Lankan tax advisory firm providing tax consultancy, audit and assurance, accounting, CFO and company secretarial services for corporate and non-corporate clients.",
  phones: ["+94 77 714 1648", "+94 76 919 4508"],
  phonesDisplay: ["0777 14 16 48", "076 919 4508"],
  email: "sk.taxservices19@gmail.com", // confirmed by the client, Oct 2026
  hours: "Mon to Fri, 9 am to 5 pm",
  areaServed: "Sri Lanka",
} as const;

export const SERVICES = [
  {
    title: "Tax Consultancy",
    blurb:
      "Detailed tax advisory for corporate and non-corporate clients, from planning and compliance to representation before the Inland Revenue.",
    items: [
      "Tax compliance services for corporate & non-corporate clients",
      "Overall tax BPO services",
      "Tax planning studies",
      "Tax compliance reviews",
      "Handling of Inland Revenue audits and queries",
      "Tendering petitions of appeal and relevant legal submissions",
      "Representing clients at the Inland Revenue",
      "Formulating opinions and clarifications",
      "Tax due diligence services",
      "RAMIS consultations",
      "Obtaining tax refunds",
      "Obtaining tax clearances",
      "Obtaining tax registrations",
    ],
  },
  {
    title: "Audit & Assurance",
    blurb:
      "Independent assurance engagements that strengthen the credibility of your financial reporting.",
    items: [
      "Assistance in conducting audits of financial statements",
      "Reporting on factual findings based on agreed-upon audit procedures",
      "Review of financial statements",
      "Assistance with special purpose audit engagements",
    ],
  },
  {
    title: "Accounting Services",
    blurb:
      "Complete bookkeeping and accounting support, from setting up your records to filing statutory returns.",
    items: [
      "Initial setting up and designing of the full set of accounting records",
      "Monthly accounting and book-keeping services",
      "Compilation of management accounts",
      "Preparation of annual financial statements",
      "Annual audit assistance",
      "Fixed assets register preparation",
      "Updating existing fixed assets registers",
      "Physical verification and coding of fixed assets",
      "Accounting reconciliation services",
      "Processing of payrolls and maintaining records",
      "Calculation and remittance of statutory payments",
      "Staff gratuity payments and annual provisioning",
      "Filing of statutory returns",
    ],
  },
  {
    title: "CFO Services",
    blurb:
      "Senior financial leadership on demand, giving your board clear numbers and a steady hand.",
    items: [
      "Financial management and reporting",
      "Budgeting and cash flow management",
      "Financial analysis and business performance",
      "Tax planning and regulatory compliance",
      "Internal controls and risk management",
    ],
  },
  {
    title: "Company Secretarial",
    blurb:
      "Incorporation and ongoing statutory compliance, handled quietly in the background.",
    items: [
      "Company incorporation",
      "Annual compliance services, including preparing and filing annual returns",
    ],
  },
] as const;
