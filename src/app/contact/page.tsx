import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — UK Visa Cost Calculator",
  description:
    "Get in touch with the UK Visa Cost Calculator team. Report a fee error, suggest an improvement, or ask a question about the calculator.",
  alternates: { canonical: "https://ukvisacalculator.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Contact Us</h1>
            <p className="text-white/70 leading-relaxed">
              Found an error? Have a suggestion? We read every message and respond to substantive queries.
            </p>
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h2>
                <p className="text-sm text-slate-500 mb-6">
                  Please use this form for feedback, error reports, or general questions about the
                  calculator. We do not provide immigration advice.
                </p>

                <form className="space-y-5" action="#" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                    >
                      <option value="">Select a topic…</option>
                      <option value="fee-error">Report a fee error or outdated data</option>
                      <option value="suggestion">Suggest an improvement</option>
                      <option value="missing-visa">Request a missing visa type</option>
                      <option value="technical">Technical issue with the calculator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                      placeholder="Please describe your question or feedback in as much detail as possible…"
                    />
                  </div>

                  <div className="alert-warning">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <p className="text-sm">
                      <strong>We do not provide immigration advice.</strong> If you need help with a
                      visa application, please consult a qualified immigration adviser regulated by the{" "}
                      <a href="https://www.gov.uk/find-an-immigration-adviser" target="_blank" rel="noopener noreferrer" className="underline">OISC</a>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">What we can help with</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    "Reporting outdated or incorrect fee data",
                    "Suggesting missing visa types",
                    "Reporting technical issues",
                    "General feedback and suggestions",
                    "Press or partnership enquiries",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-5 bg-red-50 border-red-100">
                <h3 className="font-bold text-red-900 mb-2 text-sm">We cannot help with</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  {[
                    "Immigration advice or eligibility questions",
                    "Visa application status queries",
                    "Refund or payment disputes with UKVI",
                    "Legal advice of any kind",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Useful links</h3>
                <div className="space-y-2">
                  {[
                    { href: "/how-it-works", label: "How the calculator works" },
                    { href: "/about", label: "About this site" },
                    { href: "/privacy-policy", label: "Privacy policy" },
                    { href: "https://www.gov.uk/browse/visas-immigration", label: "GOV.UK Visas & Immigration", external: true },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors py-1"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
