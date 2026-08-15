import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'

const BR_FLAG = '🇧🇷'
const UK_FLAG = '🇬🇧'

export default function Navbar({ dark, toggleDark }) {
  const { lang, toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: t.nav.sobre,       href: '#sobre' },
    { label: t.nav.stack,       href: '#stack' },
    { label: t.nav.projetos,    href: '#projetos' },
    { label: t.nav.experiencia, href: '#experiencia' },
    { label: t.nav.contato,     href: '#contato' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm shadow-purple-100/40 dark:shadow-purple-900/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="font-display italic text-xl text-purple-800 dark:text-purple-400
          hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
          João.dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-neutral-500 dark:text-neutral-400
                hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          {/* Language toggle — only flag */}
          <button onClick={toggleLang} aria-label="Toggle language"
            className="text-2xl leading-none transition-transform duration-200
              hover:scale-125 active:scale-95">
            {lang === 'pt' ? BR_FLAG : UK_FLAG}
          </button>

          {/* Theme toggle */}
          <button onClick={toggleDark} aria-label="Alternar tema"
            className={`relative w-11 h-6 rounded-full transition-colors duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
              ${dark ? 'bg-purple-800' : 'bg-purple-200'}`}>
            <span className={`absolute top-0.5 w-5 h-5 rounded-full shadow transition-transform duration-300
              flex items-center justify-center text-[10px]
              ${dark ? 'translate-x-5 bg-neutral-900' : 'translate-x-0.5 bg-white'}`}>
              {dark ? '🌙' : '☀️'}
            </span>
          </button>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(o => !o)} className="md:hidden p-1 flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300
                hover:text-purple-800 dark:hover:text-purple-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
