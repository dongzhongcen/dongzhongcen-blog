import Head from 'next/head'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
import Career from '../components/Career'
import Skills from '../components/Skills'
import Articles from '../components/Articles'
import Weather from '../components/Weather'
import FlowingText from '../components/FlowingText'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>dongzhongcen - Developer</title>
        <meta name="description" content="Personal portfolio and blog of Dong Zhongcen" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        {/* Navigation */}
        <Navbar />

        {/* Weather Bar - Below Navbar */}
        <Weather />

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Profile Section - Main Focus */}
          <section id="profile" className="mb-16 scroll-mt-32">
            <Profile />
          </section>

          {/* Flowing Text Banner */}
          <section className="mb-16">
            <FlowingText />
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="mb-16 scroll-mt-32">
            <Portfolio />
          </section>

          {/* Career Section */}
          <section id="career" className="mb-16 scroll-mt-32">
            <Career />
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 scroll-mt-32">
            <Skills />
          </section>

          {/* Blog Section - External Links */}
          <section id="blog" className="mb-16 scroll-mt-32">
            <Articles />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border-t border-white/60 dark:border-slate-700/60 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Dong Zhongcen. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
