import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Visa Guides — Costs, IHS, and Immigration Explained",
  description:
    "Practical guides to UK visa costs, the Immigration Health Surcharge, Skilled Worker fees, family visa costs, and more. Based on official GOV.UK data.",
  alternates: { canonical: "https://ukvisaprice.com/guides" },
};

const guides = [
  {
    slug: "immigration-health-surcharge",
    category: "Costs & Fees",
    title: "Understanding the Immigration Health Surcharge (IHS)",
    excerpt:
      "The IHS is one of the most significant — and most frequently underestimated — costs in a UK visa application. This guide explains what it is, how it is calculated, who is exempt, and how the 2024 increase affects your total.",
    readTime: "8 min read",
    tags: ["IHS", "All visa types", "Families"],
  },
  {
    slug: "skilled-worker-visa-costs",
    category: "Work Visas",
    title: "Skilled Worker Visa: Complete Cost Breakdown",
    excerpt:
      "A detailed look at every cost involved in a Skilled Worker visa application — from the application fee and IHS to the Certificate of Sponsorship and optional priority services. Includes worked examples for individuals and families.",
    readTime: "10 min read",
    tags: ["Skilled Worker", "Work visas", "Sponsorship"],
  },
  {
    slug: "family-visa-costs",
    category: "Family Visas",
    title: "UK Family Visa Costs: Spouse, Partner, and Child Applications",
    excerpt:
      "Family visas are among the most expensive UK immigration routes. This guide covers the fees for spouse, partner, and child visas, the income requirement, IHS, and the common costs applicants forget to budget for.",
    readTime: "9 min read",
    tags: ["Family visa", "Spouse visa", "Children"],
  },
  {
    slug: "student-visa-costs",
    category: "Student Visas",
    title: "UK Student Visa Costs: What You Need to Budget",
    excerpt:
      "From the application fee and reduced-rate IHS to the CAS requirement and maintenance funds, this guide covers everything a prospective international student needs to know about the cost of a UK Student visa.",
    readTime: "7 min read",
    tags: ["Student visa", "IHS reduced rate", "CAS"],
  },
];

const quickFacts = [
  {
    label: "Standard IHS rate",
    value: "£1,035/year",
    note: "Per person, per year of visa",
  },
  {
    label: "Student IHS rate",
    value: "£776/year",
    note: "Reduced rate for students",
  },
  {
    label: "Skilled Worker fee",
    value: "from £719",
    note: "Up to 3 years, standard rate",
  },
  {
    label: "Family visa fee",
    value: "£1,846",
    note: "Spouse / partner / child",
  },
  {
    label: "Priority service",
    value: "£500",
    note: "~5 working days (UK only)",
  },
  {
    label: "Super Priority",
    value: "£1,000",
    note: "Next working day (UK only)",
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Guides</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              UK Visa Cost Guides
            </h1>
            <p className="text-white/70 leading-relaxed">
              Practical, honest guides to understanding UK visa costs — written for applicants who
              want to budget accurately and avoid surprises. Based on official GOV.UK fee data.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Fee Reference</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="card p-4 text-center">
                <p className="text-lg font-bold text-indigo-700 mb-1">{fact.value}</p>
                <p className="text-xs font-semibold text-slate-700 mb-1">{fact.label}</p>
                <p className="text-xs text-slate-400">{fact.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Fees as of July 2025. Always verify on{" "}
            <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
              GOV.UK
            </a>{" "}
            before applying.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="section bg-subtle">
        <div className="container-content">
          <h2 className="text-xl font-bold text-slate-900 mb-6">All Guides</h2>
          <div className="space-y-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card-hover p-6 group flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-blue">{guide.category}</span>
                    <span className="text-xs text-slate-400">{guide.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{guide.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.tags.map((tag) => (
                      <span key={tag} className="badge-gray">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-indigo-600 sm:mt-1">
                  Read guide
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="card p-8 bg-gradient-to-br from-indigo-50 to-teal-50/50 border-indigo-100 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Ready to calculate your specific costs?
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Use the calculator to get a personalised breakdown for your visa type, duration, and number of applicants.
            </p>
            <Link href="/calculator" className="btn-primary">
              Open the Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
