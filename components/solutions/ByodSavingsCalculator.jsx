import React, { useMemo, useState } from 'react';
import {
  BYOD_ROI_DEFAULTS,
  BYOD_ROI_ILLUSTRATIVE_SCENARIOS,
  computeByodRoi,
  computeByodRoiProjection,
} from '../../utils/byod-roi';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1,
});

const STAFF_PRESETS = [10, 20, 50, 100];
const SENSITIVITY_MODES = [
  {
    id: 'conservative',
    label: 'Conservative',
    multiplier: 0.8,
    description: 'Assume only 80% of estimated device-path cost is truly avoidable.',
  },
  {
    id: 'base',
    label: 'Base',
    multiplier: 1,
    description: 'Use the exact device-path cost entered above.',
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    multiplier: 1.2,
    description: 'Assume higher fully-loaded device-path burden than baseline.',
  },
];

/** secondary/desert-yellow — headline ink for Sensitivity View */
const GOLD_INK = '#645839';

function InputField({ id, label, value, onChange, min = 0, step = 1, prefix = null, disabled = false }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-oasis-green-800/90">{label}</span>
      <div className="mt-2 relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-oasis-green-800/70 text-sm">{prefix}</span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={onChange}
          disabled={disabled}
          className={[
            'w-full rounded-lg border border-oasis-green-800/20 bg-white py-2.5 pr-3 text-oasis-green-800',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link',
            disabled ? 'cursor-not-allowed bg-oasis-green-50/70 text-oasis-green-800/70' : '',
            prefix ? 'pl-7' : 'pl-3',
          ].join(' ')}
        />
      </div>
    </label>
  );
}

export default function ByodSavingsCalculator() {
  const [inputs, setInputs] = useState(BYOD_ROI_DEFAULTS);
  const [sensitivityMode, setSensitivityMode] = useState('base');
  const [showFinancialDetails, setShowFinancialDetails] = useState(false);

  const selectedSensitivity = useMemo(
    () => SENSITIVITY_MODES.find((mode) => mode.id === sensitivityMode) ?? SENSITIVITY_MODES[1],
    [sensitivityMode]
  );

  const modeledDevicePathCostPerStaff = useMemo(
    () => inputs.devicePathCostPerStaff * selectedSensitivity.multiplier,
    [inputs.devicePathCostPerStaff, selectedSensitivity.multiplier]
  );

  const modeledInputs = useMemo(
    () => ({
      ...inputs,
      devicePathCostPerStaff: modeledDevicePathCostPerStaff,
    }),
    [inputs, modeledDevicePathCostPerStaff]
  );

  const roiModel = useMemo(() => computeByodRoi(modeledInputs), [modeledInputs]);
  const projectionModel = useMemo(() => computeByodRoiProjection(modeledInputs), [modeledInputs]);

  const scenarioRows = useMemo(
    () =>
      BYOD_ROI_ILLUSTRATIVE_SCENARIOS.map((staffCount) => ({
        staffCount,
        ...computeByodRoi({
          staffCount,
          devicePathCostPerStaff: modeledDevicePathCostPerStaff,
        }).computed,
      })),
    [modeledDevicePathCostPerStaff]
  );

  const onNumericInput = (field, minValue = 0) => (event) => {
    const numeric = Number(event.target.value);
    setInputs((prev) => ({
      ...prev,
      [field]: Number.isFinite(numeric) ? Math.max(minValue, numeric) : minValue,
    }));
  };

  const outputCards = [
    {
      label: 'Avoided laptop-path spend',
      value: currencyFormatter.format(roiModel.computed.avoidedCost),
    },
    {
      label: 'Net annual savings',
      value: currencyFormatter.format(roiModel.computed.netSavings),
    },
    {
      label: 'Percent saved vs laptop path',
      value: percentFormatter.format(roiModel.computed.percentSaved),
    },
    {
      label: 'ROI vs Annual Oasis cost',
      value: percentFormatter.format(roiModel.computed.roiVsSubscription),
    },
    {
      label: 'Annual Oasis cost (implied)',
      value: currencyFormatter.format(roiModel.inputs.annualOasisCost),
    },
    {
      label: 'Breakeven Staff count',
      value: numberFormatter.format(roiModel.computed.breakevenStaff),
    },
  ];

  const paybackStatus =
    roiModel.computed.netSavings >= 0
      ? `At or above breakeven (about ${numberFormatter.format(roiModel.computed.breakevenStaff)} Staff).`
      : `Below breakeven by ${currencyFormatter.format(Math.abs(roiModel.computed.netSavings))} in Year 1.`;

  return (
    <section className="bg-oasis-green-50 py-16 md:py-20 border-y border-oasis-green-800/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
          Interactive BYOD savings calculator
        </h2>
        <p className="text-oasis-green-800/95 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
          More companies are moving to enterprise browsers to reduce unnecessary spending on purchased laptops,
          shipping, and device operations for Staff who need secure access. Use the ROI calculator below to estimate
          how much your organization could save in Year 1 and over multiple years.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-oasis-green-800 mb-5 tracking-tight">Inputs</h3>
            <div className="space-y-4">
              <InputField
                id="staff-count"
                label="Staff per year"
                value={inputs.staffCount}
                onChange={onNumericInput('staffCount', 10)}
                min={10}
              />
              <InputField
                id="device-cost"
                label="Purchased-device path cost per Staff member"
                value={inputs.devicePathCostPerStaff}
                onChange={onNumericInput('devicePathCostPerStaff')}
                prefix="$"
              />
              <p className="text-sm text-oasis-green-900 -mt-1 leading-relaxed">
                The default {`$1,500`} purchased-device cost is based on historical internal data for laptop and
                shipping costs per Staff member.
              </p>
              <p className="text-sm text-oasis-green-900/90 leading-relaxed">
                Includes hardware, setup, logistics, support, and recovery overhead.
              </p>
              <InputField
                id="projection-years"
                label="Savings projection years"
                value={inputs.projectionYears}
                onChange={onNumericInput('projectionYears')}
                min={1}
              />
            </div>
            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-oasis-green-800/75 mb-2">
                Quick staff presets
              </div>
              <div className="flex flex-wrap gap-2">
                {STAFF_PRESETS.map((preset) => {
                  const isActive = inputs.staffCount === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setInputs((prev) => ({ ...prev, staffCount: preset }))}
                      className={[
                        'rounded-full !px-3 !py-1.5 text-xs font-semibold border transition-colors',
                        isActive
                          ? '!bg-oasis-green-800 !text-white !border-oasis-green-800'
                          : '!bg-oasis-green-50 !text-oasis-green-900 !border-oasis-green-800/20 hover:!bg-oasis-green-100',
                      ].join(' ')}
                    >
                      {preset} Staff
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              <div
                className="text-xs font-semibold uppercase tracking-wide mb-2"
                style={{ color: GOLD_INK }}
              >
                Sensitivity view
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {SENSITIVITY_MODES.map((mode) => {
                  const isActive = sensitivityMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSensitivityMode(mode.id)}
                      className={[
                        'text-left rounded-lg border !px-3.5 !py-3 shadow-sm transition-colors',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                        'focus-visible:outline-[#645839]',
                        isActive
                          ? '!bg-[#FEF8E8] !border-[#978455] hover:!bg-[#FEF8E8] hover:!border-[#978455] !ring-2 !ring-[#C9B072] !ring-offset-2 !ring-offset-[#FFFBF4]'
                          : '!bg-[#FDF1D2] !border-[#C9B072] hover:!bg-[#FCE3A5] hover:!border-[#978455]',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-[#645839]">{mode.label}</div>
                        {isActive && (
                          <span className="inline-flex items-center rounded-full bg-[#978455] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#FFFBF4]">
                            Selected
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-[#645839]/90">{mode.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setInputs(BYOD_ROI_DEFAULTS);
                setSensitivityMode('base');
              }}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg !border !border-[#645839] !bg-[#978455] !px-4 !py-2.5 text-sm font-semibold !text-[#FFFBF4] shadow-sm transition-colors hover:!bg-[#645839] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#645839]"
            >
              Reset to case defaults
            </button>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-2">What this means</h3>
              <p className="text-oasis-green-800/95 leading-relaxed">
                If you switch <span className="font-semibold">{numberFormatter.format(roiModel.inputs.staffCount)} Staff</span> from purchased laptops to Oasis access, you save{' '}
                <span className="font-semibold">{currencyFormatter.format(roiModel.computed.netSavings)}</span> in Year 1 and{' '}
                <span className="font-semibold">{currencyFormatter.format(projectionModel.totals.cumulativeNetSavings)}</span> over{' '}
                <span className="font-semibold">{projectionModel.projectionYears}</span> years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                <div className="rounded-lg border border-oasis-green-800/10 bg-oasis-green-50/50 p-4">
                  <div className="text-sm text-oasis-green-900/90 mb-1">Year 1 net savings</div>
                  <div className="text-2xl font-bold tracking-tight text-oasis-green-800 tabular-nums">
                    {currencyFormatter.format(roiModel.computed.netSavings)}
                  </div>
                </div>
                <div className="rounded-lg border border-oasis-green-800/10 bg-oasis-green-50/50 p-4">
                  <div className="text-sm text-oasis-green-900/90 mb-1">
                    {projectionModel.projectionYears}-year cumulative savings
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-oasis-green-800 tabular-nums">
                    {currencyFormatter.format(projectionModel.totals.cumulativeNetSavings)}
                  </div>
                </div>
                <div className="rounded-lg border border-oasis-green-800/10 bg-oasis-green-50/50 p-4">
                  <div className="text-sm text-oasis-green-900/90 mb-1">Payback status</div>
                  <div className="text-sm font-semibold text-oasis-green-900 leading-relaxed">{paybackStatus}</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-oasis-green-800 mb-3">
                {projectionModel.projectionYears}-year cumulative savings timeline
              </h3>
              <div className="space-y-3">
                {projectionModel.years.map((row) => (
                  <div key={row.year} className="rounded-lg border border-oasis-green-800/10 bg-oasis-green-50/40 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-semibold text-oasis-green-800">Year {row.year}</div>
                      <div className="text-sm text-oasis-green-800/80">
                        Annual: <span className="font-semibold tabular-nums">{currencyFormatter.format(row.annualNetSavings)}</span>
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-oasis-green-800/85">
                      Cumulative savings: <span className="font-semibold tabular-nums">{currencyFormatter.format(row.cumulativeNetSavings)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setShowFinancialDetails((prev) => !prev)}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg !border !border-oasis-green-800/20 !bg-white !px-4 !py-2 text-sm font-medium !text-oasis-green-800 hover:!bg-white hover:!border-kahana-primary-800/40 hover:!text-kahana-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
              >
                {showFinancialDetails ? 'Hide financial breakdown' : 'Show financial breakdown'}
              </button>
              {showFinancialDetails && (
                <div className="mt-5 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {outputCards.map((card) => (
                      <div key={card.label} className="rounded-xl border border-oasis-green-800/10 bg-white p-4 shadow-sm">
                        <div className="text-sm text-oasis-green-800/80 mb-1">{card.label}</div>
                        <div className="text-2xl font-bold tracking-tight text-oasis-green-800 tabular-nums">{card.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 shadow-sm overflow-x-auto">
                    <h3 className="text-base font-semibold text-oasis-green-800 mb-3">Illustrative scenario band</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b border-oasis-green-800/10">
                          <th className="py-2 pr-4 text-oasis-green-800/80 font-medium">Staff</th>
                          <th className="py-2 pr-4 text-oasis-green-800/80 font-medium">Net savings</th>
                          <th className="py-2 pr-4 text-oasis-green-800/80 font-medium">Percent saved</th>
                          <th className="py-2 text-oasis-green-800/80 font-medium">ROI vs Annual Oasis cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scenarioRows.map((row) => (
                          <tr key={row.staffCount} className="border-b border-oasis-green-800/10 last:border-b-0">
                            <td className="py-2 pr-4 text-oasis-green-800 tabular-nums">{row.staffCount}</td>
                            <td className="py-2 pr-4 text-oasis-green-800 tabular-nums">
                              {currencyFormatter.format(row.netSavings)}
                            </td>
                            <td className="py-2 pr-4 text-oasis-green-800 tabular-nums">
                              {percentFormatter.format(row.percentSaved)}
                            </td>
                            <td className="py-2 text-oasis-green-800 tabular-nums">
                              {percentFormatter.format(row.roiVsSubscription)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 shadow-sm overflow-x-auto">
                    <h3 className="text-base font-semibold text-oasis-green-800 mb-3">Year-by-year detail table</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b border-oasis-green-800/10">
                          <th className="py-2 pr-4 text-oasis-green-800/80 font-medium">Year</th>
                          <th className="py-2 pr-4 text-oasis-green-800/80 font-medium">Annual net savings</th>
                          <th className="py-2 text-oasis-green-800/80 font-medium">Cumulative net savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectionModel.years.map((row) => (
                          <tr key={row.year} className="border-b border-oasis-green-800/10 last:border-b-0">
                            <td className="py-2 pr-4 text-oasis-green-800 tabular-nums">{row.year}</td>
                            <td className="py-2 pr-4 text-oasis-green-800 tabular-nums">
                              {currencyFormatter.format(row.annualNetSavings)}
                            </td>
                            <td className="py-2 text-oasis-green-800 tabular-nums">
                              {currencyFormatter.format(row.cumulativeNetSavings)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-xs text-oasis-green-800/70 mt-8 max-w-5xl mx-auto leading-relaxed text-center">
          Figures are illustrative and assumption-based. Actual outcomes vary with shipping patterns, internal labor
          allocation, adoption scope, support overhead, and rollout effort. This model is directional decision support,
          not a guarantee of results.
        </p>
      </div>
    </section>
  );
}
