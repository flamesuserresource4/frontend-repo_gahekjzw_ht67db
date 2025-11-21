import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Dashboard from './pages/Dashboard'
import HealthData from './pages/HealthData'
import Insights from './pages/Insights'
import Devices from './pages/Devices'
import Medications from './pages/Medications'
import Learn from './pages/Learn'
import Settings from './pages/Settings'
import { AuthProvider } from './context/AuthContext'
import { HealthDataProvider } from './context/HealthDataContext'
import { ReminderProvider } from './context/ReminderContext'
import { DeviceProvider } from './context/DeviceContext'
import { InsightProvider } from './context/InsightContext'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <HealthDataProvider>
        <ReminderProvider>
          <DeviceProvider>
            <InsightProvider>
              {children}
            </InsightProvider>
          </DeviceProvider>
        </ReminderProvider>
      </HealthDataProvider>
    </AuthProvider>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/health" element={<HealthData />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppProviders>
  )
}
