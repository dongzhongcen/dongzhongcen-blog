import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowUpRight, BookOpen, Search, X, Tag, ExternalLink } from 'lucide-react'
import { articles } from '../data/articles'

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    articles.forEach(article => article.tags.forEach(tag => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = 
        searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesTag = selectedTag === null || article.tags.includes(selectedTag)
      
      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTag(null)
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold gradient-text">
          Blog
        </h2>
        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </div>

      {/* Search and Filter Section */}
      <div className="rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 p-6 mb-6 shadow-xl">
        {/* Search Input */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-3 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm border border-white/60 dark:border-slate-600/60 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200/50 dark:hover:bg-slate-600/50 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400 mr-1" />
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedTag === null
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-600/80 border border-white/40 dark:border-slate-600/40'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-600/80 border border-white/40 dark:border-slate-600/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{filteredArticles.length} articles found</span>
          {(searchTerm || selectedTag) && (
            <button
              onClick={clearFilters}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Platform Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        {article.platform}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {article.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:gradient-text transition-all">
                      {article.title}
                      <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                      {article.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 rounded-lg text-sm border border-white/40 dark:border-slate-600/40"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setSelectedTag(tag)
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-500 dark:text-slate-400"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No articles found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  )
}
