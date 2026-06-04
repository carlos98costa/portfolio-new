'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Counter({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

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

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  {
    value: 3,
    suffix: '+',
    label: 'Anos de experiência',
    sub: '2022 — presente',
    color: 'text-blue-400',
    glow: 'drop-shadow-[0_2px_18px_rgba(59,130,246,0.5)]',
  },
  {
    value: 3,
    suffix: '',
    label: 'Produtos em produção',
    sub: 'mobile · web · PWA',
    color: 'text-emerald-400',
    glow: 'drop-shadow-[0_2px_18px_rgba(16,185,129,0.5)]',
  },
  {
    value: 2,
    suffix: '',
    label: 'Plataformas nativas',
    sub: 'iOS e Android',
    color: 'text-orange-400',
    glow: 'drop-shadow-[0_2px_18px_rgba(249,115,22,0.5)]',
  },
  {
    value: 4,
    suffix: '+',
    label: 'Camadas de stack',
    sub: 'app · api · db · cloud',
    color: 'text-violet-400',
    glow: 'drop-shadow-[0_2px_18px_rgba(139,92,246,0.5)]',
  },
]

export default function StatsStrip() {
  return (
    <section className="relative border-y border-white/[0.09]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-violet-950/20" />
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <div className={`text-4xl font-bold tabular-nums tracking-tight md:text-5xl ${stat.color} ${stat.glow}`}>
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-base font-semibold text-zinc-100">{stat.label}</div>
              <div className="mt-0.5 font-mono text-[11px] text-zinc-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
