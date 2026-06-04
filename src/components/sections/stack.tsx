'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data'
import { Smartphone, Globe, Server, Database, Cloud, Wrench } from 'lucide-react'
import { TechIcon, hasTechIcon } from '@/components/ui/tech-icon'

const categoryConfig = {
  mobile: {
    label: 'Mobile',
    description: 'Apps iOS/Android com experiência nativa, Expo e integrações de saúde.',
    icon: Smartphone,
    color: 'text-orange-300',
    bg: 'bg-orange-500/10',
    border: 'border-orange-400/20',
    hoverBorder: 'hover:border-orange-300/30',
  },
  frontend: {
    label: 'Frontend',
    description: 'Interfaces web/PWA com Next.js, TypeScript e design responsivo.',
    icon: Globe,
    color: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/20',
    hoverBorder: 'hover:border-blue-300/30',
  },
  backend: {
    label: 'Backend',
    description: 'APIs, autenticação, regras de negócio e integrações externas.',
    icon: Server,
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-300/30',
  },
  database: {
    label: 'Dados',
    description: 'Modelagem relacional, persistência e consistência operacional.',
    icon: Database,
    color: 'text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'border-violet-400/20',
    hoverBorder: 'hover:border-violet-300/30',
  },
  cloud: {
    label: 'Cloud',
    description: 'Deploy, ambientes, observabilidade básica e operação contínua.',
    icon: Cloud,
    color: 'text-sky-300',
    bg: 'bg-sky-500/10',
    border: 'border-sky-400/20',
    hoverBorder: 'hover:border-sky-300/30',
  },
  tools: {
    label: 'Engenharia',
    description: 'Automação, containers, pipelines e práticas para manter ritmo sem perder qualidade.',
    icon: Wrench,
    color: 'text-amber-300',
    bg: 'bg-amber-500/10',
    border: 'border-amber-400/20',
    hoverBorder: 'hover:border-amber-300/30',
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
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">stack</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
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
                  className={`group relative h-full overflow-hidden rounded-[1.75rem] border bg-zinc-950/60 p-5 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${config.border} ${config.hoverBorder}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-current to-transparent ${config.color} opacity-40`} />

                  {/* Header */}
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-base font-bold uppercase tracking-[0.12em] ${config.color}`}>
                        {config.label}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-zinc-400">{config.description}</p>
                    </div>
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${config.border} ${config.bg} ${config.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Tech items */}
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white"
                      >
                        {hasTechIcon(tech.name) && (
                          <TechIcon name={tech.name} size={13} colorized />
                        )}
                        {tech.name}
                      </div>
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
