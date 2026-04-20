const clampNumber = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, numeric);
};

export const BYOD_PRICE_PER_STAFF_PER_YEAR = 150;
export const BYOD_ANNUAL_MINIMUM = 12000;
const BYOD_DEFAULT_DEVICE_PATH_COST_PER_STAFF = 1500;

export const BYOD_ROI_DEFAULTS = {
  staffCount: 20,
  devicePathCostPerStaff: BYOD_DEFAULT_DEVICE_PATH_COST_PER_STAFF,
  projectionYears: 3,
};

export function computeByodRoi(inputs) {
  const rawStaffCount = clampNumber(inputs?.staffCount ?? inputs?.contractorCount);
  const staffCount = rawStaffCount;
  const devicePathCostPerStaff = clampNumber(
    inputs?.devicePathCostPerStaff ?? inputs?.laptopCostPerContractor
  );
  const annualOasisCost = Math.max(BYOD_ANNUAL_MINIMUM, staffCount * BYOD_PRICE_PER_STAFF_PER_YEAR);

  const avoidedCost = staffCount * devicePathCostPerStaff;
  const netSavings = avoidedCost - annualOasisCost;
  const percentSaved = avoidedCost > 0 ? netSavings / avoidedCost : 0;
  const roiVsSubscription = annualOasisCost > 0 ? netSavings / annualOasisCost : 0;
  const breakevenStaff = devicePathCostPerStaff > 0 ? annualOasisCost / devicePathCostPerStaff : 0;

  return {
    inputs: {
      staffCount,
      devicePathCostPerStaff,
      annualOasisCost,
      annualMinimum: BYOD_ANNUAL_MINIMUM,
      pricePerStaffPerYear: BYOD_PRICE_PER_STAFF_PER_YEAR,
    },
    computed: {
      avoidedCost,
      netSavings,
      percentSaved,
      roiVsSubscription,
      breakevenStaff,
    },
  };
}

export function computeByodRoiProjection(inputs) {
  const projectionYears = Math.max(1, Math.floor(clampNumber(inputs?.projectionYears) || 1));
  const annual = computeByodRoi(inputs);

  const years = Array.from({ length: projectionYears }, (_, idx) => {
    const year = idx + 1;
    const annualAvoidedCost = annual.computed.avoidedCost;
    const annualSubscriptionCost = annual.inputs.annualOasisCost;
    const annualNetSavings = annual.computed.netSavings;
    return {
      year,
      annualAvoidedCost,
      annualSubscriptionCost,
      annualNetSavings,
      cumulativeAvoidedCost: annualAvoidedCost * year,
      cumulativeSubscriptionCost: annualSubscriptionCost * year,
      cumulativeNetSavings: annualNetSavings * year,
    };
  });

  const totals = years[years.length - 1];

  return {
    projectionYears,
    annual,
    years,
    totals,
  };
}

export const BYOD_ROI_ILLUSTRATIVE_SCENARIOS = [80, 100, 150, 200, 300];
