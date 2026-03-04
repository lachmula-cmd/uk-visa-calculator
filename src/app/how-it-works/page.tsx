import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, IHS_RATES, OPTIONAL_SERVICES } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "How the UK Visa Cost Calculator Works — Methodology & Data Sources",
  description:
    "Understand exactly how the UK Visa Cost Calculator estimates your total application cost: fee sources, IHS calculation method, assumptions made, and what the estimate does and does not include.",
  alternates: { canonical: "https://ukvisaprice.com/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">How It Works</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              How the Calculator Works
            </h1>
            <p className="text-white/70 leading-relaxed">
              A transparent explanation of our methodology, data sources, assumptions, and what the
              estimate includes — so you can use it with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 prose-content">

              <h2>What the Calculator Does</h2>
              <p>
                The UK Visa Cost Calculator estimates the total government fees you are likely to pay
                when applying for a UK visa. It combines three main cost components:
              </p>
              <ol>
                <li><strong>The visa application fee</strong> — the fee paid to the Home Office to process your application.</li>
                <li><strong>The Immigration Health Surcharge (IHS)</strong> — a separate upfront payment that gives you access to NHS services during your stay.</li>
                <li><strong>Optional service fees</strong> — such as Priority Service or Super Priority Service, if you choose to add them.</li>
              </ol>
              <p>
                The calculator covers the main applicant and any dependants you add, and it applies the
                correct fee and IHS rate for each visa type.
              </p>

              <h2>Data Sources</h2>
              <p>
                All fee data used in this calculator is sourced from official UK government publications:
              </p>
              <ul>
                <li>
                  <strong>Visa application fees:</strong>{" "}
                  <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table" target="_blank" rel="noopener noreferrer">
                    Home Office Immigration and Nationality Fees table (GOV.UK)
                  </a>
                </li>
                <li>
                  <strong>Immigration Health Surcharge:</strong>{" "}
                  <a href="https://www.gov.uk/healthcare-immigration-application" target="_blank" rel="noopener noreferrer">
                    GOV.UK IHS guidance
                  </a>
                </li>
                <li>
                  <strong>Optional services:</strong>{" "}
                  <a href="https://www.gov.uk/faster-decision-visa-settlement" target="_blank" rel="noopener noreferrer">
                    GOV.UK priority and super priority service guidance
                  </a>
                </li>
              </ul>
              <p>
                Fee data was last reviewed in <strong>{LAST_UPDATED}</strong>. UK visa fees are set by
                the Home Office and can change at any time, typically with effect from April each year.
                We review and update the data regularly, but we cannot guarantee it reflects the most
                recent changes at all times.
              </p>

              <h2>How the IHS Is Calculated</h2>
              <p>
                The Immigration Health Surcharge is calculated as follows:
              </p>
              <div className="not-prose my-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-mono text-indigo-800 text-center">
                  IHS = Rate per year × Years (rounded up) × Number of people
                </p>
              </div>
              <p>
                The calculator applies the correct rate for each visa type:
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Rate type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Amount per year</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Applies to</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 text-slate-700">Standard</td>
                        <td className="p-3 font-bold text-indigo-700">£{IHS_RATES.standard.toLocaleString()}</td>
                        <td className="p-3 text-slate-600">Most visa types (Skilled Worker, Family, etc.)</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 text-slate-700">Reduced</td>
                        <td className="p-3 font-bold text-teal-700">£{IHS_RATES.reduced.toLocaleString()}</td>
                        <td className="p-3 text-slate-600">Student visa, Youth Mobility Scheme, children under 18</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">Exempt</td>
                        <td className="p-3 font-bold text-emerald-700">£0</td>
                        <td className="p-3 text-slate-600">Health and Care Worker visa, Visitor visa, ILR, EUSS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                The visa duration you enter is rounded up to the nearest whole year for IHS purposes.
                For example, a visa of 2 years and 6 months is treated as 3 years for IHS calculation.
                This matches the method used by the official GOV.UK IHS payment service.
              </p>

              <h2>Optional Services</h2>
              <p>
                The calculator includes three optional service fees that you can add to your estimate:
              </p>
              <div className="not-prose mb-6 space-y-3">
                {Object.values(OPTIONAL_SERVICES).map((svc) => (
                  <div key={svc.label} className="card p-4 flex items-start gap-4">
                    <div className="w-16 text-right flex-shrink-0">
                      <span className="font-bold text-indigo-700 text-sm">£{svc.fee.toLocaleString()}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{svc.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{svc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                The calculator checks whether each optional service is available for the selected visa
                type and shows a warning if you select a service that is not available for that route.
              </p>

              <h2>What the Estimate Does NOT Include</h2>
              <p>
                The calculator focuses on the main government fees. The following costs are <strong>not</strong> included
                in the estimate and should be budgeted for separately:
              </p>
              <ul>
                <li><strong>Immigration solicitor or adviser fees</strong> — these vary widely and are optional but often recommended.</li>
                <li><strong>English language test fees</strong> — typically £150–£200 for an approved SELT.</li>
                <li><strong>Biometric enrolment fees</strong> — charged at overseas visa application centres; varies by country.</li>
                <li><strong>Document translation costs</strong> — required for documents not in English.</li>
                <li><strong>Tuberculosis (TB) test fees</strong> — required for applicants from certain countries.</li>
                <li><strong>Life in the UK test fee</strong> — £50 per attempt (required for ILR and citizenship).</li>
                <li><strong>Citizenship ceremony fee</strong> — typically £80–£100, charged by local councils.</li>
                <li><strong>Immigration Skills Charge</strong> — paid by the employer, not the applicant, for Skilled Worker visas.</li>
                <li><strong>Global Talent / Innovator Founder endorsement fees</strong> — charged by endorsing bodies, separate from the visa fee.</li>
                <li><strong>Maintenance funds</strong> — money you must hold in your bank account (not a fee, but a requirement).</li>
              </ul>

              <h2>Assumptions and Limitations</h2>
              <p>
                The calculator makes the following assumptions:
              </p>
              <ul>
                <li>
                  <strong>Standard (non-new-entrant) rate for Skilled Worker:</strong> The calculator
                  defaults to the standard rate. If you qualify as a new entrant (under 26, switching
                  from a Student/Graduate visa, or working in certain roles), you can select the new
                  entrant option to apply the lower rate.
                </li>
                <li>
                  <strong>IHS rounded up to nearest year:</strong> This matches the official GOV.UK
                  IHS payment service behaviour.
                </li>
                <li>
                  <strong>Dependants pay the same visa fee as the main applicant</strong> for most
                  visa types. Where dependants are not permitted (e.g. Youth Mobility Scheme), the
                  calculator shows a warning and excludes dependant fees.
                </li>
                <li>
                  <strong>Priority and Super Priority services are per application</strong>, not per
                  person. The calculator adds these once regardless of the number of applicants.
                </li>
                <li>
                  <strong>Fees are in GBP (£)</strong> and reflect the rates in force as of {LAST_UPDATED}.
                </li>
              </ul>

              <h2>Important Disclaimer</h2>
              <div className="not-prose">
                <div className="card p-5 bg-amber-50 border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed">
                    This calculator is provided for <strong>informational and estimation purposes only</strong>.
                    It is not a substitute for official fee information from the UK Home Office or GOV.UK.
                    Fees can change at any time. The estimate may not reflect the most recent fee changes,
                    and it does not account for all possible scenarios or visa types.
                  </p>
                  <p className="text-sm text-amber-900 leading-relaxed mt-3">
                    <strong>Always verify the exact fees on GOV.UK before submitting your application.</strong>{" "}
                    This tool does not constitute legal or immigration advice. If you are unsure about
                    your visa options or eligibility, consult a qualified immigration adviser or solicitor
                    regulated by the Office of the Immigration Services Commissioner (OISC).
                  </p>
                </div>
              </div>

              <h2>Feedback and Corrections</h2>
              <p>
                If you notice a fee that appears to be out of date or incorrect, please{" "}
                <Link href="/contact">contact us</Link>. We take accuracy seriously and will review
                and update the data as quickly as possible.
              </p>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="card p-5 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: "/calculator", label: "Open the Calculator" },
                    { href: "/guides", label: "Visa Cost Guides" },
                    { href: "/guides/immigration-health-surcharge", label: "IHS Explained" },
                    { href: "/about", label: "About This Site" },
                    { href: "/contact", label: "Contact Us" },
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

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Data Last Reviewed</h3>
                <p className="text-sm text-slate-600">{LAST_UPDATED}</p>
                <p className="text-xs text-slate-400 mt-2">
                  Fee data is reviewed regularly and updated when the Home Office publishes new rates.
                </p>
              </div>

              <div className="card p-5 bg-indigo-50 border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2 text-sm">Ready to estimate?</h3>
                <p className="text-xs text-indigo-700 mb-3">Use the calculator to get a personalised cost breakdown for your visa route.</p>
                <Link href="/calculator" className="btn-primary w-full text-sm justify-center">
                  Open Calculator
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
