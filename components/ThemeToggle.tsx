import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-20 right-4 md:top-24 z-50 p-3 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-lg">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return <ThemeToggleInner />
}

function ThemeToggleInner() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 md:top-24 z-50 p-3 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  )
}
