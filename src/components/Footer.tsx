import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { footer } from '@/data/content'

const social = [
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tahhaaleem@gmail.com&su=Portfolio%20Contact&body=Hi%20Tahha!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.', icon: Mail, label: 'Email' },
  { href: footer.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: footer.social.github, icon: Github, label: 'GitHub' },
  { href: footer.social.instagram, icon: FaInstagram, label: 'Instagram' },
  { href: footer.social.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-gray-500 dark:text-gray-400 italic mb-6 text-center max-w-2xl mx-auto"
        >
          {footer.quote}
        </motion.p>
        <motion.div
          className="flex justify-center gap-6 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {social.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs text-gray-400 dark:text-gray-500"
        >
          © {new Date().getFullYear()} Rizwan Aleem Tahha. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
