import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold gradient-text">
          Portfolio
        </h2>
        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.split(', ').slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium border border-white/40 dark:border-slate-600/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-600/80 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-all hover:scale-105 border border-white/60 dark:border-slate-600/60"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
