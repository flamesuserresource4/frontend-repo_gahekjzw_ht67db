import { Toggle } from './Input'
import { Activity, CheckCircle, CircleDashed } from 'lucide-react'

export default function DeviceConnect({ provider, connected, lastSync, autoSync, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${connected ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-500'}`}>
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <div className="font-semibold text-slate-800">{provider}</div>
          <div className="text-sm text-slate-500">Last sync: {lastSync}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-1 text-sm ${connected ? 'text-teal-600' : 'text-slate-500'}`}>
          {connected ? <CheckCircle className="w-4 h-4" /> : <CircleDashed className="w-4 h-4" />} {connected ? 'Connected' : 'Disconnected'}
        </div>
        <Toggle label="Auto-sync" checked={autoSync} onChange={onToggle} />
      </div>
    </div>
  )
}
