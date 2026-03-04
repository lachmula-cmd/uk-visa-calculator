import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "UK Student Visa Costs 2025 — Application Fee, IHS & Full Budget Guide",
  description:
    "Complete cost guide for the UK Student visa: £490 application fee, IHS at £776/year, CAS requirements, dependant costs, and the full budget breakdown international students need before applying.",
  alternates: { canonical: "https://ukvisaprice.com/guides/student-visa-costs" },
};

const faqs = [
  {
    q: "Can I work on a Student visa?",
    a: "Yes, in most cases. Students on a degree-level course at a higher education provider can usually work up to 20 hours per week during term time and full-time during vacations. Students on below-degree courses are typically limited to 10 hours per week. Check your CAS and visa conditions for your specific restrictions.",
  },
  {
    q: "Can I bring my family on a Student visa?",
    a: "Dependants (spouse/partner and children) can join you if you are a government-sponsored student or studying at postgraduate level at a higher education provider. Undergraduate students generally cannot bring dependants. Each dependant pays the same £490 visa fee and IHS at the reduced rate of £776/year.",
  },
  {
    q: "What is a CAS and does it cost anything?",
    a: "A Confirmation of Acceptance for Studies (CAS) is a unique reference number issued by your UK educational institution. It is required for your Student visa application. Most universities issue the CAS for free, but some institutions charge an administrative fee — check with your institution.",
  },
  {
    q: "Do I need to show funds in my bank account?",
    a: "Yes. You must show you have enough money to pay for your course and support yourself. The required amount depends on your course and where you will be studying. For courses in London, you need to show £1,334/month for up to 9 months. Outside London, it is £1,023/month. These funds must have been in your account for at least 28 consecutive days.",
  },
  {
    q: "Can I extend my Student visa in the UK?",
    a: "Yes. If you need more time to complete your studies, you can apply to extend your Student visa from inside the UK. The extension fee is the same as the initial application fee (£490), and you will need to pay IHS for the extension period.",
  },
  {
    q: "What happens to my IHS if my visa is shorter than expected?",
    a: "If your visa is refused, you receive a full IHS refund. If you leave the UK permanently before your visa expires, you may be entitled to a partial refund for complete unused years of IHS. Partial years are not refunded.",
  },
];

export default function StudentVisaCostsPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white/80">Student Visa Costs</span>
          </div>
          <div className="max-w-2xl">
            <span className="badge-blue mb-3 inline-block">Student Visas</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              UK Student Visa: Complete Cost &amp; Budget Guide
            </h1>
            <p className="text-white/70 leading-relaxed">
              Everything international students need to budget for before applying — from the visa fee
              and IHS to maintenance funds and hidden costs. Last reviewed: {LAST_UPDATED}.
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
                  <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer" className="underline">GOV.UK</a>{" "}
                  before applying. This is not legal or immigration advice.
                </p>
              </div>

              <h2>Overview of Student Visa Costs</h2>
              <p>
                The UK Student visa (formerly Tier 4) allows international students to study a full-time
                course at a licensed student sponsor in the UK. The visa fee itself is relatively modest
                compared to other routes, but the Immigration Health Surcharge (IHS) — charged at the
                reduced rate for students — can add a significant amount to the total cost, especially
                for longer courses.
              </p>

              <h2>Visa Application Fee</h2>
              <p>
                The Student visa application fee is <strong>£490</strong>, regardless of whether you are
                applying from outside the UK or extending from inside the UK. This fee applies to both
                the main applicant and each dependant.
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Applicant type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Main applicant (Student visa)", fee: "£490" },
                        { type: "Dependant spouse/partner", fee: "£490" },
                        { type: "Dependant child", fee: "£490" },
                        { type: "Child Student visa (age 4–17)", fee: "£490" },
                      ].map((row) => (
                        <tr key={row.type} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700">{row.type}</td>
                          <td className="p-3 font-bold text-indigo-700">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>Immigration Health Surcharge (IHS) for Students</h2>
              <p>
                Students pay the <strong>reduced IHS rate of £776 per year</strong> (compared to £1,035/year
                for most other visa types). The IHS is calculated on the full visa duration, rounded up
                to the nearest year, and paid upfront.
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Course duration</th>
                        <th className="text-left p-3 font-semibold text-slate-700">IHS years (rounded up)</th>
                        <th className="text-left p-3 font-semibold text-slate-700">IHS per person</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { dur: "1 year", yrs: "1", ihs: "£776" },
                        { dur: "2 years", yrs: "2", ihs: "£1,552" },
                        { dur: "3 years (e.g. undergraduate)", yrs: "3", ihs: "£2,328" },
                        { dur: "4 years (e.g. integrated masters)", yrs: "4", ihs: "£3,104" },
                        { dur: "1 year + 4 months (e.g. 16-month masters)", yrs: "2", ihs: "£1,552" },
                      ].map((row) => (
                        <tr key={row.dur} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700">{row.dur}</td>
                          <td className="p-3 text-slate-600">{row.yrs}</td>
                          <td className="p-3 font-bold text-teal-700">{row.ihs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2>Worked Examples</h2>

              <h3>Example 1: 3-year undergraduate degree, single student</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa application fee", amount: "£490" },
                      { label: "IHS (£776 × 3 years × 1 person)", amount: "£2,328" },
                      { label: "Total government fees", amount: "£2,818", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-teal-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-teal-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3>Example 2: 1-year masters degree, student + 1 dependant</h3>
              <div className="not-prose mb-6">
                <div className="card p-5">
                  <div className="space-y-2">
                    {[
                      { label: "Visa fees (£490 × 2 people)", amount: "£980" },
                      { label: "IHS (£776 × 1 year × 2 people)", amount: "£1,552" },
                      { label: "Total government fees", amount: "£2,532", bold: true, highlight: true },
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between py-2 ${i < 2 ? "border-b border-slate-100" : ""} ${row.highlight ? "bg-teal-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <span className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>{row.label}</span>
                        <span className={`font-bold ${row.highlight ? "text-teal-700" : "text-slate-800"}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2>Maintenance Funds Requirement</h2>
              <p>
                In addition to the visa fee and IHS, you must demonstrate you have sufficient funds to
                support yourself during your studies. This is not a fee — it is money you must already
                have in your bank account — but it is a critical part of the application.
              </p>
              <div className="not-prose mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-3 font-semibold text-slate-700">Location</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Required per month</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Maximum assessed (9 months)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 text-slate-700">London</td>
                        <td className="p-3 font-bold text-slate-800">£1,334</td>
                        <td className="p-3 text-slate-600">£12,006</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">Outside London</td>
                        <td className="p-3 font-bold text-slate-800">£1,023</td>
                        <td className="p-3 text-slate-600">£9,207</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Funds must have been held for at least 28 consecutive days before the application date.
                  Separate maintenance requirements apply for each dependant.
                </p>
              </div>

              <h2>Other Costs to Budget For</h2>
              <ul>
                <li>
                  <strong>English language test (SELT):</strong> If required, an approved Secure English
                  Language Test (SELT) such as IELTS for UKVI typically costs £150–£200.
                </li>
                <li>
                  <strong>Biometric enrolment (overseas):</strong> If applying from outside the UK, you
                  will need to attend a visa application centre. Fees vary by country.
                </li>
                <li>
                  <strong>Academic Technology Approval Scheme (ATAS):</strong> Students studying certain
                  sensitive subjects at postgraduate level may need ATAS clearance. This is free but can
                  take several weeks.
                </li>
                <li>
                  <strong>Tuberculosis (TB) test:</strong> Applicants from certain countries must provide
                  a TB test certificate. Costs vary by country.
                </li>
                <li>
                  <strong>Priority service (£500):</strong> Available for in-country applications only.
                  Aims to process within 5 working days.
                </li>
                <li>
                  <strong>Super Priority service (£1,000):</strong> Available for in-country applications
                  only. Aims to process by the next working day.
                </li>
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
                    { label: "Visa application fee", value: "£490" },
                    { label: "IHS rate (students)", value: "£776/yr" },
                    { label: "IHS — 3-year course", value: "£2,328" },
                    { label: "Priority service", value: "£500" },
                    { label: "Super Priority", value: "£1,000" },
                    { label: "Maintenance (London/month)", value: "£1,334" },
                    { label: "Maintenance (outside London)", value: "£1,023" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-teal-700">{item.value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/calculator?visa=student-visa" className="btn-primary w-full mt-4 text-sm justify-center">
                  Calculate my costs
                </Link>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <div className="space-y-2">
                  {[
                    { href: "/guides/immigration-health-surcharge", label: "Understanding the IHS" },
                    { href: "/guides/skilled-worker-visa-costs", label: "Skilled Worker Visa Costs" },
                    { href: "/guides/family-visa-costs", label: "Family Visa Costs" },
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
