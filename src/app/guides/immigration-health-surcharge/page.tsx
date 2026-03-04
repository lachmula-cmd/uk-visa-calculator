import type { Metadata } from "next";
import Link from "next/link";
import { IHS_RATES, LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "Immigration Health Surcharge (IHS) Explained — Rates, Exemptions & Calculator",
  description:
    "Everything you need to know about the UK Immigration Health Surcharge: current rates (£1,035/year standard, £776/year students), who pays it, who is exempt, how it is calculated, and how the 2024 increase affects your total cost.",
  alternates: { canonical: "https://ukvisaprice.com/guides/immigration-health-surcharge" },
};

const faqs = [
  {
    q: "Can I get a refund on the IHS if my visa is refused?",
    a: "Yes. If your visa application is refused, you are entitled to a full refund of the IHS. The refund is processed automatically and typically takes 6–8 weeks. If your visa is granted but you leave the UK early, you may be entitled to a partial refund for complete unused years.",
  },
  {
    q: "Do I pay IHS if I already have private health insurance?",
    a: "Yes. The IHS is a mandatory charge for most visa types regardless of whether you have private health insurance. Having private insurance does not exempt you from paying the surcharge.",
  },
  {
    q: "Is the IHS paid upfront or in instalments?",
    a: "The IHS is paid in full upfront as part of your visa application. You cannot pay it in instalments. For a 5-year visa for a family of four, this can mean paying over £20,000 in IHS alone before your application is even decided.",
  },
  {
    q: "Do children pay the IHS?",
    a: "Children under 18 pay the reduced IHS rate of £776/year (the same as students). Children who are British citizens or have settled status do not pay IHS.",
  },
  {
    q: "What happens to my IHS if I extend my visa?",
    a: "When you extend your visa, you pay a new IHS for the extension period. You do not get credit for any remaining time on your previous IHS payment.",
  },
  {
    q: "Are NHS services completely free with the IHS?",
    a: "The IHS gives you access to most NHS services on the same basis as a UK resident. However, some services such as dental treatment, eye tests, and prescriptions may still require charges unless you qualify for exemptions (e.g. low income, pregnancy).",
  },
];

export default function IHSGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white/80">Immigration Health Surcharge</span>
          </div>
          <div className="max-w-2xl">
            <span className="badge-blue mb-3 inline-block">Costs &amp; Fees</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              The Immigration Health Surcharge (IHS) Explained
            </h1>
            <p className="text-white/70 leading-relaxed">
              Current rates, who pays, who is exempt, how it is calculated, and why it is the cost
              most applicants underestimate. Last reviewed: {LAST_UPDATED}.
            </p>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 prose-content">

              <div className="alert-warning mb-8">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <p className="text-sm">
                  <strong>Fee data reviewed {LAST_UPDATED}.</strong> IHS rates increased significantly in February 2024.
                  Always verify the current rate on{" "}
                  <a href="https://www.gov.uk/healthcare-immigration-application" target="_blank" rel="noopener noreferrer" className="underline">
                    GOV.UK
                  </a>{" "}
                  before applying.
                </p>
              </div>

              <h2>What is the Immigration Health Surcharge?</h2>
              <p>
                The Immigration Health Surcharge (IHS) is a fee charged to most non-EEA nationals who apply
                for a UK visa of more than 6 months. It is paid upfront as part of the visa application
                process and gives the holder access to NHS services on broadly the same basis as a UK resident
                for the duration of their visa.
              </p>
              <p>
                The IHS was introduced in April 2015 and has been increased several times since. The most
                recent and most significant increase came in February 2024, when the standard rate rose from
                £624 per year to <strong>£1,035 per year</strong> — a 66% increase. The reduced rate for
                students and Youth Mobility Scheme holders rose from £470 to <strong>£776 per year</strong>.
              </p>

              <h2>Current IHS Rates (2024–2025)</h2>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Category</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Rate per year</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Who it applies to</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-medium text-slate-800">Standard rate</td>
                        <td className="p-3 font-bold text-indigo-700">£{IHS_RATES.standard.toLocaleString()}</td>
                        <td className="p-3 text-slate-600">Most visa types (Skilled Worker, Family, ILR, etc.)</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-medium text-slate-800">Reduced rate</td>
                        <td className="p-3 font-bold text-teal-700">£{IHS_RATES.reduced.toLocaleString()}</td>
                        <td className="p-3 text-slate-600">Student visa, Child Student visa, Youth Mobility Scheme, children under 18</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-medium text-slate-800">Exempt</td>
                        <td className="p-3 font-bold text-emerald-700">£0</td>
                        <td className="p-3 text-slate-600">Health and Care Worker visa holders and their dependants</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Not applicable</td>
                        <td className="p-3 text-slate-500">—</td>
                        <td className="p-3 text-slate-600">Standard Visitor visa (6 months or less), EU Settlement Scheme</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>How Is the IHS Calculated?</h2>
              <p>
                The IHS is calculated based on the <strong>full duration of the visa being applied for</strong>,
                rounded up to the nearest year. It is charged per person — so each dependant on the application
                pays the same amount as the main applicant.
              </p>
              <p>The formula is straightforward:</p>
              <div className="not-prose my-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-mono text-indigo-800 text-center">
                  IHS = Rate per year × Years (rounded up) × Number of people
                </p>
              </div>

              <h3>Worked Examples</h3>
              <div className="not-prose space-y-4 mb-6">
                {[
                  {
                    title: "Skilled Worker visa — 3 years, 1 person",
                    calc: "£1,035 × 3 years × 1 person",
                    total: "£3,105",
                    color: "indigo",
                  },
                  {
                    title: "Skilled Worker visa — 3 years, 2 people (main + 1 dependant)",
                    calc: "£1,035 × 3 years × 2 people",
                    total: "£6,210",
                    color: "indigo",
                  },
                  {
                    title: "Student visa — 2 years 6 months, 1 person",
                    calc: "£776 × 3 years (rounded up) × 1 person",
                    total: "£2,328",
                    color: "teal",
                  },
                  {
                    title: "Family visa — 2.5 years, 1 person",
                    calc: "£1,035 × 3 years (rounded up) × 1 person",
                    total: "£3,105",
                    color: "indigo",
                  },
                ].map((ex) => (
                  <div key={ex.title} className="card p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{ex.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{ex.calc}</p>
                    </div>
                    <span className={`text-lg font-bold flex-shrink-0 ${ex.color === "teal" ? "text-teal-700" : "text-indigo-700"}`}>
                      {ex.total}
                    </span>
                  </div>
                ))}
              </div>

              <h2>Who Is Exempt from the IHS?</h2>
              <p>The following groups do not pay the IHS:</p>
              <ul>
                <li>
                  <strong>Health and Care Worker visa holders</strong> — and their dependants. This is a
                  significant saving: a Health and Care Worker on a 3-year visa saves £3,105 in IHS compared
                  to a standard Skilled Worker applicant.
                </li>
                <li>
                  <strong>Standard Visitor visa holders</strong> — visitor visas are for stays of up to 6
                  months and do not attract the IHS.
                </li>
                <li>
                  <strong>EU Settlement Scheme applicants</strong> — there is no fee at all for EUSS applications.
                </li>
                <li>
                  <strong>Indefinite Leave to Remain (ILR) applicants</strong> — ILR grants permanent residence,
                  so no ongoing IHS is charged.
                </li>
                <li>
                  <strong>British citizenship applicants</strong> — naturalisation does not attract IHS.
                </li>
                <li>
                  <strong>Certain diplomatic and government-related applicants</strong> — check GOV.UK for the
                  full list of exemptions.
                </li>
              </ul>

              <h2>The Real Impact on Total Visa Costs</h2>
              <p>
                The IHS is often the largest single cost in a UK visa application — larger than the visa fee
                itself for longer visas. Many applicants focus on the headline visa fee and are caught off
                guard by the IHS when they reach the payment stage.
              </p>
              <p>
                Consider a family of four (two adults, two children) applying for a 5-year Skilled Worker visa:
              </p>
              <div className="not-prose my-4">
                <div className="card p-5">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm">Family of 4 — Skilled Worker Visa (5 years)</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Visa application fees (4 × £1,423)", amount: "£5,692" },
                      { label: "IHS — 2 adults (£1,035 × 5 × 2)", amount: "£10,350" },
                      { label: "IHS — 2 children under 18 (£776 × 5 × 2)", amount: "£7,760" },
                      { label: "Total IHS", amount: "£18,110", bold: true },
                      { label: "Grand total (visa fees + IHS)", amount: "£23,802", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between items-center py-2 ${i < 4 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700 text-base" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Estimate only. Verify on GOV.UK before applying.</p>
                </div>
              </div>

              <h2>IHS Refunds</h2>
              <p>
                You may be entitled to a refund of the IHS in the following circumstances:
              </p>
              <ul>
                <li><strong>Visa refused:</strong> Full refund of the IHS (but not the visa application fee).</li>
                <li><strong>Visa withdrawn:</strong> Full refund of the IHS.</li>
                <li><strong>Early departure from the UK:</strong> You may claim a partial refund for complete unused years of IHS, provided you have left the UK permanently and surrendered your visa.</li>
              </ul>
              <p>
                Refunds are not automatic in all cases — you may need to apply. Check the{" "}
                <a href="https://www.gov.uk/healthcare-immigration-application/refunds" target="_blank" rel="noopener noreferrer">
                  GOV.UK IHS refund guidance
                </a>{" "}
                for the current process.
              </p>

              <h2>How to Pay the IHS</h2>
              <p>
                The IHS is paid online as part of the visa application process, before you submit your
                application. You pay through the{" "}
                <a href="https://www.gov.uk/healthcare-immigration-application" target="_blank" rel="noopener noreferrer">
                  Immigration Health Surcharge service on GOV.UK
                </a>
                . You will receive an IHS reference number which you must include in your visa application.
              </p>
              <p>
                The IHS must be paid separately from the visa application fee — they are two distinct payments
                to two different systems.
              </p>

              <h2>Frequently Asked Questions</h2>
              <div className="not-prose space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">{faq.q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="card p-5 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Quick Reference</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-xs text-slate-600">Standard rate</span>
                    <span className="font-bold text-indigo-700 text-sm">£{IHS_RATES.standard.toLocaleString()}/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-xs text-slate-600">Student / YMS rate</span>
                    <span className="font-bold text-teal-700 text-sm">£{IHS_RATES.reduced.toLocaleString()}/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-xs text-slate-600">Health &amp; Care Worker</span>
                    <span className="font-bold text-emerald-700 text-sm">Exempt</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-xs text-slate-600">Visitor visa</span>
                    <span className="font-bold text-slate-500 text-sm">Not applicable</span>
                  </div>
                </div>
                <Link href="/calculator" className="btn-primary w-full mt-4 text-sm justify-center">
                  Calculate IHS for my visa
                </Link>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <div className="space-y-2">
                  {[
                    { href: "/guides/skilled-worker-visa-costs", label: "Skilled Worker Visa Costs" },
                    { href: "/guides/family-visa-costs", label: "Family Visa Costs" },
                    { href: "/guides/student-visa-costs", label: "Student Visa Costs" },
                    { href: "/how-it-works", label: "How the Calculator Works" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors py-1">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card p-5 bg-amber-50 border-amber-200">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Disclaimer:</strong> This guide is for informational purposes only and does not
                  constitute legal or immigration advice. Fee data is reviewed regularly but may not reflect
                  the most recent changes. Always verify on GOV.UK before applying.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
