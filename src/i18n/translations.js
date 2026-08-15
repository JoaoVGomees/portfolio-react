const translations = {
  pt: {
    nav: {
      sobre: 'Sobre',
      stack: 'Stack',
      projetos: 'Projetos',
      experiencia: 'Experiência',
      contato: 'Contato',
    },
    hero: {
      chip: 'Backend Developer · Java & .NET',
      greeting: 'Olá, eu sou',
      name: 'João Vitor.',
      description: 'Desenvolvedor backend apaixonado por construir APIs sólidas e sistemas escaláveis com',
      and: 'e',
      btnProjects: 'Ver Projetos',
      btnContact: 'Entrar em contato',
      scroll: '↓ \u00a0scroll para explorar',
    },
    sobre: {
      tag: 'Sobre mim',
      title: 'Quem\nsou eu?',
      p1: 'Sou desenvolvedor backend baseado em São Paulo, com graduação em ADS pela Sumaré, formado em Técnico em Desenvolvimento de Sistemas pelo SENAI, concluí o Programa Transforme-se da Serasa Experian e curso Engenharia de Software na UFBRA. Trabalho principalmente com',
      p1mid: 'mas também me aventuro no frontend com React quando a situação pede.',
      p2: 'Gosto de entender os conceitos antes de implementar, de código limpo e de soluções que escalam bem.',
      softSkills: ['Curioso', 'Autodidata', 'Detalhista', 'Resiliente'],
      stats: [
        { value: '3+', label: 'anos estudando dev' },
        { value: '8+', label: 'projetos entregues' },
        { value: '2',  label: 'graduações concluídas' },
      ],
    },
    stack: {
      tag: 'Tecnologias',
      title: 'Minha Stack',
      groups: [
        { label: 'Backend',        techs: ['Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'Node.js', 'Express'] },
        { label: 'Frontend',       techs: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5/CSS3', 'Vite', 'Axios'] },
        { label: 'Banco de Dados', techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle Database', 'Supabase'] },
        { label: 'DevOps / Infra', techs: ['Docker', 'Railway', 'Git', 'GitHub', 'Linux', 'VPS', 'Nginx', 'Load Balance'] },
      ],
    },
    projetos: {
      tag: 'Portfólio',
      title: 'Projetos em destaque',
      private: 'repositório privado',
      items: [
        {
          name: 'GestaoOsAPI',
          desc: 'API REST completa em C#/ASP.NET Core com Oracle Autonomous Database, autenticação JWT, BCrypt e deploy na VPS utilizando Docker e Nginx. Projeto de faculdade.',
          tags: ['C#', '.NET 8', 'Oracle Database', 'JWT', 'Docker', 'VPS', 'Nginx'],
          github: 'https://github.com/JoaoVGomees/Gerenciador-De-Ordens-De-Servico',
        },
        {
          name: 'Biblioteca de Animes',
          desc: 'App fullstack com Java/Spring Boot no backend, React no frontend, WebSocket para atualizações em tempo real e MySQL.',
          tags: ['Java', 'Spring Boot', 'React', 'WebSocket', 'MySQL'],
          github: null,
        },
        {
          name: 'WhatsApp AI Bot',
          desc: 'Bot inteligente integrado com Evolution API + Google Gemini Flash, construído em Spring Boot e deployado no Railway.',
          tags: ['Java', 'Spring Boot', 'Gemini', 'Evolution API', 'Railway'],
          github: 'https://github.com/JoaoVGomees/whatsapp-claude-bot',
        },
      ],
    },
    experiencia: {
      tag: 'Trajetória',
      title: 'Experiência & Formação',
      items: [
        {
          period: 'Jul 2026 – atual',
          title: 'Analista de Suporte Técnico N1',
          org: 'Locaweb',
          desc: 'Suporte técnico a clientes da Locaweb, atuando na resolução de chamados, diagnóstico de problemas e orientação sobre produtos e serviços da plataforma.',
        },
        {
          period: '2026 – atual',
          title: 'Bacharelado em Engenharia de Software',
          org: 'UFBRA',
          desc: 'Graduação em andamento. Base técnica sólida em desafios de engenharia e arquitetura de sistemas.',
        },
        {
          period: '2025',
          title: 'Programação Oracle - Java Foundations',
          org: 'SENAI',
          desc: 'Curso livre da linguagem de programação Java, com POO.',
        },
        {
          period: '2025',
          title: 'Programa Transforme-se',
          org: 'Serasa Experian',
          desc: 'Programa de capacitação profissional concluído com foco em desenvolvimento de carreira e habilidades técnicas.',
        },
        {
          period: '2024 – 2025',
          title: 'Serviço Militar Obrigatório',
          org: 'FAB – PAMASP, São Paulo',
          desc: 'Concluí o serviço obrigatório na Força Aérea Brasileira. Disciplina, trabalho em equipe e gestão sob pressão.',
        },
        {
          period: '2023 – 2025',
          title: 'ADS – Análise e Desenvolvimento de Sistemas',
          org: 'Universidade Sumaré',
          desc: 'Graduação tecnológica concluída. Base técnica sólida em backend, banco de dados e desenvolvimento web.',
        },
        {
          period: '2023 – 2024',
          title: 'Técnico em Desenvolvimento de Sistemas',
          org: 'SENAI',
          desc: 'Formação técnica com ênfase em infraestrutura, programação e redes.',
        },
      ],
    },
    contato: {
      title: 'Vamos conversar?',
      subtitle: 'Entre em contato pelo e-mail ou pelas redes abaixo.',
      copyright: 'João Vitor Gomes Pereira',
    },
  },

  en: {
    nav: {
      sobre: 'About',
      stack: 'Stack',
      projetos: 'Projects',
      experiencia: 'Experience',
      contato: 'Contact',
    },
    hero: {
      chip: 'Backend Developer · Java & .NET',
      greeting: "Hi, I'm",
      name: 'João Vitor.',
      description: 'Backend developer passionate about building solid APIs and scalable systems with',
      and: 'and',
      btnProjects: 'See Projects',
      btnContact: 'Get in touch',
      scroll: '↓ \u00a0scroll to explore',
    },
    sobre: {
      tag: 'About me',
      title: 'Who\nam I?',
      p1: "I'm a backend developer based in São Paulo, with a degree in Systems Analysis from Sumaré, a technical diploma in Systems Development from SENAI, completed Serasa Experian's Transforme-se Program and currently studying Software Engineering at UFBRA. I mainly work with",
      p1mid: 'but I also venture into frontend with React when needed.',
      p2: 'I like to understand concepts before implementing, write clean code and build solutions that scale well.',
      softSkills: ['Curious', 'Self-taught', 'Detail-oriented', 'Resilient'],
      stats: [
        { value: '3+', label: 'years studying dev' },
        { value: '8+', label: 'projects delivered' },
        { value: '2',  label: 'degrees completed' },
      ],
    },
    stack: {
      tag: 'Technologies',
      title: 'My Stack',
      groups: [
        { label: 'Backend',    techs: ['Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'Node.js', 'Express'] },
        { label: 'Frontend',   techs: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5/CSS3', 'Vite', 'Axios'] },
        { label: 'Databases',  techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle Database', 'Supabase'] },
        { label: 'DevOps / Infra', techs: ['Docker', 'Railway', 'Git', 'GitHub', 'Linux', 'VPS', 'Nginx', 'Load Balance'] },
      ],
    },
    projetos: {
      tag: 'Portfolio',
      title: 'Featured Projects',
      private: 'private repository',
      items: [
        {
          name: 'GestaoOsAPI',
          desc: 'Full REST API in C#/ASP.NET Core with Oracle Autonomous Database, JWT auth, BCrypt and VPS deploy using Docker and Nginx. College project.',
          tags: ['C#', '.NET 8', 'Oracle Database', 'JWT', 'Docker', 'VPS', 'Nginx'],
          github: 'https://github.com/JoaoVGomees/Gerenciador-De-Ordens-De-Servico',
        },
        {
          name: 'Anime Library',
          desc: 'Fullstack app with Java/Spring Boot backend, React frontend, WebSocket for real-time updates and MySQL.',
          tags: ['Java', 'Spring Boot', 'React', 'WebSocket', 'MySQL'],
          github: null,
        },
        {
          name: 'WhatsApp AI Bot',
          desc: 'Intelligent bot integrated with Evolution API + Google Gemini Flash, built in Spring Boot and deployed on Railway.',
          tags: ['Java', 'Spring Boot', 'Gemini', 'Evolution API', 'Railway'],
          github: 'https://github.com/JoaoVGomees/whatsapp-claude-bot',
        },
      ],
    },
    experiencia: {
      tag: 'Journey',
      title: 'Experience & Education',
      items: [
        {
          period: 'Jul 2026 – present',
          title: 'Technical Support Analyst N1',
          org: 'Locaweb',
          desc: 'Technical support to Locaweb clients, handling tickets, diagnosing issues and guiding users on platform products and services.',
        },
        {
          period: '2026 – present',
          title: 'Bachelor in Software Engineering',
          org: 'UFBRA',
          desc: 'Ongoing degree. Solid technical foundation in engineering challenges and system architecture.',
        },
        {
          period: '2025',
          title: 'Oracle Programming - Java Foundations',
          org: 'SENAI',
          desc: 'Java programming course with object-oriented programming focus.',
        },
        {
          period: '2025',
          title: 'Transforme-se Program',
          org: 'Serasa Experian',
          desc: 'Completed professional development program focused on career development and technical skills.',
        },
        {
          period: '2024 – 2025',
          title: 'Mandatory Military Service',
          org: 'FAB – PAMASP, São Paulo',
          desc: 'Completed mandatory service in the Brazilian Air Force. Discipline, teamwork and management under pressure.',
        },
        {
          period: '2023 – 2025',
          title: 'ADS – Systems Analysis and Development',
          org: 'Universidade Sumaré',
          desc: 'Completed technology degree. Solid technical foundation in backend, databases and web development.',
        },
        {
          period: '2023 – 2024',
          title: 'Systems Development Technician',
          org: 'SENAI',
          desc: 'Technical training with emphasis on infrastructure, programming and networks.',
        },
      ],
    },
    contato: {
      title: "Let's talk?",
      subtitle: 'Reach out via email or the links below.',
      copyright: 'João Vitor Gomes Pereira',
    },
  },
}

export default translations
