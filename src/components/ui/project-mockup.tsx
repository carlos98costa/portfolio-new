'use client'

/** Abstract UI mockup cards for confidential projects — no real data exposed */

function MetricBar({ width, color }: { width: string; color: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <div className={`h-full rounded-full ${color}`} style={{ width }} />
    </div>
  )
}

/** GRID 360 — biometric health dashboard mockup */
export function Grid360Mockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-5">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-emerald-400/30" />
          <div className="h-2.5 w-20 rounded-full bg-white/10" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 w-5 rounded-md bg-white/[0.06]" />
          <div className="h-5 w-5 rounded-md bg-white/[0.06]" />
        </div>
      </div>

      {/* Biometric metrics row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'BPM', value: '72', color: 'text-emerald-300', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
          { label: 'SpO2', value: '98%', color: 'text-sky-300', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
          { label: 'Sono', value: '7h', color: 'text-violet-300', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
        ].map((m) => (
          <div key={m.label} className={`rounded-xl border ${m.border} ${m.bg} p-2.5 text-center`}>
            <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
            <div className="mt-0.5 text-[10px] text-zinc-500">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Activity graph placeholder */}
      <div className="flex-1 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-white/10" />
          <div className="h-2 w-8 rounded-full bg-emerald-400/20" />
        </div>
        {/* Bar chart simulation */}
        <div className="flex h-12 items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/50 to-emerald-400/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Health sync status */}
      <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <div className="h-2 w-24 rounded-full bg-white/10" />
        <div className="ml-auto h-2 w-12 rounded-full bg-emerald-400/20" />
      </div>
    </div>
  )
}

/** Money360 — AI market analysis and personal portfolio mockup */
export function Money360Mockup() {
  return (
    <div className="relative flex h-full w-full flex-col gap-3 overflow-hidden p-5">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(139,92,246,0.18),transparent_34%),radial-gradient(circle_at_85%_22%,rgba(34,197,94,0.12),transparent_28%)]" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <div className="h-2.5 w-24 rounded-full bg-white/15" />
          <div className="mt-1.5 h-2 w-36 rounded-full bg-violet-400/20" />
        </div>
        <div className="rounded-full border border-violet-300/25 bg-violet-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-200">
          IA live
        </div>
      </div>

      {/* Asset search + streaming status */}
      <div className="relative rounded-2xl border border-violet-300/20 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-zinc-950/60 px-3 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="h-2 w-20 rounded-full bg-white/20" />
          <div className="ml-auto h-2 w-14 rounded-full bg-violet-400/30" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: 'Score', value: '82', color: 'text-emerald-300', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
            { label: 'Risco', value: 'Médio', color: 'text-amber-300', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
            { label: 'Cache', value: '1h', color: 'text-violet-300', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
          ].map((m) => (
            <div key={m.label} className={`rounded-xl border ${m.border} ${m.bg} p-2 text-center`}>
              <div className={`text-xs font-bold ${m.color}`}>{m.value}</div>
              <div className="mt-0.5 text-[9px] text-zinc-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Market chart + report lines */}
      <div className="relative grid flex-1 gap-3 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-14 rounded-full bg-white/10" />
            <div className="h-2 w-8 rounded-full bg-emerald-400/25" />
          </div>
          <div className="flex h-20 items-end gap-1.5">
            {[34, 50, 44, 72, 58, 84, 67, 92, 76, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/70 via-blue-400/35 to-emerald-300/45"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
          {[
            { w: '78%', c: 'bg-white/18' },
            { w: '92%', c: 'bg-white/12' },
            { w: '64%', c: 'bg-violet-400/25' },
            { w: '86%', c: 'bg-white/10' },
            { w: '55%', c: 'bg-emerald-400/25' },
          ].map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/60" />
              <div className={`h-2 rounded-full ${line.c}`} style={{ width: line.w }} />
            </div>
          ))}
          <div className="mt-3 rounded-xl border border-white/[0.07] bg-zinc-950/40 p-2">
            <MetricBar width="72%" color="bg-gradient-to-r from-violet-400 to-emerald-300" />
          </div>
        </div>
      </div>

      {/* Compliance strip */}
      <div className="relative flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-zinc-500">
        <div className="h-2 w-2 rounded-full bg-violet-300" />
        <div className="h-1.5 w-40 rounded-full bg-white/10" />
        <div className="ml-auto h-1.5 w-16 rounded-full bg-white/[0.08]" />
      </div>
    </div>
  )
}

/** PowerFitness — PWA workout dashboard mockup */
export function PowerFitnessMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-28 rounded-full bg-white/10" />
          <div className="mt-1 h-2 w-16 rounded-full bg-cyan-400/20" />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        </div>
      </div>

      {/* Workout progress ring */}
      <div className="flex items-center gap-4 rounded-xl border border-cyan-400/15 bg-cyan-500/[0.06] p-3">
        {/* Simplified ring */}
        <div className="relative h-12 w-12 shrink-0">
          <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="14"
              fill="none"
              stroke="rgba(6,182,212,0.8)"
              strokeWidth="3"
              strokeDasharray="65 88"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-cyan-300">74%</span>
        </div>
        <div>
          <div className="h-2.5 w-20 rounded-full bg-white/10" />
          <div className="mt-1 h-2 w-14 rounded-full bg-white/[0.06]" />
        </div>
      </div>

      {/* Workout plan list */}
      <div className="flex-1 space-y-2 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        {[
          { done: true, color: 'bg-cyan-400' },
          { done: true, color: 'bg-cyan-400' },
          { done: false, color: 'bg-white/10' },
          { done: false, color: 'bg-white/10' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`h-3 w-3 shrink-0 rounded-full ${item.color}`} />
            <div className={`h-2 rounded-full ${item.done ? 'bg-white/20' : 'bg-white/[0.06]'}`} style={{ width: `${55 + i * 10}%` }} />
          </div>
        ))}
      </div>

      {/* OAuth / WhatsApp badge row */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <div className="h-1.5 w-10 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <div className="h-1.5 w-10 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}
