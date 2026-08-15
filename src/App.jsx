import { useState, useEffect } from 'react'
import { LangProvider } from './i18n/LangContext'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Sobre       from './components/Sobre'
import Stack       from './components/Stack'
import Projetos    from './components/Projetos'
import Experiencia from './components/Experiencia'
import Contato     from './components/Contato'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <LangProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <Navbar dark={dark} toggleDark={() => setDark(d => !d)} />
        <main>
          <Hero />
          <Sobre />
          <Stack />
          <Projetos />
          <Experiencia />
          <Contato />
        </main>
      </div>
    </LangProvider>
  )
}
