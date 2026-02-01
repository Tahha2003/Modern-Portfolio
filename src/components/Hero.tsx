import { motion } from 'framer-motion'
import { ArrowRight, FileDown, Mail } from 'lucide-react'
import { hero } from '@/data/content'
import { FloatingTechBackground } from './FloatingTechBackground'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { y: 28, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

const itemScale = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-gradient-to-b from-primary-50/50 dark:from-primary-950/30 to-transparent"
    >
      <FloatingTechBackground />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            {hero.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center"
          >
            {hero.title}
          </motion.p>
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto text-center"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.a
              variants={itemScale}
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium shadow-soft hover:shadow-soft-lg transition-all duration-200"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              variants={itemScale}
              href="/Resume.pdf"
              download="Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <FileDown size={18} />
              Download CV
            </motion.a>
            <motion.a
              variants={itemScale}
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
