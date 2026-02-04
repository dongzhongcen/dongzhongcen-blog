import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, GraduationCap, Wrench, BookOpen, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'profile', label: 'Home', icon: Home },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'career', label: 'Career', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'blog', label: 'Blog', icon: BookOpen },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('profile')
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/60 dark:border-slate-700/60' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('profile')}
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              DZC
            </motion.button>

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`flex items-center gap-2 ${!isActive ? 'nav-item-gradient' : ''}`}>
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/30 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`mx-4 mt-4 rounded-2xl border transition-all duration-300 ${
            scrolled || isOpen
              ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-white/60 dark:border-slate-700/60' 
              : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-white/40 dark:border-slate-700/40'
          }`}
        >
          <div className="flex items-center justify-between px-4 h-14">
            <motion.button
              onClick={() => scrollToSection('profile')}
              className="text-lg font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              DZC
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className={!isActive ? 'nav-item-gradient' : ''}>
                          {item.label}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  )
}
