import { useEffect } from 'react'

export default function Toast({ message, type = 'success', show, onClose }) {
  useEffect(() => {
    if (!show) return
    const t = setTimeout(onClose, 2500)
    return () => clearTimeout(t)
  }, [show, onClose])

  if (!show) return null

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg text-sm ${type === 'success' ? 'bg-teal-600 text-white' : 'bg-red-600 text-white'}`}>
      {message}
    </div>
  )
}
