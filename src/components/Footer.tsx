import Link from "next/link";
import { LAST_UPDATED } from "@/data/visaFees";

const footerLinks = {
  Tools: [
    { href: "/calculator", label: "Visa Cost Calculator" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/guides", label: "Visa Guides" },
  ],
  "Visa Guides": [
    { href: "/guides/skilled-worker-visa-costs", label: "Skilled Worker Visa" },
    { href: "/guides/student-visa-costs", label: "Student Visa" },
    { href: "/guides/family-visa-costs", label: "Family Visa" },
    { href: "/guides/immigration-health-surcharge", label: "IHS Explained" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Main Footer */}
      <div className="container-content py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-sm">UK Visa Calculator</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              A free tool to help you estimate the total cost of UK visa and
              immigration applications — including fees, IHS, and optional
              services.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              <span>Fee data last reviewed: {LAST_UPDATED}</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-slate-800">
        <div className="container-content py-5">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            <strong className="text-slate-400">Disclaimer:</strong> This tool
            provides estimates only and is not affiliated with the UK Home
            Office or GOV.UK. Visa fees and IHS rates are subject to change.
            Always verify current fees at{" "}
            <a
              href="https://www.gov.uk/government/publications/visa-regulations-revised-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              GOV.UK
            </a>{" "}
            before submitting any application. This is not legal or immigration
            advice.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/60">
        <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} UK Visa Calculator. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-600">
            Not affiliated with the UK Home Office or GOV.UK
          </p>
        </div>
      </div>
    </footer>
  );
}
