import { Globe, CheckCircle2, XCircle, Ban } from 'lucide-react';
import { motion } from 'motion/react';

interface AppClassificationProps {
  appStatus: 'unknown' | 'sanctioned' | 'unsanctioned' | 'blocked';
  onStatusChange: (status: 'unknown' | 'sanctioned' | 'unsanctioned' | 'blocked') => void;
}

const statusConfig = {
  unknown: {
    label: 'Unknown',
    color: 'text-[#dc2626]',
    bg: 'bg-[#fef2f2]',
    border: 'border-[#fecaca]',
    icon: XCircle,
  },
  sanctioned: {
    label: 'Sanctioned',
    color: 'text-[#16a34a]',
    bg: 'bg-[#f0fdf4]',
    border: 'border-[#bbf7d0]',
    icon: CheckCircle2,
  },
  unsanctioned: {
    label: 'Unsanctioned',
    color: 'text-[#ea580c]',
    bg: 'bg-[#fff7ed]',
    border: 'border-[#fed7aa]',
    icon: XCircle,
  },
  blocked: {
    label: 'Blocked',
    color: 'text-[#dc2626]',
    bg: 'bg-[#fef2f2]',
    border: 'border-[#fecaca]',
    icon: Ban,
  },
};

export function AppClassification({ appStatus, onStatusChange }: AppClassificationProps) {
  const currentStatus = statusConfig[appStatus];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
      <div className="flex items-start gap-2 mb-4">
        <Globe className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
        <h3 className="text-base">App classification</h3>
      </div>

      <div className="space-y-4">
        {/* App Info */}
        <div>
          <div className="text-sm font-medium mb-1">Grok</div>
          <div className="text-xs text-[#71717a] font-mono mb-1">grok.x.ai</div>
          <div className="text-xs text-[#71717a]">Category: AI Assistant</div>
        </div>

        {/* Current Status */}
        <div>
          <div className="text-xs text-[#71717a] mb-2">Status</div>
          <motion.div
            key={appStatus}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`inline-flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded border ${currentStatus.bg} ${currentStatus.color} ${currentStatus.border}`}
          >
            <StatusIcon className="w-3.5 h-3.5" />
            <span>{currentStatus.label}</span>
          </motion.div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-3 border-t border-[#e4e4e7]">
          <button
            onClick={() => onStatusChange('sanctioned')}
            disabled={appStatus === 'sanctioned'}
            className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Mark as sanctioned</span>
            </div>
          </button>

          <button
            onClick={() => onStatusChange('unsanctioned')}
            disabled={appStatus === 'unsanctioned'}
            className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <div className="flex items-center gap-2">
              <XCircle className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Mark as unsanctioned</span>
            </div>
          </button>

          <button
            onClick={() => onStatusChange('blocked')}
            disabled={appStatus === 'blocked'}
            className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#fef2f2] hover:border-[#fecaca] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <div className="flex items-center gap-2">
              <Ban className="w-3.5 h-3.5 text-[#dc2626]" />
              <span className="font-medium">Always block for all users</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
