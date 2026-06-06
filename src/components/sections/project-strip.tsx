'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const previews = [
  { title: 'Money360', sub: 'IA · Fintech · Next.js', img: '/images/projects/money360.png' },
  { title: 'Grid 360', sub: 'Mobile · React Native', img: '/images/projects/grid.png' },
  { title: 'BeastFood', sub: 'Web App · Social', img: '/images/projects/beastFood.png' },
  { title: 'PowerFitness', sub: 'PWA · FastAPI', img: '/images/projects/power.png' },
]

export default function ProjectStrip() {
  return (
    <section className="border-b border-white/[0.06] py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
            trabalho selecionado
          </span>

          <div className="flex flex-1 gap-3 overflow-x-auto pb-1 sm:overflow-visible sm:pb-0">
            {previews.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="#projects"
                  className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-2 pr-4 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                >
                  <div className="relative h-12 w-20 overflow-hidden rounded-xl border border-white/[0.07] bg-zinc-950">
                    <Image
                      src={p.img}
                      fill
                      alt={p.title}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{p.title}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-zinc-600">{p.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            href="#projects"
            className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-zinc-300 sm:flex"
          >
            ver todos
            <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
