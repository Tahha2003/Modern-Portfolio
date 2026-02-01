import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/data/content'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider"
          >
            Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Academic Background
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-soft"
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 shrink-0"
              initial={{ rotate: -10, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <GraduationCap size={28} />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-primary-600 dark:text-primary-400 font-medium">
                {education.expected}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Relevant coursework:
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <motion.li
                    key={course}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-600"
                  >
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
