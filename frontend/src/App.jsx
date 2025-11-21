import React from 'react'
import Spline from '@splinetool/react-spline'

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-6 md:px-10 lg:px-16 xl:px-24">
    <div className="max-w-7xl mx-auto">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          {title}
        </h2>
      )}
      <div className="text-slate-600 text-lg leading-relaxed">{children}</div>
    </div>
  </section>
)

const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24 h-16">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600" />
        <span className="font-semibold text-slate-900">Aegis Health AI</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-slate-700">
        <a href="#features" className="hover:text-slate-900">Features</a>
        <a href="#how" className="hover:text-slate-900">How It Works</a>
        <a href="#tech" className="hover:text-slate-900">Technology</a>
        <a href="#security" className="hover:text-slate-900">Security</a>
        <a href="#about" className="hover:text-slate-900">About</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </nav>
      <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700">Request Demo</a>
    </div>
  </header>
)

const Hero = () => (
  <div className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-slate-950">
    <div className="absolute inset-0">
      <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pt-24 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI-Powered, Privacy-First Digital Health Assistant</h1>
          <p className="mt-4 text-lg text-slate-200">Manage chronic conditions like diabetes or hypertension with personalized insights, secure data, and intelligent monitoring.</p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium">Get Started</a>
            <a href="#problem" className="px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium">Learn More</a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
  </div>
)

const Problem = () => (
  <Section id="problem" title="Problem">
    <blockquote className="text-2xl md:text-3xl text-slate-800 font-medium">“Build an AI-powered and privacy-centric digital health assistant designed to support individuals in managing chronic diseases such as diabetes or hypertension, with a focus on user data security, actionable wellness insights, and education leveraging open-source tools.”</blockquote>
  </Section>
)

const bullets = [
  'Personalized recommendations using AI',
  'Connected device integration (Google Fit, Apple HealthKit, glucometers, wearables)',
  'Medication reminders and daily wellness insights',
  'Data security and encryption',
  'Open-source analytics and interoperability',
  'Educational resources and interactive modules',
  'Scalable SaaS-ready architecture for healthcare providers',
]

const Solution = () => (
  <Section id="solution" title="Solution Overview">
    <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6">
      {bullets.map((b) => (
        <li key={b} className="text-slate-700">{b}</li>
      ))}
    </ul>
  </Section>
)

const FeatureCard = ({ title, desc }) => (
  <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600 mt-2">{desc}</p>
  </div>
)

const Features = () => {
  const items = [
    { title: 'AI Health Insights', desc: 'Analyze glucose, blood pressure, and activity trends to surface actionable patterns.' },
    { title: 'Medication Reminders', desc: 'Automated schedules and nudges to keep treatment plans on track.' },
    { title: 'IoT Device Integration', desc: 'Connect wearables, smart scales, glucometers, and home BP cuffs.' },
    { title: 'Interactive Learning Modules', desc: 'Bite-sized lessons and quizzes tailored to each condition.' },
    { title: 'Privacy & Security', desc: 'Encryption, consent-driven data sharing, and strict access controls.' },
    { title: 'Open-Source Tools', desc: 'Built on proven libraries for transparency and collaboration.' },
    { title: 'Cloud Scalability', desc: 'Multi-tenant, container-ready design to grow with providers.' },
    { title: 'Real-time Monitoring', desc: 'Stream data and alerts for timely interventions.' },
  ]
  return (
    <Section id="features" title="Key Features">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <FeatureCard key={it.title} title={it.title} desc={it.desc} />
        ))}
      </div>
    </Section>
  )
}

const HowItWorks = () => (
  <Section id="how" title="How It Works">
    <div className="grid md:grid-cols-4 gap-6">
      {[
        'User signs up and sets health goals',
        'Connect wearables or manually log readings',
        'AI analyzes patterns and gives insights',
        'Get personalized reminders, suggestions, and trends',
      ].map((s, i) => (
        <div key={i} className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200">
          <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">{i + 1}</div>
          <p className="mt-4 text-slate-700">{s}</p>
        </div>
      ))}
    </div>
  </Section>
)

const Tech = () => (
  <Section id="tech" title="Technology Stack">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        'Node.js (backend)',
        'React.js or Flutter (frontend)',
        'TensorFlow / PyTorch (AI models)',
        'MongoDB / PostgreSQL (database)',
        'JWT & OAuth 2.0 (security)',
        'Google Fit / Apple HealthKit APIs (device integration)',
      ].map((t) => (
        <div key={t} className="rounded-xl p-5 bg-white border border-slate-200">{t}</div>
      ))}
    </div>
  </Section>
)

const Security = () => (
  <Section id="security" title="Privacy & Security">
    <ul className="space-y-2 list-disc pl-6">
      <li>End-to-end encryption</li>
      <li>Secure authentication (JWT, OAuth2)</li>
      <li>Zero data sharing without consent</li>
      <li>HIPAA/GDPR-aligned practices</li>
      <li>On-device inference options for maximum privacy</li>
    </ul>
  </Section>
)

const OpenSource = () => (
  <Section id="opensource" title="Open-Source & Scalability">
    <ul className="space-y-2 list-disc pl-6">
      <li>Uses open-source ML libraries</li>
      <li>Supports modular plugins for analytics</li>
      <li>Deployable as a SaaS platform for hospitals</li>
      <li>Flexible APIs enable third-party integrations</li>
    </ul>
  </Section>
)

const About = () => (
  <Section id="about" title="About">
    <p>We are on a mission to help people manage chronic conditions with compassionate technology that protects privacy. Our platform blends explainable AI, secure infrastructure, and engaging education to empower healthier lives.</p>
  </Section>
)

const Contact = () => {
  const [status, setStatus] = React.useState(null)
  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data?.status === 'received' ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }
  return (
    <Section id="contact" title="Contact / Demo">
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          <input type="email" name="email" placeholder="Email address" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          <button disabled={status==='sending'} className="w-full rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-4 py-3">
            {status==='sending'?'Sending...':'Request a Demo'}
          </button>
        </div>
        <textarea name="message" placeholder="Tell us about your needs" className="w-full min-h-[180px] rounded-lg border border-slate-300 px-4 py-3 md:col-span-1" />
      </form>
      {status==='sent' && (
        <p className="mt-4 text-teal-700">Thanks — we received your request and will reach out soon.</p>
      )}
      {status==='error' && (
        <p className="mt-4 text-rose-700">Something went wrong. Please try again.</p>
      )}
    </Section>
  )
}

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Tech />
      <Security />
      <OpenSource />
      <About />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Aegis Health AI — All rights reserved.</footer>
    </div>
  )
}
