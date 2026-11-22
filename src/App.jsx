import { useEffect, useState } from 'react'
import './App.css'

const features = [
  {
    number: '01',
    title: 'See the whole picture',
    description:
      'Bring projects, priorities, and people into one clear view. No more piecing together progress from a dozen places.',
    className: 'feature-card--wide',
  },
  {
    number: '02',
    title: 'Make momentum visible',
    description:
      'Turn small wins into a steady rhythm your whole team can feel.',
    className: '',
  },
  {
    number: '03',
    title: 'Keep your focus',
    description:
      'Know what matters today, and let the rest wait until it is time.',
    className: '',
  },
]

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  useEffect(() => {
    if (!isLoginOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsLoginOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isLoginOpen])

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
    })
    setIsLoginOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Daylight home">
          <span className="brand-mark" aria-hidden="true">
            d
          </span>
          daylight
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#features">Why daylight</a>
          <a href="#how-it-works">How it works</a>
          <a href="#get-started">For teams</a>
        </nav>
        <div className="header-actions">
          <button
            className="button button--small button--login"
            type="button"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>
          <a className="button button--small button--dark" href="#get-started">
            Get started <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {isLoginOpen && (
        <div
          className="login-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsLoginOpen(false)
          }}
        >
          <section
            className="login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
          >
            <button
              className="login-close"
              type="button"
              aria-label="Close login dialog"
              onClick={() => setIsLoginOpen(false)}
            >
              ×
            </button>
            <span className="login-modal-mark" aria-hidden="true">d</span>
            <p className="login-eyebrow">WELCOME BACK</p>
            <h2 id="login-title">Good to see you.</h2>
            <p className="login-description">
              Log in to pick up right where you left off.
            </p>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="login-email">Email</label>
              <input
                autoComplete="email"
                autoFocus
                id="login-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <label htmlFor="login-password">Password</label>
              <input
                autoComplete="current-password"
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <button className="button login-submit" type="submit">
                Log in <span aria-hidden="true">↗</span>
              </button>
            </form>
          </section>
        </div>
      )}

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A little more room to think</p>
            <h1>Good work starts with a <em>clear head.</em></h1>
            <p className="hero-description">
              Daylight brings your team’s work into focus, so you can spend
              less time keeping up and more time moving forward.
            </p>
            <div className="hero-actions">
              <a className="button button--lime" href="#get-started">
                Find your flow <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#how-it-works">
                Take a look <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span>
                <span>M</span>
                <span>A</span>
              </div>
              <p><strong>Teams feel lighter.</strong> Join 12,000+ happy people.</p>
            </div>
          </div>

          <div className="hero-art" id="how-it-works" aria-label="Preview of the Daylight workspace">
            <div className="sun-shape" aria-hidden="true" />
            <div className="workspace-card">
              <div className="workspace-topbar">
                <div className="workspace-brand"><span /> daylight</div>
                <div className="workspace-dots" aria-hidden="true"><i /><i /><i /></div>
              </div>
              <div className="workspace-content">
                <div className="workspace-heading">
                  <div>
                    <span className="workspace-kicker">MONDAY, OCTOBER 21</span>
                    <h2>Make it a good week.</h2>
                  </div>
                  <span className="weather-icon" aria-hidden="true">☀</span>
                </div>
                <div className="progress-card">
                  <div className="progress-copy">
                    <span>This week</span>
                    <strong>Looking bright <span aria-hidden="true">↗</span></strong>
                  </div>
                  <div className="progress-bars" aria-hidden="true">
                    <i /><i /><i /><i /><i /><i /><i />
                  </div>
                  <div className="progress-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
                </div>
                <div className="workspace-tasks">
                  <div className="task-heading"><strong>Your focus</strong><span>3 things</span></div>
                  <div className="task-row"><span className="task-check task-check--done">✓</span><span>Sketch out the big idea</span><small>DONE</small></div>
                  <div className="task-row"><span className="task-check"> </span><span>Share the first draft</span><small className="task-tag">IN PROGRESS</small></div>
                  <div className="task-row"><span className="task-check"> </span><span>Get the team together</span><small>2:30 PM</small></div>
                </div>
              </div>
              <div className="workspace-footer"><span>☼</span> You’re right where you need to be.</div>
            </div>
            <div className="floating-note"><span className="floating-spark" aria-hidden="true">✳</span><span>One thing at a time<br /><strong>You’ve got this.</strong></span></div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow"><span /> A better kind of busy</p>
              <h2>Less juggling.<br /><em>More good stuff.</em></h2>
              <p>All the pieces of work, in a place that just makes sense.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className={`feature-card ${feature.className}`} key={feature.number}>
                  <span className="feature-number">{feature.number}</span>
                  <div className="feature-arrow" aria-hidden="true">↗</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section page-width" id="get-started">
          <div>
            <p className="eyebrow"><span /> Your next good day starts here</p>
            <h2>Make space for<br /><em>what matters.</em></h2>
          </div>
          <a className="button button--lime" href="mailto:hello@daylight.example">
            Let’s get started <span aria-hidden="true">↗</span>
          </a>
          <span className="closing-sun" aria-hidden="true">☼</span>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true">d</span>
          daylight
        </a>
        <p>A little more room to do your best work.</p>
        <span>© 2025 Daylight Studio</span>
      </footer>
    </>
  )
}

export default App
