import { ChevronLeft } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

interface IncidentHeaderProps {
  incidentId: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'new' | 'in_progress' | 'resolved' | 'muted';
  assignedTo: string | null;
  onStatusChange: (status: 'new' | 'in_progress' | 'resolved' | 'muted') => void;
  onAssignChange: (assignee: string | null) => void;
  onBack: () => void;
}

const severityConfig = {
  critical: { label: 'Critical', color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', border: 'border-[#fecaca]' },
  high: { label: 'High', color: 'text-[#ea580c]', bg: 'bg-[#fff7ed]', border: 'border-[#fed7aa]' },
  medium: { label: 'Medium', color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb]', border: 'border-[#fde68a]' },
  low: { label: 'Low', color: 'text-[#3b82f6]', bg: 'bg-[#eff6ff]', border: 'border-[#bfdbfe]' },
};

const statusOptions = [
  { value: 'new', label: 'New', color: 'bg-blue-500' },
  { value: 'in_progress', label: 'In Progress', color: 'bg-amber-500' },
  { value: 'resolved', label: 'Resolved', color: 'bg-green-600' },
  { value: 'muted', label: 'Muted', color: 'bg-gray-400' },
];

const assigneeOptions = [
  { value: 'unassigned', label: 'Unassigned' },
  { value: 'alex_chen', label: 'Alex Chen' },
  { value: 'morgan_taylor', label: 'Morgan Taylor' },
  { value: 'sam_rivera', label: 'Sam Rivera' },
  { value: 'jordan_kim', label: 'Jordan Kim' },
];

export function IncidentHeader({
  incidentId,
  severity,
  status,
  assignedTo,
  onStatusChange,
  onAssignChange,
  onBack,
}: IncidentHeaderProps) {
  const config = severityConfig[severity];

  return (
    <div className="border-b border-[#e4e4e7] bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Back link */}
          <button onClick={onBack} className="flex items-center gap-2 text-[#71717a] hover:text-[#0a0a0a] transition-colors group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm">All incidents</span>
          </button>

          {/* Center: Title */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <h1 className="text-lg">
              Incident{' '}
              <span className="font-mono font-semibold">#{incidentId}</span>
            </h1>
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded border ${config.bg} ${config.color} ${config.border}`}>
              {config.label}
            </span>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-3">
            {/* Status Dropdown */}
            <Select.Root value={status} onValueChange={(val) => onStatusChange(val as any)}>
              <Select.Trigger className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] transition-colors">
                <span className={`w-1.5 h-1.5 rounded-full ${statusOptions.find(s => s.value === status)?.color}`} />
                <Select.Value />
                <ChevronDown className="w-3.5 h-3.5 text-[#71717a]" />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="bg-white border border-[#e4e4e7] rounded-md shadow-lg overflow-hidden min-w-[160px]">
                  <Select.Viewport>
                    {statusOptions.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.value}
                        className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-[#f4f4f5] outline-none"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${option.color}`} />
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </div>
                        <Select.ItemIndicator>
                          <Check className="w-3.5 h-3.5" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            {/* Assign Dropdown */}
            <Select.Root value={assignedTo || 'unassigned'} onValueChange={(val) => onAssignChange(val === 'unassigned' ? null : val)}>
              <Select.Trigger className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-[#e4e4e7] rounded bg-white hover:bg-[#f4f4f5] transition-colors">
                <Select.Value />
                <ChevronDown className="w-3.5 h-3.5 text-[#71717a]" />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="bg-white border border-[#e4e4e7] rounded-md shadow-lg overflow-hidden min-w-[180px]">
                  <Select.Viewport>
                    {assigneeOptions.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.value}
                        className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-[#f4f4f5] outline-none"
                      >
                        <Select.ItemText>{option.label}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="w-3.5 h-3.5" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
