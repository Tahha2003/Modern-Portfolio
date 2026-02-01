import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, ChevronDown, ChevronUp } from 'lucide-react'
import { about } from '@/data/content'

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const fullParagraphs = about.summary.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-4">
            <User size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Summary
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
        >
          {/* Brief summary - visible only when not expanded */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-justify"
              >
                {about.brief}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Expandable full content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-6 overflow-hidden"
              >
                {fullParagraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="text-justify"
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Read More/Less Button */}
          <motion.div
            className="flex justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-100 dark:hover:bg-primary-950/70 transition-colors border border-primary-200 dark:border-primary-800"
            >
              {isExpanded ? (
                <>
                  Read Less
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
