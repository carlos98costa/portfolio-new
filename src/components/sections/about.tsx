'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Workflow, Gauge, Users } from 'lucide-react'

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

            {/* Left — photo card */}
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.08]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/myself.jpg"
                  fill
                  alt="Carlos Costa — Tech Lead Full Stack & Mobile"
                  className="object-cover object-[center_18%] scale-105"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="bg-zinc-950 px-6 pb-6 pt-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">sobre</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-white">Carlos Costa</h2>
                <p className="mt-0.5 text-sm font-medium text-zinc-400">Tech Lead Full Stack & Mobile</p>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Decisões técnicas que sustentam produto, equipa e operação — muito além da primeira versão.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 text-center">
                    <div className="text-3xl font-bold text-white">3+</div>
                    <div className="mt-1 text-[11px] font-medium text-zinc-500">anos de exp.</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 text-center">
                    <div className="text-3xl font-bold text-white">3</div>
                    <div className="mt-1 text-[11px] font-medium text-zinc-500">projetos live</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — bio + principles */}
            <div className="space-y-5">
              <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-7">
                <div className="space-y-5 text-lg leading-8 font-medium text-zinc-300">
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
                      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14]"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.06] text-zinc-300 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 font-medium text-zinc-400">{item.text}</p>
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
