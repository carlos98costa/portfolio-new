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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200/80">trajetória</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Experiência organizada por responsabilidade e impacto.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              Mais do que cargos: evolução em liderança, arquitetura, produto e entrega de software em ambiente real.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-5 before:absolute before:left-6 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-white/10 md:before:left-8">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="relative rounded-[1.75rem] border border-white/10 bg-zinc-950/55 p-6 pl-16 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-300/25 md:pl-20"
                >
                  <div className="absolute left-3 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-200 md:left-5">
                    <Briefcase className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="mt-1 text-blue-200">{exp.role}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-zinc-400">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-7 text-zinc-300">{exp.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
