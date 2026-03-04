# UK Visa Cost Calculator — Build Tracker

## Status: ✅ COMPLETE — Production build successful

---

## Implementation Checklist

### Configuration & Setup
- [x] `package.json` — Next.js 14, React 18, Tailwind CSS, TypeScript, lucide-react
- [x] `tsconfig.json` — TypeScript config with `@/*` path alias
- [x] `next.config.js` — Next.js config
- [x] `postcss.config.js` — PostCSS + Tailwind
- [x] `tailwind.config.ts` — Custom colors, shadows, fonts
- [x] Node.js v24 installed, npm install completed
- [x] Production build: ✅ 13 pages compiled, zero errors

### Data Layer
- [x] `src/data/visaFees.ts` — Complete visa fee data
  - 20 visa categories across 6 groups (Visitor, Student, Work, Family, Settlement, EU Settlement)
  - IHS rates (standard £1,035/yr, reduced £776/yr)
  - Optional services (Priority £500, Super Priority £1,000, Premium Lounge £200)
  - `calculateCosts()` function with full breakdown, assumptions, warnings
  - `LAST_UPDATED` export for all pages

### Components
- [x] `src/components/Header.tsx` — Sticky nav, mobile hamburger, active link detection
- [x] `src/components/Footer.tsx` — Multi-column footer, disclaimer bar, legal links
- [x] `src/components/Calculator.tsx` — Full interactive calculator with:
  - Visa selector with optgroups by category
  - Duration slider (1–60 months)
  - Applicants/dependants selects
  - New entrant checkbox (Skilled Worker)
  - Optional services checkboxes
  - Cost breakdown result panel
  - Assumptions and warnings display

### Pages (13 total)
- [x] `src/app/layout.tsx` — Root layout, SEO metadata, JSON-LD schema, Google Fonts
- [x] `src/app/globals.css` — Design system (btn-primary, card, form-select, badges, alerts, etc.)
- [x] `src/app/page.tsx` — Homepage: hero, IHS alert, popular routes, how it works, features, FAQ, CTA
- [x] `src/app/calculator/page.tsx` — Calculator page with disclaimer, what's included section
- [x] `src/app/guides/page.tsx` — Guides index with fee reference stats
- [x] `src/app/guides/immigration-health-surcharge/page.tsx` — Full IHS guide
- [x] `src/app/guides/skilled-worker-visa-costs/page.tsx` — Full Skilled Worker guide
- [x] `src/app/guides/family-visa-costs/page.tsx` — Full Family visa guide
- [x] `src/app/guides/student-visa-costs/page.tsx` — Full Student visa guide
- [x] `src/app/how-it-works/page.tsx` — Methodology, data sources, assumptions
- [x] `src/app/about/page.tsx` — About, mission, accuracy commitment
- [x] `src/app/contact/page.tsx` — Contact form with subject selector
- [x] `src/app/privacy-policy/page.tsx` — Full UK GDPR privacy policy
- [x] `src/app/terms/page.tsx` — Full terms and conditions

### SEO
- [x] `public/robots.txt` — Crawl rules + sitemap reference
- [x] `src/app/sitemap.ts` — Next.js sitemap for all 13 routes
- [x] Per-page metadata (title, description, canonical URL)
- [x] JSON-LD WebSite schema in root layout
- [x] Semantic HTML structure throughout

---

## Fee Data — Manual Review Required

The following fee values should be verified against the current GOV.UK fee table
before going live:

| Visa Type | Fee Used | Source |
|-----------|----------|--------|
| Standard Visitor (6m) | £115 | GOV.UK April 2024 |
| Standard Visitor (2y) | £400 | GOV.UK April 2024 |
| Standard Visitor (5y) | £771 | GOV.UK April 2024 |
| Standard Visitor (10y) | £963 | GOV.UK April 2024 |
| Student Visa | £490 | GOV.UK April 2024 |
| Skilled Worker (≤3y) | £719 | GOV.UK April 2024 |
| Skilled Worker (>3y) | £1,423 | GOV.UK April 2024 |
| Skilled Worker new entrant (≤3y) | £551 | GOV.UK April 2024 |
| Skilled Worker new entrant (>3y) | £1,084 | GOV.UK April 2024 |
| Health & Care Worker (≤3y) | £247 | GOV.UK April 2024 |
| Health & Care Worker (>3y) | £479 | GOV.UK April 2024 |
| Global Talent | £716 | GOV.UK April 2024 |
| Innovator Founder | £1,191 | GOV.UK April 2024 |
| Youth Mobility | £259 | GOV.UK April 2024 |
| Family (Spouse/Partner) | £1,846 | GOV.UK April 2024 |
| Family (Child) | £1,846 | GOV.UK April 2024 |
| Family (Adult Dependent Relative) | £3,250 | GOV.UK April 2024 |
| ILR | £2,885 | GOV.UK April 2024 |
| Naturalisation | £1,500 | GOV.UK April 2024 |
| IHS Standard | £1,035/yr | GOV.UK Feb 2024 |
| IHS Reduced (students) | £776/yr | GOV.UK Feb 2024 |

**Verify at:** https://www.gov.uk/government/publications/visa-regulations-revised-table

---

## Before Redeployment Checklist

- [ ] Verify all fees against current GOV.UK fee table
- [ ] Update `LAST_UPDATED` in `src/data/visaFees.ts` if fees change
- [ ] Update `BASE_URL` in `src/app/sitemap.ts` to actual domain
- [ ] Update canonical URLs in all page metadata to actual domain
- [ ] Set up contact form backend (currently HTML-only, no submission handler)
- [ ] Configure Google Analytics / AdSense IDs in `src/app/layout.tsx`
- [ ] Test on mobile devices
- [ ] Submit sitemap to Google Search Console
- [ ] Review AdSense ad placement (ad slots are in layout, not dominating above-fold)
