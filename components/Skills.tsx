import { motion } from 'framer-motion'
import { Code2, Server, Wrench } from 'lucide-react'
import { skills } from '../data/skills'

const skillCategories = [
  { name: 'Front-End', icon: Code2, skills: skills.frontend, gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Back-End', icon: Server, skills: skills.backend, gradient: 'from-purple-500 to-pink-500' },
  { name: 'Other', icon: Wrench, skills: skills.other, gradient: 'from-orange-500 to-red-500' },
]

export default function Skills() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold gradient-text">
          Skills
        </h2>
        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`} />
            
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold gradient-text mb-4">
              {category.name}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-white/40 dark:border-slate-600/40 hover:bg-white/80 dark:hover:bg-slate-600/80 hover:scale-105 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
