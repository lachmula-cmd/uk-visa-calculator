import type { Metadata } from "next";
import Link from "next/link";
import { VISA_CATEGORIES, IHS_RATES, LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "UK Visa Cost Calculator 2025 — Estimate Your Immigration Fees",
  description:
    "Free UK visa cost calculator. Estimate visa application fees, Immigration Health Surcharge (IHS), priority services, and dependant costs for all major UK visa routes. Based on official GOV.UK fee data.",
  alternates: { canonical: "https://ukvisacalculator.co.uk" },
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Based on Official GOV.UK Data",
    description:
      "Fee data sourced from the UK Home Office's published immigration and nationality fees schedule. Reviewed regularly and clearly dated.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Full Cost Breakdown",
    description:
      "See exactly how your total is calculated — visa fee, IHS, optional services, and dependant costs shown separately with clear explanations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Dependants & Family Costs",
    description:
      "Accurately calculates costs for multiple applicants and dependants, including IHS for each person where applicable.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Priority Service Options",
    description:
      "Add Priority (5 working days) or Super Priority (next working day) service costs where available for your visa type.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Honest Disclaimers",
    description:
      "Every estimate comes with clear assumptions, warnings, and a direct link to verify the current official fee on GOV.UK.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008Zm0-3h.008v.008H6v-.008Zm0-3h.008v.008H6v-.008Z" />
      </svg>
    ),
    title: "Covers All Major Routes",
    description:
      "Visitor, Student, Skilled Worker, Family, Health & Care Worker, Global Talent, ILR, Naturalisation, and more.",
  },
];

const popularRoutes = [
  { id: "skilled-worker-3y", badge: "Most Popular" },
  { id: "student-visa", badge: "Students" },
  { id: "family-spouse-partner", badge: "Family" },
  { id: "standard-visitor-6m", badge: "Visitors" },
  { id: "health-care-worker-3y", badge: "NHS / Care" },
  { id: "ilr", badge: "Settlement" },
];

const faqs = [
  {
    q: "What does the Immigration Health Surcharge (IHS) cover?",
    a: "The IHS gives you access to the NHS on the same basis as a UK resident for the duration of your visa. It is charged per person, per year of the visa, and is paid upfront as part of your application. As of 2024, the standard rate is £1,035/year and the reduced rate (for students and Youth Mobility) is £776/year.",
  },
  {
    q: "Is the IHS included in the visa application fee?",
    a: "No. The IHS is a completely separate charge paid in addition to the visa application fee. Many applicants are surprised by how much it adds to the total cost, particularly for longer visas or families.",
  },
  {
    q: "Do dependants pay the same fees?",
    a: "Yes, in most cases each dependant (spouse, partner, or child) must submit their own application and pay the same visa fee and IHS as the main applicant. This can significantly increase the total cost for families.",
  },
  {
    q: "What is the Priority Service and is it worth it?",
    a: "The Priority Service (£500) aims to process your application within 5 working days, while Super Priority (£1,000) targets the next working day. These are optional and only available for certain visa types applied for inside the UK. Whether they are worth it depends on your circumstances and urgency.",
  },
  {
    q: "Are these fees guaranteed to be accurate?",
    a: "No. This calculator provides estimates based on published GOV.UK fee data, reviewed as of " + LAST_UPDATED + ". UK visa fees can change, and individual circumstances may affect the final amount. Always verify the current fee on GOV.UK before submitting your application.",
  },
  {
    q: "Does this calculator cover all visa types?",
    a: "We cover the most common UK visa routes including visitor, student, work, family, and settlement visas. Some specialist or less common routes may not be included. If your visa type is not listed, please check GOV.UK directly.",
  },
];

export default function HomePage() {
  const popularVisas = popularRoutes
    .map((r) => ({
      ...r,
      visa: VISA_CATEGORIES.find((v) => v.id === r.id),
    }))
    .filter((r) => r.visa);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-hero text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-600/20 blur-3xl" />
        </div>

        <div className="container-content py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Fee data reviewed {LAST_UPDATED} · Based on official GOV.UK data
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              UK Visa Cost{" "}
              <span className="text-gradient-light">Calculator</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
              Estimate the total cost of your UK visa application — including
              the visa fee, Immigration Health Surcharge, optional priority
              services, and dependant costs. Clear, honest, and based on
              official GOV.UK data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calculator" className="btn-primary text-base py-3.5 px-8">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Calculate My Visa Costs
              </Link>
              <Link href="/guides" className="btn-secondary text-base py-3.5 px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Read Visa Guides
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Free to use
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                No registration required
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {VISA_CATEGORIES.length}+ visa routes covered
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                IHS calculated automatically
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IHS Alert Banner ──────────────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-content py-3">
          <div className="flex items-start gap-3 text-sm text-amber-800">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <p>
              <strong>Important:</strong> The Immigration Health Surcharge increased to{" "}
              <strong>£{IHS_RATES.standard.toLocaleString()}/year</strong> (standard) and{" "}
              <strong>£{IHS_RATES.reduced.toLocaleString()}/year</strong> (students) in February 2024.
              This significantly increases the total cost for longer visas and families.{" "}
              <Link href="/guides/immigration-health-surcharge" className="underline font-medium hover:text-amber-900">
                Learn more about IHS
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ── Popular Routes ────────────────────────────────────────────────── */}
      <section className="section bg-subtle">
        <div className="container-content">
          <div className="text-center mb-10">
            <p className="section-label">Quick Start</p>
            <h2 className="section-title">Popular Visa Routes</h2>
            <p className="section-subtitle mx-auto">
              Select a common visa type to jump straight to the calculator with the right settings pre-loaded.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularVisas.map(({ visa, badge }) => {
              if (!visa) return null;
              return (
                <Link
                  key={visa.id}
                  href={`/calculator?visa=${visa.id}`}
                  className="card-hover p-5 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="badge-blue">{badge}</span>
                    {visa.baseFee !== null && (
                      <span className="text-xs text-slate-400">
                        from £{visa.baseFee.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-indigo-700 transition-colors">
                    {visa.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {visa.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-indigo-600">
                    Calculate cost
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link href="/calculator" className="btn-secondary">
              View all {VISA_CATEGORIES.length} visa types
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Simple Process</p>
            <h2 className="section-title">How the Calculator Works</h2>
            <p className="section-subtitle mx-auto">
              Get an accurate cost estimate in under a minute — no account needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Visa Type",
                description:
                  "Choose from 18+ UK visa routes grouped by category — visitor, student, work, family, and settlement. Each option shows a brief description to help you pick the right one.",
              },
              {
                step: "2",
                title: "Enter Your Details",
                description:
                  "Set the visa duration (for IHS calculation), number of applicants and dependants, and any optional services like Priority or Super Priority processing.",
              },
              {
                step: "3",
                title: "Get Your Full Breakdown",
                description:
                  "See a detailed cost breakdown showing the visa fee, IHS, and optional services separately — with the assumptions used and a direct link to verify on GOV.UK.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-indigo-500/25">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1.5">
              Read the full explanation of how costs are calculated
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="section bg-subtle">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Why Use This Tool</p>
            <h2 className="section-title">Built for Accuracy and Clarity</h2>
            <p className="section-subtitle mx-auto">
              UK visa costs are more complex than a single number. This tool breaks them down properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IHS Explainer ─────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Often Overlooked</p>
              <h2 className="section-title">The IHS: The Cost Most People Underestimate</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The Immigration Health Surcharge (IHS) is one of the most significant — and most
                frequently underestimated — costs in a UK visa application. It is charged on top of
                the visa fee, per person, for every year of the visa.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For a family of four applying for a 3-year Skilled Worker visa, the IHS alone can
                exceed <strong className="text-slate-800">£12,000</strong> — before the visa
                application fees are even counted.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-sm font-medium text-slate-700">Standard rate (most visas)</span>
                  <span className="font-bold text-indigo-700">£{IHS_RATES.standard.toLocaleString()}/year</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-sm font-medium text-slate-700">Reduced rate (students, Youth Mobility)</span>
                  <span className="font-bold text-teal-700">£{IHS_RATES.reduced.toLocaleString()}/year</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="text-sm font-medium text-emerald-800">Health & Care Worker visa</span>
                  <span className="font-bold text-emerald-700">Exempt</span>
                </div>
              </div>
              <Link href="/guides/immigration-health-surcharge" className="btn-primary">
                Learn more about the IHS
              </Link>
            </div>

            <div className="card p-6 bg-gradient-to-br from-slate-50 to-indigo-50/30">
              <h3 className="font-bold text-slate-900 mb-4">Example: Skilled Worker Visa (3 years)</h3>
              <div className="space-y-3">
                {[
                  { label: "Visa application fee", amount: "£719", note: "Standard rate, 1 person" },
                  { label: "Immigration Health Surcharge", amount: "£3,105", note: "£1,035 × 3 years × 1 person" },
                  { label: "Total (1 person)", amount: "£3,824", bold: true },
                  { label: "Add 1 dependant (same visa + IHS)", amount: "+£3,824", note: "Same fees apply per person" },
                  { label: "Total (2 people)", amount: "£7,648", bold: true, highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 ${
                      i < 4 ? "border-b border-slate-200" : ""
                    } ${row.highlight ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}
                  >
                    <div>
                      <p className={`text-sm ${row.bold ? "font-bold text-slate-900" : "text-slate-600"}`}>
                        {row.label}
                      </p>
                      {row.note && <p className="text-xs text-slate-400">{row.note}</p>}
                    </div>
                    <span className={`font-bold ${row.highlight ? "text-indigo-700 text-lg" : row.bold ? "text-slate-900" : "text-slate-700"}`}>
                      {row.amount}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Estimate only. Fees correct as of {LAST_UPDATED}. Verify on GOV.UK before applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section bg-subtle">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-600/20 blur-3xl" />
        </div>
      <div className="container-content text-center relative z-10">
          <p className="section-label text-indigo-300">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to estimate your visa costs?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Use the calculator to get a full breakdown in under a minute — including IHS, dependants, and optional services.
          </p>
          <Link href="/calculator" className="btn-white text-base py-3.5 px-8">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Open the Calculator
          </Link>
        </div>
      </section>
    </>
  );
}
