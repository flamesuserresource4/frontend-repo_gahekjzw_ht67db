import { NavLink } from 'react-router-dom'
import { Activity, BarChart3, Bell, Brain, BookOpen, Shield, Settings, Stethoscope, Pill, Gauge, Cpu, LineChart, Calendar } from 'lucide-react'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: Gauge },
  { to: '/health', label: 'Health Data', icon: Stethoscope },
  { to: '/insights', label: 'AI Insights', icon: Brain },
  { to: '/devices', label: 'Devices', icon: Cpu },
  { to: '/medications', label: 'Medications', icon: Pill },
  { to: '/learn', label: 'Learning', icon: BookOpen },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 bg-white/60 backdrop-blur min-h-[calc(100vh-4rem)]">
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Overview</div>
        <nav className="grid gap-1">
          {items.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-4">
        <div className="h-px bg-slate-200 my-3" />
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Support</div>
        <div className="text-sm text-slate-600 leading-relaxed">Your data is encrypted and only shared with your consent.</div>
      </div>
    </aside>
  )
}
