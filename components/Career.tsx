import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { careerHistory } from '../data/career'

export default function Career() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold gradient-text">
          Career
        </h2>
        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </div>

      <div className="relative rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 p-6 md:p-8 shadow-xl">
        {/* Timeline line */}
        <div className="absolute left-[2.25rem] top-16 bottom-16 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

        <div className="space-y-6 relative">
          {careerHistory.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg z-10">
                <Briefcase className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 p-4 rounded-xl bg-white/30 dark:bg-slate-700/30 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 group-hover:bg-white/50 dark:group-hover:bg-slate-700/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:gradient-text transition-all">
                  {item.role}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  at <span className="font-medium text-slate-900 dark:text-white">{item.company}</span>
                  {item.description && (
                    <span className="text-slate-500 dark:text-slate-400">, {item.description}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accolades */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-lg font-semibold gradient-text mb-4">
            Accolades
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: '500+', label: 'GitHub Stars' },
              { number: '10+', label: 'Production Apps' },
              { number: '1000+', label: 'Monthly Readers' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-white/40 dark:border-slate-600/40"
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
