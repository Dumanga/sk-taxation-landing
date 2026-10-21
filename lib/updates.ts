/**
 * Latest Updates content: the six most recent Sri Lankan tax developments,
 * newest first. Each entry drives a card in the home-page carousel and a
 * full article at /updates/<slug>/.
 *
 * Facts verified (Oct 2026) against IRD notices, the gazetted Acts, KPMG
 * Sri Lanka tax alerts and press coverage; sources are listed per entry.
 * The client should review wording before promoting, and send new entries
 * as the law changes.
 */

export type UpdateSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TaxUpdate = {
  slug: string;
  tag: string;
  date: string; // display, e.g. "June 2026"
  dateISO: string;
  title: string;
  summary: string; // card text
  intro: string; // article lead
  sections: UpdateSection[];
  actions: string[]; // "What you should do now"
  sources: { label: string; url: string }[];
};

export const UPDATES: TaxUpdate[] = [
  {
    slug: "vat-on-digital-services-2026",
    tag: "VAT",
    date: "July 2026",
    dateISO: "2026-07-01",
    title: "18% VAT on cross-border digital services",
    summary:
      "Non-resident providers of digital services to Sri Lankan customers are liable for 18% VAT from 1 July 2026, after two deferrals of the original October 2025 start date.",
    intro:
      "Sri Lanka has brought cross-border digital services into the VAT net. Under the Value Added Tax (Amendment) Act No. 4 of 2025, non-resident persons supplying digital services to customers in Sri Lanka are liable for VAT at 18%. The measure was originally scheduled for 1 October 2025, was deferred to 1 April 2026 after providers asked for more preparation time, and now applies from 1 July 2026.",
    sections: [
      {
        heading: "Who is affected",
        paragraphs: [
          "The charge targets non-resident providers supplying digital services through electronic platforms to persons in Sri Lanka. That includes streaming, software subscriptions, cloud services, online advertising and marketplace platforms serving Sri Lankan customers.",
          "Local businesses consuming these services should expect the 18% charge to appear in their supplier pricing, and should review contracts where prices were agreed before the change.",
        ],
      },
      {
        heading: "Registration requirements",
        bullets: [
          "From 1 July 2026 the VAT registration threshold also falls to Rs. 36 million of supplies per year, or Rs. 9 million per taxable period.",
          "Non-resident providers must apply for registration within three months of becoming liable.",
          "Suppliers below the threshold are outside the charge but should monitor turnover closely.",
        ],
      },
      {
        heading: "Why the date moved",
        paragraphs: [
          "Industry groups and international providers raised practical concerns about billing systems, registration mechanics and compliance lead time. Cabinet approved deferrals in response, first to April 2026 and then to July 2026. Businesses should treat 1 July 2026 as the operative date while watching for further gazette notices.",
        ],
      },
    ],
    actions: [
      "Foreign suppliers serving Sri Lankan customers: assess liability and prepare registration now.",
      "Local businesses: budget for 18% on affected subscriptions and review supplier contracts.",
      "Check invoices from July 2026 onward to confirm VAT is correctly charged and recoverable where applicable.",
    ],
    sources: [
      {
        label: "KPMG Sri Lanka: Bill to amend the VAT Act (May 2026)",
        url: "https://assets.kpmg.com/content/dam/kpmgsites/lk/pdf/kpmg-tax-news/2026/may/A_Bill_to_Amend_the_Value_Added_Tax_Act_No._14_of_2002_May_2026.pdf",
      },
      {
        label: "Fonoa: Sri Lanka imposes 18% VAT on cross-border digital services",
        url: "https://www.fonoa.com/resources/blog/sri-lanka-imposes-vat-cross-border-digital-services",
      },
    ],
  },
  {
    slug: "inland-revenue-amendment-act-11-2026",
    tag: "Income Tax",
    date: "June 2026",
    dateISO: "2026-06-05",
    title: "Inland Revenue (Amendment) Act No. 11 of 2026",
    summary:
      "Capital gains tax for individuals and partnerships rose to 15%, payments of Rs. 500,000 or more must go through banking channels, and an interest waiver applies to old tax arrears.",
    intro:
      "The Inland Revenue (Amendment) Act No. 11 of 2026, certified on 3 June 2026, makes a broad set of changes to the Inland Revenue Act No. 24 of 2017. The headline items are a higher capital gains tax rate, a formal push away from large cash payments, and a time-limited waiver of interest on unpaid taxes.",
    sections: [
      {
        heading: "Key changes",
        bullets: [
          "Capital gains tax for individuals and partnerships increased to 15%; for trusts, unit trusts, mutual funds and NGOs the rate is 10%.",
          "Payments of Rs. 500,000 or more must be made through approved banking channels such as cheques, bank drafts, cards or electronic transfers.",
          "Interest on old tax arrears is waived where the principal is fully settled in time; reports indicate settlement by 2 December 2026 for liabilities up to the 2024/25 year of assessment.",
          "An enhanced 100% capital allowance applies to qualifying depreciable-asset investments between US$250,000 and US$3 million from 1 April 2026, subject to Board of Investment approval.",
          "Enforcement was tightened: failing to file returns, register or respond to the tax authority can lead to prosecution, with fines up to Rs. 400,000 or imprisonment of up to six months.",
        ],
      },
      {
        heading: "Capital gains in practice",
        paragraphs: [
          "The move from 10% to 15% changes the arithmetic on property and share disposals for individuals and partnerships. Timing of disposals, available reliefs and the cost base you can establish all matter more at the higher rate. Gains from selling personal motor vehicles are no longer treated as other income, with related losses not deductible, applied retrospectively from 1 April 2024.",
        ],
      },
      {
        heading: "The arrears waiver window",
        paragraphs: [
          "If you carry old assessed liabilities, the waiver of accumulated interest is a genuine opportunity, but it depends on settling the principal in full within the window. Reports differ on the exact scope of the waiver, so the position should be confirmed against the Act and any IRD guidance before you rely on it.",
        ],
      },
    ],
    actions: [
      "Review any planned asset disposals against the 15% capital gains rate.",
      "Move large payments onto banking channels now; Rs. 500,000 and above in cash is no longer compliant.",
      "If you have tax arrears, get the principal quantified quickly so you can use the interest waiver window.",
    ],
    sources: [
      {
        label: "KPMG: Sri Lanka tax amendments enacted (June 2026)",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2026/06/sri-lanka-tax-amendments-enacted.html",
      },
      {
        label: "Daily Mirror: Inland Revenue Amendment Act, key changes explained",
        url: "https://www.dailymirror.lk/breaking-news/Inland-Revenue-Amendment-Act-Key-changes-explained/108-343849",
      },
    ],
  },
  {
    slug: "budget-2026-tax-proposals",
    tag: "Budget",
    date: "November 2025",
    dateISO: "2025-11-07",
    title: "Budget 2026: VAT net widens to smaller businesses",
    summary:
      "The 2026 Budget keeps income tax rates steady but cuts the VAT and SSCL registration threshold from Rs. 60 million to Rs. 36 million from 1 April 2026, pulling many smaller businesses into the system.",
    intro:
      "Budget 2026, presented on 7 November 2025, avoided new income tax rate increases and instead broadened the indirect tax base. The measure with the widest reach is the cut to the VAT and SSCL registration threshold, which brings a large group of smaller businesses into registration from 1 April 2026.",
    sections: [
      {
        heading: "The headline change",
        paragraphs: [
          "The VAT and SSCL registration threshold falls from Rs. 60 million to Rs. 36 million of annual turnover with effect from 1 April 2026. A business turning over Rs. 3 million a month is now in scope. Tax practitioners expect the change to have a significant market impact, and businesses near the line need to monitor rolling twelve-month turnover carefully.",
        ],
      },
      {
        heading: "Other measures",
        bullets: [
          "Customs import duty bands revised to 0%, 10%, 20% and 30% from April 2026, with para-tariffs to be phased out.",
          "The special commodity levy on imported coconut and palm oil is replaced by VAT and SSCL for parity with local production.",
          "CESS removed and VAT imposed on imported fabric.",
          "SSCL charged at importation, manufacture and sale of vehicles from April 2026.",
          "The enhanced capital allowance threshold for qualifying investments was revised, improving access for smaller investments.",
        ],
      },
      {
        heading: "Direction of policy",
        paragraphs: [
          "The government's stated aim is to shift the direct-to-indirect tax ratio from roughly 25:75 towards 40:60 over time, collecting more through income taxes and less through consumption taxes. Expect continued tightening of compliance and reporting rather than headline rate increases.",
        ],
      },
    ],
    actions: [
      "If your turnover exceeds Rs. 3 million a month, assess VAT and SSCL registration before April 2026.",
      "Importers: re-cost products against the new duty bands and the fabric and oils changes.",
      "Registration brings invoicing, filing and record-keeping duties; set up systems early rather than after a notice arrives.",
    ],
    sources: [
      {
        label: "KPMG: Sri Lanka Budget 2026 tax proposals",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2025/11/sri-lanka-budget-2026-tax-proposals.html",
      },
      {
        label: "KPMG Sri Lanka: Budget Analysis 2026 snapshot",
        url: "https://assets.kpmg.com/content/dam/kpmg/lk/pdf/2025/Budget_Analysis_2026_Snapshot_Report.pdf",
      },
    ],
  },
  {
    slug: "svat-removal-risk-based-refunds",
    tag: "VAT",
    date: "October 2025",
    dateISO: "2025-10-01",
    title: "SVAT abolished: risk-based VAT refunds begin",
    summary:
      "After 14 years, the Simplified VAT scheme ended on 1 October 2025. Exporters now pay VAT and claim refunds under a risk-based system with 45-day timelines.",
    intro:
      "The Inland Revenue Department removed the Simplified VAT (SVAT) scheme with effect from 1 October 2025 and replaced it with a risk-based refund scheme. For exporters and indirect exporters who relied on SVAT's voucher mechanism to avoid cash-flow exposure, this is the biggest operational VAT change in over a decade.",
    sections: [
      {
        heading: "How the new scheme works",
        bullets: [
          "Registered persons are assigned a risk category of low, medium or high, reviewed every six months by the IRD.",
          "Low-risk: refunds issued without pre-verification. Medium-risk: refunds issued without pre-verification but subject to post-verification. High-risk: refunds issued only after pre-verification.",
          "Refunds are due within 45 days of the later of the last day of the month after the taxable period, or the date a proper return is furnished.",
          "Eligibility for exporter treatment requires zero-rated supplies above 50% of total supplies in the preceding calendar year.",
        ],
      },
      {
        heading: "Cash flow is now the issue",
        paragraphs: [
          "Under SVAT, qualifying supplies moved without cash VAT changing hands. Under the refund model, VAT is paid first and recovered later, so working capital absorbs the gap between payment and refund. The risk category you are assigned directly affects how long that gap runs, which makes documentation quality and filing discipline commercially important, not just a compliance matter.",
          "Industry chambers challenged the transition in the Court of Appeal in October 2025, arguing the automated refund mechanism was not fully operational at the switch-over. Businesses should follow IRD notices for procedural refinements.",
        ],
      },
    ],
    actions: [
      "Exporters: confirm your risk category and understand what moves you between tiers.",
      "Model the working-capital impact of paying VAT upfront against 45-day refund cycles.",
      "Tighten return accuracy and supporting documents; errors now delay real cash.",
    ],
    sources: [
      {
        label: "KPMG: notices on the Simplified VAT scheme (October 2025)",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2025/10/tnf-sri-lanka-notices-in-relation-to-simplified-vat-scheme-published.html",
      },
      {
        label: "Daily FT: understanding the new risk-based VAT refund system",
        url: "https://www.ft.lk/columns/From-vouchers-to-verification-Understanding-new-risk-based-VAT-refund-system/4-793703",
      },
    ],
  },
  {
    slug: "personal-relief-increase-2025",
    tag: "Income Tax",
    date: "April 2025",
    dateISO: "2025-04-01",
    title: "Personal relief increased to Rs. 1.8 million",
    summary:
      "The annual personal relief rose from Rs. 1.2 million with effect from 1 April 2025, and the first tax band widened to Rs. 1 million at 6%. Employees under APIT see the change in monthly deductions.",
    intro:
      "The Inland Revenue (Amendment) Act No. 2 of 2025, certified on 20 March 2025, raised the personal relief for resident individuals (and non-resident citizens) from Rs. 1.2 million to Rs. 1.8 million per year of assessment, effective from 2025/26. The lower rate bands were also restructured, reducing the burden on low and middle incomes.",
    sections: [
      {
        heading: "The new structure",
        bullets: [
          "Personal relief: Rs. 1,800,000 per year, so monthly income up to Rs. 150,000 attracts no income tax.",
          "First taxable band widened: the next Rs. 1,000,000 is taxed at 6%.",
          "Subsequent bands apply at 18%, 24% and 30%, with the balance at 36%.",
        ],
      },
      {
        heading: "What it means for employees and employers",
        paragraphs: [
          "Employers operating APIT (the PAYE mechanism) should have applied the revised tables from April 2025 payrolls. Employees should check that monthly deductions reflect the new relief; over-deductions are recoverable but tie up cash. The refund ceilings for overpaid tax were also raised, to Rs. 180,000 per year or Rs. 45,000 per quarter.",
          "For self-employed individuals and partners, the restructured bands change quarterly instalment arithmetic for 2025/26 onward, and estimates filed earlier in the year may deserve revision.",
        ],
      },
    ],
    actions: [
      "Employees: confirm your payslip deductions use the post-April 2025 APIT tables.",
      "Employers: verify payroll software was updated and no catch-up adjustments are pending.",
      "Self-employed: revisit instalment estimates against the new bands.",
    ],
    sources: [
      {
        label: "Inland Revenue (Amendment) Act No. 2 of 2025 (gazetted text)",
        url: "https://documents.gov.lk/view/acts/2025/3/02-2025_E.pdf",
      },
      {
        label: "KPMG: Sri Lanka income tax changes enacted (March 2025)",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2025/03/tnf-sri-lanka-legislation-introducing-various-income-tax-changes-enacted.html",
      },
    ],
  },
  {
    slug: "ait-on-interest-doubled-2025",
    tag: "Withholding Tax",
    date: "April 2025",
    dateISO: "2025-04-01",
    title: "Tax withheld on interest doubled to 10%",
    summary:
      "Advance income tax withheld on interest income rose from 5% to 10% with effect from 1 April 2025. Depositors and treasury managers should confirm banks are deducting correctly.",
    intro:
      "Under the Inland Revenue (Amendment) Act No. 2 of 2025, the advance income tax (AIT) that banks and financial institutions withhold on interest paid to residents doubled from 5% to 10%, effective 1 April 2025. For non-resident citizens, deductions on interest operate as a final withholding tax.",
    sections: [
      {
        heading: "How the deduction works",
        bullets: [
          "Banks deduct 10% at source on interest credited from 1 April 2025.",
          "For residents, AIT is not a final tax: it is credited against your assessed liability, and genuine overpayments are refundable within raised ceilings.",
          "For non-resident citizens, the deduction on interest is treated as final.",
        ],
      },
      {
        heading: "Low-income depositors",
        paragraphs: [
          "Depositors whose assessable income falls at or below the Rs. 1.8 million personal relief can seek relief from the deduction through a self-declaration to their bank, following IRD guidance issued after the change. Anyone relying on this should confirm the current procedure with their bank, as the mechanism was refined after the initial announcement.",
        ],
      },
      {
        heading: "Planning points",
        paragraphs: [
          "The doubled rate changes net yields on deposits and the cash-flow profile of interest-earning portfolios. Companies should check that AIT credits are captured in quarterly instalment workings so tax already withheld is not paid twice and reclaimed later.",
        ],
      },
    ],
    actions: [
      "Check bank statements from April 2025 onward for the 10% deduction.",
      "If your income is below Rs. 1.8 million, ask your bank about the self-declaration.",
      "Businesses: reconcile AIT credits against instalment payments each quarter.",
    ],
    sources: [
      {
        label: "KPMG: Sri Lanka income tax changes enacted (March 2025)",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2025/03/tnf-sri-lanka-legislation-introducing-various-income-tax-changes-enacted.html",
      },
      {
        label: "TaxAdvisor.lk: interest WHT implications from 1 April 2025",
        url: "https://www.taxadvisor.lk/article/ntri",
      },
    ],
  },
];

export function getUpdate(slug: string): TaxUpdate | undefined {
  return UPDATES.find((u) => u.slug === slug);
}
