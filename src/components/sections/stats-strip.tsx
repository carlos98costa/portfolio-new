'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Counter({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState<number | null>(null)

  useEffect(() => {
    if (!isInView) return
    const steps = 36
    const intervalMs = duration / steps
    const increment = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setVal(to)
        clearInterval(timer)
      } else {
        setVal(Math.round(current))
      }
    }, intervalMs)
    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return <span ref={ref}>{val !== null ? `${val}${suffix}` : '—'}</span>
}

const stats = [
  { value: 3, suffix: '+', label: 'Anos de experiência', sub: '2022 — presente' },
  { value: 3, suffix: '', label: 'Produtos em produção', sub: 'mobile · web · PWA' },
  { value: 2, suffix: '', label: 'Plataformas nativas', sub: 'iOS e Android' },
  { value: 4, suffix: '+', label: 'Camadas de stack', sub: 'app · api · db · cloud' },
]

export default function StatsStrip() {
  return (
    <section className="border-y border-white/[0.07]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold tabular-nums tracking-tight text-white md:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-base font-semibold text-zinc-300">{stat.label}</div>
              <div className="mt-0.5 font-mono text-[11px] text-zinc-600">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
