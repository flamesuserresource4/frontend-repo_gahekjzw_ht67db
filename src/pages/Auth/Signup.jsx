import { useState } from 'react'
import { TextInput } from '../../components/Input'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const { signup } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    await signup(name, email, password)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800 mb-1">Create account</h1>
        <p className="text-sm text-slate-500 mb-6">Start your health journey</p>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <TextInput label="Full name" value={name} onChange={setName} placeholder="Alex Patient" />
          <TextInput label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
          <TextInput label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
          <button className="w-full rounded-lg bg-teal-600 text-white py-2.5 hover:bg-teal-700">Sign up</button>
        </form>
        <div className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-teal-700">Login</Link></div>
      </div>
    </div>
  )
}
