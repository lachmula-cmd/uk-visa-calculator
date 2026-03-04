import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — UK Visa Cost Calculator",
  description:
    "Terms and conditions for using the UK Visa Cost Calculator. Please read these terms carefully before using the site.",
  alternates: { canonical: "https://ukvisaprice.com/terms" },
};

const EFFECTIVE_DATE = "1 July 2025";
const SITE_NAME = "UK Visa Cost Calculator";
const SITE_URL = "https://ukvisaprice.com";

export default function TermsPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Terms &amp; Conditions</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-white/70">Effective date: {EFFECTIVE_DATE}</p>
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container-content max-w-3xl">
          <div className="prose-content">

            <p className="lead">
              Please read these terms and conditions carefully before using {SITE_NAME} at{" "}
              {SITE_URL} (the &ldquo;Site&rdquo;). By using the Site, you agree to be bound by these terms.
            </p>

            <h2>1. About the Site</h2>
            <p>
              {SITE_NAME} is an independent informational website that provides tools to estimate
              the cost of UK visa and immigration applications. The Site is operated independently
              and is not affiliated with, endorsed by, or connected to the UK Home Office, UK Visas
              and Immigration (UKVI), or any other government body.
            </p>

            <h2>2. Estimates Only — Not Official Fee Information</h2>
            <p>
              The calculator and all fee information on this Site are provided for <strong>estimation
              and informational purposes only</strong>. The figures produced by the calculator are
              estimates based on publicly available data from GOV.UK and are subject to the following
              limitations:
            </p>
            <ul>
              <li>Fees may have changed since the data was last reviewed.</li>
              <li>Not all visa types or scenarios are covered.</li>
              <li>The calculator makes assumptions that may not apply to your specific situation.</li>
              <li>Individual circumstances can affect the fees payable.</li>
            </ul>
            <p>
              <strong>You must verify the exact fees applicable to your application on GOV.UK before
              submitting any visa application or making any payment.</strong> We accept no responsibility
              for any loss arising from reliance on the estimates produced by this Site.
            </p>

            <h2>3. Not Legal or Immigration Advice</h2>
            <p>
              Nothing on this Site constitutes legal advice, immigration advice, or a recommendation
              to apply for any particular visa. The Site does not assess your eligibility for any
              visa route. If you need immigration advice, you should consult a qualified immigration
              adviser or solicitor regulated by the Office of the Immigration Services Commissioner
              (OISC) or the Solicitors Regulation Authority (SRA).
            </p>
            <p>
              You can find a regulated immigration adviser at{" "}
              <a href="https://www.gov.uk/find-an-immigration-adviser" target="_blank" rel="noopener noreferrer">
                gov.uk/find-an-immigration-adviser
              </a>.
            </p>

            <h2>4. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to ensure that the fee data on this Site is accurate and
              up to date. However, we make no warranty, express or implied, as to the accuracy,
              completeness, or currency of the information provided. UK visa fees are set by the
              Home Office and can change at any time.
            </p>
            <p>
              The Site is provided &ldquo;as is&rdquo; without any representations or warranties of any kind.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME} and its operators shall not be
              liable for any direct, indirect, incidental, consequential, or special damages arising
              from your use of the Site or reliance on any information provided, including but not
              limited to:
            </p>
            <ul>
              <li>Incorrect fee estimates</li>
              <li>Visa application errors or refusals</li>
              <li>Financial loss arising from reliance on the calculator</li>
              <li>Any interruption or unavailability of the Site</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              The content, design, and code of this Site are the property of {SITE_NAME} and are
              protected by copyright. You may not reproduce, distribute, or create derivative works
              from the Site content without our prior written permission.
            </p>
            <p>
              Fee data sourced from GOV.UK is subject to the{" "}
              <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer">
                Open Government Licence v3.0
              </a>.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              The Site contains links to external websites, including GOV.UK. These links are
              provided for your convenience. We are not responsible for the content, accuracy, or
              availability of external sites and do not endorse them.
            </p>

            <h2>8. Advertising</h2>
            <p>
              The Site may display advertisements served by third-party advertising networks,
              including Google AdSense. We are not responsible for the content of advertisements
              displayed on the Site. The presence of an advertisement does not constitute an
              endorsement of the advertised product or service.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated into these
              terms by reference.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. The effective date at the top of this
              page will be updated when changes are made. Continued use of the Site after changes
              constitutes acceptance of the updated terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes arising from
              your use of the Site shall be subject to the exclusive jurisdiction of the courts of
              England and Wales.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have questions about these terms, please use our{" "}
              <Link href="/contact">contact page</Link>.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/privacy-policy" className="btn-secondary">Privacy Policy</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
