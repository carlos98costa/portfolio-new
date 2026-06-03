export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  highlight: string
  confidential?: boolean
  liveUrl?: string
  repoUrl?: string
  imageUrl?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export interface Technology {
  name: string
  icon?: string
  category: 'mobile' | 'frontend' | 'backend' | 'cloud' | 'database' | 'tools'
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}