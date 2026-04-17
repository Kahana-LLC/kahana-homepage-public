import { useState } from 'react';
import { Search, Download, AlertTriangle, Clock, FileDown, Zap, Bookmark, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface Incident {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'new' | 'in_progress' | 'resolved' | 'muted';
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  app: {
    name: string;
    domain: string;
  };
  dataClassification: string[];
  timestamp: string;
  timeAgo: string;
  policy: string;
}

const incidents: Incident[] = [
  {
    id: '4821',
    title: 'Internal roadmap pasted into Grok (Free)',
    severity: 'critical',
    status: 'new',
    user: {
      name: 'Jordan Lee',
      email: 'jordan@company.com',
      avatar: 'JL',
    },
    app: {
      name: 'Grok',
      domain: 'grok.x.ai',
    },
    dataClassification: ['Confidential', 'Internal roadmap'],
    timestamp: 'Today, 2:14 PM',
    timeAgo: '3 min ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4820',
    title: 'Source code snippet shared to ChatGPT',
    severity: 'critical',
    status: 'new',
    user: {
      name: 'Alex Chen',
      email: 'alex@company.com',
      avatar: 'AC',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Confidential', 'Source code'],
    timestamp: 'Today, 1:45 PM',
    timeAgo: '32 min ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4819',
    title: 'Customer PII pasted into Claude',
    severity: 'high',
    status: 'in_progress',
    user: {
      name: 'Morgan Taylor',
      email: 'morgan@company.com',
      avatar: 'MT',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Restricted', 'PII'],
    timestamp: 'Today, 1:05 PM',
    timeAgo: '1 hour ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4818',
    title: 'Unknown AI tool detected',
    severity: 'high',
    status: 'new',
    user: {
      name: 'Sam Rivera',
      email: 'sam@company.com',
      avatar: 'SR',
    },
    app: {
      name: 'Unknown AI',
      domain: 'ai-assistant.io',
    },
    dataClassification: ['Internal'],
    timestamp: 'Today, 12:30 PM',
    timeAgo: '1 hour ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4817',
    title: 'Financial data shared to AI assistant',
    severity: 'medium',
    status: 'resolved',
    user: {
      name: 'Jordan Kim',
      email: 'jordan.k@company.com',
      avatar: 'JK',
    },
    app: {
      name: 'Gemini',
      domain: 'gemini.google.com',
    },
    dataClassification: ['Internal', 'Financial'],
    timestamp: 'Yesterday, 4:22 PM',
    timeAgo: '22 hours ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4816',
    title: 'AI tool accessed from public Wi-Fi',
    severity: 'low',
    status: 'muted',
    user: {
      name: 'Casey Brown',
      email: 'casey@company.com',
      avatar: 'CB',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Public'],
    timestamp: 'Yesterday, 2:15 PM',
    timeAgo: '1 day ago',
    policy: 'Monitor network security',
  },
  {
    id: '4815',
    title: 'API keys exposed in AI chat',
    severity: 'critical',
    status: 'in_progress',
    user: {
      name: 'Taylor Swift',
      email: 'taylor@company.com',
      avatar: 'TS',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Restricted', 'Source code'],
    timestamp: 'Yesterday, 11:30 AM',
    timeAgo: '1 day ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4814',
    title: 'Salary information shared to Copilot',
    severity: 'high',
    status: 'new',
    user: {
      name: 'Chris Park',
      email: 'chris@company.com',
      avatar: 'CP',
    },
    app: {
      name: 'Microsoft Copilot',
      domain: 'copilot.microsoft.com',
    },
    dataClassification: ['Restricted', 'PII', 'Financial'],
    timestamp: 'Yesterday, 10:15 AM',
    timeAgo: '1 day ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4813',
    title: 'Product specs uploaded to Gemini',
    severity: 'medium',
    status: 'resolved',
    user: {
      name: 'Morgan Taylor',
      email: 'morgan@company.com',
      avatar: 'MT',
    },
    app: {
      name: 'Gemini',
      domain: 'gemini.google.com',
    },
    dataClassification: ['Internal'],
    timestamp: 'Yesterday, 9:00 AM',
    timeAgo: '1 day ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4812',
    title: 'Database credentials in AI prompt',
    severity: 'critical',
    status: 'resolved',
    user: {
      name: 'Jordan Lee',
      email: 'jordan@company.com',
      avatar: 'JL',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Restricted', 'Source code'],
    timestamp: 'Apr 14, 5:45 PM',
    timeAgo: '2 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4811',
    title: 'Customer list exported to AI tool',
    severity: 'high',
    status: 'resolved',
    user: {
      name: 'Sam Rivera',
      email: 'sam@company.com',
      avatar: 'SR',
    },
    app: {
      name: 'Unknown AI',
      domain: 'smartassist.ai',
    },
    dataClassification: ['Confidential', 'PII'],
    timestamp: 'Apr 14, 3:20 PM',
    timeAgo: '2 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4810',
    title: 'Medical records accessed via AI',
    severity: 'critical',
    status: 'in_progress',
    user: {
      name: 'Alex Chen',
      email: 'alex@company.com',
      avatar: 'AC',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Restricted', 'PII'],
    timestamp: 'Apr 14, 2:10 PM',
    timeAgo: '2 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4809',
    title: 'Contract terms shared with AI',
    severity: 'high',
    status: 'new',
    user: {
      name: 'Casey Brown',
      email: 'casey@company.com',
      avatar: 'CB',
    },
    app: {
      name: 'Grok',
      domain: 'grok.x.ai',
    },
    dataClassification: ['Confidential'],
    timestamp: 'Apr 14, 1:00 PM',
    timeAgo: '2 days ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4808',
    title: 'Meeting notes uploaded to AI',
    severity: 'medium',
    status: 'muted',
    user: {
      name: 'Jordan Kim',
      email: 'jordan.k@company.com',
      avatar: 'JK',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Internal'],
    timestamp: 'Apr 14, 11:45 AM',
    timeAgo: '2 days ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4807',
    title: 'Patent application shared to Copilot',
    severity: 'critical',
    status: 'resolved',
    user: {
      name: 'Taylor Swift',
      email: 'taylor@company.com',
      avatar: 'TS',
    },
    app: {
      name: 'Microsoft Copilot',
      domain: 'copilot.microsoft.com',
    },
    dataClassification: ['Restricted', 'Internal'],
    timestamp: 'Apr 13, 4:30 PM',
    timeAgo: '3 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4806',
    title: 'Employee SSN in AI query',
    severity: 'critical',
    status: 'resolved',
    user: {
      name: 'Chris Park',
      email: 'chris@company.com',
      avatar: 'CP',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Restricted', 'PII'],
    timestamp: 'Apr 13, 2:15 PM',
    timeAgo: '3 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4805',
    title: 'Marketing strategy uploaded',
    severity: 'medium',
    status: 'resolved',
    user: {
      name: 'Morgan Taylor',
      email: 'morgan@company.com',
      avatar: 'MT',
    },
    app: {
      name: 'Gemini',
      domain: 'gemini.google.com',
    },
    dataClassification: ['Confidential'],
    timestamp: 'Apr 13, 11:00 AM',
    timeAgo: '3 days ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4804',
    title: 'SSH keys pasted into AI chat',
    severity: 'critical',
    status: 'in_progress',
    user: {
      name: 'Jordan Lee',
      email: 'jordan@company.com',
      avatar: 'JL',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Restricted', 'Source code'],
    timestamp: 'Apr 13, 9:30 AM',
    timeAgo: '3 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4803',
    title: 'Vendor pricing shared to AI',
    severity: 'high',
    status: 'new',
    user: {
      name: 'Sam Rivera',
      email: 'sam@company.com',
      avatar: 'SR',
    },
    app: {
      name: 'Unknown AI',
      domain: 'aihelp.co',
    },
    dataClassification: ['Confidential', 'Financial'],
    timestamp: 'Apr 12, 5:00 PM',
    timeAgo: '4 days ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4802',
    title: 'Research data uploaded to Grok',
    severity: 'medium',
    status: 'resolved',
    user: {
      name: 'Alex Chen',
      email: 'alex@company.com',
      avatar: 'AC',
    },
    app: {
      name: 'Grok',
      domain: 'grok.x.ai',
    },
    dataClassification: ['Internal'],
    timestamp: 'Apr 12, 3:45 PM',
    timeAgo: '4 days ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4801',
    title: 'Legal document shared with AI',
    severity: 'high',
    status: 'resolved',
    user: {
      name: 'Casey Brown',
      email: 'casey@company.com',
      avatar: 'CB',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Restricted'],
    timestamp: 'Apr 12, 1:30 PM',
    timeAgo: '4 days ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4800',
    title: 'Budget spreadsheet in AI prompt',
    severity: 'medium',
    status: 'muted',
    user: {
      name: 'Jordan Kim',
      email: 'jordan.k@company.com',
      avatar: 'JK',
    },
    app: {
      name: 'Gemini',
      domain: 'gemini.google.com',
    },
    dataClassification: ['Internal', 'Financial'],
    timestamp: 'Apr 12, 10:00 AM',
    timeAgo: '4 days ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4799',
    title: 'Architecture diagrams shared',
    severity: 'medium',
    status: 'resolved',
    user: {
      name: 'Taylor Swift',
      email: 'taylor@company.com',
      avatar: 'TS',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Internal'],
    timestamp: 'Apr 11, 4:15 PM',
    timeAgo: '5 days ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4798',
    title: 'Customer complaints data to AI',
    severity: 'low',
    status: 'resolved',
    user: {
      name: 'Chris Park',
      email: 'chris@company.com',
      avatar: 'CP',
    },
    app: {
      name: 'ChatGPT',
      domain: 'chat.openai.com',
    },
    dataClassification: ['Internal'],
    timestamp: 'Apr 11, 2:00 PM',
    timeAgo: '5 days ago',
    policy: 'Monitor AI usage',
  },
  {
    id: '4797',
    title: 'Performance review data shared',
    severity: 'high',
    status: 'in_progress',
    user: {
      name: 'Morgan Taylor',
      email: 'morgan@company.com',
      avatar: 'MT',
    },
    app: {
      name: 'Microsoft Copilot',
      domain: 'copilot.microsoft.com',
    },
    dataClassification: ['Restricted', 'PII'],
    timestamp: 'Apr 11, 11:20 AM',
    timeAgo: '5 days ago',
    policy: 'Block confidential data to unapproved AI',
  },
  {
    id: '4796',
    title: 'Code repository URL shared',
    severity: 'medium',
    status: 'new',
    user: {
      name: 'Jordan Lee',
      email: 'jordan@company.com',
      avatar: 'JL',
    },
    app: {
      name: 'Grok',
      domain: 'grok.x.ai',
    },
    dataClassification: ['Internal', 'Source code'],
    timestamp: 'Apr 11, 9:00 AM',
    timeAgo: '5 days ago',
    policy: 'Warn on internal data to AI',
  },
  {
    id: '4795',
    title: 'Client feedback uploaded to AI',
    severity: 'low',
    status: 'muted',
    user: {
      name: 'Sam Rivera',
      email: 'sam@company.com',
      avatar: 'SR',
    },
    app: {
      name: 'Claude',
      domain: 'claude.ai',
    },
    dataClassification: ['Public'],
    timestamp: 'Apr 10, 3:30 PM',
    timeAgo: '6 days ago',
    policy: 'Monitor AI usage',
  },
];

const severityConfig = {
  critical: { label: 'Critical', color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', border: 'border-[#fecaca]' },
  high: { label: 'High', color: 'text-[#ea580c]', bg: 'bg-[#fff7ed]', border: 'border-[#fed7aa]' },
  medium: { label: 'Medium', color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb]', border: 'border-[#fde68a]' },
  low: { label: 'Low', color: 'text-[#3b82f6]', bg: 'bg-[#eff6ff]', border: 'border-[#bfdbfe]' },
};

const statusConfig = {
  new: { label: 'New', color: 'bg-blue-500' },
  in_progress: { label: 'In Progress', color: 'bg-amber-500' },
  resolved: { label: 'Resolved', color: 'bg-green-600' },
  muted: { label: 'Muted', color: 'bg-gray-400' },
};

interface IncidentsListProps {
  onIncidentClick: (incidentId: string) => void;
}

export function IncidentsList({ onIncidentClick }: IncidentsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverities, setSelectedSeverities] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('last-24-hours');
  const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const toggleFilter = (array: string[], value: string, setter: (val: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter((v) => v !== value));
    } else {
      setter([...array, value]);
    }
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.policy.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSeverity = selectedSeverities.length === 0 || selectedSeverities.includes(incident.severity);
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(incident.status);

    return matchesSearch && matchesSeverity && matchesStatus;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredIncidents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedIncidents = filteredIncidents.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (array: string[], value: string, setter: (val: string[]) => void) => {
    toggleFilter(array, value, setter);
    setCurrentPage(1);
  };

  const savedViews = [
    { name: 'Critical AI incidents', count: 12 },
    { name: 'Executives', count: 5 },
    { name: 'New AI tools', count: 8 },
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      {/* Main Content: Two Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Filters Panel (25%) */}
        <motion.div
          initial={false}
          animate={{ width: isFiltersCollapsed ? '48px' : '320px' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-r border-[#e4e4e7] bg-white overflow-hidden flex-shrink-0"
        >
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              <div className={`flex items-center mb-4 ${isFiltersCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isFiltersCollapsed && <h2 className="text-sm font-medium">Filters</h2>}
                <button
                  onClick={() => setIsFiltersCollapsed(!isFiltersCollapsed)}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#f4f4f5] transition-colors"
                  title={isFiltersCollapsed ? 'Expand filters' : 'Collapse filters'}
                >
                  <Filter className="w-4 h-4 text-[#71717a]" />
                </button>
              </div>

              {!isFiltersCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#71717a]" />
                      <input
                        type="text"
                        placeholder="Search incidents by user, app, policy..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  {/* Severity */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">Severity</div>
                    <div className="flex flex-wrap gap-2">
                      {['critical', 'high', 'medium', 'low'].map((severity) => (
                        <button
                          key={severity}
                          onClick={() => handleFilterChange(selectedSeverities, severity, setSelectedSeverities)}
                          className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                            selectedSeverities.includes(severity)
                              ? severityConfig[severity as keyof typeof severityConfig].bg + ' ' +
                                severityConfig[severity as keyof typeof severityConfig].color + ' ' +
                                severityConfig[severity as keyof typeof severityConfig].border
                              : 'border-[#e4e4e7] text-[#71717a] hover:bg-[#f4f4f5]'
                          }`}
                        >
                          {severity.charAt(0).toUpperCase() + severity.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">Status</div>
                    <div className="flex flex-wrap gap-2">
                      {['new', 'in_progress', 'resolved', 'muted'].map((status) => (
                        <button
                          key={status}
                          onClick={() => handleFilterChange(selectedStatuses, status, setSelectedStatuses)}
                          className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                            selectedStatuses.includes(status)
                              ? 'border-[#0a0a0a] bg-[#0a0a0a] text-white'
                              : 'border-[#e4e4e7] text-[#71717a] hover:bg-[#f4f4f5]'
                          }`}
                        >
                          {statusConfig[status as keyof typeof statusConfig].label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Range */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">Time range</div>
                    <select
                      value={selectedTimeRange}
                      onChange={(e) => {
                        setSelectedTimeRange(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full px-3 py-2 text-xs border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                    >
                      <option value="last-1-hour">Last 1 hour</option>
                      <option value="last-24-hours">Last 24 hours</option>
                      <option value="last-7-days">Last 7 days</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  {/* Apps */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">Apps</div>
                    <div className="space-y-2">
                      {['ChatGPT', 'Grok', 'Claude', 'Unknown AI tools'].map((app) => (
                        <label key={app} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-3.5 h-3.5 rounded border-[#e4e4e7] text-[#0a0a0a]"
                          />
                          <span className="text-xs text-[#52525b] group-hover:text-[#0a0a0a]">{app}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Data Classification */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">Data classification</div>
                    <div className="space-y-2">
                      {['Public', 'Internal', 'Confidential', 'Restricted', 'PII', 'Source code'].map((classification) => (
                        <label key={classification} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-3.5 h-3.5 rounded border-[#e4e4e7] text-[#0a0a0a]"
                          />
                          <span className="text-xs text-[#52525b] group-hover:text-[#0a0a0a]">{classification}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* User Groups */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-[#71717a] mb-2">User groups</div>
                    <div className="space-y-2">
                      {['Engineering', 'Sales', 'Finance', 'Contractors', 'Executives'].map((group) => (
                        <label key={group} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-3.5 h-3.5 rounded border-[#e4e4e7] text-[#0a0a0a]"
                          />
                          <span className="text-xs text-[#52525b] group-hover:text-[#0a0a0a]">{group}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Save View Button */}
                  <button className="w-full px-3 py-2 text-xs font-medium border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors mb-6">
                    Save view
                  </button>

                  {/* Saved Views */}
                  <div>
                    <div className="text-xs font-medium text-[#71717a] mb-2">Saved views</div>
                    <div className="space-y-1">
                      {savedViews.map((view) => (
                        <button
                          key={view.name}
                          className="w-full flex items-center justify-between px-3 py-2 text-xs text-left rounded hover:bg-[#f4f4f5] transition-colors group"
                        >
                          <div className="flex items-center gap-2">
                            <Bookmark className="w-3 h-3 text-[#71717a]" />
                            <span className="text-[#52525b] group-hover:text-[#0a0a0a]">{view.name}</span>
                          </div>
                          <span className="text-[#a1a1aa] font-mono">{view.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right: Incidents Table (75%) */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#fafafa]">
          <div className="flex-1 overflow-y-auto p-6 min-h-0">

          {/* Table Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-[#52525b]">
              <span className="font-semibold font-mono">{filteredIncidents.length}</span> incidents{' '}
              <span className="text-[#71717a]">(Last 24 hours)</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-medium border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] transition-colors flex items-center gap-2">
                <FileDown className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
              <button className="px-3 py-1.5 text-xs font-medium border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] transition-colors flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Create automation</span>
              </button>
            </div>
          </div>

          {/* Incidents Table */}
          <div className="bg-white border border-[#e4e4e7] rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f4f4f5] border-b border-[#e4e4e7]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">Severity</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a] w-80">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">User</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">App</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">Data</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">Policy Triggered</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#71717a]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e4e7]">
                  {paginatedIncidents.map((incident, index) => {
                    const severity = severityConfig[incident.severity];
                    const status = statusConfig[incident.status];

                    return (
                      <motion.tr
                        key={incident.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        onClick={() => onIncidentClick(incident.id)}
                        className="hover:bg-[#fafafa] transition-colors cursor-pointer"
                      >
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${severity.bg} ${severity.color} ${severity.border}`}>
                            {severity.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 w-80">
                          <div className="text-sm text-[#0a0a0a]">
                            {incident.title}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
                              {incident.user.avatar}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-medium truncate">{incident.user.name}</div>
                              <div className="text-xs text-[#71717a] truncate font-[Geist]">{incident.user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-xs">
                            <div className="font-medium">{incident.app.name}</div>
                            <div className="text-[#71717a] font-[Geist]">{incident.app.domain}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {incident.dataClassification.map((label, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-[#f4f4f5] text-[#52525b] border border-[#e4e4e7]"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-xs text-[#52525b] max-w-[180px] truncate">
                            {incident.policy}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-xs font-mono text-[#71717a]">
                            {incident.timeAgo}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${status.color}`} />
                            <span className="text-xs">{status.label}</span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredIncidents.length === 0 && (
              <div className="p-12 text-center">
                <AlertTriangle className="w-12 h-12 text-[#d4d4d8] mx-auto mb-3" />
                <p className="text-sm text-[#71717a]">No incidents found matching your filters</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredIncidents.length > 0 && totalPages > 1 && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-[#71717a]">
                Showing <span className="font-medium text-[#0a0a0a]">{startIndex + 1}</span> to{' '}
                <span className="font-medium text-[#0a0a0a]">{Math.min(endIndex, filteredIncidents.length)}</span> of{' '}
                <span className="font-medium text-[#0a0a0a]">{filteredIncidents.length}</span> incidents
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-1.5 border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="First page"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-1.5 border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      // Show first page, last page, current page, and pages around current
                      return (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      );
                    })
                    .map((page, index, array) => {
                      // Add ellipsis if there's a gap
                      const prevPage = array[index - 1];
                      const showEllipsis = prevPage && page - prevPage > 1;

                      return (
                        <div key={page} className="flex items-center gap-1">
                          {showEllipsis && (
                            <span className="px-2 text-xs text-[#71717a]">...</span>
                          )}
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`min-w-[32px] h-8 px-2 text-xs font-medium rounded transition-colors ${
                              currentPage === page
                                ? 'bg-[#0a0a0a] text-white'
                                : 'border border-[#e4e4e7] bg-white hover:bg-[#f4f4f5]'
                            }`}
                          >
                            {page}
                          </button>
                        </div>
                      );
                    })}
                </div>

                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-1.5 border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="p-1.5 border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Last page"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
