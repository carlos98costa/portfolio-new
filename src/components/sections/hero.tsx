'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileDown } from 'lucide-react'
import { useState } from 'react'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.505c0-1.317-.027-3.017-1.851-3.017-1.852 0-2.135 1.445-2.135 2.919v5.57h-3.553V9h3.414v1.561h.046c.477-.9 1.641-1.848 3.37-1.848 3.603 0 4.269 2.372 4.269 5.455v5.289zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.14-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.225 0z" />
  </svg>
)

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 font-mono text-5xl font-bold tracking-tight md:text-7xl"
        >
          Carlos Costa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-xl text-primary md:text-2xl"
        >
          Full Stack & Mobile Tech Lead
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          React Native • Expo • FastAPI • Next.js • Cloud & APIs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="https://github.com/carlos98costa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            <GitHubIcon />
            <span className="ml-2">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/devcarloscosta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            <LinkedInIcon />
            <span className="ml-2">LinkedIn</span>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </button>
            {isOpen && (
              <div className="absolute left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-md border border-border/20 bg-background/95 shadow-lg backdrop-blur-sm">
                <a
                  href="/cv/Carlos_Costa_Backend_Cloud.pdf"
                  download="Carlos_Costa_Backend_Cloud.pdf"
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-accent/10"
                >
                  Backend/Cloud CV
                </a>
                <a
                  href="/cv/Carlos_Costa_FullStack_Mobile.pdf"
                  download="Carlos_Costa_FullStack_Mobile.pdf"
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-accent/10"
                >
                  FullStack/Mobile CV
                </a>
              </div>
            )}
          </div>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary/10 px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/20"
          >
            Ver Projetos
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}