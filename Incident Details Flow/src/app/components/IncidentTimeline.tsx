import { Globe, FileText, Copy, AlertCircle, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface TimelineEvent {
  time: string;
  title: string;
  icon: 'globe' | 'file' | 'copy' | 'alert' | 'shield';
  classification?: string;
  classificationColor?: string;
  classificationBg?: string;
  classificationBorder?: string;
}

const events: TimelineEvent[] = [
  {
    time: '2:12 PM',
    title: 'User opened Grok (grok.x.ai)',
    icon: 'globe',
  },
  {
    time: '2:13 PM',
    title: 'User viewed internal roadmap (Confluence page)',
    icon: 'file',
    classification: 'Confidential',
    classificationColor: 'text-[#ea580c]',
    classificationBg: 'bg-[#fff7ed]',
    classificationBorder: 'border-[#fed7aa]',
  },
  {
    time: '2:14 PM',
    title: 'User copied text from Confluence',
    icon: 'copy',
    classification: 'Confidential',
    classificationColor: 'text-[#ea580c]',
    classificationBg: 'bg-[#fff7ed]',
    classificationBorder: 'border-[#fed7aa]',
  },
  {
    time: '2:14 PM',
    title: 'User attempted to paste text into Grok Free prompt',
    icon: 'alert',
  },
  {
    time: '2:14 PM',
    title: "Paste blocked by policy 'Block confidential data to unapproved AI' · Incident created",
    icon: 'shield',
    classification: 'Blocked',
    classificationColor: 'text-[#dc2626]',
    classificationBg: 'bg-[#fef2f2]',
    classificationBorder: 'border-[#fecaca]',
  },
];

const iconMap = {
  globe: Globe,
  file: FileText,
  copy: Copy,
  alert: AlertCircle,
  shield: Shield,
};

export function IncidentTimeline() {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
      <h2 className="text-lg mb-5">Timeline</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#e4e4e7]" />

        <div className="space-y-4">
          {events.map((event, index) => {
            const Icon = iconMap[event.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative flex gap-4 group"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-[#e4e4e7] flex items-center justify-center group-hover:border-[#0a0a0a] transition-colors">
                    <Icon className="w-3 h-3 text-[#71717a] group-hover:text-[#0a0a0a] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs font-mono text-[#71717a] mb-1">{event.time}</div>
                      <div className="text-sm text-[#0a0a0a] leading-relaxed">{event.title}</div>
                      {event.classification && (
                        <div className="mt-2">
                          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${event.classificationBg} ${event.classificationColor} ${event.classificationBorder}`}>
                            {event.classification}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
