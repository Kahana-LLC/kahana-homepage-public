import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export function RiskAnalysis() {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
      <div className="flex items-start gap-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
        <h3 className="text-base">Risk analysis</h3>
      </div>

      <div className="space-y-4">
        {/* Risk Level */}
        <div>
          <div className="text-xs text-[#71717a] mb-2">Risk level</div>
          <div className="px-3 py-2 rounded bg-[#fef2f2] border border-[#fecaca]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span className="text-sm font-medium text-[#dc2626]">Critical</span>
            </div>
            <p className="text-xs text-[#991b1b]">
              Confidential data + Unapproved AI tool
            </p>
          </div>
        </div>

        {/* Recommended Actions */}
        <div>
          <div className="text-xs text-[#71717a] mb-2">Recommended actions</div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] mt-0.5 flex-shrink-0" />
              <span className="text-[#52525b]">Block user access to Grok</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] mt-0.5 flex-shrink-0" />
              <span className="text-[#52525b]">Review other AI-related incidents for this user</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] mt-0.5 flex-shrink-0" />
              <span className="text-[#52525b]">Mark Grok as sanctioned or unsanctioned</span>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="pt-3 border-t border-[#e4e4e7]">
          <div className="text-xs text-[#71717a] mb-2">Context</div>
          <p className="text-xs text-[#52525b] leading-relaxed">
            This is the first critical incident for this user. Previous incidents were low to medium severity warnings.
          </p>
        </div>
      </div>
    </div>
  );
}
