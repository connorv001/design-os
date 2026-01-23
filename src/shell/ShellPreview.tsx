import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Security Dashboard', href: '/dashboard', isActive: true },
    { label: 'Automated Scanning', href: '/scanning' },
    { label: 'AI Fix Engine', href: '/fixes' },
    { label: 'Integration & Setup', href: '/integrations' },
    { label: 'Audit & Compliance', href: '/audit' },
    { label: 'Settings', href: '/settings' },
    { label: 'Help', href: '/help' },
  ]

  const user = {
    name: 'Alex Morgan',
    email: 'alex@example.com',
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout')}
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Security Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          Section content will render here. This is a preview of the application shell with navigation.
        </p>

        {/* Sample content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Sample Card {i}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                This is placeholder content to demonstrate the layout and design of the application shell.
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
