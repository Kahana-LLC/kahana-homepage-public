import { History } from 'lucide-react';

interface HistoryIncident {
  date: string;
  app: string;
  policy: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'new' | 'resolved' | 'muted';
}

const incidents: HistoryIncident[] = [
  {
    date: 'Today 1:05 PM',
    app: 'ChatGPT',
    policy: 'Warn on internal data to AI',
    severity: 'high',
    status: 'resolved',
  },
  {
    date: 'Yesterday 4:22 PM',
    app: 'Unknown AI',
    policy: 'Monitor AI usage',
    severity: 'medium',
    status: 'new',
  },
  {
    date: 'Apr 13, 11:30 AM',
    app: 'Claude',
    policy: 'Monitor AI usage',
    severity: 'low',
    status: 'resolved',
  },
];

const severityConfig = {
  critical: { color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', border: 'border-[#fecaca]' },
  high: { color: 'text-[#ea580c]', bg: 'bg-[#fff7ed]', border: 'border-[#fed7aa]' },
  medium: { color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb]', border: 'border-[#fde68a]' },
  low: { color: 'text-[#3b82f6]', bg: 'bg-[#eff6ff]', border: 'border-[#bfdbfe]' },
};

const statusConfig = {
  new: { label: 'New', color: 'text-[#3b82f6]' },
  resolved: { label: 'Resolved', color: 'text-[#16a34a]' },
  muted: { label: 'Muted', color: 'text-[#71717a]' },
};

export function UserHistory() {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
      <div className="flex items-start gap-2 mb-4">
        <History className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
        <h3 className="text-base">User history</h3>
      </div>

      <div className="space-y-3">
        {incidents.map((incident, index) => {
          const severityStyle = severityConfig[incident.severity];
          const statusStyle = statusConfig[incident.status];

          return (
            <div
              key={index}
              className="p-3 border border-[#e4e4e7] rounded hover:border-[#a1a1aa] hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="text-xs font-mono text-[#71717a]">{incident.date}</div>
                <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded border ${severityStyle.bg} ${severityStyle.color} ${severityStyle.border}`}>
                  {incident.severity}
                </span>
              </div>

              <div className="text-sm font-medium mb-1 group-hover:text-[#0a0a0a] transition-colors">
                {incident.app}
              </div>

              <div className="text-xs text-[#71717a] mb-2 line-clamp-1">
                {incident.policy}
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${statusStyle.color}`}>
                  {statusStyle.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-3 text-xs text-[#71717a] hover:text-[#0a0a0a] transition-colors py-2 text-center border-t border-[#e4e4e7]">
        View all incidents for this user →
      </button>
    </div>
  );
}
