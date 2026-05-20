'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data'
import { Badge } from '@/components/ui/badge'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Cases & Projetos
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:shadow-lg"
              >
                <div>
                  <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                  
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-primary/5 p-4">
                  <p className="text-sm font-medium text-primary">
                    Destaque: {project.highlight}
                  </p>
                </div>

                {project.confidential && (
                  <div className="mt-4 text-xs text-muted-foreground/70">
                    Projeto desenvolvido em ambiente corporativo. Código-fonte e detalhes internos não são públicos.
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}