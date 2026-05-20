'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data'

const categoryLabels = {
  mobile: 'Mobile',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  cloud: 'Cloud',
  tools: 'Tools'
}

export default function StackSection() {
  const categories = Object.keys(categoryLabels) as (keyof typeof categoryLabels)[]
  
  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Stack & Tecnologias
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, categoryIndex) => {
              const techs = technologies.filter((t) => t.category === category)
              if (techs.length === 0) return null
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {categoryLabels[category]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIndex) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}