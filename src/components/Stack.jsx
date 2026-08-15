import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LangContext'

export default function Stack() {
  const { t } = useLang()
  const { tag, title, groups } = t.stack
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="stack" className="py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">

        <div ref={headRef} className="reveal flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-purple-700 dark:text-purple-400 uppercase">
            {tag}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50">
            {title}
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <div key={g.label}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex flex-col gap-4 p-6 rounded-2xl
                bg-neutral-50 dark:bg-neutral-900
                border border-neutral-100 dark:border-neutral-800
                hover:border-purple-200 dark:hover:border-purple-800
                hover:shadow-lg hover:shadow-purple-50 dark:hover:shadow-purple-900/20
                transition-all duration-300 group">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-purple-700 dark:text-purple-400">
                  {g.label}
                </span>
                <div className="w-8 h-px bg-purple-200 dark:bg-purple-800 mt-2
                  group-hover:w-full transition-all duration-500" />
              </div>
              <ul className="flex flex-col gap-2.5">
                {g.techs.map(tech => (
                  <li key={tech} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 font-light">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
