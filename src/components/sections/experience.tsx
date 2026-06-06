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
              Experiência organizada por responsabilidade e impacto.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              Mais do que cargos: evolução em liderança, arquitetura, produto e entrega de software em ambiente real.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-5 before:absolute before:left-6 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-white/[0.10] md:before:left-8">
              {experiences.map((exp, index) => {
                const isCurrent = /presente|atual|present/i.test(exp.period)

                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-[1.75rem] border bg-white/[0.03] p-6 pl-16 transition-all duration-300 hover:-translate-y-1 md:pl-20 ${isCurrent ? 'border-white/[0.14]' : 'border-white/[0.07] hover:border-white/[0.12]'}`}
                  >
                    {/* Timeline icon */}
                    <div className={`absolute left-3 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border md:left-5 ${isCurrent ? 'border-white/[0.15] bg-white/[0.08] text-white' : 'border-white/[0.08] bg-white/[0.04] text-zinc-500'}`}>
                      <Briefcase className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <p className="mt-1 text-sm font-medium text-zinc-400">{exp.role}</p>
                      </div>
                      <div className={`inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 text-sm ${isCurrent ? 'border-white/[0.10] bg-white/[0.05] text-zinc-300' : 'border-white/[0.07] bg-transparent text-zinc-500'}`}>
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

                    <p className="mt-4 text-base leading-7 font-medium text-zinc-300">{exp.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 hover:scale-105 hover:border-white/[0.14] hover:text-zinc-200"
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
