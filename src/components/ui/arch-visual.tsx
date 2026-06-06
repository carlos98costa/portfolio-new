'use client'

import { motion } from 'framer-motion'
import { TechIcon, hasTechIcon } from '@/components/ui/tech-icon'

const layers = [
  {
    id: 'mobile',
    label: 'Mobile',
    tech: 'React Native · Expo · HealthKit',
    icons: ['React Native', 'Expo'],
  },
  {
    id: 'api',
    label: 'API & Auth',
    tech: 'FastAPI · JWT · OAuth · REST',
    icons: ['FastAPI'],
  },
  {
    id: 'database',
    label: 'Database',
    tech: 'PostgreSQL · SQLAlchemy · Alembic',
    icons: ['PostgreSQL'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    tech: 'Docker · Railway · Vercel · CI/CD',
    icons: ['Docker', 'Railway', 'Vercel'],
  },
]

function FlowConnector() {
  return (
    <div className="flex justify-center py-0.5">
      <div className="relative h-7 w-px bg-gradient-to-b from-blue-400/20 via-blue-400/8 to-transparent">
        <motion.div
          className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.7)]"
          initial={{ top: '0%', opacity: 1 }}
          animate={{ top: '110%', opacity: 0 }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 2.2,
            ease: 'easeIn',
          }}
        />
      </div>
    </div>
  )
}

export function ArchVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-950/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
      <div className="relative p-7">
        {/* Header */}
        <div className="mb-5 border-b border-white/[0.07] pb-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
              stack em produção
            </p>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] text-zinc-500">live</span>
            </div>
          </div>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
            Arquitetura end-to-end.
          </h2>
          <p className="mt-1 text-xs leading-5 text-zinc-500">
            Da tela ao cloud — cada camada com decisão técnica clara.
          </p>
        </div>

        {/* Architecture layers */}
        <div>
          {layers.map((layer, i) => (
            <div key={layer.id}>
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="flex items-center gap-3 rounded-2xl border border-blue-400/[0.18] bg-blue-500/[0.07] px-5 py-3.5 transition-transform duration-300 hover:scale-[1.025]"
              >
                {/* Status dot */}
                <div className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </div>

                {/* Label + icons + tech */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                      {layer.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {layer.icons.map((icon) =>
                        hasTechIcon(icon) ? (
                          <TechIcon key={icon} name={icon} size={13} colorized={false} className="text-blue-200/70" />
                        ) : null
                      )}
                    </div>
                  </div>
                  <p className="mt-0.5 truncate text-[11px] text-zinc-500">{layer.tech}</p>
                </div>
              </motion.div>

              {i < layers.length - 1 && <FlowConnector />}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="font-mono text-[10px] text-zinc-600">full-cycle delivery</span>
          <div className="flex gap-1">
            {[0.25, 0.35, 0.5, 0.65].map((opacity, i) => (
              <div key={i} className="h-1.5 w-5 rounded-full bg-blue-400" style={{ opacity }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
