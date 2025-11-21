import { HeartPulse, Activity, Pill, ShieldCheck } from 'lucide-react'

export default function DashboardCards() {
  const cards = [
    {
      title: 'Today\'s Average Glucose',
      value: '112 mg/dL',
      change: '+5%',
      icon: HeartPulse,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Average BP',
      value: '122/78',
      change: '-2%',
      icon: Activity,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Medications Today',
      value: '2/3 taken',
      change: '1 pending',
      icon: Pill,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Privacy Status',
      value: 'Protected',
      change: 'E2E encryption',
      icon: ShieldCheck,
      color: 'from-sky-500 to-blue-500'
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ title, value, change, icon: Icon, color }) => (
        <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-3`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="text-2xl font-semibold text-slate-800">{value}</div>
          <div className="text-xs text-slate-500 mt-1">{change}</div>
        </div>
      ))}
    </div>
  )
}
