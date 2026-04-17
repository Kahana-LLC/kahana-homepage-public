import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { IncidentsList } from './components/IncidentsList';
import { IncidentHeader } from './components/IncidentHeader';
import { IncidentSummary } from './components/IncidentSummary';
import { IncidentTimeline } from './components/IncidentTimeline';
import { RiskAnalysis } from './components/RiskAnalysis';
import { UserHistory } from './components/UserHistory';
import { AppClassification } from './components/AppClassification';
import { IncidentActions } from './components/IncidentActions';
import { IncidentNotes } from './components/IncidentNotes';
import { LiveSessions } from './components/LiveSessions';
import { PolicyList } from './components/PolicyList';
import { PolicyBuilder } from './components/PolicyBuilder';
import { motion, AnimatePresence } from 'motion/react';

type View = 'incidents-list' | 'incident-details' | 'live-sessions' | 'policy-list' | 'policy-builder';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('incidents-list');
  const [incidentStatus, setIncidentStatus] = useState<'new' | 'in_progress' | 'resolved' | 'muted'>('new');
  const [assignedTo, setAssignedTo] = useState<string | null>(null);
  const [appStatus, setAppStatus] = useState<'unknown' | 'sanctioned' | 'unsanctioned' | 'blocked'>('unknown');

  const handleIncidentClick = (incidentId: string) => {
    setCurrentView('incident-details');
  };

  const handleViewChange = (view: View) => {
    setCurrentView(view);
  };

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        onViewChange={handleViewChange}
        incidentCount={6}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="fixed inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Content Area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Conditional Header for Incident Details */}
          {currentView === 'incident-details' && (
            <div className="border-b border-[#e4e4e7] bg-white">
              <IncidentHeader
                incidentId="4821"
                severity="critical"
                status={incidentStatus}
                assignedTo={assignedTo}
                onStatusChange={setIncidentStatus}
                onAssignChange={setAssignedTo}
                onBack={() => setCurrentView('incidents-list')}
              />
            </div>
          )}

          {/* View Content */}
          <AnimatePresence mode="wait">
            {currentView === 'incidents-list' && (
              <motion.div
                key="incidents-list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <IncidentsList onIncidentClick={handleIncidentClick} />
              </motion.div>
            )}

            {currentView === 'incident-details' && (
              <motion.div
                key="incident-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-auto h-full"
              >
                <div className="max-w-[1600px] mx-auto px-8 py-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - 2/3 width */}
                    <div className="lg:col-span-2 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <IncidentSummary />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <IncidentTimeline />
                      </motion.div>
                    </div>

                    {/* Right Column - 1/3 width */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <RiskAnalysis />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <UserHistory />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <AppClassification appStatus={appStatus} onStatusChange={setAppStatus} />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <IncidentActions appStatus={appStatus} />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <IncidentNotes />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'live-sessions' && (
              <motion.div
                key="live-sessions"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-full overflow-auto"
              >
                <LiveSessions />
              </motion.div>
            )}

            {currentView === 'policy-list' && (
              <motion.div
                key="policy-list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <PolicyList onPolicyBuilderClick={() => setCurrentView('policy-builder')} />
              </motion.div>
            )}

            {currentView === 'policy-builder' && (
              <motion.div
                key="policy-builder"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-full overflow-auto"
              >
                <PolicyBuilder onBack={() => setCurrentView('policy-list')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
