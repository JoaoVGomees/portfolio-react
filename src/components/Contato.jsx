import useScrollReveal from '../hooks/useScrollReveal'

const links = [
  { label: 'joao@email.com',           href: 'mailto:joao@email.com',              icon: '✉️' },
  { label: 'linkedin.com/in/joaovitor', href: 'https://linkedin.com/in/joaovitor',  icon: '💼' },
  { label: 'github.com/JoaoVGomees',    href: 'https://github.com/JoaoVGomees',     icon: '🐙' },
]

export default function Contato() {
  const headRef  = useScrollReveal()
  const linksRef = useScrollReveal()

  return (
    <section id="contato" className="py-28 bg-purple-800 dark:bg-purple-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-10 text-center">

        <div ref={headRef} className="reveal flex flex-col gap-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            Vamos conversar?
          </h2>
          <p className="text-purple-200 dark:text-purple-300 font-light text-lg max-w-md">
            Estou aberto a oportunidades CLT e estágio em desenvolvimento backend.
          </p>
        </div>

        <div ref={linksRef}
          className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl
                bg-white/10 hover:bg-white/20
                border border-white/20 hover:border-white/40
                text-white text-sm font-medium
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-purple-300/50 text-xs font-light mt-2">
          © {new Date().getFullYear()} João Vitor Gomes Pereira
        </p>

      </div>
    </section>
  )
}
