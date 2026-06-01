'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data'
import { Smartphone, Globe, Server, Database, Cloud, Wrench } from 'lucide-react'

const categoryConfig = {
  mobile: {
    label: 'Mobile',
    description: 'Apps iOS/Android com experiência nativa, Expo e integrações de saúde.',
    icon: Smartphone,
  },
  frontend: {
    label: 'Frontend',
    description: 'Interfaces web/PWA com Next.js, TypeScript e design responsivo.',
    icon: Globe,
  },
  backend: {
    label: 'Backend',
    description: 'APIs, autenticação, regras de negócio e integrações externas.',
    icon: Server,
  },
  database: {
    label: 'Dados',
    description: 'Modelagem relacional, persistência e consistência operacional.',
    icon: Database,
  },
  cloud: {
    label: 'Cloud',
    description: 'Deploy, ambientes, observabilidade básica e operação contínua.',
    icon: Cloud,
  },
  tools: {
    label: 'Engenharia',
    description: 'Automação, containers, pipelines e práticas para manter ritmo sem perder qualidade.',
    icon: Wrench,
  },
}

const categoryOrder: (keyof typeof categoryConfig)[] = [
  'mobile', 'frontend', 'backend', 'database', 'cloud', 'tools'
]

export default function StackSection() {
  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200/80">stack</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ferramentas escolhidas por entrega e manutenção.
              </h2>
            </div>
            <p className="text-base leading-7 text-zinc-400 md:text-lg">
              Em vez de listar tecnologias soltas, organizo a stack pelo papel que ela cumpre no produto:
              app, interface, API, dados, deploy e operação.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categoryOrder.map((category, categoryIndex) => {
              const techs = technologies.filter((t) => t.category === category)
              if (techs.length === 0) return null

              const config = categoryConfig[category]
              const Icon = config.icon

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.06, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/55 p-5 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{config.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{config.description}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
