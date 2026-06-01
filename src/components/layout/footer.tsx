'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/90">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Carlos Costa. Engenharia de produto, mobile e cloud.
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <Link href="https://github.com/carlos98costa" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-200">
              GitHub
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="https://linkedin.com/in/devcarloscosta" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-200">
              LinkedIn
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
