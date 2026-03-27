<<<<<<< HEAD
import LandingPage from './components/LandingPage';

function App() {
  return <LandingPage />;
=======
const WHATSAPP_LINK =
  'https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business.'

const faqItems = [
  {
    q: 'How much does it cost?',
    a: "We charge a simple monthly fee starting from $397/month. No setup costs. No hidden charges. No long-term contracts. You pay month by month and cancel anytime if you don't see results.",
  },
  {
    q: 'How long does it take to set up?',
    a: 'We go live in 7 to 10 days from your first call. We handle everything technical. You just review and approve what we build, then we switch it on.',
  },
  {
    q: 'Do I need to be technical or know how to use computers?',
    a: 'Not at all. You only need a smartphone and a WhatsApp account. We build everything, connect everything, and train your team in under 30 minutes. If you can send a WhatsApp message, you can run GoAutomatic.',
  },
  {
    q: 'Will my staff need training?',
    a: 'We provide a short training session — usually under 30 minutes — so your team understands how the system works and where to check their daily summary. After that, the system runs itself.',
  },
  {
    q: "Is my clients' data safe?",
    a: "Yes. We build all systems with Kenya's Data Protection Act and GDPR guidelines in mind. Client data is encrypted, access-restricted, and never shared with third parties. Your clients' information stays private and protected.",
  },
  {
    q: 'What if I want to cancel?',
    a: "You can cancel anytime with 30 days notice. No penalties, no long contracts. We are confident in our results — which is why we don't need to lock you in.",
  },
  {
    q: 'What if I have multiple branches or locations?',
    a: 'We have a Multi-Location plan built for exactly this. Our NextStep routing system automatically directs customers to the right branch, and content can be customised per location. Ask us about this on your free call.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
          <a href="#top" className="flex items-center gap-3">
            <img src="/naim-agency-logo.webp" alt="NAIM Agency" className="h-9 w-9 rounded object-cover" />
            <div>
              <p className="text-lg font-semibold">Go Automatic</p>
              <p className="text-xs text-zinc-400">by NAIM Agency</p>
            </div>
          </a>
          <div className="hidden gap-5 md:flex">
            <a href="#problem">The Problem</a>
            <a href="#services">Services</a>
            <a href="#nextstep">NextStep</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a href={WHATSAPP_LINK} className="rounded bg-emerald-600 px-4 py-2 font-medium">
            WhatsApp Me
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl space-y-16 px-6 py-12">
        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            AI Automation for Every Business — NAIM Agency
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            From Manual Work
            <br />
            To Automatic
            <br />
            Growth.
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-300">
            We turn the repetitive daily tasks draining your business into fully automated systems — so
            you stop doing the same work every day and start growing on autopilot.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-zinc-200">
            <li>Every customer question answered instantly — 24/7, no staff needed</li>
            <li>Daily content created and posted automatically — Instagram, TikTok, Facebook</li>
            <li>Every new lead guided, followed up, and converted — without you chasing anyone</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WHATSAPP_LINK} className="rounded bg-emerald-600 px-4 py-3 font-medium">
              WhatsApp for a Free 15-Min Call
            </a>
            <a href="#services" className="rounded border border-white/25 px-4 py-3">
              See What We Build →
            </a>
          </div>
          <p className="mt-3 text-sm text-zinc-400">
            No pressure. If you don't want this, But I'll tell you exactly why you will need it.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {[
            ['24/7', 'Auto-Replies Active'],
            ['30+', 'Posts Per Month'],
            ['0', 'Hours of Your Time'],
            ['100%', 'Runs on Autopilot'],
          ].map(([k, v]) => (
            <div key={k} className="rounded border border-white/10 p-4">
              <p className="text-3xl font-bold">{k}</p>
              <p className="mt-1 text-sm text-zinc-400">{v}</p>
            </div>
          ))}
        </section>

        <section id="services" className="rounded border border-white/10 p-4 text-sm text-zinc-300">
          Dental Clinics Eye & Optical SACCOs & Microfinance Real Estate Gyms & Fitness Restaurants
          Beauty Salons Online Coaches E-Commerce Law Firms Dental Clinics Eye & Optical SACCOs &
          Microfinance Real Estate Gyms & Fitness Restaurants Beauty Salons Online Coaches E-Commerce
          Law Firms
        </section>

        <section id="problem" className="space-y-6">
          <p className="text-zinc-400">From Manual → Automatic</p>
          <h2 className="text-4xl font-bold">
            Same Business.
            <br />
            Less Stress. Everything Automated.
          </h2>
          <p className="text-zinc-300">
            This is what changes the moment GoAutomatic goes live inside your business. The same tasks.
            The same clients. Zero manual effort from your team.
          </p>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
            <article className="rounded border border-red-500/40 p-4">
              <h3 className="font-bold">❌ Before GoAutomatic</h3>
              <ul className="mt-3 space-y-2 text-zinc-300">
                <li>You type the same WhatsApp answer 20 times before noon</li>
                <li>Customer messages at night. Nobody replies until morning — they've moved on</li>
                <li>You keep saying you'll post on Instagram "later." You never do.</li>
                <li>Interested leads go cold because nobody followed up in time</li>
                <li>Your best staff spend half their day doing the same repetitive admin</li>
              </ul>
            </article>
            <div className="hidden place-items-center md:grid">→</div>
            <article className="rounded border border-emerald-500/40 p-4">
              <h3 className="font-bold">✦ After GoAutomatic</h3>
              <ul className="mt-3 space-y-2 text-zinc-300">
                <li>AI replies instantly to every message — day or night — with the right answer</li>
                <li>⚡ Every customer gets served at 2am. Your business never sleeps again</li>
                <li>Daily content auto-created and posted — Instagram, TikTok, Facebook — done</li>
                <li>Every lead is followed up within 3 minutes. Nobody slips through</li>
                <li>Your team focuses on real clients. Costs drop. Revenue grows. Every month.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="space-y-5">
          <p className="text-zinc-400">What You Get</p>
          <h2 className="text-4xl font-bold">Three Systems. One Automatic Business.</h2>
          <p className="text-zinc-300">
            GoAutomatic installs three AI systems into your business. Each one runs on autopilot from
            day one. Together they save you time, cut your costs, and grow your revenue — every single
            day.
          </p>
        </section>

        <section id="nextstep" className="space-y-5">
          <p className="text-zinc-400">NextStep — Inside GoAutomatic</p>
          <h2 className="text-4xl font-bold">
            From Inquiry to
            <br />
            Confirmed Next Step.
          </h2>
          <p className="text-zinc-300">
            Most businesses lose clients not because their service is bad — but because the path from
            "I'm interested" to "I'm booked" is confusing and broken. NextStep fixes that gap
            automatically.
          </p>
        </section>

        <section className="space-y-4" id="pricing">
          <p className="text-zinc-400">Simple Monthly Pricing</p>
          <h2 className="text-4xl font-bold">
            One Monthly Fee.
            <br />
            Everything Automated.
          </h2>
          <p className="text-zinc-300">
            No setup fees. No long-term contracts. Cancel anytime. We earn your business every month by
            delivering real, measurable results.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded border border-white/15 p-5">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-2 text-3xl font-bold">$99</p>
              <p className="text-sm text-zinc-400">per month · cancel anytime</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-300">
                <li>✓ AI Customer Reply (WhatsApp)</li>
                <li>✓ 15 AI Posts Per Month</li>
                <li>✓ Instagram Auto-Posting</li>
                <li>✓ Monthly Report</li>
                <li>✗ NextStep Lead Routing</li>
                <li>✗ TikTok + Facebook Posting</li>
                <li>✗ Automated Follow-Up Sequences</li>
              </ul>
              <a className="mt-4 inline-block text-emerald-400" href={WHATSAPP_LINK}>
                Get Started →
              </a>
            </article>
            <article className="rounded border border-emerald-400/50 p-5">
              <p className="text-xs uppercase text-emerald-400">Most Popular</p>
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="mt-2 text-3xl font-bold">$199</p>
              <p className="text-sm text-zinc-400">per month · cancel anytime</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-300">
                <li>✓ AI Replies — WhatsApp + DM + Email</li>
                <li>✓ 30 AI Posts Per Month</li>
                <li>✓ Instagram + TikTok + Facebook Auto-Posting</li>
                <li>✓ NextStep Lead Routing System</li>
                <li>✓ Automated 7-Day Follow-Up Sequence</li>
                <li>✓ Weekly Performance Report</li>
                <li>✓ Priority WhatsApp Support</li>
              </ul>
              <a className="mt-4 inline-block text-emerald-400" href={WHATSAPP_LINK}>
                Start Growing Now →
              </a>
            </article>
            <article className="rounded border border-white/15 p-5">
              <h3 className="text-xl font-semibold">Multi-Location / Agency</h3>
              <p className="mt-2 text-3xl font-bold">$399</p>
              <p className="text-sm text-zinc-400">per month · cancel anytime</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-300">
                <li>✓ Everything in Growth Plan</li>
                <li>✓ Up to 3 Business Locations</li>
                <li>✓ 60+ AI Posts Per Month</li>
                <li>✓ Bilingual Content (any 2 languages)</li>
                <li>✓ Multi-Branch NextStep Routing</li>
                <li>✓ Custom AI Brand Persona</li>
                <li>✓ Dedicated Account Manager</li>
              </ul>
              <a className="mt-4 inline-block text-emerald-400" href={WHATSAPP_LINK}>
                Let's Talk →
              </a>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-zinc-400">Questions Answered</p>
          <h2 className="text-4xl font-bold">
            Everything You Want
            <br />
            To Know First
          </h2>
          <div className="space-y-2">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded border border-white/10 p-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 text-sm text-zinc-300 md:grid-cols-4">
          <div>
            <img src="/naim-agency-logo.webp" alt="NAIM Agency" className="mb-3 h-9 w-9 rounded" />
            <p className="text-lg font-semibold text-white">Go Automatic</p>
            <p className="text-xs text-zinc-400">by NAIM Agency</p>
            <p className="mt-3">
              AI-powered automation for businesses tired of doing the same manual work every single
              day. We build the systems. You collect the results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-2 space-y-1">
              <li>AI Customer Replies</li>
              <li>Daily Content Automation</li>
              <li>NextStep Lead Routing</li>
              <li>Automated Follow-Up</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">We Serve</h3>
            <ul className="mt-2 space-y-1">
              <li>Dental & Eye Clinics</li>
              <li>SACCOs & Microfinance</li>
              <li>Real Estate & Gyms</li>
              <li>Restaurants & Salons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href={WHATSAPP_LINK}>WhatsApp Us</a>
              </li>
              <li>+254 751 772 123</li>
              <li>✉️ salminabdalla93@gmail.com</li>
              <li>Free 15-Min Call</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-4 text-xs text-zinc-500">
          <p>© 2024 GoAutomatic by NAIM Agency. All rights reserved.</p>
          <p className="mt-1">Powered by NAIM Agency · Kenya Data Protection Act Compliant</p>
        </div>
      </footer>
    </div>
  )
>>>>>>> fdc2ebf07f6b357a656329022d4925c4eafc788d
}

export default App
