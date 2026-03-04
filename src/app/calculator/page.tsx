import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "UK Visa Cost Calculator — Full Fee Breakdown",
  description:
    "Calculate the exact cost of your UK visa application. Includes visa fee, Immigration Health Surcharge (IHS), priority services, and dependant costs. Free tool based on official GOV.UK data.",
  alternates: { canonical: "https://ukvisaprice.com/calculator" },
};

export default function CalculatorPage({
  searchParams,
}: {
  searchParams: { visa?: string };
}) {
  const initialVisaId = searchParams.visa;
  return (
    <>
      {/* Page Header */}
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">Calculator</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              UK Visa Cost Calculator
            </h1>
            <p className="text-white/70 leading-relaxed">
              Select your visa type, enter your application details, and get a full cost breakdown
              including the visa fee, IHS, and any optional services. Fee data last reviewed:{" "}
              <strong className="text-white/90">{LAST_UPDATED}</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-content py-2.5">
          <p className="text-xs text-amber-800 flex items-start gap-2">
            <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <span>
              <strong>Estimate only.</strong> This tool provides indicative costs based on published GOV.UK fee data.
              Fees may change. Always verify the exact amount on{" "}
              <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-amber-900">
                GOV.UK
              </a>{" "}
              before submitting your application. This is not legal or immigration advice.
            </span>
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="section bg-subtle">
        <div className="container-content">
          <Calculator initialVisaId={initialVisaId} />
        </div>
      </div>

      {/* What's Included Section */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Calculator Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Visa Application Fee</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The fee paid to the Home Office to process your visa application. Varies by visa type,
                  duration, and whether you qualify for a reduced rate (e.g. new entrant, Health and Care Worker).
                </p>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Immigration Health Surcharge</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Charged per person, per year of the visa. Gives access to NHS services. Currently
                  £1,035/year (standard) or £776/year (students). Exempt for Health and Care Worker visas.
                </p>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Priority Services</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Optional faster processing: Priority Service (£500, ~5 working days) or Super Priority
                  Service (£1,000, next working day). Available for certain visa types applied for inside the UK.
                </p>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Dependant Costs</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Each dependant (spouse, partner, or child) typically pays the same visa fee and IHS as
                  the main applicant. The calculator adds these automatically when you select dependants.
                </p>
              </div>
            </div>

            <div className="mt-6 alert-warning">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <div>
                <p className="font-semibold text-sm mb-1">What this calculator does NOT include</p>
                <ul className="text-sm space-y-1 text-amber-800">
                  <li>• Immigration solicitor or legal advice fees</li>
                  <li>• English language test fees (e.g. IELTS, Secure English Language Test)</li>
                  <li>• Life in the UK test fee (£50)</li>
                  <li>• Document translation or certification costs</li>
                  <li>• Biometric enrolment at overseas visa application centres (fees vary by country)</li>
                  <li>• Endorsement fees for Global Talent or Innovator Founder visas</li>
                  <li>• Citizenship ceremony fees (for naturalisation)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-subtle">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/guides/immigration-health-surcharge",
                  title: "Understanding the Immigration Health Surcharge",
                  desc: "What it is, how it is calculated, who is exempt, and how it has changed.",
                },
                {
                  href: "/guides/skilled-worker-visa-costs",
                  title: "Skilled Worker Visa: Full Cost Guide",
                  desc: "Detailed breakdown of all costs for the most common UK work visa route.",
                },
                {
                  href: "/guides/family-visa-costs",
                  title: "Family Visa Costs Explained",
                  desc: "Spouse, partner, and child visa fees — including the income requirement.",
                },
                {
                  href: "/how-it-works",
                  title: "How This Calculator Works",
                  desc: "The methodology, data sources, and assumptions behind the estimates.",
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="card-hover p-4 group">
                  <h3 className="font-semibold text-slate-800 text-sm mb-1 group-hover:text-indigo-700 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
