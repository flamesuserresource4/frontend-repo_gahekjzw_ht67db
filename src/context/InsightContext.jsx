import { createContext, useContext, useState, useMemo } from 'react'

const InsightContext = createContext(null)

const sampleInsights = [
  { id: 'i1', date: 'Today', text: 'Your post-breakfast glucose spiked to 142 mg/dL. Consider a 10-min walk after meals.' },
  { id: 'i2', date: 'Today', text: 'BP slightly elevated in the evening. Reduce sodium intake at dinner.' },
  { id: 'i3', date: 'This week', text: 'Consistent morning HR indicates good recovery. Keep up hydration.' },
]

export function InsightProvider({ children }) {
  const [insights, setInsights] = useState(sampleInsights)

  const addInsight = (text) => setInsights(prev => [{ id: crypto.randomUUID(), date: 'Today', text }, ...prev])

  const riskAlerts = useMemo(() => ([
    { id: 'r1', level: 'medium', title: 'Elevated glucose trend', detail: '3 of last 5 readings over 130 mg/dL' },
    { id: 'r2', level: 'low', title: 'BP variability', detail: 'Systolic range 118-130 this week' },
  ]), [])

  return (
    <InsightContext.Provider value={{ insights, addInsight, riskAlerts }}>
      {children}
    </InsightContext.Provider>
  )
}

export function useInsights() { return useContext(InsightContext) }
