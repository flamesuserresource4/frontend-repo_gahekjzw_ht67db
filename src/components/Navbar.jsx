import { Link, NavLink } from 'react-router-dom'
import { HeartPulse, ShieldCheck, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/health', label: 'Health Data' },
    { to: '/insights', label: 'AI Insights' },
    { to: '/devices', label: 'Devices' },
    { to: '/medications', label: 'Medications' },
    { to: '/learn', label: 'Learning' },
    { to: '/settings', label: 'Profile' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div className="font-semibold text-slate-800">HealthGuardAI</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-slate-600 hover:text-slate-900 transition ${isActive ? 'text-teal-600' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-slate-600 hover:text-slate-900">Login</Link>
          <Link to="/signup" className="hidden sm:inline-flex items-center px-3 py-2 rounded-lg bg-teal-600 text-white text-sm shadow hover:bg-teal-700">Sign up</Link>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
