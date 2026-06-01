'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react'

const GitHubIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.505c0-1.317-.027-3.017-1.851-3.017-1.852 0-2.135 1.445-2.135 2.919v5.57h-3.553V9h3.414v1.561h.046c.477-.9 1.641-1.848 3.37-1.848 3.603 0 4.269 2.372 4.269 5.455v5.289zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.225 0z" />
  </svg>
)

const contactCards = [
  {
    label: 'LinkedIn',
    description: 'Canal principal para oportunidades, networking e conversas profissionais.',
    href: 'https://linkedin.com/in/devcarloscosta',
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    description: 'Repositórios, estudos e histórico técnico público.',
    href: 'https://github.com/carlos98costa',
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Cases',
    description: 'Veja projetos com contexto, escopo e decisões técnicas.',
    href: '#projects',
    icon: Sparkles,
    external: false,
  },
  {
    label: 'CV',
    description: 'Baixe o currículo FullStack/Mobile em PDF.',
    href: '/cv/Carlos_Costa_FullStack_Mobile.pdf',
    icon: Download,
    external: false,
    download: true,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-blue-950/20 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/65 shadow-2xl shadow-black/25 backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-zinc-300">
                  <Send className="h-4 w-4 text-blue-200" />
                  contato
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Quer discutir produto com alguém que também pensa execução?
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
                  Fale comigo se precisa tirar uma ideia do papel, organizar uma arquitetura,
                  evoluir um app existente ou acelerar uma entrega mobile/web com mais critério técnico.
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {contactCards.map((card, index) => {
                  const Icon = card.icon

                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.45 }}
                      viewport={{ once: true }}
                      className="bg-zinc-950/90"
                    >
                      <Link
                        href={card.href}
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        download={card.download ? 'Carlos_Costa_FullStack_Mobile.pdf' : undefined}
                        className="group flex min-h-64 flex-col p-7 transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                      >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-200 transition-colors group-hover:bg-blue-500/10">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{card.label}</h3>
                        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{card.description}</p>
                        <span className="mt-6 inline-flex items-center text-sm font-semibold text-zinc-200">
                          Abrir
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
