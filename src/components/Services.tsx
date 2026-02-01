import { motion } from 'framer-motion'
import { Globe, Sparkles, TestTube, Cloud } from 'lucide-react'
import { services } from '@/data/content'

const icons = [Globe, Sparkles, TestTube, Cloud]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            What I Offer
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {services.map((service, i) => {
            const Icon = icons[i] ?? Globe
            return (
              <motion.article
                key={service.title}
                variants={card}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <motion.div
                  className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 w-fit mb-4"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
