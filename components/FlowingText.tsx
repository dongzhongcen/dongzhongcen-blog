import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { articles } from '../data/articles'

// Generate random pastel colors
const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 60%)`
}

export default function FlowingText() {
  const [mounted, setMounted] = useState(false)
  
  // Get random article but keep word order
  const flowData = useMemo(() => {
    const randomArticle = articles[Math.floor(Math.random() * articles.length)]
    const text = `${randomArticle.title} ${randomArticle.summary}`
    const words = text.split(/\s+/).filter(word => word.length > 2)
    
    return {
      article: randomArticle,
      words: words.slice(0, 15).map((word, index) => ({
        id: `${word}-${index}`,
        text: word.replace(/[^a-zA-Z]/g, ''),
        color: getRandomColor(),
      }))
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-24 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl mb-12 backdrop-blur-sm" />
  }

  return (
    <div className="relative overflow-hidden bg-white/30 dark:bg-slate-800/30 rounded-2xl border border-white/50 dark:border-slate-700/50 mb-12 backdrop-blur-md shadow-xl">
      {/* Article Source */}
      <div className="absolute top-3 left-4 z-20">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          From: <span className="gradient-text">{flowData.article.title}</span>
        </span>
      </div>
      
      {/* Flowing Words */}
      <div className="h-28 flex items-center mt-4">
        <motion.div
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{ x: [0, -800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {/* Triple the items for seamless loop */}
          {[...flowData.words, ...flowData.words, ...flowData.words].map((item, index) => (
            <motion.span
              key={`${item.id}-${index}`}
              className="text-xl md:text-2xl font-bold cursor-pointer flowing-text"
              style={{ 
                color: item.color,
              }}
              whileHover={{ scale: 1.15 }}
            >
              {item.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent dark:from-slate-900/80 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent dark:from-slate-900/80 dark:to-transparent z-10 pointer-events-none" />
    </div>
  )
}
