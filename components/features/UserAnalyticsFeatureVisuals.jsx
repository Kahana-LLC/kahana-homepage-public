import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LineChart from '../analytics/LineChart';
import BarChart from '../analytics/BarChart';
import DonutChart from '../analytics/DonutChart';
import HorizontalBarChart from '../analytics/HorizontalBarChart';
import HeatmapChart from '../analytics/HeatmapChart';
import KPIStat from '../analytics/KPIStat';
import Tabs from '../analytics/Tabs';
import UserAnalyticsHeroPreview from './UserAnalyticsHeroPreview';
import { subtleTransition, usePrefersReducedMotion } from '../solutions/visuals/motion';

const BRAND = {
  teal: '#489CB5',
  olive: '#7A9200',
  moss: '#495800',
  tealSoft: 'rgba(72, 156, 181, 0.35)',
  mossSoft: 'rgba(73, 88, 0, 0.25)',
};

const chartCardClass = 'rounded-2xl border border-oasis-green-800/10 bg-white p-5 shadow-sm';

function FeatureSplit({ id, eyebrow, title, body, children, imageFirst = false }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const copy = (
    <div className={imageFirst ? 'lg:order-2' : ''}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-oasis-green-600">{eyebrow}</p>
      )}
      <h2 id={id} className="mb-4 text-2xl font-bold tracking-tight text-oasis-green-800 md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-oasis-green-800/95">{body}</div>
    </div>
  );
  const visual = <div className={imageFirst ? 'lg:order-1' : ''}>{children}</div>;
  return (
    <motion.div
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: subtleTransition.ease }}
    >
      {copy}
      {visual}
    </motion.div>
  );
}

export default function UserAnalyticsFeatureVisuals() {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'skills', label: 'Skills & commands' },
    { key: 'tokens', label: 'Usage & tokens' },
    { key: 'training', label: 'Training & feedback' },
  ];

  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const messagesSeries = [12, 18, 22, 15, 28, 8, 14];
  const weekLabels = ['W1', 'W2', 'W3', 'W4'];
  const tokensCumulative = [180, 420, 710, 980].map((k) => k * 1000);

  const skillsTop = {
    labels: ['Summarize page', 'Search open tabs', 'Draft reply', 'Explain selection', 'Voice turn'],
    values: [34, 27, 19, 12, 8],
  };

  const tokenSplitData = [
    { label: 'Assistant replies', value: 68, color: BRAND.teal },
    { label: 'Other model use', value: 22, color: BRAND.olive },
    { label: 'Unused (example)', value: 10, color: BRAND.mossSoft },
  ];

  const assistantHeatmap = [
    [0, 1, 2, 3, 4, 2, 1],
    [1, 3, 4, 5, 6, 4, 2],
    [2, 4, 6, 7, 8, 5, 3],
    [1, 2, 4, 5, 5, 3, 2],
    [0, 1, 2, 2, 3, 2, 1],
  ];
  const heatCols = ['8a', '10a', '12p', '2p', '4p', '6p', '8p'];
  const heatRows = ['M', 'T', 'W', 'T', 'F'];

  const feedbackWeeks = ['W1', 'W2', 'W3', 'W4'];
  const feedbackSeries = [4, 7, 6, 9];
  const helpfulRateSeries = [78, 80, 81, 82];

  return (
    <>
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureSplit
            id="analytics-preview"
            eyebrow="Illustrative UI · not live"
            title="A single place to read your Oasis rhythm"
            imageFirst
            body={
              <>
                <p>
                  Instead of piecing together exports or generic browser history, the intent is a calm, on-device-aware
                  summary: how often you work with the assistant, which skills you lean on, and how usage relates to your
                  plan.
                </p>
                <p className="text-sm text-oasis-green-800/80">
                  Everything here is mock layout. When we ship insights, we will document what is collected, how long it
                  is kept, and what you can clear or opt out of.
                </p>
              </>
            }
          >
            <UserAnalyticsHeroPreview />
          </FeatureSplit>
        </div>
      </section>

      <section className="border-b border-oasis-green-800/8 bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-oasis-green-600">What we are building</p>
            <p className="leading-relaxed text-oasis-green-800/95">
              Insights belong in the same product surface as{' '}
              <span className="font-medium text-oasis-green-800">assistant, voice, and skills</span>—so you can adjust how you
              work without leaving Oasis. The tabs below sketch the kinds of views we are exploring; names and metrics
              will change until release notes say otherwise.
            </p>
          </div>

          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-oasis-green-600">
            Interactive samples
          </p>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-oasis-green-800 md:text-3xl">
            Preview tabbed views
          </h2>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
          </div>

          {activeTab === 'overview' && (
            <>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <KPIStat
                  label="Days with assistant (example week)"
                  value="5"
                  trend="Illustrative"
                  iconColor="teal"
                />
                <KPIStat
                  label="Assistant messages (7 days)"
                  value="127"
                  trend="Mock count"
                  iconColor="olive"
                />
                <KPIStat
                  label="Distinct skills used"
                  value="8"
                  trend="Mock count"
                  iconColor="blue"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Messages per day (example week)</div>
                  <LineChart
                    labels={dayLabels}
                    datasets={[
                      { label: 'Messages', data: messagesSeries, borderColor: BRAND.teal, backgroundColor: 'rgba(72,156,181,0.12)', fill: true },
                    ]}
                    yMin={0}
                    yMax={40}
                  />
                </div>
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">When assistant activity clusters (mock)</div>
                  <HeatmapChart
                    data={assistantHeatmap}
                    rowLabels={heatRows}
                    colLabels={heatCols}
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'skills' && (
            <>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <KPIStat label="Top skill (mock)" value="Summarize page" trend="By run count" iconColor="teal" />
                <KPIStat label="Runs this month (mock)" value="412" trend="All skills" iconColor="olive" />
                <KPIStat label="Voice share (mock)" value="14%" trend="Of assistant turns" iconColor="blue" />
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Most-used skills (illustrative)</div>
                  <HorizontalBarChart
                    labels={skillsTop.labels}
                    values={skillsTop.values}
                    color={BRAND.tealSoft}
                  />
                </div>
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Weekly skill runs (mock trend)</div>
                  <BarChart
                    labels={weekLabels}
                    values={[48, 62, 55, 71]}
                    color={BRAND.tealSoft}
                    yMin={0}
                    yMax={100}
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'tokens' && (
            <>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <KPIStat
                  label="Tokens this month (example)"
                  value="1.2M"
                  trend="Not billing data"
                  iconColor="teal"
                />
                <KPIStat
                  label="Plan allowance (example)"
                  value="2.0M"
                  trend="For illustration only"
                  iconColor="olive"
                />
                <KPIStat label="Rough pace (mock)" value="~12 days left" trend="If usage stays flat" iconColor="blue" />
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Cumulative usage by week (mock)</div>
                  <LineChart
                    labels={weekLabels}
                    datasets={[
                      {
                        label: 'Tokens (thousands)',
                        data: tokensCumulative.map((n) => Math.round(n / 1000)),
                        borderColor: BRAND.moss,
                        backgroundColor: 'rgba(73,88,0,0.08)',
                        fill: true,
                      },
                    ]}
                    yMin={0}
                  />
                </div>
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Split of usage (illustrative)</div>
                  <DonutChart data={tokenSplitData} />
                </div>
              </div>
            </>
          )}

          {activeTab === 'training' && (
            <>
              <p className="mb-6 text-center text-sm text-oasis-green-800/80">
                Aligns conceptually with structured feedback when{' '}
                <span className="font-medium text-oasis-green-800">Amplifier</span> ships; many users will see zeros until then.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <KPIStat label="Feedback moments (30d, mock)" value="24" trend="Thumbs + tags" iconColor="teal" />
                <KPIStat label="Helpful rate (mock)" value="82%" trend="Illustrative" iconColor="olive" />
                <KPIStat label="Short notes left (mock)" value="9" trend="Optional context" iconColor="blue" />
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Feedback moments per week (mock)</div>
                  <LineChart
                    labels={feedbackWeeks}
                    datasets={[
                      { label: 'Count', data: feedbackSeries, borderColor: BRAND.olive, backgroundColor: 'rgba(122,146,0,0.1)', fill: true },
                    ]}
                    yMin={0}
                    yMax={12}
                  />
                </div>
                <div className={chartCardClass}>
                  <div className="mb-3 font-semibold text-oasis-green-800">Helpful share trend (mock %)</div>
                  <LineChart
                    labels={feedbackWeeks}
                    datasets={[{ label: 'Helpful %', data: helpfulRateSeries, borderColor: BRAND.teal }]}
                    yMin={70}
                    yMax={90}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
