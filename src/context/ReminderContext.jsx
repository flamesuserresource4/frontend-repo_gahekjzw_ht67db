import { createContext, useContext, useState } from 'react'

const ReminderContext = createContext(null)

const initial = [
  { id: 'm1', name: 'Metformin 500mg', time: '08:00', taken: true },
  { id: 'm2', name: 'Lisinopril 10mg', time: '20:00', taken: false },
]

export function ReminderProvider({ children }) {
  const [reminders, setReminders] = useState(initial)

  const addReminder = (name, time) => {
    setReminders(prev => [...prev, { id: crypto.randomUUID(), name, time, taken: false }])
  }
  const toggleReminder = (id) => setReminders(prev => prev.map(r => r.id === id ? { ...r, taken: !r.taken } : r))
  const removeReminder = (id) => setReminders(prev => prev.filter(r => r.id !== id))

  return (
    <ReminderContext.Provider value={{ reminders, addReminder, toggleReminder, removeReminder }}>
      {children}
    </ReminderContext.Provider>
  )
}

export function useReminders() { return useContext(ReminderContext) }
