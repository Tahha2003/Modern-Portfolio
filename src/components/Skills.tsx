import { skillCategories } from '@/data/content'
import { motion } from 'framer-motion'

/** jsDelivr serves the official Simple Icons npm package — slugs match simpleicons.org */
const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons'

/** Colored icon URLs - prioritizing original brand colors */
const COLORED_ICONS: Record<string, string> = {
  // Web & Application Development
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nodedotjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  jquery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  
  // AI, ML & Data Science
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  plotly: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
  scikitlearn: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  keras: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
  scipy: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg',
  opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  streamlit: 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
  matlab: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
  
  // Databases & Data Warehousing
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  microsoftsqlserver: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  oracle: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  
  // Cloud, DevOps & Deployment
  amazonaws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  microsoftazure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  googlecloud: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  vercel: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  githubactions: 'https://avatars.githubusercontent.com/u/44036562?s=200&v=4',
  
  // Tools, IDEs & Design
  visualstudiocode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  visualstudio: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  adobephotoshop: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
  adobeillustrator: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg',
  canva: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  microsoftoffice: 'https://img.icons8.com/color/96/microsoft-office-2019.png',
  powerbi: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  selenium: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
  apachenetbeanside: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg',
  gnubash: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  cisco: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
}

const iconUrl = (slug: string) => {
  // Always use colored icons if available
  if (COLORED_ICONS[slug]) {
    return COLORED_ICONS[slug]
  }
  // Fallback to Simple Icons CDN
  return `${SIMPLE_ICONS_CDN}/${slug}.svg`
}

// Animation variants for staggered animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const categoryItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.6 },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            Tech Stack & Skills
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* All Categories in Vertical Layout with Scrolling Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryItem}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100 dark:border-gray-700/50"
            >
              {/* Category Header */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8"
              >
                <span className="text-3xl">{category.emoji}</span>
                <span>{category.title}</span>
              </motion.h3>

              {/* Scrolling Skills Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative overflow-hidden mask-gradient py-8"
              >
                <div 
                  className="flex gap-8 animate-scroll-left"
                  style={{
                    animationDuration: `${30 + categoryIndex * 10}s`, // Different speeds for each category
                    animationDelay: `${categoryIndex * 3}s`, // Staggered start
                  }}
                >
                  {/* Skills with names */}
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex-shrink-0 flex flex-col items-center text-center group cursor-pointer perspective-1000 pt-6 pb-2"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 shadow-sm mb-4 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/50 group-hover:border-primary-300 dark:group-hover:border-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-y-12 group-hover:rotate-x-12 transform-gpu preserve-3d">
                        <img
                          src={iconUrl(tech.slug)}
                          alt={tech.name}
                          className="w-full h-full object-contain skill-icon transition-all duration-500 group-hover:drop-shadow-lg group-hover:transform group-hover:translateZ-4"
                          style={{ filter: 'none', colorScheme: 'normal' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            if (!target.src.includes('simple-icons')) {
                              target.src = `${SIMPLE_ICONS_CDN}/${tech.slug}.svg`
                            }
                          }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 max-w-20 leading-tight transition-all duration-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:transform group-hover:-translate-y-1">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
          width: max-content;
        }
        
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          padding-top: 2rem;
          padding-bottom: 1rem;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .translateZ-4 {
          transform: translateZ(16px);
        }
        
        .group:hover .group-hover\\:rotate-y-12 {
          transform: scale(1.1) translateY(-8px) rotateY(12deg) rotateX(12deg);
        }
        
        .group:hover .group-hover\\:translateZ-4 {
          transform: translateZ(16px);
        }
        
        /* Enhanced 3D hover effects */
        .group:hover > div {
          transform: scale(1.1) translateY(-8px) rotateY(12deg) rotateX(12deg);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 30px rgba(59, 130, 246, 0.5),
            0 0 60px rgba(59, 130, 246, 0.3),
            0 -10px 30px rgba(59, 130, 246, 0.2);
        }
        
        .dark .group:hover > div {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(96, 165, 250, 0.6),
            0 0 60px rgba(96, 165, 250, 0.4),
            0 -10px 30px rgba(96, 165, 250, 0.3);
        }
      `}</style>
    </section>
  )
}