import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LangContext'

export default function Projetos() {
  const { t } = useLang()
  const { tag, title, private: privateLabel, items } = t.projetos
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="projetos" className="py-28 bg-purple-50/60 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">

        <div ref={headRef} className="reveal flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-purple-700 dark:text-purple-400 uppercase">
            {tag}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50">
            {title}
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={p.name}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative flex flex-col gap-5 p-7 rounded-2xl
                bg-white dark:bg-neutral-950
                border border-neutral-100 dark:border-neutral-800
                hover:border-purple-200 dark:hover:border-purple-700
                hover:shadow-xl hover:shadow-purple-100/40 dark:hover:shadow-purple-900/30
                hover:-translate-y-1 transition-all duration-300 group">

              <div className="absolute top-0 left-7 right-7 h-px
                bg-gradient-to-r from-purple-400 to-purple-200
                dark:from-purple-600 dark:to-purple-900
                rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="font-display text-xl text-neutral-900 dark:text-neutral-50">{p.name}</h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium
                    bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300
                    border border-purple-100 dark:border-purple-900">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-1 min-h-[24px]">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="text-sm font-medium text-purple-700 dark:text-purple-400
                      hover:text-purple-900 dark:hover:text-purple-200 transition-colors">
                    GitHub →
                  </a>
                ) : (
                  <span className="text-xs text-neutral-400 dark:text-neutral-600 font-light italic">
                    {privateLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
