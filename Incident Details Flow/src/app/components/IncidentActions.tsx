import { Ban, Users, BellOff, MessageSquare, FileText, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IncidentActionsProps {
  appStatus: 'unknown' | 'sanctioned' | 'unsanctioned' | 'blocked';
}

export function IncidentActions({ appStatus }: IncidentActionsProps) {
  const [requireJustification, setRequireJustification] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);

  const handleAction = (actionName: string) => {
    setShowConfirmation(actionName);
    setTimeout(() => setShowConfirmation(null), 2000);
  };

  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
      <h3 className="text-base mb-4">Actions</h3>

      <div className="space-y-3">
        {/* Primary Actions */}
        <div className="space-y-2">
          <button
            onClick={() => handleAction('Block for user')}
            className="w-full px-3 py-2.5 text-sm font-medium text-left bg-[#0a0a0a] text-white rounded hover:bg-[#27272a] transition-colors flex items-center gap-2"
          >
            <Ban className="w-4 h-4" />
            <span>Block Grok for this user</span>
          </button>

          <button
            onClick={() => handleAction('Block for everyone')}
            disabled={appStatus === 'blocked'}
            className="w-full px-3 py-2.5 text-sm font-medium text-left bg-[#dc2626] text-white rounded hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>Block Grok for everyone</span>
          </button>

          <button
            onClick={() => handleAction('Mute similar')}
            className="w-full px-3 py-2.5 text-sm text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2"
          >
            <BellOff className="w-4 h-4" />
            <span>Mute similar incidents for 24 hours</span>
          </button>
        </div>

        {/* Secondary Actions */}
        <div className="pt-3 border-t border-[#e4e4e7] space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={requireJustification}
              onChange={(e) => setRequireJustification(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-[#e4e4e7] text-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/20"
            />
            <span className="text-xs text-[#52525b] group-hover:text-[#0a0a0a] transition-colors">
              Require justification next time user opens this app
            </span>
          </label>

          <button
            onClick={() => handleAction('Create Jira ticket')}
            className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5 text-[#71717a]" />
            <span>Create ticket in Jira</span>
          </button>

          <button
            onClick={() => handleAction('Notify manager')}
            className="w-full px-3 py-2 text-xs text-left border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-[#71717a]" />
            <span>Send notification to manager</span>
          </button>
        </div>
      </div>

      {/* Confirmation Toast */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 p-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
            <span className="text-xs text-[#166534]">
              Action "{showConfirmation}" executed successfully
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
