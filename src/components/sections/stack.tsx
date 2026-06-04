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
    hoverBorder: 'hover:border-orange-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(249,115,22,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(249,115,22,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(249,115,22,0.10),transparent_62%)]',
    badge: 'border-orange-400/15 bg-orange-500/[0.07] hover:border-orange-300/35 hover:bg-orange-500/[0.14]',
  },
  frontend: {
    label: 'Frontend',
    description: 'Interfaces web/PWA com Next.js, TypeScript e design responsivo.',
    icon: Globe,
    color: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/20',
    hoverBorder: 'hover:border-blue-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(59,130,246,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(59,130,246,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(59,130,246,0.10),transparent_62%)]',
    badge: 'border-blue-400/15 bg-blue-500/[0.07] hover:border-blue-300/35 hover:bg-blue-500/[0.14]',
  },
  backend: {
    label: 'Backend',
    description: 'APIs, autenticação, regras de negócio e integrações externas.',
    icon: Server,
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(16,185,129,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(16,185,129,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(16,185,129,0.10),transparent_62%)]',
    badge: 'border-emerald-400/15 bg-emerald-500/[0.07] hover:border-emerald-300/35 hover:bg-emerald-500/[0.14]',
  },
  database: {
    label: 'Dados',
    description: 'Modelagem relacional, persistência e consistência operacional.',
    icon: Database,
    color: 'text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'border-violet-400/20',
    hoverBorder: 'hover:border-violet-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(139,92,246,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(139,92,246,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(139,92,246,0.10),transparent_62%)]',
    badge: 'border-violet-400/15 bg-violet-500/[0.07] hover:border-violet-300/35 hover:bg-violet-500/[0.14]',
  },
  cloud: {
    label: 'Cloud',
    description: 'Deploy, ambientes, observabilidade básica e operação contínua.',
    icon: Cloud,
    color: 'text-sky-300',
    bg: 'bg-sky-500/10',
    border: 'border-sky-400/20',
    hoverBorder: 'hover:border-sky-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(56,189,248,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(56,189,248,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(56,189,248,0.10),transparent_62%)]',
    badge: 'border-sky-400/15 bg-sky-500/[0.07] hover:border-sky-300/35 hover:bg-sky-500/[0.14]',
  },
  tools: {
    label: 'Engenharia',
    description: 'Automação, containers, pipelines e práticas para manter ritmo sem perder qualidade.',
    icon: Wrench,
    color: 'text-amber-300',
    bg: 'bg-amber-500/10',
    border: 'border-amber-400/20',
    hoverBorder: 'hover:border-amber-300/45',
    glow: 'hover:shadow-[0_26px_70px_-30px_rgba(245,158,11,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(245,158,11,0.5),rgba(255,255,255,0.06)_38%,transparent_66%)]',
    wash: 'bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(245,158,11,0.10),transparent_62%)]',
    badge: 'border-amber-400/15 bg-amber-500/[0.07] hover:border-amber-300/35 hover:bg-amber-500/[0.14]',
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
            <p className="text-base leading-7 font-medium text-zinc-300 md:text-lg">
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
                  className={`group relative h-full overflow-hidden rounded-[1.75rem] border bg-zinc-950/60 p-5 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 ${config.border} ${config.hoverBorder} ${config.glow}`}
                >
                  {/* Accent wash */}
                  <div aria-hidden className={`pointer-events-none absolute inset-0 rounded-[inherit] ${config.wash}`} />
                  {/* Gradient border */}
                  <div aria-hidden className={`mask-border pointer-events-none absolute inset-0 z-10 rounded-[inherit] p-px ${config.borderGrad}`} />

                  {/* Header */}
                  <div className="relative mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-lg font-bold uppercase tracking-[0.12em] ${config.color}`}>
                        {config.label}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-zinc-400">{config.description}</p>
                    </div>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${config.border} ${config.bg} ${config.color} shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Tech items */}
                  <div className="relative flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <div
                        key={tech.name}
                        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:scale-105 hover:text-white ${config.badge}`}
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
