import React from 'react'
import { NavigationItem } from './AppShell'
import {
  LayoutDashboard,
  Scan,
  Sparkles,
  Plug,
  FileCheck,
  Settings,
  HelpCircle
} from 'lucide-react'

interface MainNavProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
}

const iconMap: Record<string, React.ReactNode> = {
  'Security Dashboard': <LayoutDashboard size={20} />,
  'Automated Scanning': <Scan size={20} />,
  'AI Fix Engine': <Sparkles size={20} />,
  'Integration & Setup': <Plug size={20} />,
  'Audit & Compliance': <FileCheck size={20} />,
  'Settings': <Settings size={20} />,
  'Help': <HelpCircle size={20} />,
}

export function MainNav({ items, onNavigate }: MainNavProps) {
  // Split navigation items into main sections and utility items
  const mainItems = items.filter(item =>
    !['Settings', 'Help'].includes(item.label)
  )
  const utilityItems = items.filter(item =>
    ['Settings', 'Help'].includes(item.label)
  )

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Zelyo
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {mainItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => onNavigate?.(item.href)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-sm font-medium transition-colors
                  ${
                    item.isActive
                      ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }
                `}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className={item.isActive ? 'text-violet-600 dark:text-violet-400' : 'text-slate-500 dark:text-slate-400'}>
                  {item.icon || iconMap[item.label]}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Utility navigation */}
      {utilityItems.length > 0 && (
        <div className="px-3 py-4 border-t border-slate-200 dark:border-slate-800">
          <ul className="space-y-1">
            {utilityItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => onNavigate?.(item.href)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                    text-sm font-medium transition-colors
                    ${
                      item.isActive
                        ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }
                  `}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className={item.isActive ? 'text-violet-600 dark:text-violet-400' : 'text-slate-500 dark:text-slate-400'}>
                    {item.icon || iconMap[item.label]}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
