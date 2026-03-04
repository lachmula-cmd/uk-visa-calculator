"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  VISA_CATEGORIES,
  VISA_GROUPS,
  getVisasByGroup,
  calculateCosts,
  OPTIONAL_SERVICES,
  FEE_SOURCE_URL,
  LAST_UPDATED,
  type CalculatorInput,
  type CalculatorResult,
} from "@/data/visaFees";

const DEFAULT_DURATION_BY_GROUP: Record<string, number> = {
  Visitor: 6,
  Student: 36,
  Work: 36,
  Family: 30,
  Settlement: 0,
  "EU Settlement": 0,
};

function formatGBP(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Calculator() {
  const visasByGroup = getVisasByGroup();

  const [input, setInput] = useState<CalculatorInput>({
    visaId: "skilled-worker-3y",
    durationMonths: 36,
    numApplicants: 1,
    numDependants: 0,
    addPriority: false,
    addSuperPriority: false,
    addPremiumLounge: false,
    isNewEntrant: false,
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const selectedVisa = VISA_CATEGORIES.find((v) => v.id === input.visaId);
  const showDuration = selectedVisa?.ihsApplies ?? false;
  const showNewEntrant =
    input.visaId === "skilled-worker-3y" ||
    input.visaId === "skilled-worker-5y" ||
    input.visaId === "scale-up-3y";
  const showDependants = selectedVisa?.dependantFee !== null;

  const handleVisaChange = useCallback((visaId: string) => {
    const visa = VISA_CATEGORIES.find((v) => v.id === visaId);
    const group = visa?.group ?? "Work";
    const defaultDuration = DEFAULT_DURATION_BY_GROUP[group] ?? 36;
    setInput((prev) => ({
      ...prev,
      visaId,
      durationMonths: defaultDuration,
      addPriority: false,
      addSuperPriority: false,
      isNewEntrant: false,
    }));
    setResult(null);
    setHasCalculated(false);
  }, []);

  const handleCalculate = useCallback(() => {
    const res = calculateCosts(input);
    setResult(res);
    setHasCalculated(true);
    setTimeout(() => {
      document.getElementById("calculator-result")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [input]);

  const handleReset = () => {
    setInput({
      visaId: "skilled-worker-3y",
      durationMonths: 36,
      numApplicants: 1,
      numDependants: 0,
      addPriority: false,
      addSuperPriority: false,
      addPremiumLounge: false,
      isNewEntrant: false,
    });
    setResult(null);
    setHasCalculated(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Input Panel */}
      <div className="lg:col-span-3">
        <div className="card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Configure Your Application</h2>
              <p className="text-sm text-slate-500 mt-0.5">Select your visa type and application details below</p>
            </div>
            <button onClick={handleReset} className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reset
            </button>
          </div>

          <div className="space-y-6">
            {/* Visa Type */}
            <div>
              <label className="form-label">
                Visa Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="form-select pr-10"
                  value={input.visaId}
                  onChange={(e) => handleVisaChange(e.target.value)}
                >
                  {VISA_GROUPS.map((group) => (
                    <optgroup key={group} label={`── ${group} ──`}>
                      {(visasByGroup[group] ?? []).map((visa) => (
                        <option key={visa.id} value={visa.id}>{visa.label}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              {selectedVisa && (
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{selectedVisa.description}</p>
              )}
            </div>

            {/* Duration */}
            {showDuration && (
              <div>
                <label className="form-label">
                  Visa Duration (months)
                  <span className="ml-1 text-xs font-normal text-slate-400">— used to calculate IHS</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={60}
                    step={1}
                    value={input.durationMonths}
                    onChange={(e) => setInput((p) => ({ ...p, durationMonths: Number(e.target.value) }))}
                    className="flex-1 h-2 rounded-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="w-20 form-input text-center font-bold text-indigo-700 py-2">
                    {input.durationMonths}m
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  IHS is charged for{" "}
                  <strong className="text-slate-600">
                    {Math.ceil(input.durationMonths / 12)} year{Math.ceil(input.durationMonths / 12) > 1 ? "s" : ""}
                  </strong>{" "}
                  (rounded up to the nearest full year)
                </p>
              </div>
            )}

            {/* Applicants & Dependants */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Main Applicants</label>
                <div className="relative">
                  <select
                    className="form-select pr-10"
                    value={input.numApplicants}
                    onChange={(e) => setInput((p) => ({ ...p, numApplicants: Number(e.target.value) }))}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="form-label">
                  Dependants
                  {!showDependants && <span className="ml-1 text-xs font-normal text-amber-500">(N/A)</span>}
                </label>
                <div className="relative">
                  <select
                    className="form-select pr-10"
                    value={input.numDependants}
                    disabled={!showDependants}
                    onChange={(e) => setInput((p) => ({ ...p, numDependants: Number(e.target.value) }))}
                  >
                    {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "dependant" : "dependants"}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* New Entrant */}
            {showNewEntrant && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                <input
                  type="checkbox"
                  id="newEntrant"
                  className="form-checkbox mt-0.5"
                  checked={input.isNewEntrant ?? false}
                  onChange={(e) => setInput((p) => ({ ...p, isNewEntrant: e.target.checked }))}
                />
                <label htmlFor="newEntrant" className="cursor-pointer">
                  <span className="text-sm font-semibold text-slate-800 block">Apply new entrant rate</span>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    You may qualify if you are under 26, switching from a Student visa, or working in a shortage occupation. Reduces the visa fee by approximately 23%.
                  </span>
                </label>
              </div>
            )}

            {/* Optional Services */}
            <div>
              <label className="form-label mb-3">
                Optional Services
                <span className="ml-1 text-xs font-normal text-slate-400">— UK applications only</span>
              </label>
              <div className="space-y-3">
                {/* Priority */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${!selectedVisa?.priorityAvailable ? "bg-slate-50 border-slate-200 opacity-60" : input.addPriority ? "bg-indigo-50 border-indigo-200" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                  <input
                    type="checkbox"
                    id="priority"
                    className="form-checkbox mt-0.5"
                    checked={input.addPriority}
                    disabled={!selectedVisa?.priorityAvailable}
                    onChange={(e) => setInput((p) => ({ ...p, addPriority: e.target.checked, addSuperPriority: e.target.checked ? false : p.addSuperPriority }))}
                  />
                  <label htmlFor="priority" className={`flex-1 ${selectedVisa?.priorityAvailable ? "cursor-pointer" : "cursor-not-allowed"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{OPTIONAL_SERVICES.priority.label}</span>
                      <span className="text-sm font-bold text-indigo-700">+{formatGBP(OPTIONAL_SERVICES.priority.fee)}</span>
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed">{OPTIONAL_SERVICES.priority.description}</span>
                    {!selectedVisa?.priorityAvailable && (
                      <span className="text-xs text-amber-600 font-medium block mt-0.5">Not available for this visa type</span>
                    )}
                  </label>
                </div>

                {/* Super Priority */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${!selectedVisa?.superPriorityAvailable ? "bg-slate-50 border-slate-200 opacity-60" : input.addSuperPriority ? "bg-indigo-50 border-indigo-200" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                  <input
                    type="checkbox"
                    id="superPriority"
                    className="form-checkbox mt-0.5"
                    checked={input.addSuperPriority}
                    disabled={!selectedVisa?.superPriorityAvailable}
                    onChange={(e) => setInput((p) => ({ ...p, addSuperPriority: e.target.checked, addPriority: e.target.checked ? false : p.addPriority }))}
                  />
                  <label htmlFor="superPriority" className={`flex-1 ${selectedVisa?.superPriorityAvailable ? "cursor-pointer" : "cursor-not-allowed"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{OPTIONAL_SERVICES.superPriority.label}</span>
                      <span className="text-sm font-bold text-indigo-700">+{formatGBP(OPTIONAL_SERVICES.superPriority.fee)}</span>
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed">{OPTIONAL_SERVICES.superPriority.description}</span>
                    {!selectedVisa?.superPriorityAvailable && (
                      <span className="text-xs text-amber-600 font-medium block mt-0.5">Not available for this visa type</span>
                    )}
                  </label>
                </div>

                {/* Premium Lounge */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${input.addPremiumLounge ? "bg-indigo-50 border-indigo-200" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                  <input
                    type="checkbox"
                    id="premiumLounge"
                    className="form-checkbox mt-0.5"
                    checked={input.addPremiumLounge}
                    onChange={(e) => setInput((p) => ({ ...p, addPremiumLounge: e.target.checked }))}
                  />
                  <label htmlFor="premiumLounge" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{OPTIONAL_SERVICES.premiumLounge.label}</span>
                      <span className="text-sm font-bold text-indigo-700">+{formatGBP(OPTIONAL_SERVICES.premiumLounge.fee)}</span>
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed">{OPTIONAL_SERVICES.premiumLounge.description}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button onClick={handleCalculate} className="btn-primary w-full justify-center py-4 text-base">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Calculate Total Cost
            </button>
          </div>
        </div>

        {/* Visa Notes */}
        {selectedVisa && selectedVisa.notes.length > 0 && (
          <div className="mt-4 card p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              Important notes for this visa type
            </h3>
            <ul className="space-y-2">
              {selectedVisa.notes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
            <a
              href={selectedVisa.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              View official GOV.UK guidance for this visa
            </a>
          </div>
        )}
      </div>

      {/* Result Panel */}
      <div className="lg:col-span-2" id="calculator-result">
        {!hasCalculated ? (
          <div className="card p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-700 mb-2">Your estimate will appear here</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Configure your application details on the left and click &ldquo;Calculate Total Cost&rdquo; to see a full breakdown.
            </p>
          </div>
        ) : result ? (
          <div className="space-y-4">
            {/* Grand Total */}
            <div className="card-premium p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Estimated Total Cost</p>
              <div className="cost-total mb-1">{formatGBP(result.grandTotal)}</div>
              <p className="text-xs text-slate-400">
                For {input.numApplicants + input.numDependants} person{input.numApplicants + input.numDependants > 1 ? "s" : ""}
                {showDuration ? ` · ${input.durationMonths} months` : ""}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {result.visaFeeTotal > 0 && (
                  <span className="badge-blue">Visa fees: {formatGBP(result.visaFeeTotal)}</span>
                )}
                {result.ihsTotal > 0 && (
                  <span className="badge-green">IHS: {formatGBP(result.ihsTotal)}</span>
                )}
                {result.optionalServicesTotal > 0 && (
                  <span className="badge-amber">Optional: {formatGBP(result.optionalServicesTotal)}</span>
                )}
              </div>
            </div>

            {/* Breakdown */}
            <div className="card p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Cost Breakdown
              </h3>
              <div className="space-y-3">
                {result.breakdown.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 font-medium leading-snug">{item.label}</p>
                      {item.note && <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>}
                    </div>
                    <span className="text-sm font-bold text-slate-900 whitespace-nowrap">{formatGBP(item.amount)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Total</span>
                <span className="text-lg font-bold text-gradient">{formatGBP(result.grandTotal)}</span>
              </div>
            </div>

            {/* Assumptions */}
            {result.assumptions.length > 0 && (
              <div className="alert-info">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <div>
                  <p className="font-semibold text-xs mb-1">Assumptions used</p>
                  <ul className="space-y-1">
                    {result.assumptions.map((a, i) => (
                      <li key={i} className="text-xs leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <div className="alert-warning">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <div>
                  <p className="font-semibold text-xs mb-1">Please note</p>
                  <ul className="space-y-1">
                    {result.warnings.map((w, i) => (
                      <li key={i} className="text-xs leading-relaxed">{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Verify CTA */}
            <a
              href={FEE_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Verify fees on GOV.UK
            </a>

            <p className="text-center text-xs text-slate-400">
              Fee data last reviewed: {LAST_UPDATED}
            </p>

            {/* Related Links */}
            <div className="card p-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">Learn more</p>
              <div className="space-y-1.5">
                <Link href="/how-it-works" className="flex items-center gap-2 text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  How this calculator works
                </Link>
                <Link href="/guides" className="flex items-center gap-2 text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  Visa guides and cost breakdowns
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
