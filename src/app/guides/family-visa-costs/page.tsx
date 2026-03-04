import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "UK Family Visa Costs 2025 — Spouse, Partner & Child Fees",
  description:
    "Complete guide to UK family visa costs: spouse/partner visa (£1,846), child visa (£1,846), IHS, income requirements, and the costs most applicants forget. Based on official GOV.UK data.",
  alternates: { canonical: "https://ukvisacalculator.co.uk/guides/family-visa-costs" },
};

const faqs = [
  {
    q: "What is the minimum income requirement for a spouse visa?",
    a: "As of April 2024, the minimum income threshold for a UK sponsor bringing a spouse or partner to the UK is £29,000 per year. This is rising in stages — to £34,500 and then to £38,700 by early 2025. The threshold applies to the UK-based sponsor's income, not the applicant's.",
  },
  {
    q: "Can I include savings to meet the income requirement?",
    a: "Yes, in some circumstances. If you do not meet the income threshold, you may be able to use savings above a certain level (currently £16,000 above the threshold shortfall, held for at least 6 months) to make up the difference. The rules are complex — seek immigration advice if you are close to the threshold.",
  },
  {
    q: "Do children pay the same visa fee as adults?",
    a: "Yes. Children applying for a UK Family visa pay the same application fee as adults (£1,846 as of 2024). They also pay IHS at the standard rate of £1,035/year, not the reduced rate — the reduced rate only applies to Student visas and Youth Mobility Scheme.",
  },
  {
    q: "How long does a spouse visa last?",
    a: "An initial spouse or partner visa is typically granted for 2 years and 9 months. After this, you can apply for a further leave to remain (FLR) for another 2.5 years. After 5 years of continuous residence, you can apply for Indefinite Leave to Remain (ILR).",
  },
  {
    q: "Is there a faster way to process a family visa?",
    a: "Yes. Priority Service (£500) aims to process your application within 5 working days, and Super Priority Service (£1,000) targets the next working day. These are available for in-country applications only. Applications from outside the UK are processed at overseas visa application centres and priority options vary by country.",
  },
];

export default function FamilyVisaCostsPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white/80">Family Visa Costs</span>
          </div>
          <div className="max-w-2xl">
            <span className="badge-blue mb-3 inline-block">Family Visas</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              UK Family Visa Costs: Spouse, Partner &amp; Child Applications
            </h1>
            <p className="text-white/70 leading-relaxed">
              Family visas are among the most expensive UK immigration routes. This guide covers all
              the fees, the income requirement, and the costs most applicants forget to budget for.
              Last reviewed: {LAST_UPDATED}.
            </p>
          </div>
        </div>
      </div>

      <article className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 prose-content">

              <div className="alert-warning mb-8">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <p className="text-sm">
                  <strong>Estimate only.</strong> Fees reviewed {LAST_UPDATED}. The income requirement for family visas
                  is also changing — verify all current requirements on{" "}
                  <a href="https://www.gov.uk/uk-family-visa" target="_blank" rel="noopener noreferrer" className="underline">GOV.UK</a>{" "}
                  before applying.
                </p>
              </div>

              <h2>Overview of UK Family Visa Fees</h2>
              <p>
                The UK Family visa route allows British citizens and settled persons to bring close
                family members to live with them in the UK. It is one of the most expensive visa routes
                in the UK immigration system, and the total cost — including IHS — is often significantly
                higher than applicants anticipate.
              </p>

              <h2>Current Application Fees (2024–2025)</h2>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Visa type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Application fee</th>
                        <th className="text-left p-3 font-semibold text-slate-700">IHS (per year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Spouse / Civil Partner", fee: "£1,846", ihs: "£1,035" },
                        { type: "Unmarried Partner (2+ years cohabiting)", fee: "£1,846", ihs: "£1,035" },
                        { type: "Fiancé(e) / Proposed Civil Partner", fee: "£1,846", ihs: "N/A (6-month visa)" },
                        { type: "Child (under 18)", fee: "£1,846", ihs: "£1,035" },
                        { type: "Adult Dependent Relative", fee: "£3,250", ihs: "£1,035" },
                      ].map((row) => (
                        <tr key={row.type} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700">{row.type}</td>
                          <td className="p-3 font-bold text-indigo-700">{row.fee}</td>
                          <td className="p-3 text-slate-600">{row.ihs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>Worked Examples</h2>

              <h3>Example 1: Spouse visa — initial 2 years 9 months</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa application fee", amount: "£1,846" },
                      { label: "IHS (£1,035 × 3 years rounded up × 1 person)", amount: "£3,105" },
                      { label: "Total", amount: "£4,951", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3>Example 2: Spouse + 2 children — initial 2 years 9 months</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa fees (£1,846 × 3 people)", amount: "£5,538" },
                      { label: "IHS (£1,035 × 3 years × 3 people)", amount: "£9,315" },
                      { label: "Total", amount: "£14,853", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Estimate only. Verify on GOV.UK before applying.</p>
                </div>
              </div>

              <h2>The Full Cost Over 5 Years (Path to ILR)</h2>
              <p>
                Most family visa holders will need to renew their visa before becoming eligible for ILR.
                The typical path involves an initial visa (2 years 9 months) followed by a further leave
                to remain (2.5 years), then an ILR application. Here is the approximate total cost for
                one person over the full 5-year route:
              </p>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Initial spouse visa fee", amount: "£1,846" },
                      { label: "IHS — initial visa (3 years)", amount: "£3,105" },
                      { label: "Further leave to remain fee", amount: "£1,846" },
                      { label: "IHS — FLR (3 years rounded up)", amount: "£3,105" },
                      { label: "ILR application fee", amount: "£2,885" },
                      { label: "Approximate total (1 person)", amount: "£12,787", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 5 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    Approximate estimate. Fees may change. Does not include legal fees, language tests, or other costs.
                  </p>
                </div>
              </div>

              <h2>The Income Requirement</h2>
              <p>
                To sponsor a spouse, partner, or child, the UK-based sponsor must meet a minimum income
                threshold. This is one of the most significant eligibility requirements for family visas
                and has been increasing:
              </p>
              <ul>
                <li><strong>From April 2024:</strong> £29,000/year</li>
                <li><strong>Later in 2024:</strong> £34,500/year</li>
                <li><strong>By early 2025:</strong> £38,700/year (the full target)</li>
              </ul>
              <p>
                The income requirement applies to the UK sponsor's earnings. If the sponsor does not meet
                the threshold, savings or other income sources may be used in some circumstances, but the
                rules are complex. Always check the current requirement on GOV.UK and consider seeking
                professional immigration advice.
              </p>

              <h2>Costs People Often Forget</h2>
              <ul>
                <li><strong>English language test:</strong> The applicant may need to pass an approved English language test (typically £150–£200).</li>
                <li><strong>Tuberculosis (TB) test:</strong> Applicants from certain countries must provide a TB test certificate from an approved clinic. Costs vary by country.</li>
                <li><strong>Document translation:</strong> Any documents not in English must be translated by a certified translator.</li>
                <li><strong>Immigration solicitor:</strong> Family visa applications can be complex. Legal fees vary widely.</li>
                <li><strong>Biometric enrolment:</strong> Overseas applicants must attend a visa application centre. Fees vary by country.</li>
                <li><strong>Life in the UK test (for ILR):</strong> £50 per attempt.</li>
              </ul>

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
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Fee Summary</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "Spouse / partner visa", value: "£1,846" },
                    { label: "Child visa", value: "£1,846" },
                    { label: "Adult dependent relative", value: "£3,250" },
                    { label: "IHS rate", value: "£1,035/yr" },
                    { label: "Priority service", value: "£500" },
                    { label: "Super Priority", value: "£1,000" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-indigo-700">{item.value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/calculator?visa=family-spouse-partner" className="btn-primary w-full mt-4 text-sm justify-center">
                  Calculate my costs
                </Link>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <div className="space-y-2">
                  {[
                    { href: "/guides/immigration-health-surcharge", label: "Understanding the IHS" },
                    { href: "/guides/skilled-worker-visa-costs", label: "Skilled Worker Visa Costs" },
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
                  constitute legal or immigration advice. Always verify fees and requirements on GOV.UK.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
