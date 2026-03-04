import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ukvisacalculator.co.uk"),
  title: {
    default: "UK Visa Cost Calculator 2025 — Estimate Your Immigration Fees",
    template: "%s | UK Visa Cost Calculator",
  },
  description:
    "Calculate the total cost of your UK visa application including visa fees, Immigration Health Surcharge (IHS), priority services, and dependant costs. Free, accurate estimates based on official GOV.UK fee data.",
  keywords: [
    "UK visa cost calculator",
    "UK visa fees 2025",
    "Immigration Health Surcharge calculator",
    "IHS calculator",
    "Skilled Worker visa cost",
    "Student visa UK cost",
    "UK family visa fees",
    "UK immigration fees",
    "visa application cost UK",
    "ILR fees",
  ],
  authors: [{ name: "UK Visa Calculator" }],
  creator: "UK Visa Calculator",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ukvisacalculator.co.uk",
    siteName: "UK Visa Cost Calculator",
    title: "UK Visa Cost Calculator 2025 — Estimate Your Immigration Fees",
    description:
      "Free tool to estimate UK visa application costs including IHS, priority services, and dependant fees. Based on official GOV.UK data.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UK Visa Cost Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Visa Cost Calculator 2025",
    description:
      "Estimate your UK visa application costs including IHS and priority services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ukvisacalculator.co.uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UK Visa Cost Calculator",
              url: "https://ukvisacalculator.co.uk",
              description:
                "Free tool to estimate UK visa application costs including Immigration Health Surcharge, priority services, and dependant fees.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://ukvisacalculator.co.uk/calculator?visa={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
