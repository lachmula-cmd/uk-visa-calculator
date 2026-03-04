import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — UK Visa Cost Calculator",
  description:
    "Privacy policy for the UK Visa Cost Calculator. Learn how we handle your data, what cookies we use, and your rights under UK GDPR.",
  alternates: { canonical: "https://ukvisacalculator.co.uk/privacy-policy" },
};

const EFFECTIVE_DATE = "1 July 2025";
const SITE_NAME = "UK Visa Cost Calculator";
const SITE_URL = "https://ukvisacalculator.co.uk";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-hero text-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Privacy Policy</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-white/70">Effective date: {EFFECTIVE_DATE}</p>
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container-content max-w-3xl">
          <div className="prose-content">

            <p className="lead">
              This privacy policy explains how {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
              uses, and protects information when you visit {SITE_URL} (the &ldquo;Site&rdquo;).
            </p>

            <h2>1. Who We Are</h2>
            <p>
              {SITE_NAME} is an independent informational website providing UK visa cost estimation
              tools. We are not affiliated with the UK Home Office or any government body.
            </p>

            <h2>2. What Information We Collect</h2>

            <h3>2.1 Information you provide</h3>
            <p>
              The calculator on this site operates entirely in your browser. <strong>We do not collect,
              store, or transmit any of the information you enter into the calculator</strong> — including
              visa type, duration, number of applicants, or any other inputs. All calculations are
              performed locally in your browser.
            </p>
            <p>
              If you use the contact form, we collect the name, email address, and message content
              you provide in order to respond to your enquiry.
            </p>

            <h3>2.2 Information collected automatically</h3>
            <p>
              When you visit the Site, certain information is collected automatically by our hosting
              provider and analytics tools, including:
            </p>
            <ul>
              <li>Your IP address (anonymised where possible)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website (how you arrived at the Site)</li>
              <li>Date and time of your visit</li>
            </ul>
            <p>
              This information is used in aggregate to understand how the Site is used and to improve
              its content and performance. It is not used to identify individual users.
            </p>

            <h2>3. Cookies</h2>
            <p>
              This Site may use cookies and similar technologies. Cookies are small text files stored
              on your device. We use the following types of cookies:
            </p>

            <h3>3.1 Strictly necessary cookies</h3>
            <p>
              These cookies are required for the Site to function correctly. They do not collect
              personal information and cannot be disabled.
            </p>

            <h3>3.2 Analytics cookies</h3>
            <p>
              We may use analytics services (such as Google Analytics) to understand how visitors
              use the Site. These cookies collect anonymised information about page views, session
              duration, and traffic sources. You can opt out of Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics opt-out browser add-on
              </a>.
            </p>

            <h3>3.3 Advertising cookies</h3>
            <p>
              This Site may display advertisements served by Google AdSense or similar advertising
              networks. These services may use cookies to serve ads based on your prior visits to
              this Site or other websites. You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google&apos;s Ads Settings
              </a>{" "}
              or the{" "}
              <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">
                Your Online Choices
              </a>{" "}
              website.
            </p>

            <h2>4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Operate and improve the Site and calculator</li>
              <li>Respond to contact form enquiries</li>
              <li>Understand how the Site is used (analytics)</li>
              <li>Display relevant advertisements (if applicable)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>5. Legal Basis for Processing (UK GDPR)</h2>
            <p>
              Where we process personal data, we do so on the following legal bases:
            </p>
            <ul>
              <li><strong>Legitimate interests:</strong> Operating the Site, improving content, and understanding usage patterns.</li>
              <li><strong>Consent:</strong> For non-essential cookies and analytics, where required.</li>
              <li><strong>Contract:</strong> To respond to contact form enquiries.</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              Contact form messages are retained for as long as necessary to respond to your enquiry
              and for a reasonable period thereafter. Anonymised analytics data may be retained
              indefinitely. We do not retain calculator inputs as they are never transmitted to our
              servers.
            </p>

            <h2>7. Sharing Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share information with:
            </p>
            <ul>
              <li><strong>Hosting providers:</strong> To operate the Site infrastructure.</li>
              <li><strong>Analytics providers:</strong> Such as Google Analytics, in anonymised form.</li>
              <li><strong>Advertising networks:</strong> Such as Google AdSense, for ad serving.</li>
              <li><strong>Legal authorities:</strong> Where required by law.</li>
            </ul>

            <h2>8. Your Rights</h2>
            <p>
              Under UK GDPR, you have the following rights regarding your personal data:
            </p>
            <ul>
              <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances.</li>
              <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data.</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Right to data portability:</strong> Receive your data in a portable format.</li>
            </ul>
            <p>
              To exercise any of these rights, please <Link href="/contact">contact us</Link>. You also
              have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
              at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              The Site contains links to external websites, including GOV.UK. We are not responsible
              for the privacy practices of those sites and encourage you to review their privacy
              policies.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              This Site is not directed at children under 13. We do not knowingly collect personal
              information from children.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The effective date at the top of
              this page will be updated when changes are made. Continued use of the Site after changes
              constitutes acceptance of the updated policy.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, please use
              our <Link href="/contact">contact page</Link>.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/terms" className="btn-secondary">Terms &amp; Conditions</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
