import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useInsights } from '../context/InsightContext'

export default function Insights() {
  const { insights, riskAlerts } = useInsights()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 lg:col-span-2">
              <div className="font-semibold text-slate-800 mb-3">Today\'s insights</div>
              <ul className="grid gap-3 text-slate-700 text-sm">
                {insights.map(i => (
                  <li key={i.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50">{i.text}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-semibold text-slate-800 mb-3">Risk warnings</div>
              <ul className="grid gap-3 text-sm">
                {riskAlerts.map(r => (
                  <li key={r.id} className={`p-3 rounded-lg border ${r.level === 'high' ? 'border-red-300 bg-red-50' : r.level === 'medium' ? 'border-amber-300 bg-amber-50' : 'border-emerald-300 bg-emerald-50'}`}>
                    <div className="font-medium text-slate-800">{r.title}</div>
                    <div className="text-slate-600">{r.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
