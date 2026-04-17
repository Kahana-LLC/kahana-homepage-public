import { AlertTriangle, User, Globe, Clock, FileText, Shield, Monitor } from 'lucide-react';

export function IncidentSummary() {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 bg-[#fef2f2] border border-[#fecaca] rounded">
          <AlertTriangle className="w-5 h-5 text-[#dc2626]" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg mb-1">Summary</h2>
          <p className="text-sm text-[#71717a]">Critical security incident detected</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Severity Badge */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 text-xs font-medium rounded border bg-[#fef2f2] text-[#dc2626] border-[#fecaca]">
            Critical
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base mb-2">Internal roadmap pasted into Grok (Free)</h3>
          <p className="text-sm text-[#52525b] leading-relaxed">
            User attempted to paste confidential internal roadmap into an unapproved AI tool. The action was blocked by security policy.
          </p>
        </div>

        {/* Key Fields Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-[#e4e4e7]">
          {/* User */}
          <div className="flex items-start gap-3">
            <User className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">User</div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                  JL
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">Jordan Lee</div>
                  <div className="text-xs text-[#71717a] truncate font-mono">jordan@company.com</div>
                  <div className="text-xs text-[#71717a]">Engineering</div>
                </div>
              </div>
            </div>
          </div>

          {/* App */}
          <div className="flex items-start gap-3">
            <Globe className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">App</div>
              <div className="text-sm font-medium">Grok</div>
              <div className="text-xs text-[#71717a] font-mono truncate">grok.x.ai</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[#71717a]">Category: AI Assistant</span>
                <span className="w-1 h-1 rounded-full bg-[#d4d4d8]" />
                <span className="px-1.5 py-0.5 text-xs rounded bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]">
                  Unknown
                </span>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">Time</div>
              <div className="text-sm font-medium font-mono">Today, 2:14 PM</div>
              <div className="text-xs text-[#71717a]">(5 minutes ago)</div>
            </div>
          </div>

          {/* Data Classification */}
          <div className="flex items-start gap-3">
            <FileText className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">Data classification</div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-medium rounded bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                  Confidential
                </span>
              </div>
              <div className="text-xs text-[#71717a] mt-0.5">Internal roadmap</div>
            </div>
          </div>

          {/* Policy Triggered */}
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">Policy triggered</div>
              <div className="text-sm font-medium font-mono text-[#0a0a0a]">
                Block confidential data to unapproved AI
              </div>
            </div>
          </div>

          {/* Device / Network */}
          <div className="flex items-start gap-3">
            <Monitor className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#71717a] mb-1">Device / Network</div>
              <div className="text-sm">Managed laptop</div>
              <div className="text-xs text-[#71717a] flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                  Public Wi‑Fi
                </span>
                <span>·</span>
                <span>San Francisco, US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
