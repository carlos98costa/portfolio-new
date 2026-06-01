'use client'

import { motion } from 'framer-motion'
import { User, Workflow, Gauge, Users } from 'lucide-react'

const principles = [
  {
    icon: Workflow,
    title: 'Arquitetura clara',
    text: 'Separação de responsabilidades, contratos simples e estrutura que a equipa consegue manter.',
  },
  {
    icon: Gauge,
    title: 'Performance prática',
    text: 'Otimização onde afeta uso real: carregamento, latência, sincronização e experiência mobile.',
  },
  {
    icon: Users,
    title: 'Liderança técnica',
    text: 'Tradução entre negócio e engenharia para reduzir ruído, priorizar risco e entregar com previsibilidade.',
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
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/60 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-200">
                <User className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200/80">sobre</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Engenharia com visão de produto.
              </h2>
              <p className="mt-5 text-base leading-7 text-zinc-400">
                O objetivo não é parecer moderno: é tomar decisões técnicas que sustentam produto,
                equipa e operação depois que a primeira versão fica pronta.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
                <div className="space-y-5 text-lg leading-8 text-zinc-300">
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
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-zinc-950/55 p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-blue-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
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
