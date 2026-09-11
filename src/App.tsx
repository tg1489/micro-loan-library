import { useMemo, useState, useRef, useEffect } from 'react'
import { libraries } from './data/libraries'

function LibraryCard({ name, city, neighborhood, membership, tools, description, website, image }: {
  name: string
  city: string
  neighborhood: string
  membership: string
  tools: string[]
  description: string
  website: string
  image: string
}) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={`${name} photo`} loading="lazy" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-meta">{neighborhood} · {city}</p>
        <p className="card-desc">{description}</p>
        <div className="card-tags">
          {tools.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="card-footer">
          <span className="membership">{membership}</span>
          <a className="link" href={website} target="_blank" rel="noopener">Visit site</a>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const startY = useRef(0)
  const pulling = useRef(false)

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY
        pulling.current = true
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!pulling.current) return
      const dy = e.touches[0].clientY - startY.current
      if (dy > 80) {
        if ('vibrate' in navigator) navigator.vibrate(10)
        pulling.current = false
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    const onTouchEnd = () => { pulling.current = false }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return libraries
    return libraries.filter(l =>
      l.name.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q) ||
      l.neighborhood.toLowerCase().includes(q) ||
      l.tools.some(t => t.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <main className="app">
      <header className="header">
        <h1>Micro-Loan Tool-Library Directory</h1>
        <p className="subtitle">Your go-to map of neighborhood tool-libraries, share-spaces, and “tool-co-ops” where residents borrow drills, saws, gardening gear for a small membership or donation. 🛠️📚🤝</p>
        <div className="search">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search city, neighborhood, or tool…"
            aria-label="Search libraries"
          />
        </div>
      </header>

      <section aria-label="Library listings">
        <div className="grid">
          {filtered.map(l => (
            <LibraryCard key={l.id} {...l} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="empty">No libraries match “{query}”. Try a different search.</p>
        )}
      </section>

      <footer className="footer">
        <p>React 19.3.0 · React Compiler 1.0 (stable) · SEO-ready template</p>
      </footer>
    </main>
  )
}
