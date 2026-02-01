import { motion } from 'framer-motion'

/** Tech stack for floating background — using colored icons */
const techItems = [
  { slug: 'html5', label: 'HTML' },
  { slug: 'css3', label: 'CSS' },
  { slug: 'javascript', label: 'JS' },
  { slug: 'react', label: 'React' },
  { slug: 'typescript', label: 'TS' },
  { slug: 'php', label: 'PHP' },
  { slug: 'nodedotjs', label: 'Node' },
  { slug: 'python', label: 'Python' },
  { slug: 'mysql', label: 'MySQL' },
  { slug: 'mongodb', label: 'MongoDB' },
  { slug: 'postgresql', label: 'Postgres' },
  { slug: 'docker', label: 'Docker' },
  { slug: 'git', label: 'Git' },
  { slug: 'github', label: 'GitHub' },
  { slug: 'visualstudiocode', label: 'VS Code' },
]

/** Colored icon URLs for floating background */
const COLORED_ICONS: Record<string, string> = {
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nodedotjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  visualstudiocode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
}

const positions = [
  { top: '10%', left: '5%' }, { top: '15%', left: '85%' }, { top: '25%', left: '12%' },
  { top: '30%', left: '78%' }, { top: '40%', left: '3%' }, { top: '45%', left: '92%' },
  { top: '55%', left: '8%' }, { top: '60%', left: '88%' }, { top: '70%', left: '15%' },
  { top: '75%', left: '82%' }, { top: '85%', left: '6%' }, { top: '90%', left: '90%' },
  { top: '20%', left: '45%' }, { top: '50%', left: '50%' }, { top: '80%', left: '55%' },
]

const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons'
const iconUrl = (slug: string) => COLORED_ICONS[slug] || `${SIMPLE_ICONS_CDN}/${slug}.svg`

export function FloatingTechBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {techItems.map(({ slug, label }, i) => {
        const pos = positions[i % positions.length]
        const duration = 7 + (i % 4)
        const delay = (i % 5) * 0.4
        return (
          <motion.div
            key={label}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-40 dark:opacity-30"
            style={{ top: pos.top, left: pos.left }}
            animate={{
              y: [0, -18, 0],
              x: [0, 5, -5, 0],
              rotate: [0, 8, -8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration,
              delay: delay * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={iconUrl(slug)}
              alt=""
              className="w-full h-full object-contain floating-tech-icon"
              style={{ filter: 'none', colorScheme: 'normal' }}
              onError={(e) => {
                // Fallback to Simple Icons if colored icon fails
                const target = e.target as HTMLImageElement
                if (!target.src.includes('simple-icons')) {
                  target.src = `${SIMPLE_ICONS_CDN}/${slug}.svg`
                }
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
