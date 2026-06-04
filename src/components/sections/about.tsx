'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Workflow, Gauge, Users } from 'lucide-react'

const principles = [
  {
    icon: Workflow,
    title: 'Arquitetura clara',
    text: 'Separação de responsabilidades, contratos simples e estrutura que a equipa consegue manter.',
    color: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Gauge,
    title: 'Performance prática',
    text: 'Otimização onde afeta uso real: carregamento, latência, sincronização e experiência mobile.',
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: Users,
    title: 'Liderança técnica',
    text: 'Tradução entre negócio e engenharia para reduzir ruído, priorizar risco e entregar com previsibilidade.',
    color: 'text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'border-violet-400/20',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            {/* Left — photo card with gradient border */}
            <div className="p-px rounded-[2rem] bg-gradient-to-br from-blue-500/50 via-blue-400/10 to-violet-500/40 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
              <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-zinc-900">

                {/* Photo — aspect ratio keeps face proportional */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/myself.jpg"
                    fill
                    alt="Carlos Costa — Tech Lead Full Stack & Mobile"
                    className="object-cover object-[center_18%] scale-105"
                    sizes="(min-width: 1024px) 35vw, 100vw"
                  />
                  {/* Subtle vignette — only bottom 25% */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                {/* Info below photo */}
                <div className="px-6 pb-6 pt-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">sobre</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-white">Carlos Costa</h2>
                  <p className="mt-0.5 text-sm font-medium text-blue-400">Tech Lead Full Stack & Mobile</p>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    Decisões técnicas que sustentam produto, equipa e operação — muito além da primeira versão.
                  </p>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center">
                      <div className="text-xl font-bold text-white">3+</div>
                      <div className="mt-0.5 text-[11px] text-zinc-400">anos de exp.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center">
                      <div className="text-xl font-bold text-white">3</div>
                      <div className="mt-0.5 text-[11px] text-zinc-400">projetos live</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — bio + principles */}
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-sm">
                <div className="space-y-5 text-lg leading-8 font-medium text-zinc-100">
                  <p>
                    Desenvolvedor Full Stack & Mobile Tech Lead especializado em construir aplicações
                    escaláveis e produtos reais. Tenho experiência end-to-end: app, backend, dados,
                    integrações, deploy e manutenção.
                  </p>
                  <p>
                    Trabalho com React Native, Expo, Next.js, FastAPI e infraestrutura cloud,
                    incluindo integrações com Apple HealthKit e Google Health Connect quando o produto
                    exige dados nativos e sincronização confiável.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 transition-colors duration-200 hover:border-white/[0.18]"
                    >
                      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${item.border} ${item.bg} ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 font-medium text-zinc-200">{item.text}</p>
                    </div>
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
