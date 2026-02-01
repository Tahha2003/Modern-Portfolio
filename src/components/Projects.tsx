import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ChevronLeft, ChevronRight, Pause, Play, Grid3X3, X } from 'lucide-react'
import { projects } from '@/data/content'

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'cloud', label: 'Cloud & DevOps', count: projects.filter(p => p.category === 'cloud').length },
  { id: 'ai', label: 'AI & Machine Learning', count: projects.filter(p => p.category === 'ai').length },
  { id: 'automation', label: 'Automation & Testing', count: projects.filter(p => p.category === 'automation').length },
  { id: 'mobile', label: 'Mobile Development', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'data', label: 'Data Analytics', count: projects.filter(p => p.category === 'data').length },
  { id: 'blockchain', label: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length },
  { id: 'iot', label: 'IoT', count: projects.filter(p => p.category === 'iot').length },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      }
    })
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || showAllProjects) return

    const interval = setInterval(() => {
      paginate(1)
    }, 2000) // 2 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isPlaying, showAllProjects])

  const currentProject = projects[currentIndex]
  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
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
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Featured Work
          </motion.h2>
        </motion.div>

        {!showAllProjects ? (
          /* Carousel View */
          <div className="relative max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            {/* Main Carousel - Responsive Height */}
            <div className="relative h-[480px] sm:h-[450px] overflow-hidden rounded-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-soft rounded-2xl overflow-hidden">
                    {/* Project Image */}
                    <div className="h-40 sm:h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {currentProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm leading-relaxed text-justify line-clamp-3">
                        {currentProject.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {currentProject.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {currentProject.tech.length > 4 && (
                          <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            +{currentProject.tech.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      {/* GitHub Link */}
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors text-xs sm:text-sm"
                      >
                        <Github size={14} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Hidden on All Screens */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hidden items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hidden items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            >
              <ChevronRight size={16} />
            </button>

            {/* Play/Pause Button - Hidden on All Screens */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hidden items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary-600 dark:bg-primary-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Project Counter & Show All Button */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentIndex + 1} of {projects.length}
              </span>
              <button
                onClick={() => setShowAllProjects(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                <Grid3X3 size={16} />
                Show All Projects
              </button>
            </div>
          </div>
        ) : (
          /* Grid View with Filters */
          <div className="space-y-8">
            {/* Filter Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  All Projects ({filteredProjects.length})
                </h3>
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                >
                  <X size={14} />
                  Back to Carousel
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-soft-lg rounded-2xl overflow-hidden transition-shadow"
                  >
                    {/* Project Image */}
                    <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2 text-justify">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors w-full justify-center text-sm"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
