import { createContext, useContext, useState } from 'react'

const HealthDataContext = createContext(null)

const initialGlucose = [
  { time: '6a', glucose: 98 },
  { time: '9a', glucose: 110 },
  { time: '12p', glucose: 130 },
  { time: '3p', glucose: 124 },
  { time: '6p', glucose: 118 },
  { time: '9p', glucose: 108 },
]

const initialBP = [
  { time: 'Mon', systolic: 124, diastolic: 78 },
  { time: 'Tue', systolic: 130, diastolic: 82 },
  { time: 'Wed', systolic: 118, diastolic: 76 },
  { time: 'Thu', systolic: 126, diastolic: 79 },
  { time: 'Fri', systolic: 122, diastolic: 77 },
  { time: 'Sat', systolic: 128, diastolic: 80 },
  { time: 'Sun', systolic: 121, diastolic: 75 },
]

export function HealthDataProvider({ children }) {
  const [glucose, setGlucose] = useState(initialGlucose)
  const [bp, setBp] = useState(initialBP)
  const [weight, setWeight] = useState(78.4)
  const [hr, setHr] = useState(72)

  const addGlucose = (value, time) => {
    setGlucose((prev) => [...prev, { time, glucose: Number(value) }])
  }

  const addBP = (sys, dia, time) => {
    setBp((prev) => [...prev, { time, systolic: Number(sys), diastolic: Number(dia) }])
  }

  return (
    <HealthDataContext.Provider value={{ glucose, bp, weight, hr, addGlucose, addBP, setWeight, setHr }}>
      {children}
    </HealthDataContext.Provider>
  )
}

export function useHealth() {
  return useContext(HealthDataContext)
}
