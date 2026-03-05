# UK Visa Calculator — Upgrade TODO

## Status: ✅ ALL TASKS COMPLETE

---

## Phase 1 — Project Setup
- [x] package.json (Next.js 14.2.5, React 18, TypeScript, Tailwind, lucide-react)
- [x] tsconfig.json with @/* path aliases
- [x] next.config.js
- [x] postcss.config.js
- [x] tailwind.config.ts (custom colors, shadows, fonts)

## Phase 2 — Data Layer
- [x] src/data/visaFees.ts — all visa fee data (GOV.UK sourced, July 2025)
  - 15+ visa categories across 6 groups
  - IHS rates (standard £1,035/yr, reduced £776/yr)
  - Optional services (Priority £500, Super Priority £1,000, Premium Lounge £200)
  - calculateCosts() function with full breakdown logic
  - Warnings for unavailable services, dependant restrictions
  - New entrant rate handling for Skilled Worker

## Phase 3 — Design System
- [x] src/app/globals.css
  - .btn-primary (gradient)
  - .btn-secondary
  - .btn-ghost
  - .btn-white (fixed CTA gradient conflict) ✅
  - .card, .card-hover, .card-premium
  - .form-select, .form-input, .form-checkbox, .form-label
  - .badge-blue/green/amber/red/gray ✅
  - .alert-info/warning/success/error
  - .prose-content (guide/legal page typography) ✅
  - .section-label, .section-title, .section-subtitle
  - .cost-total, .nav-link, .nav-link-active
  - .text-gradient, .bg-hero, .bg-subtle, .glass
  - @keyframes slideUp + .animate-slide-up ✅

## Phase 4 — Layout & Components
- [x] src/app/layout.tsx
  - SEO metadata (title template, description, keywords)
  - JSON-LD WebSite schema
  - Inter font (Google Fonts)
  - CookieNotice imported and rendered ✅
  - Removed broken /og-image.png reference ✅
- [x] ~~src/app/opengraph-image.tsx~~ — **removed**: `@vercel/og` ESM native bindings fail on Windows paths; static OG metadata used instead (no functional impact on deployment)
- [x] src/components/Header.tsx — responsive nav, mobile menu
- [x] src/components/Footer.tsx — fixed broken links ✅
- [x] src/components/CookieNotice.tsx — GDPR banner, localStorage, slide-up animation ✅
- [x] src/components/Calculator.tsx
  - initialVisaId prop ✅
  - Full cost breakdown (visa fee + IHS + optional services)
  - Dependant calculation
  - New entrant toggle for Skilled Worker
  - Print button ✅
  - Copy Summary button ✅
  - Warnings and assumptions displayed
  - Link to GOV.UK for verification

## Phase 5 — Pages
- [x] src/app/page.tsx — Homepage
  - Hero with trust indicators
  - IHS alert banner
  - Popular routes quick-start cards
  - How it works (3 steps)
  - Features grid (6 cards)
  - IHS explainer with worked example
  - FAQ (6 questions)
  - CTA section (btn-white fixed) ✅
- [x] src/app/calculator/page.tsx — Calculator page with searchParams.visa ✅
- [x] src/app/guides/page.tsx — Guides index
- [x] src/app/guides/immigration-health-surcharge/page.tsx
- [x] src/app/guides/skilled-worker-visa-costs/page.tsx
- [x] src/app/guides/family-visa-costs/page.tsx
- [x] src/app/guides/student-visa-costs/page.tsx
- [x] src/app/how-it-works/page.tsx
- [x] src/app/about/page.tsx
- [x] src/app/contact/page.tsx
- [x] src/app/privacy-policy/page.tsx
- [x] src/app/terms/page.tsx

## Phase 6 — SEO & Infrastructure
- [x] src/app/sitemap.ts — XML sitemap (13 URLs)
- [x] public/robots.txt
- [x] .gitignore

## Phase 7 — Build Verification
- [x] npm install — dependencies installed
- [x] npm run build — ✅ **16/16 pages static, zero errors** (after require-hook + opengraph-image removal)
- [x] npm run dev — ✅ Running on http://localhost:3001
- [x] git push origin main — ✅ Pushed (d5001b8..1a1efdb)
- [x] require-hook.js — Windows-only fix for React duplicate instance (case-insensitive FS)
- [x] run-build.ps1 / run-dev.ps1 — Local Windows build/dev scripts

---

## Manual Review Items (Before Deploying)

1. **Fee accuracy**: Verify all fees against current GOV.UK fee table:
   https://www.gov.uk/government/publications/visa-regulations-revised-table
   Key fees to check: Skilled Worker (£719/£1,423), Student (£490), Family (£1,846), ILR (£2,885)

2. **IHS rate**: Confirm £1,035/year (standard) and £776/year (reduced) are still current.
   Source: https://www.gov.uk/healthcare-immigration-application/pay

3. **Income threshold**: Family visa sponsor income requirement (£29,000 → £38,700 transition)
   — update the note in visaFees.ts once the higher threshold is fully in force.

4. **Domain**: ✅ All canonical URLs already set to `ukvisaprice.com` in layout.tsx, sitemap.ts, robots.txt

5. **Contact email**: Update the placeholder email in contact/page.tsx

6. **AdSense**: Add your AdSense publisher ID to layout.tsx once approved.
   Ad slots are placed below-the-fold only — compliant with AdSense policies.

7. **Cookie consent**: CookieNotice currently stores preference in localStorage only.
   If you use analytics/ads, wire up the consent state to your analytics init.

8. **HTTPS**: Ensure your deployment has a valid SSL certificate (required for AdSense).
