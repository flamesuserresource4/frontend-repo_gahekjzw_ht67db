import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Area, AreaChart } from 'recharts'

export function GlucoseChart({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 h-72">
      <div className="text-sm text-slate-600 mb-2">Glucose (mg/dL)</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" stroke="#64748b" />
          <YAxis stroke="#64748b" domain={[60, 200]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="glucose" stroke="#14b8a6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BPChart({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 h-72">
      <div className="text-sm text-slate-600 mb-2">Blood Pressure (mmHg)</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="sys" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="dia" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" stroke="#64748b" />
          <YAxis stroke="#64748b" domain={[50, 180]} />
          <Tooltip />
          <Area type="monotone" dataKey="systolic" stroke="#3b82f6" fill="url(#sys)" />
          <Area type="monotone" dataKey="diastolic" stroke="#06b6d4" fill="url(#dia)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
