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
  TrendingUp,
  Utensils,
} from 'lucide-react'
import { TechIcon, hasTechIcon } from '@/components/ui/tech-icon'
import { Grid360Mockup, Money360Mockup, PowerFitnessMockup } from '@/components/ui/project-mockup'

const projectConfig = {
  money360: {
    accent: 'violet',
    role: 'Full Stack AI & Fintech',
    decision: 'Pipeline resiliente que separa coleta best-effort, cache por ativo/hora, streaming de IA e camadas de compliance para manter rastreabilidade e reduzir custo operacional.',
    icon: TrendingUp,
    number: '01',
    mockup: Money360Mockup,
    imageBg: 'bg-zinc-950',
    imagePad: false,
  },
  'grid-360': {
    accent: 'emerald',
    role: 'Tech Lead Mobile & Backend',
    decision: 'Arquitetura preparada para dados sensíveis, sincronização biométrica e evolução por módulos independentes.',
    icon: Smartphone,
    number: '02',
    mockup: Grid360Mockup,
    imageBg: 'bg-zinc-950',
    imagePad: false,
  },
  beastfood: {
    accent: 'orange',
    role: 'Full Stack Web App',
    decision: 'Produto social com navegação pública, áreas autenticadas e API remota — validando interação real entre usuários e restaurantes.',
    icon: Utensils,
    number: '03',
    mockup: null,
    imageBg: 'bg-zinc-900',
    imagePad: true,
  },
  powerfitness: {
    accent: 'cyan',
    role: 'Full Stack Lead',
    decision: 'Separação clara entre frontend, backend e integrações externas para reduzir acoplamento operacional.',
    icon: MonitorSmartphone,
    number: '04',
    mockup: PowerFitnessMockup,
    imageBg: 'bg-zinc-950',
    imagePad: false,
  },
}

const accentClasses = {
  violet: {
    border: 'border-violet-400/20',
    hoverBorder: 'hover:border-violet-300/50',
    text: 'text-violet-200',
    textMuted: 'text-violet-400',
    bg: 'bg-violet-500/10',
    badgeBorder: 'border-violet-400/30',
    numberColor: 'text-violet-400',
    mockupBg: 'bg-violet-950/40',
    decisionBorder: 'border-violet-400/25',
    decisionBg: 'bg-gradient-to-br from-violet-500/[0.15] via-blue-500/[0.06] to-transparent',
    decisionGlow: 'shadow-[inset_0_1px_0_rgba(139,92,246,0.18)]',
    glow: 'hover:shadow-[0_30px_80px_-32px_rgba(139,92,246,0.5)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(139,92,246,0.62),rgba(59,130,246,0.22)_36%,transparent_64%)]',
    glowRadial: 'bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(139,92,246,0.18),transparent_60%)]',
  },
  emerald: {
    border: 'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-300/50',
    text: 'text-emerald-200',
    textMuted: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-400/30',
    numberColor: 'text-emerald-400',
    mockupBg: 'bg-emerald-950/40',
    decisionBorder: 'border-emerald-400/25',
    decisionBg: 'bg-gradient-to-br from-emerald-500/[0.15] via-emerald-500/[0.05] to-transparent',
    decisionGlow: 'shadow-[inset_0_1px_0_rgba(16,185,129,0.18)]',
    glow: 'hover:shadow-[0_30px_80px_-32px_rgba(16,185,129,0.5)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(16,185,129,0.6),rgba(255,255,255,0.07)_36%,transparent_64%)]',
    glowRadial: 'bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%)]',
  },
  orange: {
    border: 'border-orange-400/20',
    hoverBorder: 'hover:border-orange-300/50',
    text: 'text-orange-200',
    textMuted: 'text-orange-400',
    bg: 'bg-orange-500/10',
    badgeBorder: 'border-orange-400/30',
    numberColor: 'text-orange-400',
    mockupBg: 'bg-orange-950/40',
    decisionBorder: 'border-orange-400/25',
    decisionBg: 'bg-gradient-to-br from-orange-500/[0.15] via-orange-500/[0.05] to-transparent',
    decisionGlow: 'shadow-[inset_0_1px_0_rgba(249,115,22,0.18)]',
    glow: 'hover:shadow-[0_30px_80px_-32px_rgba(249,115,22,0.5)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(249,115,22,0.6),rgba(255,255,255,0.07)_36%,transparent_64%)]',
    glowRadial: 'bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(249,115,22,0.15),transparent_60%)]',
  },
  cyan: {
    border: 'border-cyan-400/20',
    hoverBorder: 'hover:border-cyan-300/50',
    text: 'text-cyan-200',
    textMuted: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-400/30',
    numberColor: 'text-cyan-400',
    mockupBg: 'bg-cyan-950/40',
    decisionBorder: 'border-cyan-400/25',
    decisionBg: 'bg-gradient-to-br from-cyan-500/[0.15] via-cyan-500/[0.05] to-transparent',
    decisionGlow: 'shadow-[inset_0_1px_0_rgba(34,211,238,0.18)]',
    glow: 'hover:shadow-[0_30px_80px_-32px_rgba(34,211,238,0.45)]',
    borderGrad: '[background:linear-gradient(140deg,rgba(34,211,238,0.55),rgba(255,255,255,0.07)_36%,transparent_64%)]',
    glowRadial: 'bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(34,211,238,0.15),transparent_60%)]',
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
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6, ease: [0.21, 0.5, 0.32, 1] }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-zinc-950/60 shadow-[0_12px_44px_-18px_rgba(0,0,0,0.85)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 ${accent.border} ${accent.hoverBorder} ${accent.glow} ${isFeatured ? 'lg:col-span-2' : ''}`}
                >
                  {/* True gradient border */}
                  <div aria-hidden className={`mask-border pointer-events-none absolute inset-0 z-30 rounded-[inherit] p-px ${accent.borderGrad}`} />
                  {/* Hover spotlight bloom */}
                  <div aria-hidden className={`pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glowRadial}`} />

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
                        {/* Glass overlay — depth + top sheen */}
                        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/[0.05] ring-1 ring-inset ring-white/[0.06]" />
                        {/* Decorative number — large, premium */}
                        <div
                          className={`pointer-events-none absolute bottom-4 left-5 select-none font-mono text-[8rem] font-black leading-none ${accent.numberColor} opacity-25 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]`}
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

                        <div className={`mt-7 rounded-2xl border p-5 ${accent.decisionBorder} ${accent.decisionBg} ${accent.decisionGlow}`}>
                          <p className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${accent.textMuted}`}>
                            Decisão técnica
                          </p>
                          <p className="mt-2.5 text-base leading-7 font-medium text-zinc-100">{config.decision}</p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:scale-105 hover:border-white/25 hover:bg-white/[0.09] hover:text-white"
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
                        className={`pointer-events-none absolute right-5 top-4 z-[1] select-none font-mono text-[6rem] font-black leading-none ${accent.numberColor} opacity-[0.14]`}
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
                          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.04]" />
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
                      <div className={`mt-6 rounded-2xl border p-4 ${accent.decisionBorder} ${accent.decisionBg} ${accent.decisionGlow}`}>
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
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:scale-105 hover:border-white/25 hover:bg-white/[0.09] hover:text-white"
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
