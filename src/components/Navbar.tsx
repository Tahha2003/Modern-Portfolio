import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'

const navLinks = [
  { href: '#hero', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#contact', label: 'CONTACT' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useDarkMode()

  // Simple navigation function
  const handleNavClick = (href: string) => {
    setOpen(false) // Close mobile menu
    
    // Simple scroll to element
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (open && !target.closest('nav')) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="text-lg font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Rizwan Aleem Tahha
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                console.log('Hamburger clicked, current state:', open)
                setOpen(!open)
              }}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - simplified version */}
        {open && (
          <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('Nav link clicked:', link.href)
                    setOpen(false)
                    setTimeout(() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Action buttons */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    setTimeout(() => {
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-lg font-medium transition-colors"
                >
                  View Projects
                </a>
                
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Download CV
                </a>
                
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block w-full px-4 py-3 text-primary-600 dark:text-primary-400 text-center rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}
