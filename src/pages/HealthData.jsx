import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { TextInput } from '../components/Input'
import { GlucoseChart, BPChart } from '../components/Charts'
import { useHealth } from '../context/HealthDataContext'
import { useState } from 'react'

export default function HealthData() {
  const { glucose, bp, addGlucose, addBP } = useHealth()
  const [gVal, setGVal] = useState('')
  const [gTime, setGTime] = useState('12p')
  const [sys, setSys] = useState('')
  const [dia, setDia] = useState('')
  const [bTime, setBTime] = useState('6p')

  const addG = (e) => { e.preventDefault(); if(!gVal) return; addGlucose(gVal, gTime); setGVal('') }
  const addB = (e) => { e.preventDefault(); if(!sys || !dia) return; addBP(sys, dia, bTime); setSys(''); setDia('') }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <form onSubmit={addG} className="rounded-2xl border border-slate-200 bg-white p-4 grid gap-3">
              <div className="font-semibold text-slate-800">Add Glucose</div>
              <TextInput label="Value (mg/dL)" value={gVal} onChange={setGVal} placeholder="115" />
              <TextInput label="Time" value={gTime} onChange={setGTime} placeholder="9a" />
              <button className="rounded-lg bg-teal-600 text-white py-2">Add</button>
            </form>

            <form onSubmit={addB} className="rounded-2xl border border-slate-200 bg-white p-4 grid gap-3">
              <div className="font-semibold text-slate-800">Add BP</div>
              <TextInput label="Systolic" value={sys} onChange={setSys} placeholder="122" />
              <TextInput label="Diastolic" value={dia} onChange={setDia} placeholder="78" />
              <TextInput label="Time" value={bTime} onChange={setBTime} placeholder="6p" />
              <button className="rounded-lg bg-teal-600 text-white py-2">Add</button>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-semibold text-slate-800 mb-2">Recent History</div>
              <div className="text-sm text-slate-600">Sample placeholders for table/history with date filters.</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <GlucoseChart data={glucose} />
            <BPChart data={bp} />
          </div>
        </main>
      </div>
    </div>
  )
}
