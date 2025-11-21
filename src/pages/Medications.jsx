import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { TextInput } from '../components/Input'
import { useReminders } from '../context/ReminderContext'
import { useState } from 'react'

export default function Medications() {
  const { reminders, addReminder, removeReminder, toggleReminder } = useReminders()
  const [name, setName] = useState('')
  const [time, setTime] = useState('08:00')

  const add = (e) => { e.preventDefault(); if (!name) return; addReminder(name, time); setName('') }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <form onSubmit={add} className="rounded-2xl border border-slate-200 bg-white p-4 grid sm:grid-cols-3 gap-3">
            <TextInput label="Medication" value={name} onChange={setName} placeholder="Metformin 500mg" />
            <TextInput label="Time" value={time} onChange={setTime} placeholder="08:00" />
            <div className="flex items-end"><button className="w-full rounded-lg bg-teal-600 text-white py-2.5">Add</button></div>
          </form>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reminders.map(r => (
              <div key={r.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-medium text-slate-800">{r.name}</div>
                <div className="text-xs text-slate-500 mb-3">{r.time}</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleReminder(r.id)} className={`px-3 py-1.5 rounded-md text-sm ${r.taken ? 'bg-teal-600 text-white' : 'bg-slate-100'}`}>{r.taken ? 'Mark not taken' : 'Mark taken'}</button>
                  <button onClick={() => removeReminder(r.id)} className="px-3 py-1.5 rounded-md text-sm bg-red-50 text-red-700">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
