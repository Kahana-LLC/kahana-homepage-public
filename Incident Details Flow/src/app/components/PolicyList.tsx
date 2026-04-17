import { Shield, Plus, ToggleLeft, ToggleRight, Edit2, Copy, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

interface Policy {
  id: string;
  name: string;
  type: 'ai-usage' | 'data-loss' | 'access-control' | 'monitoring';
  conditionSummary: string;
  action: 'block' | 'allow-with-warning' | 'allow-and-log' | 'require-justification';
  status: 'enabled' | 'disabled' | 'report-only';
  lastUpdated: string;
  owner: string;
}

const policies: Policy[] = [
  {
    id: '1',
    name: 'Block confidential data to unapproved AI',
    type: 'ai-usage',
    conditionSummary: 'If data = Confidential AND app NOT IN Approved AI list AND action = paste/upload',
    action: 'block',
    status: 'enabled',
    lastUpdated: 'Today, 11:25 AM',
    owner: 'Security team',
  },
  {
    id: '2',
    name: 'Warn on internal data to AI',
    type: 'ai-usage',
    conditionSummary: 'If data = Internal AND app category = AI Assistant',
    action: 'allow-with-warning',
    status: 'enabled',
    lastUpdated: 'Yesterday, 3:15 PM',
    owner: 'Security team',
  },
  {
    id: '3',
    name: 'Monitor AI usage',
    type: 'ai-usage',
    conditionSummary: 'If app category = AI Assistant',
    action: 'allow-and-log',
    status: 'enabled',
    lastUpdated: 'Apr 12, 9:00 AM',
    owner: 'IT Admin',
  },
  {
    id: '4',
    name: 'Block PII data exfiltration',
    type: 'data-loss',
    conditionSummary: 'If data = PII AND action = copy/download',
    action: 'block',
    status: 'enabled',
    lastUpdated: 'Apr 10, 2:30 PM',
    owner: 'Compliance team',
  },
  {
    id: '5',
    name: 'Require justification for restricted data',
    type: 'data-loss',
    conditionSummary: 'If data = Restricted AND external share',
    action: 'require-justification',
    status: 'enabled',
    lastUpdated: 'Apr 8, 11:00 AM',
    owner: 'Security team',
  },
  {
    id: '6',
    name: 'Log all file uploads',
    type: 'monitoring',
    conditionSummary: 'If action = upload',
    action: 'allow-and-log',
    status: 'report-only',
    lastUpdated: 'Apr 5, 4:45 PM',
    owner: 'IT Admin',
  },
];

const typeConfig = {
  'ai-usage': { label: 'AI usage', color: 'text-[#7c3aed]', bg: 'bg-[#faf5ff]', border: 'border-[#e9d5ff]' },
  'data-loss': { label: 'Data loss', color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', border: 'border-[#fecaca]' },
  'access-control': { label: 'Access control', color: 'text-[#ea580c]', bg: 'bg-[#fff7ed]', border: 'border-[#fed7aa]' },
  'monitoring': { label: 'Monitoring', color: 'text-[#0891b2]', bg: 'bg-[#ecfeff]', border: 'border-[#a5f3fc]' },
};

const actionConfig = {
  'block': { label: 'Block', color: 'text-[#dc2626]' },
  'allow-with-warning': { label: 'Allow with warning', color: 'text-[#f59e0b]' },
  'allow-and-log': { label: 'Allow and log', color: 'text-[#3b82f6]' },
  'require-justification': { label: 'Require justification', color: 'text-[#7c3aed]' },
};

const statusConfig = {
  'enabled': { label: 'Enabled', color: 'text-[#16a34a]', bg: 'bg-[#f0fdf4]', border: 'border-[#bbf7d0]' },
  'disabled': { label: 'Disabled', color: 'text-[#71717a]', bg: 'bg-[#f4f4f5]', border: 'border-[#e4e4e7]' },
  'report-only': { label: 'Report-only', color: 'text-[#3b82f6]', bg: 'bg-[#eff6ff]', border: 'border-[#bfdbfe]' },
};

interface PolicyListProps {
  onPolicyBuilderClick: () => void;
}

export function PolicyList({ onPolicyBuilderClick }: PolicyListProps) {

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl">Policies</h1>
          <button
            onClick={onPolicyBuilderClick}
            className="px-4 py-2.5 text-sm font-medium bg-[#0a0a0a] text-white rounded hover:bg-[#27272a] transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New policy</span>
          </button>
        </div>

        {/* Policies Table */}
        <div className="bg-white border border-[#e4e4e7] rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fafafa] border-b border-[#e4e4e7]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Policy name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Condition summary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Last updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-[#71717a] uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e4e7]">
                {policies.map((policy, index) => {
                  const type = typeConfig[policy.type];
                  const action = actionConfig[policy.action];
                  const status = statusConfig[policy.status];

                  return (
                    <motion.tr
                      key={policy.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="hover:bg-[#fafafa] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#71717a] flex-shrink-0" />
                          <span className="text-sm font-medium">{policy.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded border ${type.bg} ${type.color} ${type.border}`}>
                          {type.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-[#71717a] font-mono">{policy.conditionSummary}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-medium ${action.color}`}>
                          {action.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded border ${status.bg} ${status.color} ${status.border}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-[#71717a]">{policy.lastUpdated}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-[#71717a]">{policy.owner}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 hover:bg-[#f4f4f5] rounded transition-colors"
                            title="Toggle policy"
                          >
                            {policy.status === 'enabled' ? (
                              <ToggleRight className="w-4 h-4 text-[#16a34a]" />
                            ) : (
                              <ToggleLeft className="w-4 h-4 text-[#a1a1aa]" />
                            )}
                          </button>
                          <button
                            className="p-1.5 hover:bg-[#f4f4f5] rounded transition-colors"
                            title="Edit policy"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-[#71717a]" />
                          </button>
                          <button
                            className="p-1.5 hover:bg-[#f4f4f5] rounded transition-colors"
                            title="Duplicate policy"
                          >
                            <Copy className="w-3.5 h-3.5 text-[#71717a]" />
                          </button>
                          <button
                            className="p-1.5 hover:bg-[#fef2f2] rounded transition-colors"
                            title="Delete policy"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-[#dc2626]" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
