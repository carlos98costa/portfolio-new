import {
  siPython,
  siFastapi,
  siPostgresql,
  siDocker,
  siReact,
  siExpo,
  siNextdotjs,
  siTypescript,
  siVercel,
  siSupabase,
  siRailway,
  siRender,
  siGithubactions,
  siApple,
  siGoogle,
  siPhp,
} from 'simple-icons'

type SimpleIcon = {
  path: string
  hex: string
  title: string
}

const iconMap: Record<string, SimpleIcon> = {
  python: siPython,
  fastapi: siFastapi,
  postgresql: siPostgresql,
  docker: siDocker,
  react: siReact,
  'react native': siReact,
  expo: siExpo,
  'next.js': siNextdotjs,
  typescript: siTypescript,
  vercel: siVercel,
  supabase: siSupabase,
  railway: siRailway,
  render: siRender,
  'github actions': siGithubactions,
  'apple healthkit': siApple,
  'google health connect': siGoogle,
  php: siPhp,
}

interface TechIconProps {
  name: string
  className?: string
  size?: number
  colorized?: boolean
}

export function TechIcon({ name, className = '', size = 18, colorized = true }: TechIconProps) {
  const icon = iconMap[name.toLowerCase()]

  if (!icon) return null

  // Icons that are black by default — invert to white on dark backgrounds
  const isBlack = icon.hex === '000000' || icon.hex === '0B0D0E' || icon.hex === '1C2024'
  const fill = colorized
    ? isBlack
      ? '#ffffff'
      : `#${icon.hex}`
    : 'currentColor'

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  )
}

export function hasTechIcon(name: string): boolean {
  return name.toLowerCase() in iconMap
}
