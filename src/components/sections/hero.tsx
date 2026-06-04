'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileDown, Smartphone, Server, Cloud } from 'lucide-react'
import { useState, useRef, useCallback } from 'react'
import { ArchVisual } from '@/components/ui/arch-visual'

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
  {
    label: 'Mobile',
    value: 'React Native, Expo e integrações nativas',
    icon: Smartphone,
    color: 'text-orange-300',
    iconBg: 'border-orange-400/25 bg-orange-500/10',
    glow: 'hover:border-orange-400/35 hover:shadow-[0_18px_44px_-20px_rgba(249,115,22,0.5)]',
  },
  {
    label: 'Backend',
    value: 'FastAPI, PostgreSQL, APIs e autenticação',
    icon: Server,
    color: 'text-emerald-300',
    iconBg: 'border-emerald-400/25 bg-emerald-500/10',
    glow: 'hover:border-emerald-400/35 hover:shadow-[0_18px_44px_-20px_rgba(16,185,129,0.5)]',
  },
  {
    label: 'Entrega',
    value: 'Docker, CI/CD, Railway, Vercel e cloud',
    icon: Cloud,
    color: 'text-sky-300',
    iconBg: 'border-sky-400/25 bg-sky-500/10',
    glow: 'hover:border-sky-400/35 hover:shadow-[0_18px_44px_-20px_rgba(56,189,248,0.5)]',
  },
]

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(59,130,246,0.10), transparent 50%)`,
        }}
      />

      {/* Static top line */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
      >
        {/* Left column */}
        <div className="max-w-4xl text-center lg:text-left">

          {/* Avatar + badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-blue-400/40 shadow-[0_0_16px_rgba(59,130,246,0.25)]">
              <Image
                src="/images/myself.jpg"
                fill
                alt="Carlos Costa"
                className="object-cover object-[center_18%]"
                sizes="44px"
                priority
              />
            </div>
            <div className="relative inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-violet-500/15 px-4 py-2 text-sm font-semibold text-blue-100 shadow-[0_0_34px_rgba(59,130,246,0.25)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Tech Lead Full Stack & Mobile
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto max-w-5xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:mx-0 lg:text-[5.5rem] lg:leading-[1.02]"
          >
            Eu desenho, construo e{' '}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(56,189,248,0.28)]">
              entrego produto digital em produção.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 font-medium text-zinc-200 md:text-xl lg:mx-0"
          >
            Sou Carlos Costa. Atuo da arquitetura ao deploy em apps mobile, PWAs e APIs,
            com foco em decisões técnicas claras, integrações reais e produto que continua evoluindo depois do lançamento.
          </motion.p>

          {/* Credibility cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {credibility.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`group rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${item.glow}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl border ${item.iconBg} ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className={`text-xs font-bold uppercase tracking-[0.18em] ${item.color}`}>{item.label}</div>
                  </div>
                  <div className="mt-3 text-sm leading-6 font-medium text-zinc-200">{item.value}</div>
                </div>
              )
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Ver cases e decisões técnicas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.06] px-6 py-3 font-semibold text-zinc-100 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:w-auto"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </button>
              {isOpen && (
                <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <a
                    href="/cv/Carlos_Costa_Backend_Cloud.pdf"
                    download="Carlos_Costa_Backend_Cloud.pdf"
                    className="block rounded-xl px-4 py-3 text-left text-sm transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    <span className="block font-medium text-white">Backend / Cloud</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">Python · FastAPI · PostgreSQL · Docker</span>
                  </a>
                  <a
                    href="/cv/Carlos_Costa_FullStack_Mobile.pdf"
                    download="Carlos_Costa_FullStack_Mobile.pdf"
                    className="block rounded-xl px-4 py-3 text-left text-sm transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    <span className="block font-medium text-white">Full Stack / Mobile</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">React Native · Next.js · Expo</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Social links */}
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
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="Abrir GitHub de Carlos Costa"
            >
              <GitHubIcon />
              <span className="ml-2">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/devcarloscosta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="Abrir LinkedIn de Carlos Costa"
            >
              <LinkedInIcon />
              <span className="ml-2">LinkedIn</span>
            </Link>
          </motion.div>
        </div>

        {/* Right column — Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          {/* Outer glow — slow breathing bloom */}
          <motion.div
            aria-hidden
            className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(55%_55%_at_50%_35%,rgba(59,130,246,0.24),transparent_70%)] blur-2xl"
            animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative">
            <ArchVisual />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
