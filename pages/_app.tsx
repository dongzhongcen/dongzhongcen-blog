import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
