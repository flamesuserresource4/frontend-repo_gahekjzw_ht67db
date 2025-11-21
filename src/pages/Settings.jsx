import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { TextInput, Toggle } from '../components/Input'
import { useState } from 'react'

export default function Settings() {
  const [name, setName] = useState('Alex Patient')
  const [email, setEmail] = useState('alex@example.com')
  const [hypertension, setHypertension] = useState(true)
  const [diabetes, setDiabetes] = useState(true)
  const [share, setShare] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 grid gap-3">
              <div className="font-semibold text-slate-800">Profile</div>
              <TextInput label="Full name" value={name} onChange={setName} />
              <TextInput label="Email" value={email} onChange={setEmail} />
              <button className="rounded-lg bg-teal-600 text-white py-2">Save</button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 grid gap-3">
              <div className="font-semibold text-slate-800">Manage conditions</div>
              <Toggle label="Diabetes" checked={diabetes} onChange={setDiabetes} />
              <Toggle label="Hypertension" checked={hypertension} onChange={setHypertension} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 grid gap-3">
              <div className="font-semibold text-slate-800">Privacy & data</div>
              <Toggle label="Allow data sharing with clinician" checked={share} onChange={setShare} />
              <button className="rounded-lg bg-red-50 text-red-700 py-2">Delete account</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
