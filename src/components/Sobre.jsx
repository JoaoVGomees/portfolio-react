import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LangContext'

export default function Sobre() {
  const { t } = useLang()
  const { tag, title, p1, p1mid, p2, softSkills, stats } = t.sobre
  const titleRef = useScrollReveal()
  const textRef  = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <section id="sobre" className="py-28 bg-purple-50/60 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

          <div ref={titleRef} className="reveal reveal-left md:w-64 flex-shrink-0 flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.2em] text-purple-700 dark:text-purple-400 uppercase">
              {tag}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50 leading-tight whitespace-pre-line">
              {title}
            </h2>
            <div className="w-12 h-1 rounded-full bg-purple-300 dark:bg-purple-700 mt-2" />
          </div>

          <div ref={textRef} className="reveal reveal-right flex-1 flex flex-col gap-6">
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light text-lg">
              {p1}{' '}
              <span className="text-neutral-700 dark:text-neutral-200 font-medium">Java/Spring Boot</span>{' '}
              e{' '}
              <span className="text-neutral-700 dark:text-neutral-200 font-medium">C#/ASP.NET Core</span>,{' '}
              {p1mid}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
              {p2}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {softSkills.map(s => (
                <span key={s} className="px-4 py-1.5 rounded-full text-sm font-medium
                  bg-white dark:bg-neutral-800
                  border border-purple-200 dark:border-purple-800
                  text-purple-800 dark:text-purple-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div ref={statsRef}
          className="reveal grid grid-cols-3 gap-4 md:gap-6
            border-t border-purple-100 dark:border-purple-900/50 pt-10">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col gap-1 text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-purple-800 dark:text-purple-400">
                {s.value}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-500 font-light">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
