export function TextInput({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-slate-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      />
    </label>
  )
}

export function Select({ label, value, onChange, children }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-slate-600">{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      >
        {children}
      </select>
    </label>
  )
}

export function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-slate-600">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`w-12 h-7 rounded-full p-1 transition ${checked ? 'bg-teal-500' : 'bg-slate-300'}`}
      >
        <div className={`h-5 w-5 bg-white rounded-full transition ${checked ? 'translate-x-5' : ''}`}></div>
      </button>
    </div>
  )
}
