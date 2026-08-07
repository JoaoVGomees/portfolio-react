export default function Hero() {
  const techs = ['Java', 'Spring Boot', 'Hibernate', 'C#', '.NET', 'Entity Framework', 'React', 'PostgreSQL', 'MySQL', 'Docker', 'JWT', 'MVC']

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 w-full py-20
        flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20">

        {/* ── Left ── */}
        <div className="flex-1 flex flex-col gap-7 animate-fade-up">

          <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full
            bg-purple-100 dark:bg-purple-950 border border-purple-200 dark:border-purple-800
            text-purple-800 dark:text-purple-300 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Backend Developer · Java &amp; .NET
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl
            text-neutral-900 dark:text-neutral-50 leading-[1.1]">
            Olá, eu sou<br />
            <span className="text-purple-800 dark:text-purple-400">João Vitor.</span>
          </h1>

          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg font-light">
            Desenvolvedor backend apaixonado por construir APIs sólidas e sistemas
            escaláveis com{' '}
            <span className="text-neutral-700 dark:text-neutral-200 font-medium">Java</span>,{' '}
            <span className="text-neutral-700 dark:text-neutral-200 font-medium">Spring Boot</span>,{' '}
            <span className="text-neutral-700 dark:text-neutral-200 font-medium">C#</span> e{' '}
            <span className="text-neutral-700 dark:text-neutral-200 font-medium">.NET</span>.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#projetos"
              className="px-7 py-3 rounded-lg bg-purple-800 dark:bg-purple-700 text-white
                text-sm font-medium hover:bg-purple-900 dark:hover:bg-purple-600
                transition-all duration-200 hover:shadow-lg hover:shadow-purple-200
                dark:hover:shadow-purple-900/40 hover:-translate-y-0.5 active:translate-y-0">
              Ver Projetos
            </a>
            <a href="#contato"
              className="px-7 py-3 rounded-lg border border-purple-300 dark:border-purple-700
                text-purple-800 dark:text-purple-300 text-sm font-medium
                hover:bg-purple-50 dark:hover:bg-purple-950
                transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              Entrar em contato
            </a>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-600 font-light tracking-wide">
            ↓ &nbsp;scroll para explorar
          </p>
        </div>

        {/* ── Right: tech grid ── */}
        <div className="flex-shrink-0 w-full md:w-80">
          <div className="grid grid-cols-3 gap-2.5">
            {techs.map((tech, i) => (
              <div key={tech}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-in flex items-center justify-center
                  px-2 py-3 rounded-xl text-xs font-medium text-center
                  border transition-all duration-300 cursor-default
                  hover:-translate-y-1 hover:shadow-md
                  bg-neutral-50 dark:bg-neutral-900
                  border-neutral-100 dark:border-neutral-800
                  text-neutral-600 dark:text-neutral-400
                  hover:border-purple-200 dark:hover:border-purple-700
                  hover:text-purple-800 dark:hover:text-purple-300
                  hover:bg-purple-50 dark:hover:bg-purple-950/50
                  hover:shadow-purple-100/50 dark:hover:shadow-purple-900/30">
                {tech}
              </div>
            ))}

            {/* Badge disponível */}
            <div className="col-span-3 flex items-center justify-center gap-2
              px-4 py-3 rounded-xl mt-1
              bg-purple-800 dark:bg-purple-700 text-white text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              disponível para oportunidades
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
