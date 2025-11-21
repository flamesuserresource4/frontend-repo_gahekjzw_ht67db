import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const articles = [
  { id: 'a1', title: 'Understanding A1C', excerpt: 'What your A1C means and how to manage it.', minutes: 5 },
  { id: 'a2', title: 'Sodium and BP', excerpt: 'How salt intake affects blood pressure.', minutes: 4 },
  { id: 'a3', title: 'Post-meal walks', excerpt: 'Why short walks help glucose control.', minutes: 3 },
]

export default function Learn() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar />
        <main className="flex-1 py-6 grid gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-800 mb-3">Articles</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map(a => (
                <article key={a.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-medium text-slate-800">{a.title}</h3>
                  <p className="text-sm text-slate-600">{a.excerpt}</p>
                  <div className="text-xs text-slate-500 mt-2">{a.minutes} min read • Video coming soon</div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
