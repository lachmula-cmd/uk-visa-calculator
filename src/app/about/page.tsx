import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/data/visaFees";

export const metadata: Metadata = {
  title: "About UK Visa Cost Calculator — Our Mission & Approach",
  description:
    "Learn about the UK Visa Cost Calculator: why we built it, how we maintain fee accuracy, our commitment to honest and transparent information, and how to contact us.",
  alternates: { canonical: "https://ukvisaprice.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              About This Site
            </h1>
            <p className="text-white/70 leading-relaxed">
              Why we built the UK Visa Cost Calculator, how we approach accuracy, and what we stand for.
            </p>
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container-content max-w-3xl">

          <div className="prose-content">

            <h2>Why We Built This</h2>
            <p>
              UK visa costs are genuinely confusing. The headline application fee is only part of the
              story — the Immigration Health Surcharge, dependant fees, and optional services can push
              the total cost far beyond what most applicants expect. We built this calculator because
              we kept seeing people arrive at the payment stage of their application surprised by the
              total amount due.
            </p>
            <p>
              The goal is simple: give people a clear, honest estimate of what a UK visa application
              is likely to cost before they start the process, so they can plan and budget properly.
            </p>

            <h2>What We Are</h2>
            <p>
              The UK Visa Cost Calculator is an independent informational tool. We are not affiliated
              with the UK Home Office, UKVI (UK Visas and Immigration), or any government body. We are
              not a law firm, immigration consultancy, or regulated immigration adviser.
            </p>
            <p>
              We provide fee estimates based on publicly available official data from GOV.UK. We do not
              provide immigration advice, assess your eligibility for any visa, or tell you which visa
              route to apply for.
            </p>

            <h2>Our Approach to Accuracy</h2>
            <p>
              We take accuracy seriously. All fee data in the calculator is sourced directly from the
              Home Office Immigration and Nationality Fees table published on GOV.UK, and from the
              official IHS guidance. We review and update the data regularly — the current data was
              last reviewed in <strong>{LAST_UPDATED}</strong>.
            </p>
            <p>
              However, UK visa fees can change at any time. The Home Office typically updates fees in
              April each year, but changes can occur at other times too. We cannot guarantee that the
              data is always current, which is why every estimate includes a clear reminder to verify
              the exact fees on GOV.UK before submitting an application.
            </p>
            <p>
              If you notice a fee that appears to be out of date or incorrect, please{" "}
              <Link href="/contact">contact us</Link> and we will review it promptly.
            </p>

            <h2>What This Site Is Not</h2>
            <p>
              To be clear about what this site does not do:
            </p>
            <ul>
              <li>It does not provide legal or immigration advice.</li>
              <li>It does not assess your eligibility for any visa.</li>
              <li>It does not guarantee that you will be granted a visa.</li>
              <li>It does not replace the official GOV.UK fee information.</li>
              <li>It does not cover every possible visa type or scenario.</li>
              <li>It is not affiliated with or endorsed by the UK government.</li>
            </ul>
            <p>
              If you need immigration advice, please consult a qualified immigration adviser or
              solicitor who is regulated by the{" "}
              <a href="https://www.gov.uk/find-an-immigration-adviser" target="_blank" rel="noopener noreferrer">
                Office of the Immigration Services Commissioner (OISC)
              </a>
              .
            </p>

            <h2>Our Commitment to Honest Information</h2>
            <p>
              We do not exaggerate costs, invent visa rules, or present speculative information as fact.
              Where we are uncertain about a fee or rule, we say so clearly. Where a visa type is not
              fully supported by the calculator, we flag it rather than showing a potentially misleading
              number.
            </p>
            <p>
              We do not use fake testimonials, fabricated reviews, or deceptive trust signals. The
              calculator is useful because the underlying data is accurate and the methodology is
              transparent — not because of marketing language.
            </p>

            <h2>Contact</h2>
            <p>
              If you have a question, spotted an error, or want to suggest an improvement, please use
              the <Link href="/contact">contact page</Link>. We read every message and respond to
              substantive queries.
            </p>

          </div>

          {/* Trust cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Official Data Sources",
                desc: "All fees sourced from GOV.UK and Home Office publications.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
                title: "Transparent Methodology",
                desc: "Every assumption and limitation is clearly documented.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                title: "Regularly Updated",
                desc: `Fee data reviewed ${LAST_UPDATED}. Updated when Home Office publishes new rates.`,
              },
            ].map((card) => (
              <div key={card.title} className="card p-5 text-center">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-3">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/calculator" className="btn-primary">Open the Calculator</Link>
            <Link href="/guides" className="btn-secondary">Browse Guides</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>

        </div>
      </div>
    </>
  );
}
