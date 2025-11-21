import { useState } from 'react'
import { TextInput } from '../../components/Input'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch(err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800 mb-1">Welcome back</h1>
        <p className="text-sm text-slate-500 mb-6">Log in to HealthGuardAI</p>
        {error && <div className="text-sm text-red-600 mb-3">{error}</div>}
        <form className="grid gap-4" onSubmit={onSubmit}>
          <TextInput label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
          <TextInput label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
          <button className="w-full rounded-lg bg-teal-600 text-white py-2.5 hover:bg-teal-700">Login</button>
        </form>
        <div className="flex items-center justify-between mt-4 text-sm">
          <Link to="/forgot" className="text-teal-700">Forgot password?</Link>
          <div>New here? <Link to="/signup" className="text-teal-700">Create an account</Link></div>
        </div>
      </div>
    </div>
  )
}
