'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Sobre
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Desenvolvedor Full Stack & Mobile Tech Lead especializado em construir aplicações 
              escaláveis e produtos reais. Com experiência end-to-end, lidero projetos de 
              conceito à produção, entregando soluções robustas para iOS e Android.
            </p>
            
            <p>
              Especializado em arquiteturas modernas com React Native, Expo no frontend mobile, 
              FastAPI no backend e infraestrutura cloud. Integração com sistemas como Apple HealthKit 
              e Google Health Connect é parte do meu dia a dia.
            </p>
            
            <p>
              Expert em CI/CD, Docker, e sistemas escaláveis que acompanham o crescimento do negócio. 
              Cada linha de código é escrita com foco em performance, manutenibilidade e futuro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}