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
                                      {/* Image / placeholder */}
                                      <div className="relative w-full h-56 overflow-hidden rounded-t-lg mb-4">
                                        {project.imageUrl ? (
                                          <img
                                            src={project.imageUrl}
                                            alt={`Screenshot of ${project.title}`}
                                            className="object-cover w-full h-full"
                                          />
                                        ) : (
                                          <div className="bg-gray-900 text-white flex items-center justify-center w-full h-full">
                                            <BriefcaseBusiness className="h-10 w-10" />
                                            <p className="text-sm italic">Sem imagem</p>
                                          </div>

                                      <div className="mt-4">
                                        <div className="flex items-start gap-3">
                                          <div className="inline-flex items-center">
                                            <BriefcaseBusiness className="h-6 w-6" />
                                            <h3 className="mt-1 text-2xl font-semibold text-white">
                                              {project.title}
                                            </h3>
                                          </div>
                                          <p className="mt-2 text-base text-zinc-300">
                                            {project.description.length > 100 ? project.description.slice(0, 97) + '...' : project.description}
                                          </p>
                                        </div>
                                        <div className="mt-2 bg-white/5 p-3 rounded-lg">
                                          {project.techStack.map(tech => (
                                            <span key={tech} className="bg-white/10 border border-white/5 px-2 py-1 text-zinc-300">
                                              {tech}
                                            </span>
                                          ))}
                                        </div>
                    </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
