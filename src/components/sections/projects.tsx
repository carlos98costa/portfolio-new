'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/data'
import {
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  LockKeyhole,
  MonitorSmartphone,
  Smartphone,
  Utensils,
} from 'lucide-react'
import { TechIcon, hasTechIcon } from '@/components/ui/tech-icon'
import { Grid360Mockup, PowerFitnessMockup } from '@/components/ui/project-mockup'

const projectConfig = {
  'grid-360': {
    accent: 'emerald',
    role: 'Tech Lead Mobile & Backend',
    decision: 'Arquitetura preparada para dados sensíveis, sincronização biométrica e evolução por módulos independentes.',
    icon: Smartphone,
    number: '01',
    mockup: Grid360Mockup,
    imageBg: 'bg-zinc-950',
    imagePad: false,
  },
  beastfood: {
    accent: 'orange',
    role: 'Full Stack Web App',
    decision: 'Produto social com navegação pública, áreas autenticadas e API remota — validando interação real entre usuários e restaurantes.',
    icon: Utensils,
    number: '02',
    mockup: null,
    imageBg: 'bg-zinc-900',
    imagePad: true,
  },
  powerfitness: {
    accent: 'cyan',
    role: 'Full Stack Lead',
    decision: 'Separação clara entre frontend, backend e integrações externas para reduzir acoplamento operacional.',
    icon: MonitorSmartphone,
    number: '03',
    mockup: PowerFitnessMockup,
    imageBg: 'bg-zinc-950',
    imagePad: false,
  },
}

const accentClasses = {
  emerald: {
    border: 'border-emerald-400/25',
    hoverBorder: 'hover:border-emerald-300/45',
    text: 'text-emerald-200',
    textMuted: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    topLine: 'from-emerald-400/80 to-transparent',
    badgeBorder: 'border-emerald-400/30',
    numberColor: 'text-emerald-400',
    mockupBg: 'bg-emerald-950/40',
    decisionBorder: 'border-emerald-400/25',
    decisionBg: 'bg-emerald-500/[0.07]',
  },
  orange: {
    border: 'border-orange-400/25',
    hoverBorder: 'hover:border-orange-300/45',
    text: 'text-orange-200',
    textMuted: 'text-orange-400',
    bg: 'bg-orange-500/10',
    topLine: 'from-orange-400/80 to-transparent',
    badgeBorder: 'border-orange-400/30',
    numberColor: 'text-orange-400',
    mockupBg: 'bg-orange-950/40',
    decisionBorder: 'border-orange-400/25',
    decisionBg: 'bg-orange-500/[0.07]',
  },
  cyan: {
    border: 'border-cyan-400/25',
    hoverBorder: 'hover:border-cyan-300/45',
    text: 'text-cyan-200',
    textMuted: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    topLine: 'from-cyan-400/80 to-transparent',
    badgeBorder: 'border-cyan-400/30',
    numberColor: 'text-cyan-400',
    mockupBg: 'bg-cyan-950/40',
    decisionBorder: 'border-cyan-400/25',
    decisionBg: 'bg-cyan-500/[0.07]',
  },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-gradient-to-b from-blue-950/10 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              cases selecionados
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Projetos apresentados pelo raciocínio técnico,{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                não só pela interface.
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 font-medium text-zinc-300 md:text-lg">
              Cada case destaca contexto e decisões de arquitetura para transmitir domínio de produto real.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const config = projectConfig[project.id as keyof typeof projectConfig]
              if (!config) return null

              const accent = accentClasses[config.accent as keyof typeof accentClasses]
              const Mockup = config.mockup
              const isFeatured = index === 0

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-zinc-950/60 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${accent.border} ${accent.hoverBorder} ${isFeatured ? 'lg:col-span-2' : ''}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.topLine}`} />

                  {isFeatured ? (
                    /* Featured card — horizontal layout */
                    <div className="grid lg:grid-cols-2 lg:items-stretch">
                      {/* Visual — left panel */}
                      <div className={`relative h-64 overflow-hidden lg:h-full lg:min-h-[440px] ${config.imageBg} ${config.imagePad ? 'p-6' : ''}`}>
                        {project.imageUrl ? (
                          <>
                            <Image
                              src={project.imageUrl}
                              alt={`Screenshot do projeto ${project.title}`}
                              fill
                              priority
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className={`object-contain object-center transition-transform duration-700 group-hover:scale-[1.02] ${config.imagePad ? 'rounded-xl' : ''}`}
                            />
                          </>
                        ) : Mockup ? (
                          <div className={`h-full min-h-64 lg:min-h-[440px] ${accent.mockupBg}`}>
                            <Mockup />
                          </div>
                        ) : (
                          <div className={`h-full min-h-64 lg:min-h-[440px] ${accent.mockupBg}`} />
                        )}
                        {/* Decorative number — visible, outlined */}
                        <div
                          className={`pointer-events-none absolute bottom-4 left-5 select-none font-mono text-[8rem] font-black leading-none ${accent.numberColor} opacity-[0.12]`}
                          aria-hidden="true"
                        >
                          {config.number}
                        </div>
                      </div>

                      {/* Content — right panel */}
                      <div className="flex flex-col p-8 lg:p-10">
                        <div className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${accent.badgeBorder} ${accent.bg} ${accent.text}`}>
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {config.role}
                        </div>

                        <h3 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 text-lg leading-8 font-medium text-zinc-200">
                          {project.description}
                        </p>

                        <div className={`mt-7 rounded-2xl border p-5 ${accent.decisionBorder} ${accent.decisionBg}`}>
                          <p className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${accent.textMuted}`}>
                            Decisão técnica
                          </p>
                          <p className="mt-2.5 text-base leading-7 font-medium text-zinc-100">{config.decision}</p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-200"
                            >
                              {hasTechIcon(tech) && <TechIcon name={tech} size={12} colorized />}
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                          {project.confidential ? (
                            <div className="inline-flex items-center gap-2 text-xs text-zinc-500">
                              <LockKeyhole className="h-4 w-4" />
                              Case corporativo — código e detalhes não públicos.
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {project.repoUrl && (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                >
                                  <Code2 className="h-4 w-4" />
                                  GitHub
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Ver live
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard card — vertical layout */
                    <div className="relative flex h-full flex-col p-6">
                      {/* Decorative number */}
                      <div
                        className={`pointer-events-none absolute right-5 top-4 select-none font-mono text-[6rem] font-black leading-none ${accent.numberColor} opacity-[0.09]`}
                        aria-hidden="true"
                      >
                        {config.number}
                      </div>

                      {/* Visual */}
                      {project.imageUrl ? (
                        <div className={`relative mb-7 h-64 overflow-hidden rounded-2xl border border-white/10 ${config.imageBg} ${config.imagePad ? 'p-4' : ''}`}>
                          <Image
                            src={project.imageUrl}
                            alt={`Screenshot do projeto ${project.title}`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className={`object-contain object-center transition-transform duration-700 group-hover:scale-[1.02] ${config.imagePad ? 'rounded-lg' : ''}`}
                          />
                        </div>
                      ) : Mockup ? (
                        <div className={`mb-7 h-64 overflow-hidden rounded-2xl border ${accent.border} ${accent.mockupBg}`}>
                          <Mockup />
                        </div>
                      ) : null}

                      {/* Header */}
                      <div className="mb-5">
                        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${accent.badgeBorder} ${accent.bg} ${accent.text}`}>
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {config.role}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-base leading-7 font-medium text-zinc-200">{project.description}</p>

                      {/* Decision */}
                      <div className={`mt-6 rounded-2xl border p-4 ${accent.decisionBorder} ${accent.decisionBg}`}>
                        <p className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${accent.textMuted}`}>
                          Decisão técnica
                        </p>
                        <p className="mt-2 text-sm leading-6 text-zinc-200">{config.decision}</p>
                      </div>

                      {/* Tech stack */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-200"
                          >
                            {hasTechIcon(tech) && <TechIcon name={tech} size={12} colorized />}
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                        {project.confidential ? (
                          <div className="inline-flex items-center gap-2 text-xs text-zinc-500">
                            <LockKeyhole className="h-4 w-4" />
                            Case corporativo — código e detalhes não públicos.
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                              >
                                <Code2 className="h-4 w-4" />
                                GitHub
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Ver live
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
