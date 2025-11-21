import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardCards from '../components/DashboardCards'
import { GlucoseChart, BPChart } from '../components/Charts'
import { useHealth } from '../context/HealthDataContext'
import { useReminders } from '../context/ReminderContext'

export default function Dashboard() {
  const { glucose, bp } = useHealth()
  const { reminders, toggleReminder } = useReminders()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <DashboardCards />

          <div className="grid lg:grid-cols-2 gap-6">
            <GlucoseChart data={glucose} />
            <BPChart data={bp} />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-semibold text-slate-800 mb-2">AI Insights</div>
              <ul className="text-sm text-slate-600 grid gap-2">
                <li>• Post-breakfast glucose trending higher. Try a 10-min walk.</li>
                <li>• Evening BP slightly elevated—reduce sodium at dinner.</li>
                <li>• Resting HR steady—great recovery this week.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 lg:col-span-2">
              <div className="font-semibold text-slate-800 mb-3">Medication Reminders</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {reminders.map(r => (
                  <div key={r.id} className={`flex items-center justify-between p-3 rounded-lg border ${r.taken ? 'bg-teal-50 border-teal-200' : 'bg-slate-50 border-slate-200'}`}>
                    <div>
                      <div className="text-slate-800 font-medium">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.time}</div>
                    </div>
                    <button onClick={() => toggleReminder(r.id)} className={`px-3 py-1.5 rounded-md text-sm ${r.taken ? 'bg-teal-600 text-white' : 'bg-white border border-slate-200'}`}>
                      {r.taken ? 'Taken' : 'Mark taken'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
