import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "Skilled Worker Visa Costs 2025 — Complete Fee Breakdown",
  description:
    "Full cost breakdown for the UK Skilled Worker visa: application fees (£719–£1,423), IHS, Certificate of Sponsorship, priority services, and dependant costs. Worked examples for individuals and families.",
  alternates: { canonical: "https://ukvisacalculator.co.uk/guides/skilled-worker-visa-costs" },
};

const faqs = [
  {
    q: "What is the new entrant rate for the Skilled Worker visa?",
    a: "The new entrant rate is £551 (up to 3 years) or £1,084 (more than 3 years). You qualify as a new entrant if you are under 26, are switching from a Student or Graduate visa, or are working in a role on the shortage occupation list. Your employer should confirm whether you qualify.",
  },
  {
    q: "Does my employer pay the visa fee?",
    a: "The visa application fee and IHS are typically paid by the applicant, though some employers choose to reimburse these costs. The Immigration Skills Charge (a separate fee paid by the employer to the Home Office) is always the employer's responsibility and is not included in this calculator.",
  },
  {
    q: "What is the Immigration Skills Charge?",
    a: "The Immigration Skills Charge (ISC) is a fee paid by the sponsoring employer — not the applicant — to the Home Office. It is £1,000 per year for large sponsors and £364 per year for small or charitable sponsors. It is separate from the visa application fee and IHS.",
  },
  {
    q: "Can I switch to a Skilled Worker visa from inside the UK?",
    a: "Yes, in most cases. If you are already in the UK on a qualifying visa (e.g. Student, Graduate, or another work visa), you can switch to a Skilled Worker visa without leaving the UK. The same fees apply.",
  },
  {
    q: "How long does a Skilled Worker visa last?",
    a: "A Skilled Worker visa can be granted for up to 5 years. After 5 years of continuous residence in the UK on a Skilled Worker visa, you may be eligible to apply for Indefinite Leave to Remain (ILR).",
  },
];

export default function SkilledWorkerCostsPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white/80">Skilled Worker Visa Costs</span>
          </div>
          <div className="max-w-2xl">
            <span className="badge-blue mb-3 inline-block">Work Visas</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Skilled Worker Visa: Complete Cost Breakdown
            </h1>
            <p className="text-white/70 leading-relaxed">
              Every fee involved in a Skilled Worker visa application — from the application fee and IHS
              to optional priority services and dependant costs. Last reviewed: {LAST_UPDATED}.
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
                  <strong>Estimate only.</strong> Fees reviewed {LAST_UPDATED}. Always verify on{" "}
                  <a href="https://www.gov.uk/skilled-worker-visa" target="_blank" rel="noopener noreferrer" className="underline">GOV.UK</a>{" "}
                  before applying. This is not legal or immigration advice.
                </p>
              </div>

              <h2>Overview of Skilled Worker Visa Fees</h2>
              <p>
                The Skilled Worker visa is the main route for non-UK nationals to work in the UK in an
                eligible skilled job. It replaced the Tier 2 (General) visa in December 2020. The total
                cost of a Skilled Worker visa application is made up of several distinct charges — and
                the combined total is often significantly higher than applicants expect.
              </p>
              <p>
                The fees below are for applications made from outside the UK or from inside the UK as an
                extension or switch. The same fee structure applies in both cases.
              </p>

              <h2>Visa Application Fee</h2>
              <p>
                The visa application fee depends on the duration of the visa and whether you qualify for
                the new entrant rate:
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Duration</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Standard rate</th>
                        <th className="text-left p-3 font-semibold text-slate-700">New entrant rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 text-slate-700">Up to 3 years</td>
                        <td className="p-3 font-bold text-indigo-700">£719</td>
                        <td className="p-3 font-bold text-teal-700">£551</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">More than 3 years (up to 5 years)</td>
                        <td className="p-3 font-bold text-indigo-700">£1,423</td>
                        <td className="p-3 font-bold text-teal-700">£1,084</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">Each dependant pays the same visa application fee.</p>
              </div>

              <h2>Immigration Health Surcharge (IHS)</h2>
              <p>
                The IHS is charged at <strong>£1,035 per person, per year</strong> for Skilled Worker visa
                holders. It is calculated on the full visa duration, rounded up to the nearest year, and
                paid upfront for all applicants including dependants.
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Visa duration</th>
                        <th className="text-left p-3 font-semibold text-slate-700">IHS per person</th>
                        <th className="text-left p-3 font-semibold text-slate-700">IHS for 2 people</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { dur: "1 year", yrs: 1, ihs1: 1035, ihs2: 2070 },
                        { dur: "2 years", yrs: 2, ihs1: 2070, ihs2: 4140 },
                        { dur: "3 years", yrs: 3, ihs1: 3105, ihs2: 6210 },
                        { dur: "4 years", yrs: 4, ihs1: 4140, ihs2: 8280 },
                        { dur: "5 years", yrs: 5, ihs1: 5175, ihs2: 10350 },
                      ].map((row) => (
                        <tr key={row.dur} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700">{row.dur}</td>
                          <td className="p-3 font-semibold text-slate-800">£{row.ihs1.toLocaleString()}</td>
                          <td className="p-3 font-semibold text-slate-800">£{row.ihs2.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>Worked Examples</h2>

              <h3>Example 1: Single applicant, 3-year visa (standard rate)</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa application fee", amount: "£719" },
                      { label: "IHS (£1,035 × 3 years × 1 person)", amount: "£3,105" },
                      { label: "Total", amount: "£3,824", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3>Example 2: Applicant + 1 dependant, 3-year visa (standard rate)</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa fees (£719 × 2 people)", amount: "£1,438" },
                      { label: "IHS (£1,035 × 3 years × 2 people)", amount: "£6,210" },
                      { label: "Total", amount: "£7,648", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3>Example 3: Applicant + 1 dependant, 5-year visa (standard rate)</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa fees (£1,423 × 2 people)", amount: "£2,846" },
                      { label: "IHS (£1,035 × 5 years × 2 people)", amount: "£10,350" },
                      { label: "Total", amount: "£13,196", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-indigo-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2>Other Costs to Budget For</h2>
              <p>
                The visa fee and IHS are the main government charges, but there are other costs that many
                applicants overlook:
              </p>
              <ul>
                <li>
                  <strong>Priority Service (£500):</strong> Aims to process your application within 5
                  working days. Available for in-country applications only.
                </li>
                <li>
                  <strong>Super Priority Service (£1,000):</strong> Aims to process your application by
                  the end of the next working day. Available for in-country applications only.
                </li>
                <li>
                  <strong>English language test:</strong> If required, tests such as IELTS or a Secure
                  English Language Test (SELT) typically cost £150–£200.
                </li>
                <li>
                  <strong>Document translation:</strong> If any of your documents are not in English,
                  certified translations will be required. Costs vary.
                </li>
                <li>
                  <strong>Immigration solicitor fees:</strong> Optional but recommended for complex cases.
                  Fees vary widely — typically £500–£2,000+ for a straightforward application.
                </li>
                <li>
                  <strong>Biometric enrolment (overseas):</strong> If applying from outside the UK, you
                  will need to attend a visa application centre to enrol biometrics. Fees vary by country.
                </li>
              </ul>

              <h2>The Health and Care Worker Alternative</h2>
              <p>
                If you are a doctor, nurse, or other health or adult social care professional, you may
                qualify for the <strong>Health and Care Worker visa</strong> instead of the standard
                Skilled Worker route. The key differences are:
              </p>
              <ul>
                <li>Significantly lower visa application fee (£247 for up to 3 years; £479 for more than 3 years)</li>
                <li><strong>IHS is completely exempt</strong> — for both the main applicant and dependants</li>
                <li>You must be sponsored by an NHS body, NHS GP practice, or a CQC-registered employer</li>
              </ul>
              <p>
                For a 3-year visa with one dependant, the saving compared to the standard Skilled Worker
                route is approximately <strong>£7,154</strong> (£7,648 vs £494).
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
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Fee Summary</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "Up to 3 years (standard)", value: "£719" },
                    { label: "Up to 3 years (new entrant)", value: "£551" },
                    { label: "Over 3 years (standard)", value: "£1,423" },
                    { label: "Over 3 years (new entrant)", value: "£1,084" },
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
                <Link href="/calculator?visa=skilled-worker-3y" className="btn-primary w-full mt-4 text-sm justify-center">
                  Calculate my costs
                </Link>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <div className="space-y-2">
                  {[
                    { href: "/guides/immigration-health-surcharge", label: "Understanding the IHS" },
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
                  <strong>Disclaimer:</strong> This guide is for informational purposes only. Fees are
                  reviewed regularly but may change. Always verify on GOV.UK before applying.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
