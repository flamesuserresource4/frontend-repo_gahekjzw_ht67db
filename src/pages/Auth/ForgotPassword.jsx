import { useState } from 'react'
import { TextInput } from '../../components/Input'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800 mb-1">Reset password</h1>
        <p className="text-sm text-slate-500 mb-6">We'll send a reset link to your email</p>
        {sent ? (
          <div className="text-sm text-teal-700">If an account exists for {email}, you'll receive an email shortly.</div>
        ) : (
          <form className="grid gap-4" onSubmit={onSubmit}>
            <TextInput label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
            <button className="w-full rounded-lg bg-teal-600 text-white py-2.5 hover:bg-teal-700">Send reset link</button>
          </form>
        )}
        <div className="mt-4 text-sm"><Link to="/login" className="text-teal-700">Back to login</Link></div>
      </div>
    </div>
  )
}
