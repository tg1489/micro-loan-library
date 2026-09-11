import { useState } from 'react'

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  )
}

export default function App() {
  const [loans, setLoans] = useState(12)
  const overdue = Math.floor(loans / 3)

  return (
    <main className="app">
      <h1>micro-loan-library</h1>
      <p className="subtitle">React 19.3.0 · React Compiler 1.0 (stable)</p>
      <div className="actions">
        <button className="primary" onClick={() => setLoans((n) => n + 1)}>
          Disburse loan
        </button>
        <button className="secondary" onClick={() => setLoans(0)}>
          Reset counter
        </button>
      </div>
      <div className="stats">
        <Stat label="Active loans" value={loans} />
        <Stat label="Overdue" value={overdue} />
      </div>
    </main>
  )
}
