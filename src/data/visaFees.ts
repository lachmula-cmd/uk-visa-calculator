/**
 * UK Visa Fee Data
 *
 * Sources:
 * - GOV.UK: https://www.gov.uk/government/publications/visa-regulations-revised-table
 * - Home Office Immigration and Nationality Fees (effective April 2024)
 * - Immigration Health Surcharge: https://www.gov.uk/healthcare-immigration-application
 *
 * IMPORTANT: These fees are provided for estimation purposes only.
 * Fees are subject to change by the UK Home Office without notice.
 * Always verify current fees at https://www.gov.uk before submitting an application.
 *
 * Last reviewed: July 2025
 */

export const LAST_UPDATED = "July 2025";
export const FEE_SOURCE_URL =
  "https://www.gov.uk/government/publications/visa-regulations-revised-table";

// ─── Immigration Health Surcharge ────────────────────────────────────────────
export const IHS_RATES = {
  standard: 1035, // £ per year — most visa categories
  reduced: 776, // £ per year — students, Youth Mobility Scheme, children under 18
};

// ─── Optional Services ────────────────────────────────────────────────────────
export const OPTIONAL_SERVICES = {
  priority: {
    label: "Priority Service",
    fee: 500,
    description:
      "Aims to process your application within 5 working days (UK applications only). Not available for all visa types.",
  },
  superPriority: {
    label: "Super Priority Service",
    fee: 1000,
    description:
      "Aims to process your application by the end of the next working day (UK applications only). Not available for all visa types.",
  },
  premiumLounge: {
    label: "Premium Customer Service",
    fee: 200,
    description:
      "Access to a dedicated premium lounge at a UKVCAS service point for biometric enrolment.",
  },
};

// ─── Visa Categories ─────────────────────────────────────────────────────────
export type VisaCategory = {
  id: string;
  label: string;
  group: string;
  description: string;
  baseFee: number | null; // null = variable / not supported
  ihsApplies: boolean;
  ihsRate: "standard" | "reduced" | "none";
  durationOptions?: DurationOption[];
  dependantFee?: number | null;
  notes: string[];
  priorityAvailable: boolean;
  superPriorityAvailable: boolean;
  officialLink: string;
};

export type DurationOption = {
  label: string;
  months: number; // visa duration in months
  fee: number;
};

export const VISA_CATEGORIES: VisaCategory[] = [
  // ── VISITOR ──────────────────────────────────────────────────────────────
  {
    id: "standard-visitor-6m",
    label: "Standard Visitor Visa (up to 6 months)",
    group: "Visitor",
    description:
      "For tourism, visiting family/friends, business meetings, or short courses.",
    baseFee: 115,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 115,
    notes: [
      "IHS does not apply to visitor visas.",
      "Each dependant (family member travelling separately) requires their own application at the same fee.",
      "A Standard Visitor visa can be valid for up to 10 years but each stay is limited to 6 months.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/standard-visitor",
  },
  {
    id: "standard-visitor-2y",
    label: "Standard Visitor Visa (up to 2 years)",
    group: "Visitor",
    description:
      "Multi-entry visitor visa valid for 2 years. Each stay limited to 6 months.",
    baseFee: 400,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 400,
    notes: [
      "IHS does not apply to visitor visas.",
      "Allows multiple entries over 2 years; each stay must not exceed 6 months.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/standard-visitor",
  },
  {
    id: "standard-visitor-5y",
    label: "Standard Visitor Visa (up to 5 years)",
    group: "Visitor",
    description:
      "Multi-entry visitor visa valid for 5 years. Each stay limited to 6 months.",
    baseFee: 771,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 771,
    notes: [
      "IHS does not apply to visitor visas.",
      "Allows multiple entries over 5 years; each stay must not exceed 6 months.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/standard-visitor",
  },
  {
    id: "standard-visitor-10y",
    label: "Standard Visitor Visa (up to 10 years)",
    group: "Visitor",
    description:
      "Multi-entry visitor visa valid for 10 years. Each stay limited to 6 months.",
    baseFee: 963,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 963,
    notes: [
      "IHS does not apply to visitor visas.",
      "Allows multiple entries over 10 years; each stay must not exceed 6 months.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/standard-visitor",
  },

  // ── STUDENT ──────────────────────────────────────────────────────────────
  {
    id: "student-visa",
    label: "Student Visa",
    group: "Student",
    description:
      "For studying a full-time course at a licensed student sponsor in the UK (applying from outside the UK).",
    baseFee: 490,
    ihsApplies: true,
    ihsRate: "reduced",
    dependantFee: 490,
    notes: [
      "IHS applies at the reduced rate of £776/year for students.",
      "IHS is calculated on the full visa duration, rounded up to the nearest year.",
      "Dependants of students also pay IHS at the reduced rate.",
      "If applying from inside the UK (extension), the fee is also £490.",
      "A Confirmation of Acceptance for Studies (CAS) from your sponsor is required.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/student-visa",
  },
  {
    id: "child-student-visa",
    label: "Child Student Visa",
    group: "Student",
    description:
      "For children aged 4–17 studying at an independent school in the UK.",
    baseFee: 490,
    ihsApplies: true,
    ihsRate: "reduced",
    dependantFee: null,
    notes: [
      "IHS applies at the reduced rate of £776/year.",
      "Dependants are not applicable for this visa type.",
      "Parents or guardians do not automatically get leave to accompany the child.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/child-study-visa",
  },

  // ── WORK ─────────────────────────────────────────────────────────────────
  {
    id: "skilled-worker-3y",
    label: "Skilled Worker Visa (up to 3 years)",
    group: "Work",
    description:
      "For working in an eligible skilled job with a UK employer who holds a sponsor licence. Visa duration up to 3 years.",
    baseFee: 719,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 719,
    notes: [
      "New entrant rate (under 26, switching from student visa, or working in certain roles): £551.",
      "IHS applies at £1,035/year for the full visa duration.",
      "Each dependant pays the same visa fee and IHS.",
      "A Certificate of Sponsorship (CoS) from your employer is required.",
      "This estimate uses the standard (non-new-entrant) rate. If you qualify as a new entrant, your fee will be lower.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/skilled-worker-visa",
  },
  {
    id: "skilled-worker-5y",
    label: "Skilled Worker Visa (more than 3 years)",
    group: "Work",
    description:
      "For working in an eligible skilled job with a UK employer. Visa duration more than 3 years (up to 5 years).",
    baseFee: 1423,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 1423,
    notes: [
      "New entrant rate: £1,084.",
      "IHS applies at £1,035/year for the full visa duration.",
      "Each dependant pays the same visa fee and IHS.",
      "This estimate uses the standard (non-new-entrant) rate.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/skilled-worker-visa",
  },
  {
    id: "health-care-worker-3y",
    label: "Health and Care Worker Visa (up to 3 years)",
    group: "Work",
    description:
      "For doctors, nurses, and other health or adult social care professionals. Reduced fee visa.",
    baseFee: 247,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 247,
    notes: [
      "IHS is exempt for Health and Care Worker visa holders and their dependants.",
      "You must be sponsored by an NHS body, NHS GP practice, or an employer registered with the Care Quality Commission.",
      "This is a significant cost saving compared to the standard Skilled Worker route.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/health-care-worker-visa",
  },
  {
    id: "health-care-worker-5y",
    label: "Health and Care Worker Visa (more than 3 years)",
    group: "Work",
    description:
      "For health and adult social care professionals. Visa duration more than 3 years.",
    baseFee: 479,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 479,
    notes: [
      "IHS is exempt for Health and Care Worker visa holders and their dependants.",
      "Must be sponsored by an eligible NHS or CQC-registered employer.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/health-care-worker-visa",
  },
  {
    id: "global-talent",
    label: "Global Talent Visa",
    group: "Work",
    description:
      "For leaders or potential leaders in academia, research, arts, culture, or digital technology.",
    baseFee: 716,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 716,
    notes: [
      "You must be endorsed by a recognised UK endorsing body before applying.",
      "Endorsement fees are separate and vary by endorsing body (typically £456 for Tech Nation / UKRI).",
      "IHS applies at £1,035/year.",
      "This estimate does not include the endorsement fee — add this separately.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/global-talent",
  },
  {
    id: "innovator-founder",
    label: "Innovator Founder Visa",
    group: "Work",
    description:
      "For experienced businesspeople seeking to establish an innovative, viable, and scalable business in the UK.",
    baseFee: 1191,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 1191,
    notes: [
      "You must be endorsed by an approved endorsing body.",
      "Endorsement fees are separate and vary by endorsing body.",
      "IHS applies at £1,035/year.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/innovator-founder-visa",
  },
  {
    id: "youth-mobility",
    label: "Youth Mobility Scheme Visa",
    group: "Work",
    description:
      "For young people (18–30, or up to 35 for some nationalities) from participating countries to live and work in the UK for up to 2 years.",
    baseFee: 259,
    ihsApplies: true,
    ihsRate: "reduced",
    dependantFee: null,
    notes: [
      "IHS applies at the reduced rate of £776/year.",
      "Dependants cannot be added to a Youth Mobility Scheme visa.",
      "Available to nationals of: Australia, Canada, Japan, Monaco, New Zealand, Hong Kong (BN(O)), South Korea, Taiwan.",
      "Places are limited and allocated by ballot for some nationalities.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/youth-mobility",
  },
  {
    id: "scale-up-3y",
    label: "Scale-up Worker Visa (up to 3 years)",
    group: "Work",
    description:
      "For working at a fast-growing UK business that holds a scale-up sponsor licence.",
    baseFee: 719,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 719,
    notes: [
      "IHS applies at £1,035/year.",
      "After 6 months, you may work for other employers without needing sponsorship.",
      "New entrant rate: £551.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/scale-up-worker-visa",
  },

  // ── FAMILY ───────────────────────────────────────────────────────────────
  {
    id: "family-spouse-partner",
    label: "Family Visa — Spouse / Partner",
    group: "Family",
    description:
      "For joining a spouse, civil partner, or unmarried partner who is a British citizen or settled person in the UK.",
    baseFee: 1846,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: 1846,
    notes: [
      "IHS applies at £1,035/year.",
      "The UK sponsor must meet the minimum income requirement (currently £29,000/year as of April 2024, rising to £38,700 by early 2025).",
      "Each child applying as a dependant pays the same fee.",
      "This is one of the most expensive visa routes — budget carefully.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/uk-family-visa",
  },
  {
    id: "family-child",
    label: "Family Visa — Child",
    group: "Family",
    description:
      "For a child joining a parent who is a British citizen or settled person in the UK.",
    baseFee: 1846,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: null,
    notes: [
      "IHS applies at £1,035/year.",
      "The child must be under 18 at the time of application.",
      "Both parents must either be settled in the UK or one parent must have sole responsibility.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/uk-family-visa/child",
  },
  {
    id: "family-adult-dependent",
    label: "Family Visa — Adult Dependent Relative",
    group: "Family",
    description:
      "For an adult relative who needs long-term personal care that can only be provided by a relative in the UK.",
    baseFee: 3250,
    ihsApplies: true,
    ihsRate: "standard",
    dependantFee: null,
    notes: [
      "IHS applies at £1,035/year.",
      "This is one of the most expensive and difficult visa routes to obtain.",
      "The applicant must demonstrate they require long-term personal care due to illness, disability, or age.",
      "The UK relative must be a British citizen, settled person, or refugee.",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/uk-family-visa/adult-relative",
  },

  // ── SETTLEMENT ───────────────────────────────────────────────────────────
  {
    id: "ilr",
    label: "Indefinite Leave to Remain (ILR)",
    group: "Settlement",
    description:
      "Permanent residence in the UK. Allows you to live and work in the UK without any time restrictions.",
    baseFee: 2885,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 2885,
    notes: [
      "IHS does not apply to ILR applications.",
      "Each dependant applying at the same time pays the same fee.",
      "You must usually have lived in the UK for 5 years on a qualifying visa.",
      "The Life in the UK test (£50) and English language requirement must usually be met.",
      "This estimate does not include the Life in the UK test fee.",
    ],
    priorityAvailable: true,
    superPriorityAvailable: true,
    officialLink: "https://www.gov.uk/indefinite-leave-to-remain",
  },
  {
    id: "naturalisation",
    label: "British Citizenship (Naturalisation)",
    group: "Settlement",
    description:
      "Apply to become a British citizen after holding ILR or settled status for the required period.",
    baseFee: 1500,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 1012,
    notes: [
      "IHS does not apply to citizenship applications.",
      "Child registration as a British citizen: £1,012.",
      "You must usually have held ILR for 12 months (or be married to a British citizen).",
      "The Life in the UK test (£50) must usually be passed before applying.",
      "A citizenship ceremony fee may apply (varies by local council, typically £80–£100).",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/british-citizenship",
  },

  // ── EU SETTLEMENT ─────────────────────────────────────────────────────────
  {
    id: "euss",
    label: "EU Settlement Scheme (EUSS)",
    group: "EU Settlement",
    description:
      "For EU, EEA, and Swiss citizens and their family members who were living in the UK before 31 December 2020.",
    baseFee: 0,
    ihsApplies: false,
    ihsRate: "none",
    dependantFee: 0,
    notes: [
      "There is no application fee for the EU Settlement Scheme.",
      "IHS does not apply.",
      "The deadline for most applications was 30 June 2021, but late applications may still be accepted with a valid reason.",
      "Family members joining an EUSS holder after 31 December 2020 must apply under the standard family visa route (fees apply).",
    ],
    priorityAvailable: false,
    superPriorityAvailable: false,
    officialLink: "https://www.gov.uk/settled-status-eu-citizens-families",
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getVisaById(id: string): VisaCategory | undefined {
  return VISA_CATEGORIES.find((v) => v.id === id);
}

export function getVisasByGroup(): Record<string, VisaCategory[]> {
  return VISA_CATEGORIES.reduce(
    (acc, visa) => {
      if (!acc[visa.group]) acc[visa.group] = [];
      acc[visa.group].push(visa);
      return acc;
    },
    {} as Record<string, VisaCategory[]>
  );
}

export const VISA_GROUPS = [
  "Visitor",
  "Student",
  "Work",
  "Family",
  "Settlement",
  "EU Settlement",
];

// ─── Calculator Logic ─────────────────────────────────────────────────────────

export type CalculatorInput = {
  visaId: string;
  durationMonths: number; // how long the visa will be granted for
  numApplicants: number; // main applicant = 1
  numDependants: number;
  addPriority: boolean;
  addSuperPriority: boolean;
  addPremiumLounge: boolean;
  isNewEntrant?: boolean; // for Skilled Worker
};

export type CostBreakdownItem = {
  label: string;
  amount: number;
  perPerson?: boolean;
  note?: string;
};

export type CalculatorResult = {
  visaFeeTotal: number;
  ihsTotal: number;
  optionalServicesTotal: number;
  grandTotal: number;
  breakdown: CostBreakdownItem[];
  assumptions: string[];
  warnings: string[];
};

export function calculateCosts(input: CalculatorInput): CalculatorResult {
  const visa = getVisaById(input.visaId);
  if (!visa) {
    return {
      visaFeeTotal: 0,
      ihsTotal: 0,
      optionalServicesTotal: 0,
      grandTotal: 0,
      breakdown: [],
      assumptions: ["Visa type not found."],
      warnings: ["Please select a valid visa type."],
    };
  }

  const breakdown: CostBreakdownItem[] = [];
  const assumptions: string[] = [];
  const warnings: string[] = [];
  const totalPeople = input.numApplicants + input.numDependants;

  // ── Visa Application Fee ──────────────────────────────────────────────────
  let visaFeePerPerson = visa.baseFee ?? 0;

  // New entrant adjustment for Skilled Worker
  if (
    input.isNewEntrant &&
    (visa.id === "skilled-worker-3y" || visa.id === "skilled-worker-5y" || visa.id === "scale-up-3y")
  ) {
    if (visa.id === "skilled-worker-3y" || visa.id === "scale-up-3y") {
      visaFeePerPerson = 551;
      assumptions.push("New entrant rate applied: £551 (instead of £719).");
    } else if (visa.id === "skilled-worker-5y") {
      visaFeePerPerson = 1084;
      assumptions.push("New entrant rate applied: £1,084 (instead of £1,423).");
    }
  }

  const mainApplicantVisaFee = visaFeePerPerson * input.numApplicants;
  breakdown.push({
    label: `Visa application fee (main applicant${input.numApplicants > 1 ? "s" : ""})`,
    amount: mainApplicantVisaFee,
    note: `£${visaFeePerPerson.toLocaleString()} × ${input.numApplicants}`,
  });

  let dependantVisaFee = 0;
  if (input.numDependants > 0) {
    if (visa.dependantFee == null) {
      warnings.push(
        `Dependants cannot be added to a ${visa.label}. Dependant visa fees have not been included.`
      );
    } else {
      dependantVisaFee = (visa.dependantFee as number) * input.numDependants;
      breakdown.push({
        label: `Visa application fee (dependant${input.numDependants > 1 ? "s" : ""})`,
        amount: dependantVisaFee,
        note: `£${visa.dependantFee.toLocaleString()} × ${input.numDependants}`,
      });
    }
  }

  const visaFeeTotal = mainApplicantVisaFee + dependantVisaFee;

  // ── Immigration Health Surcharge ──────────────────────────────────────────
  let ihsTotal = 0;
  if (visa.ihsApplies) {
    const ihsRatePerYear =
      visa.ihsRate === "reduced" ? IHS_RATES.reduced : IHS_RATES.standard;
    const durationYears = Math.ceil(input.durationMonths / 12);
    const ihsPerPerson = ihsRatePerYear * durationYears;

    // Dependants who can't be added don't get IHS either
    const ihsPeople =
      visa.dependantFee == null
        ? input.numApplicants
        : totalPeople;

    ihsTotal = ihsPerPerson * ihsPeople;

    breakdown.push({
      label: `Immigration Health Surcharge (IHS)`,
      amount: ihsTotal,
      note: `£${ihsRatePerYear.toLocaleString()}/year × ${durationYears} year${durationYears > 1 ? "s" : ""} × ${ihsPeople} person${ihsPeople > 1 ? "s" : ""}`,
    });

    assumptions.push(
      `IHS calculated at £${ihsRatePerYear.toLocaleString()}/year (${visa.ihsRate} rate) for ${durationYears} year${durationYears > 1 ? "s" : ""} (${input.durationMonths} months, rounded up).`
    );
  } else if (visa.ihsRate === "none") {
    assumptions.push(`IHS does not apply to the ${visa.label}.`);
  }

  // ── Optional Services ─────────────────────────────────────────────────────
  let optionalServicesTotal = 0;

  if (input.addPriority) {
    if (!visa.priorityAvailable) {
      warnings.push(
        `Priority service is not available for the ${visa.label}. It has not been included.`
      );
    } else {
      optionalServicesTotal += OPTIONAL_SERVICES.priority.fee;
      breakdown.push({
        label: OPTIONAL_SERVICES.priority.label,
        amount: OPTIONAL_SERVICES.priority.fee,
        note: "Per application (not per person)",
      });
    }
  }

  if (input.addSuperPriority) {
    if (!visa.superPriorityAvailable) {
      warnings.push(
        `Super Priority service is not available for the ${visa.label}. It has not been included.`
      );
    } else {
      optionalServicesTotal += OPTIONAL_SERVICES.superPriority.fee;
      breakdown.push({
        label: OPTIONAL_SERVICES.superPriority.label,
        amount: OPTIONAL_SERVICES.superPriority.fee,
        note: "Per application (not per person)",
      });
    }
  }

  if (input.addPremiumLounge) {
    optionalServicesTotal += OPTIONAL_SERVICES.premiumLounge.fee;
    breakdown.push({
      label: OPTIONAL_SERVICES.premiumLounge.label,
      amount: OPTIONAL_SERVICES.premiumLounge.fee,
      note: "Per person at UKVCAS service point",
    });
  }

  const grandTotal = visaFeeTotal + ihsTotal + optionalServicesTotal;

  // ── General Warnings ──────────────────────────────────────────────────────
  warnings.push(
    "This is an estimate only. Always confirm the exact fee on GOV.UK before submitting your application."
  );

  if (visa.baseFee === null) {
    warnings.push(
      "The fee for this visa type varies. Please check GOV.UK for the exact amount."
    );
  }

  return {
    visaFeeTotal,
    ihsTotal,
    optionalServicesTotal,
    grandTotal,
    breakdown,
    assumptions,
    warnings,
  };
}
