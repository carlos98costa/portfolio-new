import { Project, Experience, Technology } from '@/types'

export const projects: Project[] = [
  {
    id: 'grid-360',
    title: 'GRID 360 — Plataforma Health & Fitness',
    description: 'Aplicação mobile iOS/Android com React Native + Expo, integrando Apple HealthKit e Google Health Connect para sincronização biométrica de sono, BPM, respiração e SpO2.',
    techStack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'Docker', 'Apple HealthKit', 'Google Health Connect'],
    highlight: 'Sistema de sincronização biométrica em tempo real',
    confidential: true,
    imageUrl: '/images/projects/grid.png',
  },
  {
    id: 'beastfood',
    title: 'BeastFood — Rede Social Gastronômica',
    description: 'Aplicação web para descoberta de restaurantes e compartilhamento de experiências gastronômicas, com feed de avaliações, autenticação, perfis de usuário, favoritos e fluxo de cadastro/gestão de restaurantes.',
    techStack: ['React', 'REST API', 'JWT/Auth', 'Vercel', 'Render', 'Responsive UI'],
    highlight: 'Produto social completo com avaliações, restaurantes, perfis e interação entre usuários',
    imageUrl: '/images/projects/beastFood.png',
    liveUrl: 'https://beast-food-nine.vercel.app/',
    repoUrl: 'https://github.com/carlos98costa/beastFood'
  },
  {
    id: 'powerfitness',
    title: 'PowerFitness — Plataforma de Saúde e Treinos',
    description: 'PWA mobile-first com FastAPI + PostgreSQL no backend e Next.js + React no frontend. Integração com OAuth/JWT, APIs externas e WhatsApp API.',
    techStack: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Railway', 'Vercel', 'WhatsApp API'],
    highlight: 'Arquitetura escalável com deploy automatizado',
    imageUrl: '/images/projects/power.png',
    confidential: true
  }
]

export const experiences: Experience[] = [
  {
    id: 'fm-negocios',
    company: 'FM Negócios Digitais',
    role: 'Tech Lead Full Stack & Mobile',
    period: '2025 — Presente',
    description: 'Liderança técnica em projetos de saúde e fitness, arquitetura de aplicações escaláveis e gestão de equipe.',
    highlights: ['Arquitetura de microserviços', 'CI/CD avançado', 'Mobile-first development', 'Cloud infrastructure']
  },
  {
    id: 'fazendinha',
    company: 'Fazendinha Conveniência',
    role: 'Desenvolvedor Full Stack Sênior',
    period: '2022 — 2025',
    description: 'Desenvolvimento de soluções para e-commerce e gestão de varejo.',
    highlights: ['APIs REST', 'Sistemas de pagamento', 'Performance optimization', 'UI/UX premium']
  },
  {
    id: 'fast-tech',
    company: 'Fast Tech',
    role: 'Desenvolvedor Full Stack',
    period: '2025 — presente',
    description: 'Desenvolvimento de aplicações web e mobile para diversos clientes corporativos.',
    highlights: ['React Native', 'Node.js', 'SQL/NoSQL databases', 'Agile methodology']
  }
]

export const technologies: Technology[] = [
  { name: 'React Native', category: 'mobile' },
  { name: 'Expo', category: 'mobile' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Responsive UI', category: 'frontend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'JWT/Auth', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Docker', category: 'tools' },
  { name: 'GitHub Actions', category: 'tools' },
  { name: 'Railway', category: 'cloud' },
  { name: 'Render', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
  { name: 'Apple HealthKit', category: 'tools' },
  { name: 'Google Health Connect', category: 'tools' }
]