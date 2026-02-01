import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { contact } from '@/data/content'
import { emailjsConfig } from '@/config/emailjs'
import emailjs from '@emailjs/browser'

const linkItem = {
  hidden: { opacity: 0, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
  }),
}

const formItem = {
  hidden: { opacity: 0, x: 25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4 },
  }),
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = {
    name: form.name.trim().length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
    message: form.message.trim().length >= 10,
  }
  const isValid = validate.name && validate.email && validate.message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Check if EmailJS is properly configured
      const { serviceId, templateId, publicKey } = emailjsConfig
      
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // EmailJS not configured - show demo success message
        console.log('Demo mode: EmailJS not configured')
        console.log('Form data:', { name: form.name, email: form.email, message: form.message })
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setSubmitStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTouched({ name: false, email: false, message: false })
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
        return
      }

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Tahha Aleem', // Your name
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTouched({ name: false, email: false, message: false })
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const links = [
    { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tahhaaleem@gmail.com&su=Portfolio%20Contact&body=Hi%20Tahha!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.', icon: Mail, label: 'Email' },
    { href: contact.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: contact.github, icon: Github, label: 'GitHub' },
    { href: contact.instagram, icon: FaInstagram, label: 'Instagram' },
    { href: contact.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
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
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{}}
          >
            <motion.p
              variants={linkItem}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-justify"
            >
              Open to full-time roles, internships, and collaboration. Reach out via email or socials.
            </motion.p>
            {links.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={linkItem}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
              >
                <motion.div
                  className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Icon size={20} />
                </motion.div>
                <span className="font-medium text-gray-900 dark:text-white">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{}}
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-soft"
          >
            <div className="space-y-4">
              {[
                { id: 'name' as const, label: 'Name', placeholder: 'Your name', validate: validate.name, msg: 'At least 2 characters' },
                { id: 'email' as const, label: 'Email', placeholder: 'you@example.com', validate: validate.email, msg: 'Valid email required' },
              ].map((field, i) => (
                <motion.div key={field.id} variants={formItem} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.id === 'email' ? 'email' : 'text'}
                    value={form[field.id]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, [field.id]: true }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder={field.placeholder}
                  />
                  {touched[field.id] && !field.validate && (
                    <p className="mt-1 text-xs text-red-500">{field.msg}</p>
                  )}
                </motion.div>
              ))}
              <motion.div variants={formItem} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                  placeholder="Your message..."
                />
                {touched.message && !validate.message && (
                  <p className="mt-1 text-xs text-red-500">At least 10 characters</p>
                )}
              </motion.div>
              <motion.div variants={formItem} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  whileHover={{ scale: isValid && !isSubmitting ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-2"
                  >
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                    <span className="text-sm text-green-700 dark:text-green-300">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="text-red-600 dark:text-red-400" />
                    <span className="text-sm text-red-700 dark:text-red-300">
                      Failed to send message. Please try again or contact me directly.
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
