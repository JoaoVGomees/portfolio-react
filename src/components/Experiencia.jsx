import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LangContext'

function TimelineItem({ item, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} style={{ transitionDelay: `${index * 80}ms` }}
      className="reveal relative flex gap-8 pb-12 last:pb-0">
      <div className="flex-shrink-0 relative z-10 mt-1">
        <div className="w-7 h-7 rounded-full bg-white dark:bg-neutral-950
          border-2 border-purple-300 dark:border-purple-700
          flex items-center justify-center transition-colors">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-500" />
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-0.5 pb-2 pl-0 pr-6">
        <span className="text-xs font-medium tracking-wider text-purple-600 dark:text-purple-400">
          {item.period}
        </span>
        <h3 className="font-display text-xl text-neutral-900 dark:text-neutral-50 leading-snug">
          {item.title}
        </h3>
        <span className="text-sm font-medium text-purple-700 dark:text-purple-400">
          {item.org}
        </span>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    </div>
  )
}

export default function Experiencia() {
  const { t } = useLang()
  const { tag, title, items } = t.experiencia
  const headRef = useScrollReveal()

  return (
    <section id="experiencia" className="py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">

        <div ref={headRef} className="reveal flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-purple-700 dark:text-purple-400 uppercase">
            {tag}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50">
            {title}
          </h2>
        </div>

        <div className="relative flex flex-col max-w-2xl mx-auto w-full">
          <div className="absolute left-3 top-2 bottom-2 w-px
            bg-gradient-to-b from-purple-300 via-purple-200 to-transparent
            dark:from-purple-700 dark:via-purple-900 dark:to-transparent" />
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
