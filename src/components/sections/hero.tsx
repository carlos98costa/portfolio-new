'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, FileDown, Layers3, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.505c0-1.317-.027-3.017-1.851-3.017-1.852 0-2.135 1.445-2.135 2.919v5.57h-3.553V9h3.414v1.561h.046c.477-.9 1.641-1.848 3.37-1.848 3.603 0 4.269 2.372 4.269 5.455v5.289zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.225 0z" />
  </svg>
)

const credibility = [
  { label: 'Mobile', value: 'React Native, Expo e integrações nativas' },
  { label: 'Backend', value: 'FastAPI, PostgreSQL, APIs e autenticação' },
  { label: 'Entrega', value: 'Docker, CI/CD, Railway, Vercel e cloud' },
]

const operatingModel = [
  {
    icon: Layers3,
    title: 'Arquitetura antes da tela',
    text: 'Defino fronteiras, dados, riscos de integração e plano de deploy antes de acelerar implementação.',
  },
  {
    icon: ShieldCheck,
    title: 'Produto sustentável',
    text: 'Código legível, monitorável e preparado para manutenção por equipa — não apenas uma demo bonita.',
  },
  {
    icon: BadgeCheck,
    title: 'Entrega ponta a ponta',
    text: 'Experiência em app, API, banco, infra e publicação para transformar requisito em operação real.',
  },
]

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-16rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="max-w-4xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Tech Lead Full Stack & Mobile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:mx-0 lg:text-8xl"
          >
            Eu desenho, construo e entrego produto digital em produção.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl lg:mx-0"
          >
            Sou Carlos Costa. Atuo da arquitetura ao deploy em apps mobile, PWAs e APIs,
            com foco em decisões técnicas claras, integrações reais e produto que continua evoluindo depois do lançamento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {credibility.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">{item.label}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{item.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Ver cases e decisões técnicas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-zinc-200 transition-all hover:-translate-y-0.5 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:w-auto"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </button>
              {isOpen && (
                <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <a
                    href="/cv/Carlos_Costa_Backend_Cloud.pdf"
                    download="Carlos_Costa_Backend_Cloud.pdf"
                    className="block rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    Backend/Cloud CV
                  </a>
                  <a
                    href="/cv/Carlos_Costa_FullStack_Mobile.pdf"
                    download="Carlos_Costa_FullStack_Mobile.pdf"
                    className="block rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    FullStack/Mobile CV
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Link
              href="https://github.com/carlos98costa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="Abrir GitHub de Carlos Costa"
            >
              <GitHubIcon />
              <span className="ml-2">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/devcarloscosta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="Abrir LinkedIn de Carlos Costa"
            >
              <LinkedInIcon />
              <span className="ml-2">LinkedIn</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/12 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-6 border-b border-white/10 pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Como trabalho</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Menos improviso. Mais engenharia.</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                O visual comunica maturidade, mas o diferencial é o processo: clareza técnica,
                escolhas justificadas e entrega verificável.
              </p>
            </div>

            <div className="space-y-4">
              {operatingModel.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
