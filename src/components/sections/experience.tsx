'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data'
import { Briefcase, CalendarDays } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">trajetória</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Experiência organizada por{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                responsabilidade e impacto.
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              Mais do que cargos: evolução em liderança, arquitetura, produto e entrega de software em ambiente real.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-5 before:absolute before:left-6 before:top-8 before:z-10 before:h-[calc(100%-4rem)] before:w-px before:bg-gradient-to-b before:from-blue-400/70 before:via-violet-400/30 before:to-transparent after:absolute after:left-6 after:top-8 after:h-[calc(100%-4rem)] after:w-0.5 after:-translate-x-px after:bg-gradient-to-b after:from-blue-400/55 after:via-blue-400/15 after:to-transparent after:blur-[3px] md:before:left-8 md:after:left-8">
              {experiences.map((exp, index) => {
                const isCurrent = /presente|atual|present/i.test(exp.period)

                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-[1.75rem] border bg-zinc-950/55 p-6 pl-16 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 md:pl-20 ${isCurrent ? 'border-blue-400/30 shadow-[0_22px_64px_-28px_rgba(59,130,246,0.5)] hover:border-blue-300/50' : 'border-white/[0.07] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)] hover:border-blue-300/25 hover:shadow-[0_22px_60px_-30px_rgba(59,130,246,0.32)]'}`}
                  >
                    {/* Hover spotlight */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[radial-gradient(110%_80%_at_0%_0%,rgba(59,130,246,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {isCurrent && (
                      <>
                        {/* Gradient border */}
                        <div aria-hidden className="mask-border pointer-events-none absolute inset-0 z-10 rounded-[inherit] p-px [background:linear-gradient(140deg,rgba(59,130,246,0.6),rgba(139,92,246,0.22)_45%,transparent_72%)]" />
                        {/* Pulsing border */}
                        <div aria-hidden className="pointer-events-none absolute inset-0 z-10 animate-pulse rounded-[inherit] ring-1 ring-inset ring-blue-400/40" />
                      </>
                    )}

                    {/* Timeline icon */}
                    <div className={`absolute left-3 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border md:left-5 ${isCurrent ? 'border-blue-400/40 bg-gradient-to-br from-blue-500/30 to-violet-500/20 text-blue-100 shadow-[0_0_28px_rgba(59,130,246,0.4)]' : 'border-white/10 bg-white/[0.04] text-zinc-400 group-hover:border-blue-300/20 group-hover:text-zinc-200'}`}>
                      <Briefcase className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <p className={`mt-1 text-sm font-medium ${isCurrent ? 'text-blue-300' : 'text-zinc-400'}`}>
                          {exp.role}
                        </p>
                      </div>
                      <div className={`inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 text-sm ${isCurrent ? 'border-emerald-400/25 bg-emerald-500/[0.07] text-emerald-300' : 'border-white/[0.07] bg-white/[0.025] text-zinc-400'}`}>
                        {isCurrent && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                        )}
                        {!isCurrent && <CalendarDays className="h-3.5 w-3.5" />}
                        {exp.period}
                      </div>
                    </div>

                    <p className="mt-4 text-base leading-7 font-medium text-zinc-100">{exp.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${isCurrent ? 'border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-violet-500/15 text-blue-50' : 'border-white/[0.10] bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:bg-white/[0.07]'}`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
