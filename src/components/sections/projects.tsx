'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  LockKeyhole,
  MonitorSmartphone,
  Smartphone,
  Utensils,
} from 'lucide-react'

const projectConfig = {
  'grid-360': {
    accent: 'emerald',
    role: 'Tech Lead Mobile & Backend',
    scope: ['Health data sync', 'App iOS/Android', 'API e banco relacional'],
    decision: 'Arquitetura preparada para dados sensíveis, sincronização biométrica e evolução por módulos.',
    icon: Smartphone,
  },
  beastfood: {
    accent: 'orange',
    role: 'Full Stack Web App',
    scope: ['Feed de avaliações', 'Auth e perfis', 'Restaurantes e favoritos'],
    decision: 'Produto social com navegação pública, áreas autenticadas e API remota, organizado para validar interação real entre usuários e restaurantes.',
    icon: Utensils,
  },
  powerfitness: {
    accent: 'cyan',
    role: 'Full Stack Lead',
    scope: ['PWA mobile-first', 'OAuth/JWT', 'Deploy automatizado'],
    decision: 'Separação clara entre frontend, backend e integrações externas para reduzir acoplamento operacional.',
    icon: MonitorSmartphone,
  },
}

const accentClasses = {
  emerald: {
    border: 'border-emerald-400/20 hover:border-emerald-300/35',
    text: 'text-emerald-200',
    bg: 'bg-emerald-400/10',
    line: 'from-emerald-300/70 to-transparent',
  },
  orange: {
    border: 'border-orange-400/20 hover:border-orange-300/35',
    text: 'text-orange-200',
    bg: 'bg-orange-400/10',
    line: 'from-orange-300/70 to-transparent',
  },
  cyan: {
    border: 'border-cyan-400/20 hover:border-cyan-300/35',
    text: 'text-cyan-200',
    bg: 'bg-cyan-400/10',
    line: 'from-cyan-300/70 to-transparent',
  },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-gradient-to-b from-blue-950/15 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200/80">cases selecionados</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Projetos apresentados pelo raciocínio técnico, não só pela interface.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              Cada case destaca contexto, escopo e decisões de arquitetura para transmitir domínio de produto real.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const config = projectConfig[project.id as keyof typeof projectConfig]
              if (!config) return null

              const accent = accentClasses[config.accent as keyof typeof accentClasses]
              const Icon = config.icon

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-zinc-950/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${accent.border}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-7 flex items-start justify-between gap-5">
                      <div>
                        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 ${accent.bg} px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${accent.text}`}>
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {config.role}
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          BeastFood — Rede Social Gastronômica
                        </h3>
                      </div>
                      <img src="/static/media/generic-project-cover.4e519074.webp" alt="Screenshot of BeastFood app" className="rounded-lg shadow-lg mb-4 w-full h-auto"/>
                    </div>

<p className="text-base leading-7 text-zinc-300"> BeastFood - rede social gastronômica interativa. Um projeto que prioriza a experiência do usuário com um feed de avaliações dinâmlico, autenticação segura e um sistema de gerenciamento de restaurantes, tudo isso com uma UI moderna e responsiva. </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {config.scope.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-zinc-300">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Decisão técnica</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{config.decision}</p>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Destaque</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{project.highlight}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      {project.confidential ? (
                        <div className="inline-flex items-center gap-2 text-xs leading-5 text-zinc-500">
                          <LockKeyhole className="h-4 w-4" />
                          Case corporativo: detalhes internos e código não públicos.
                        </div>
                      ) : (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {/* GitHub link */}
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                            >
                              <Code2 className="h-4 w-4" />
                              GitHub
                            </a>
                          )}
                          {/* Live URL link */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Online
                            </a>
                          )}
                        </div>
                      )}
                      <span className="inline-flex items-center text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                        Ler como case técnico
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
