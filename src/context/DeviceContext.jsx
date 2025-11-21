import { createContext, useContext, useState } from 'react'

const DeviceContext = createContext(null)

export function DeviceProvider({ children }) {
  const [googleFit, setGoogleFit] = useState({ connected: true, lastSync: '2h ago', autoSync: true })
  const [appleHealth, setAppleHealth] = useState({ connected: false, lastSync: '—', autoSync: false })

  const toggleAutoSync = (provider) => {
    if (provider === 'Google Fit') setGoogleFit(g => ({ ...g, autoSync: !g.autoSync }))
    if (provider === 'Apple HealthKit') setAppleHealth(a => ({ ...a, autoSync: !a.autoSync }))
  }

  const connect = (provider) => {
    if (provider === 'Google Fit') setGoogleFit({ connected: true, lastSync: 'Just now', autoSync: true })
    if (provider === 'Apple HealthKit') setAppleHealth({ connected: true, lastSync: 'Just now', autoSync: true })
  }

  return (
    <DeviceContext.Provider value={{ googleFit, appleHealth, toggleAutoSync, connect }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevices() { return useContext(DeviceContext) }
