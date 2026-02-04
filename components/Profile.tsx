import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, MapPin, Code2 } from 'lucide-react'

export default function Profile() {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl dark:shadow-slate-900/50 p-8 md:p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            Full Stack Developer
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-slate-800 dark:text-white">Hello, I&apos;m </span>
          <span className="gradient-text">dongzhongcen</span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl leading-relaxed">
          I create beautiful, interactive web experiences with modern technologies. 
          Passionate about clean code, user experience, and continuous learning.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {['React', 'TypeScript', 'Node.js', 'Next.js'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-white/40 dark:border-slate-600/40"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://gitee.com/giteesxd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-slate-900 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          
          <a
            href="mailto:dongzhongcen@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm border border-white/60 dark:border-slate-600/60 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm border border-white/60 dark:border-slate-600/60 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:scale-105 transition-transform"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-6">
          <MapPin className="w-4 h-4" />
          <span>China</span>
        </div>
      </div>
    </motion.div>
  )
}
