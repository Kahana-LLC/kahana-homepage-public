import { useState } from 'react';
import { User, Globe, AlertTriangle, MapPin, Monitor, Activity, Power, Ban, RefreshCw, ToggleLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Session {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  apps: string[];
  risk: 'normal' | 'elevated' | 'high';
  incidents: number;
  location: string;
  device: 'managed' | 'unmanaged';
  started: string;
}

const sessions: Session[] = [
  {
    id: '1',
    user: {
      name: 'Jordan Lee',
      email: 'jordan@company.com',
      avatar: 'JL',
    },
    apps: ['Grok', 'ChatGPT', 'Salesforce'],
    risk: 'high',
    incidents: 3,
    location: 'San Francisco, US',
    device: 'managed',
    started: '2:12 PM',
  },
  {
    id: '2',
    user: {
      name: 'Alex Chen',
      email: 'alex@company.com',
      avatar: 'AC',
    },
    apps: ['Slack', 'Gmail', 'Linear'],
    risk: 'normal',
    incidents: 0,
    location: 'New York, US',
    device: 'managed',
    started: '9:45 AM',
  },
  {
    id: '3',
    user: {
      name: 'Morgan Taylor',
      email: 'morgan@company.com',
      avatar: 'MT',
    },
    apps: ['Claude', 'Notion'],
    risk: 'elevated',
    incidents: 1,
    location: 'London, UK',
    device: 'unmanaged',
    started: '1:30 PM',
  },
];

const riskConfig = {
  normal: { label: 'Normal', color: 'text-[#16a34a]', bg: 'bg-[#f0fdf4]', border: 'border-[#bbf7d0]' },
  elevated: { label: 'Elevated', color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb]', border: 'border-[#fde68a]' },
  high: { label: 'High', color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', border: 'border-[#fecaca]' },
};

export function LiveSessions() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(sessions[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl mb-1">Live sessions</h1>
          <p className="text-sm text-[#71717a]">Real-time monitoring and control</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 px-3 py-1.5 border border-[#e4e4e7] rounded bg-white cursor-pointer hover:bg-[#f4f4f5] transition-colors">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-[#e4e4e7] text-[#0a0a0a]"
            />
            <span className="text-xs">Auto-refresh</span>
          </label>
          <div className="text-xs text-[#71717a] font-mono">
            Last updated: Just now
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sessions Table */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-[#e4e4e7] rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#fafafa] border-b border-[#e4e4e7]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">App(s) in use</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">Risk</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">Recent incidents</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">Device</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">Started</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#71717a] uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e4e7]">
                  {sessions.map((session) => {
                    const risk = riskConfig[session.risk];
                    const isSelected = selectedSession?.id === session.id;

                    return (
                      <tr
                        key={session.id}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-[#f4f4f5]' : 'hover:bg-[#fafafa]'
                        }`}
                        onClick={() => setSelectedSession(session)}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                              {session.user.avatar}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{session.user.name}</div>
                              <div className="text-xs text-[#71717a] font-mono">{session.user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {session.apps.map((app, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs bg-[#f4f4f5] border border-[#e4e4e7] rounded"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${risk.bg} ${risk.color} ${risk.border}`}>
                            {risk.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-sm font-mono text-[#3b82f6] hover:underline">
                            {session.incidents}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
                            <MapPin className="w-3 h-3" />
                            <span>{session.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <Monitor className={`w-3.5 h-3.5 ${session.device === 'managed' ? 'text-[#16a34a]' : 'text-[#f59e0b]'}`} />
                            <span className="text-xs capitalize">{session.device}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-mono text-[#71717a]">{session.started}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="px-3 py-1.5 text-xs font-medium border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors">
                            View session
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Session Details Panel */}
        <div>
          <AnimatePresence mode="wait">
            {selectedSession && (
              <motion.div
                key={selectedSession.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Header */}
                <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                      {selectedSession.user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium mb-0.5">
                        Session: {selectedSession.user.name}
                      </div>
                      <div className="text-xs text-[#71717a]">
                        {selectedSession.device === 'managed' ? 'Managed' : 'Unmanaged'} laptop · {selectedSession.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Activity */}
                <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-[#71717a]" />
                    <h3 className="text-sm font-medium">Current activity</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedSession.apps.map((app, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-[#fafafa] rounded">
                        <Globe className="w-3.5 h-3.5 text-[#71717a]" />
                        <div className="flex-1">
                          <div className="text-xs font-medium">{app}</div>
                          <div className="text-[10px] text-[#71717a] font-mono">
                            {app.toLowerCase().replace(' ', '')}.com
                          </div>
                        </div>
                        {app === 'Grok' && (
                          <AlertTriangle className="w-3.5 h-3.5 text-[#dc2626]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Actions */}
                <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
                  <h3 className="text-sm font-medium mb-3">Recent actions (last 5 min)</h3>
                  <div className="space-y-2 text-xs text-[#71717a]">
                    <div className="flex items-start gap-2">
                      <span className="font-mono">2:14 PM</span>
                      <span>Attempted paste into Grok</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono">2:14 PM</span>
                      <span>Copied text from Confluence</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono">2:13 PM</span>
                      <span>Opened Confluence page</span>
                    </div>
                  </div>
                </div>

                {/* Session Controls */}
                <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
                  <h3 className="text-sm font-medium mb-3">Session controls</h3>
                  <div className="space-y-2">
                    <button className="w-full px-3 py-2 text-xs text-left bg-[#dc2626] text-white rounded hover:bg-[#b91c1c] transition-colors flex items-center gap-2">
                      <Power className="w-3.5 h-3.5" />
                      <span>Terminate session</span>
                    </button>
                    <button className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2">
                      <Ban className="w-3.5 h-3.5" />
                      <span>Block unapproved AI tools</span>
                    </button>
                    <button className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Force re-auth</span>
                    </button>
                    <label className="flex items-center gap-2 px-3 py-2 cursor-pointer border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors">
                      <ToggleLeft className="w-3.5 h-3.5" />
                      <span className="text-xs">Monitor-only mode</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
