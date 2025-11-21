import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DeviceConnect from '../components/DeviceConnect'
import { useDevices } from '../context/DeviceContext'

export default function Devices() {
  const { googleFit, appleHealth, toggleAutoSync, connect } = useDevices()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <div className="grid gap-4">
            <DeviceConnect provider="Google Fit" connected={googleFit.connected} lastSync={googleFit.lastSync} autoSync={googleFit.autoSync} onToggle={() => toggleAutoSync('Google Fit')} />
            <DeviceConnect provider="Apple HealthKit" connected={appleHealth.connected} lastSync={appleHealth.lastSync} autoSync={appleHealth.autoSync} onToggle={() => toggleAutoSync('Apple HealthKit')} />
          </div>
          <div>
            <button onClick={() => connect('Google Fit')} className="px-4 py-2 rounded-lg bg-teal-600 text-white mr-3">Connect Google Fit</button>
            <button onClick={() => connect('Apple HealthKit')} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Connect Apple HealthKit</button>
          </div>
        </main>
      </div>
    </div>
  )
}
