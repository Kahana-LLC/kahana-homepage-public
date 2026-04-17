import { AlertTriangle, Activity, FileText, Hammer, LayoutGrid, PanelLeftClose, PanelLeft, Bell, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type View = 'incidents-list' | 'incident-details' | 'live-sessions' | 'policy-list' | 'policy-builder';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  incidentCount?: number;
}

interface NavItem {
  id: View;
  label: string;
  icon: typeof AlertTriangle;
  badge?: number;
  disabled?: boolean;
}

export function Sidebar({ currentView, onViewChange, incidentCount = 0 }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'incidents-list',
      label: 'Incidents',
      icon: AlertTriangle,
      badge: incidentCount,
    },
    {
      id: 'live-sessions',
      label: 'Live Sessions',
      icon: Activity,
    },
    {
      id: 'policy-list',
      label: 'Policies',
      icon: FileText,
    },
    {
      id: 'policy-builder',
      label: 'Policy Builder',
      icon: Hammer,
    },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? '64px' : '256px' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border-r border-[#e4e4e7] h-screen flex flex-col flex-shrink-0 overflow-hidden"
    >
      {/* Logo/Brand */}
      <div className="p-6 border-b border-[#e4e4e7]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 bg-[#0a0a0a] rounded flex items-center justify-center flex-shrink-0">
              <LayoutGrid className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 min-w-0"
              >
                <div className="text-sm font-semibold truncate">Oasis Admin</div>
                <div className="text-xs text-[#71717a] truncate">Enterprise Browser</div>
              </motion.div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f4f4f5] transition-colors flex-shrink-0"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <PanelLeft className="w-4 h-4 text-[#71717a]" />
            ) : (
              <PanelLeftClose className="w-4 h-4 text-[#71717a]" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id ||
              (item.id === 'incidents-list' && currentView === 'incident-details');

            return (
              <button
                key={item.id}
                onClick={() => !item.disabled && onViewChange(item.id)}
                disabled={item.disabled}
                title={isCollapsed ? item.label : undefined}
                className={`relative w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-md text-sm transition-all ${
                  isActive
                    ? 'bg-[#0a0a0a] text-white'
                    : 'text-[#52525b] hover:bg-[#f4f4f5] hover:text-[#0a0a0a]'
                } ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </div>
                {!isCollapsed && item.badge !== undefined && item.badge > 0 && (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className={`px-2 py-0.5 text-xs font-medium rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#dc2626] text-white'
                    }`}
                  >
                    {item.badge}
                  </motion.span>
                )}
                {isCollapsed && item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#dc2626] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-[#e4e4e7]">
        {/* Action Buttons */}
        <div className="p-4 space-y-2">
          {!isCollapsed ? (
            <>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-[#f4f4f5] transition-colors text-[#52525b] hover:text-[#0a0a0a]">
                <Bell className="w-4 h-4 flex-shrink-0" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-[#f4f4f5] transition-colors text-[#52525b] hover:text-[#0a0a0a]">
                <Settings className="w-4 h-4 flex-shrink-0" />
                <span>Settings</span>
              </button>
            </>
          ) : (
            <>
              <button
                title="Notifications"
                className="w-full flex items-center justify-center px-3 py-2 rounded hover:bg-[#f4f4f5] transition-colors"
              >
                <Bell className="w-4 h-4 text-[#71717a]" />
              </button>
              <button
                title="Settings"
                className="w-full flex items-center justify-center px-3 py-2 rounded hover:bg-[#f4f4f5] transition-colors"
              >
                <Settings className="w-4 h-4 text-[#71717a]" />
              </button>
            </>
          )}
        </div>

        {/* Admin User */}
        <div className="p-4 border-t border-[#e4e4e7]">
          <div className={`px-3 py-2 ${isCollapsed ? 'flex justify-center' : ''}`}>
            {!isCollapsed && <div className="text-xs text-[#71717a] mb-1">Admin</div>}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
                AD
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">Admin User</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
