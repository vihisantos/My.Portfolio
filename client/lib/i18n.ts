export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      projects: 'Projetos',
      about: 'Sobre',
      capybara: 'Capybara',
      sponsorship: 'Seja Apoiador',
      contact: 'Contato',
    },
    hero: {
      badge: 'Desenvolvedor Full-Stack Web & UX/UI Design',
      title: 'Construindo experiências web',
      titleGradient: 'modernas',
      description:
        'Sou um desenvolvedor full-stack apaixonado por criar aplicações escaláveis e modernas. Atualmente cursando Análise e Desenvolvimento de Sistemas e Gestão de T.I.',
      viewWork: 'Ver Meu Trabalho',
      getInTouch: 'Entrar em Contato',
      stats: {
        projects: 'Projetos Completos',
        experience: 'Anos de Experiência',
        satisfaction: 'Satisfação dos Clientes',
      },
    },
    about: {
      badge: 'Sobre Mim',
      title: 'Transformando ideias em',
      titleGradient: 'soluções digitais',
      description:
        'Sou um desenvolvedor full-stack e UX/UI Designer dedicado com paixão por criar aplicações escaláveis e de alto desempenho. Atualmente cursando Análise e Desenvolvimento de Sistemas e Gestão de T.I, combino conhecimento teórico com experiência prática.',
      skillsTitle: 'Minhas competências',
      educationTitle: 'Educação & Aprendizado',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Banco de Dados',
      devops: 'DevOps & Ferramentas',
      frontendDesc: 'React, Next.js, Vue.js, Angular, HTML5, CSS3, UI/UX Design, Three.js',
      backendDesc: 'Node.js, Express, Python, Django, FastAPI, GraphQL, JWT, WebSockets',
      databasesDesc: 'PostgreSQL, MongoDB, Redis, Prisma, Supabase, Firebase',
      devopsDesc: 'Docker, Git, GitHub, AWS, Vercel, Netlify, Render, Formspree, Stripe',
      performance: 'Performance',
      performanceDesc: 'Otimização, escalabilidade, boas práticas',
    },
    seo: {
      defaultTitle: 'Vitor.dev | Desenvolvedor Full-Stack',
      defaultDescription: 'Portfólio de Vitor.dev. Desenvolvedor Full-stack e Designer UX/UI criando experiências digitais modernas.',
      home: {
        title: 'Vitor.dev | Início',
        description: 'Bem-vindo ao meu laboratório digital. Explore meus projetos e experimentos.'
      },
      projects: {
        title: 'Vitor.dev | Projetos',
        description: 'Confira meus estudos de caso e projetos recentes em desenvolvimento web.'
      },
      uiLibrary: {
        title: 'Vitor.dev | Biblioteca UI',
        description: 'Uma coleção de componentes de interface modernos e interativos.'
      },
      projectDetails: {
        title: 'Projeto | Vitor.dev',
      }
    },
    projects: {
      badge: 'Portfólio',
      title: 'Projetos em',
      titleGradient: 'Destaque',
      description:
        'Uma seleção do meu trabalho recente mostrando várias tecnologias e abordagens de resolução de problemas',
      viewProject: 'Ver Projeto',
      viewAll: 'Ver todos os projetos',

      taskmanagement: {
        title: 'Portfolio Profissional',
        description:
          'Software as a Product (SaaP). Plataforma de alta performance com design UI/UX exclusivo incluso. Totalmente customizável para sua marca, com suporte a atualizações e expansões sob demanda.',
        badge: 'Template p/ Venda',
        story: {
          challenge: 'Muitos desenvolvedores talentosos perdem oportunidades por não terem um portfólio que reflita sua senioridade, gastando tempo valioso reinventando a roda.',
          solution: 'Vitor.dev Portfolio foi criado como um Produto (SaaP): uma arquitetura escalável e design premium pronta para uso, permitindo personalização total.',
          impact: 'Aumentou a taxa de conversão de visitantes em recrutadores em 40% para os usuários beta.'
        }
      },
      ecommerce: {
        title: 'Confeitaria E-Commerce',
        description:
          'Solução de confeitaria e-commerce full-stack com integração de pagamento futuro a ser implementado, gerenciamento de estoque, notificações em tempo real, sistema de pedidos e entregas e area administrativa.',
        story: {
          challenge: 'Pequenas confeitarias perdem vendas por dependerem de pedidos manuais (WhatsApp) e sofrem com descontrole de estoque perecível.',
          solution: 'Plataforma full-stack com catálogo digital, carrinho interativo e painel administrativo integrado para gestão de pedidos em tempo real.',
          impact: 'Centralizou 100% dos pedidos digitais e reduziu o tempo de atendimento em 50%.'
        }
      },
      aichat: {
        title: 'Vitrine360 - Gestão de Loja',
        description:
          'Aplicação SaaS completa para gestão de lojas físicas e online. Planos flexíveis (Free, Pro, Enterprise), controle de estoque, PDV e relatórios avançados.',
        story: {
          challenge: 'A gestão de varejo fragmentada exige múltiplas ferramentas desconectadas, dificultando o controle de estoque e vendas em canais físicos e digitais simultaneamente.',
          solution: 'Desenvolvemos um ecossistema unificado conectando PDV (Ponto de Venda), Controle de Estoque centralizado e E-commerce em uma única plataforma intuitiva.',
          impact: 'Lojistas relatam 30% de aumento em eficiência operacional e redução drástica em erros de estoque.'
        }
      },
      colorflicks: {
        title: 'ColorFlicks - Inteligência de Cores',
        description:
          'Ferramenta cinemática que analisa pôsteres de filmes para extrair paletas e "humor". Apresenta extração de cores client-side e design premium.',
      },
      capyflow: {
        title: 'CapyFlow Academy',
        description:
          'Plataforma de ensino gamificada focada em desenvolvimento de software com arquitetura Monorepo.',
        story: {
          challenge: 'Desenvolvedores júnior raramente têm acesso a arquiteturas corporativas complexas (Monorepo) antes do primeiro emprego.',
          solution: 'Plataforma educacional gamificada construída sobre um Monorepo real (Next.js + NestJS), ensinando pelo exemplo.',
          impact: 'Acelera a curva de aprendizado de arquitetura de software em um ambiente seguro e engajador.'
        }
      },
      siteinstitucional: {
        title: 'Site Institucional Moderno',
        description:
          'Aplicação web institucional de alta performance para empresas que buscam consolidar sua presença digital com elegância e velocidade.',
        badge: 'Template p/ Venda',
        story: {
          challenge: 'Empresas tradicionais sofrem com sites lentos, não responsivos e difíceis de manter, prejudicando sua credibilidade online.',
          solution: 'Desenvolvimento de uma SPA (Single Page Application) moderna utilizando React e Vite, focada em Core Web Vitals e SEO.',
          impact: 'Melhoria drástica na pontuação do Google Lighthouse e aumento na retenção de visitantes.'
        }
      },
      mizinapp: {
        title: 'Mizin Youtube App',
        description:
          'Ferramenta poderosa e elegante para baixar vídeos e playlists inteiras do YouTube com máxima qualidade. Totalmente gratuito e com design premium.',
      },
      zapedia: {
        title: 'Zapedia Hub - Inteligência p/ WhatsApp',
        description:
          'Plataforma líder em inteligência conversacional para WhatsApp. Transformamos conversações simples em relacionamentos lucrativos através de automação inteligente.',
        story: {
          challenge: 'Empresas perdem milhares em vendas por não conseguirem transformar conversas de WhatsApp em dados acionáveis e relacionamentos duradouros.',
          solution: 'Uma plataforma de inteligência conversacional que utiliza IA para analisar, automatizar e otimizar cada interação, focando em conversão.',
          impact: 'Melhoria na taxa de retenção de clientes e aumento direto na conversão de leads vindos do WhatsApp.'
        }
      },
      medhub: {
        title: 'Med Hub - Gestão de Escalas',
        description: 'O Sistema Operacional para gestão de escalas médicas. Conecte hospitais de ponta com profissionais de elite através de IA.',
        story: {
          challenge: 'Hospitais sofrem com furos em escalas e dificuldade de encontrar profissionais qualificados rapidamente.',
          solution: 'Plataforma que utiliza IA para match automático entre vagas e profissionais, com gestão financeira e de escalas em tempo real.',
          impact: 'Redução drástica no tempo de fechamento de escalas e maior satisfação dos profissionais.'
        }
      },
      portfoliofotografo: {
        title: 'FrameStudio - Fotografia',
        description: 'Template premium para fotógrafos e artistas visuais. Design com foco brutal na estética e na experiência do usuário.',
        badge: 'Template p/ Venda',
        story: {
          challenge: 'Fotógrafos precisam de portfólios que destaquem suas imagens sem distrações, mas templates comuns são genéricos e lentos.',
          solution: 'Template dark mode nativo com animações Framer Motion, layout Masonry e performance extrema.',
          impact: 'Aumenta a percepção de valor e converte visitantes em clientes de alto ticket.'
        }
      },
      ongtemplate: {
        title: 'LoveFlow - ONGs',
        description: 'Template moderno, acessível e bonito estruturado para organizações sem fins lucrativos e projetos de impacto social.',
        badge: 'Template p/ Venda',
        story: {
          challenge: 'Muitas ONGs têm sites desatualizados e não acessíveis, o que dificulta a arrecadação de fundos e a comunicação de impacto.',
          solution: 'Plataforma rápida e otimizada para SEO, com foco em acessibilidade (WCAG AAA) e conversão de doações.',
          impact: 'Garante 100% de acessibilidade e eleva a credibilidade institucional da ONG.'
        }
      },
      imersiveblock: {
        title: 'Imersive Block 3D',
        description: 'Experiência imersiva em 3D rodando direto no navegador utilizando a poderosa integração entre React e Three.js.',
        story: {
          challenge: 'Criar experiências web 3D costuma exigir alto processamento e códigos complexos que sacrificam a performance.',
          solution: 'Aplicação interativa desenvolvida com React Three Fiber e Vite, entregando gráficos impressionantes sem perder fluidez.',
          impact: 'Demonstra a capacidade de renderização 3D avançada em interfaces web modernas e performáticas.'
        }
      },
    },
    capybara: {
      badge: 'Minha Iniciativa',
      title: 'Capybara',
      titleGradient: 'Holding',
      description:
        'Fundador e criador da Capybara Holding, uma organização visionária dedicada a fomentar inovação, colaboração e crescimento no ecossistema de tecnologia. Acreditamos em construir soluções sustentáveis que causem impacto positivo e oferecemos consultoria em transformação digital.',
      item1: 'Inovação Tecnológica & Desenvolvimento',
      item2: 'Soluções Estratégicas de Negócios',
      item3: 'Construção de Equipe & Mentoria',
      item4: 'Serviços de Transformação Digital',
      learnMore: 'Saiba Mais',
      activeProjects: 'Projetos Ativos',
      incubating: 'Em Incubação',
    },
    contact: {
      title: "Vamos trabalhar",
      titleGradient: 'juntos',
      description:
        'Se você tem um projeto em mente, quer discutir oportunidades ou apenas quer se conectar, adoraria saber de você. Vamos criar algo incrível juntos.',
      email: 'Enviar Email',
      schedule: 'Agendar uma Ligação',
      available: 'Disponível para projetos freelance, posições em tempo integral e oportunidades de consultoria.',
    },
    footer: {
      description:
        'Desenvolvedor full-stack apaixonado por criar aplicações modernas e escaláveis.',
      nav: 'Navegação',
      skills: 'Competências',
      connect: 'Conectar',
      frontend: 'Desenvolvimento Frontend',
      backend: 'Desenvolvimento Backend',
      uiux: 'UI/UX Design',
      fullstack: 'Aplicações Full-stack',
      rights: 'Todos os direitos reservados.',
      crafted: 'Criado com paixão por um desenvolvedor full-stack.',
    },
    projectsPage: {
      title: 'Meus Projetos',
      subtitle: 'Confira todos os meus trabalhos, desde aplicações full-stack complexas até componentes de UI.',
      backHome: 'Voltar para o início',
      projectLinks: 'Links do Projeto',
      imInterested: 'Estou Interessado',
      whatsappMessage: 'Olá! Vi o projeto {project} no seu portfólio e fiquei interessado.',
    },
    uiLibrary: {
      badge: "Laboratório do Vitor",
      titleUI: "UI",
      titleLibrary: "BIBLIOTECA",
      featuredExperiment: "Experimento em Destaque",
      systemActive: "SISTEMA_ATIVO",
      componentsActive: "Componentes Ativos",
      title: 'Biblioteca de Componentes UI',
      description: 'Uma coleção de componentes reutilizáveis.',
      noComponents: 'Nenhum componente encontrado nesta categoria ainda.',
      backToHome: 'Voltar para Início',
      downloadFreeTool: 'Baixar Ferramenta Gratuita',
      learnToUse: 'Aprenda a usar',
      iAmInterested: 'Tenho Interesse',
      newFreeApp: 'Nova Aplicação Gratuita',
    },
    instructions: {
      title: "Como Instalar e Usar",
      subtitle: "Guia rápido para começar a usar o Mizin Youtube App",
      step1: {
        title: "Baixe o Arquivo",
        desc: "Clique no botão 'Baixar Ferramenta Gratuita' para salvar o arquivo .zip no seu computador.",
      },
      step2: {
        title: "Extraia os Arquivos",
        desc: "Clique com o botão direito no arquivo baixado e selecione 'Extrair Tudo' ou use seu descompactador preferido.",
      },
      step3: {
        title: "Execute o Aplicativo",
        desc: "Abra a pasta extraída e clique duas vezes em 'MizinYoutubeApp.exe' para iniciar. Não é necessário instalação!",
      },
      note: {
        title: "Nota Importante",
        desc: "O Windows pode exibir um aviso de proteção. Como é um aplicativo independente, clique em 'Mais informações' e depois em 'Executar mesmo assim'.",
      },
    },
    categories: {
      All: 'Todos',
      Buttons: 'Botões',
      Loaders: 'Carregadores',
      Inputs: 'Inputs',
      Cards: 'Cards',
      Text: 'Texto',
      Tooltips: 'Tooltips',
    },
    contactForm: {
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      error: 'Erro ao enviar mensagem. Tente novamente.',
      loading: 'Enviando...',
      required: 'Campo obrigatório',
    },
    playground: {
      badge: 'Interativo',
      title: 'Sua vez de jogar',
    },
    holding: {
      title: "Capybara Holding",
      subtitle: "Ecossistema de Inovação & Tecnologia",
      description: "A Capybara Holding nasceu da necessidade de centralizar e profissionalizar a gestão de diversas iniciativas tecnológicas, criando um ecossistema onde cada projeto potencializa o outro.",
      mission: {
        title: "Nossa Missão",
        text: "Desenvolver soluções que simplifiquem a vida de empreendedores e usuários, utilizando o que há de mais moderno em tecnologia e design."
      },
      vitrine360: {
        title: "Vitrine360",
        tagline: "Sua loja, em qualquer lugar.",
        description: "Uma plataforma SaaS completa para gestão de vendas, estoque e presença digital, focada em pequenos e médios lojistas que buscam profissionalismo sem complexidade.",
        features: [
          "PDV (Ponto de Venda) intuitivo",
          "Gestão de estoque inteligente",
          "Integração com e-commerce",
          "Relatórios financeiros avançados"
        ]
      },
      colorflicks: {
        title: "ColorFlicks",
        tagline: "A psicologia das cores no cinema.",
        description: "Explore o humor e a estética dos seus filmes favoritos através de paletas de cores geradas por inteligência algorítmica. Uma ferramenta visual para designers e cinéfilos.",
        features: [
          "Análise de Humor",
          "Paletas Cinemáticas",
          "Compartilhamento Social"
        ]
      },
      capyflow: {
        title: "CapyFlow Academy",
        tagline: "A academia de escrita para programadores.",
        description: "Plataforma de ensino gamificada focada em desenvolvimento de software. Domine habilidades full-stack com desafios práticos.",
        features: [
          "Ensino Gamificado",
          "Arquitetura Monorepo",
          "Desafios Reais"
        ]
      },
      mizin: {
        title: "Mizin",
        tagline: "Sua playlist offline, sem complicações.",
        description: "A ferramenta de organização e download definitiva para o ecossistema. O Mizin é totalmente gratuito e permite salvar vídeos ou playlists inteiras do YouTube em MP3 ou MP4, sem restrições de quantidade.",
        features: [
          "Download de Playlists",
          "Qualidade 4K Ultra HD",
          "Conversão p/ MP3 Ultra",
          "Interface Minimalista"
        ]
      },
      ecosystem: {
        title: "O Ecossistema",
        description: "A Capybara Holding é uma simbiose tecnológica. Enquanto o Vitrine360 cuida da infraestrutura comercial, o ColorFlicks da inteligência visual e o Mizin oferece ferramentas práticas de mídia, o CapyFlow Academy forma os talentos que construirão o futuro. Juntos, cobrimos diversos domínios: Vendas, Criatividade, Utilidade e Educação."
      },
      sponsorship: {
        hero: {
          badge: "Apoie a Visão",
          title: "Impulsione o Futuro",
          subtitle: "da Tecnologia",
          description: "A Capybara Holding é construída sobre a ideia de que a tecnologia deve servir às pessoas. Ao se tornar um patrocinador, você está investindo diretamente em inovação, educação e ferramentas que empoderam criadores e empreendedores.",
          cta: "Quero Apoiar"
        },
        tiers: {
          visionary: {
            title: "Visionário",
            price: "Sob Consulta",
            description: "Apoie o ecossistema inteiro. Seu nome/marca em destaque em todos os projetos.",
            features: ["Logo em Todos os Projetos", "Acesso Antecipado", "Consultoria Estratégica"]
          },
          guardian: {
            title: "Guardião de Projeto",
            price: "R$ 200/mês",
            description: "Escolha um projeto (Vitrine360, ColorFlicks, CapyFlow) para apadrinhar diretamente.",
            features: ["Logo no Projeto", "Badge Exclusivo", "Reports de Impacto"]
          },
          community: {
            title: "Apoiador da Comunidade",
            price: "Valor Livre",
            description: "Contribuição pontual para manter nossos servidores e café rodando.",
            features: ["Nome no Mural", "Agradecimento Social", "Good Vibes"]
          }
        },
        why: {
          innovation: {
            title: "Inovação Aberta",
            desc: "Fomentamos tecnologias que outros não ousam tentar."
          },
          education: {
            title: "Educação Gratuita",
            desc: "Mantemos o CapyFlow acessível para estudantes carentes."
          },
          impact: {
            title: "Impacto Real",
            desc: "Ferramentas que geram renda para pequenos negócios."
          }
        },
        form: {
          title: "Entre em contato para patrocinar",
          name: "Nome da Empresa/Pessoa",
          email: "Email Profissional",
          interest: "Nível de Interesse",
          message: "Mensagem",
          submit: "Enviar Proposta"
        },
        wallOfFame: {
          title: "Mural da Comunidade",
          subtitle: "Pessoas incríveis que ajudam a tornar tudo isso possível.",
          beTheFirst: "Seja o primeiro!",
          joinUs: "Junte-se a nós"
        }
      },
      cta: "Quero saber mais sobre a Holding"
    },
    testimonials: {
      badge: 'O que ofereço',
      title: 'Soluções sob medida para seu negócio',
    },
    servicesList: [
      {
        title: "Desenvolvimento Full-Stack",
        description: "Aplicações web completas, do banco de dados ao frontend, usando React, Node.js e arquiteturas modernas.",
        icon: "Code2"
      },
      {
        title: "UI/UX Design",
        description: "Interfaces bonitas, intuitivas e responsivas. Foco na experiência do usuário e acessibilidade.",
        icon: "Palette"
      },
      {
        title: "Otimização & Performance",
        description: "Seu site carregando em milissegundos. Core Web Vitals, SEO técnico e melhores práticas.",
        icon: "Zap"
      },
      {
        title: "Consultoria Técnica",
        description: "Ajudo a escolher a melhor tecnologia para sua ideia e desenho a arquitetura do seu projeto.",
        icon: "Terminal"
      }
    ],
    certificates: {
      button: "Ver Certificações",
      title: "Certificações & Conquistas",
      subtitle: "Minha jornada de aprendizado contínuo e validação de habilidades.",
      viewCredential: "Ver Credencial",
      issuer: "Emitido por",
      date: "Concluído em",
      searchPlaceholder: "Buscar certificados...",
      noCertificates: "Nenhum certificado encontrado.",
      clearFilters: "Limpar filtros",
      all: "Todos",
      categories: {
        "Design & UX": "Design & UX",
        "AI & Data": "IA & Dados",
        "DevOps & Security": "DevOps & Segurança",
        "Engineering": "Engenharia",
        "Management": "Gestão"
      }
    },
    pricing: {
      title: "Planos Vitrine360",
      subtitle: "Escolha o melhor plano para sua loja",
      free: {
        title: "Free",
        description: "Ideal para começar",
        button: "Começar Grátis"
      },
      pro: {
        title: "Pro",
        description: "Para lojas em crescimento",
        button: "Assinar Pro"
      },
      enterprise: {
        title: "Enterprise",
        description: "Para grandes redes",
        button: "Falar com Vendas"
      }
    },
    certificatesList: [
      {
        id: 21,
        title: "UX: Como Melhorar a Experiência do Usuário no Serviço Público Digital",
        issuer: "Escola Nacional de Administração Pública - Enap",
        date: "2025",
        skills: ["UX Design", "Usabilidade", "Pesquisa com Usuário"],
        credentialUrl: "#"
      },
      {
        id: 22,
        title: "Figma na Prática: Crie seu Primeiro Protótipo do Zero Com IA",
        issuer: "EBAC",
        date: "2026",
        skills: ["Figma", "UI Design", "Prototipagem", "AI"],
        credentialUrl: "#"
      },
      {
        id: 20,
        title: "Modelagem de Software",
        issuer: "Universidade Anhembi Morumbi",
        date: "2024",
        skills: ["UML", "Arquitetura de Software", "Padrões de Projeto"],
        credentialUrl: "#"
      },
      {
        id: 1,
        title: "Desenvolvimento com GitHub Copilot",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["IA", "Codificação", "GitHub"],
        credentialUrl: "#"
      },
      {
        id: 2,
        title: "GitHub Actions",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["DevOps", "CI/CD", "Automação"],
        credentialUrl: "#"
      },
      {
        id: 3,
        title: "GitHub Codespaces",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["DevOps", "IDE em Nuvem", "Desenvolvimento"],
        credentialUrl: "#"
      },
      {
        id: 4,
        title: "Segurança da Informação para Todos",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Segurança", "Segurança da Informação", "Cibersegurança"],
        credentialUrl: "#"
      },
      {
        id: 5,
        title: "Inteligência Artificial Generativa",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["IA", "IA Generativa", "Inovação"],
        credentialUrl: "#"
      },
      {
        id: 6,
        title: "IA Generativa da Microsoft - Copilot",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["IA", "Microsoft", "Produtividade"],
        credentialUrl: "#"
      },
      {
        id: 7,
        title: "A História da IA",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["IA", "História", "Fundamentos"],
        credentialUrl: "#"
      },
      {
        id: 8,
        title: "Ética em IA",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["IA", "Ética", "Conformidade"],
        credentialUrl: "#"
      },
      {
        id: 9,
        title: "Como ser mais Produtivo usando o Bing Chat",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["IA", "Produtividade", "Bing"],
        credentialUrl: "#"
      },
      {
        id: 10,
        title: "Introdução à Ciência de Dados - Conceitos e Ferramentas",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Ciência de Dados", "Analytics", "Big Data"],
        credentialUrl: "#"
      },
      {
        id: 11,
        title: "Introdução à Ciência de Dados - Tratamento de Dados",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Ciência de Dados", "ETL", "Processamento de Dados"],
        credentialUrl: "#"
      },
      {
        id: 12,
        title: "Introdução à Ciência de Dados - Modelos de Classificação",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Ciência de Dados", "Machine Learning", "Classificação"],
        credentialUrl: "#"
      },
      {
        id: 13,
        title: "Introdução à Ciência de Dados - Conjuntos Frequentes",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Ciência de Dados", "Mineração de Padrões", "Analytics"],
        credentialUrl: "#"
      },
      {
        id: 14,
        title: "Introdução à Ciência de Dados - Descoberta de Tópicos em Texto",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Ciência de Dados", "NLP", "Mineração de Texto"],
        credentialUrl: "#"
      },
      {
        id: 15,
        title: "Gestão de Pessoas",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Gestão", "Liderança", "RH"],
        credentialUrl: "#"
      },
      {
        id: 16,
        title: "Liderança e Gestão de Times Híbridos",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Gestão", "Trabalho Remoto", "Liderança"],
        credentialUrl: "#"
      },
      {
        id: 17,
        title: "Gerenciar Projetos com o Microsoft 365",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Gestão de Projetos", "Microsoft 365", "Planejamento"],
        credentialUrl: "#"
      },
      {
        id: 18,
        title: "Análise e Melhoria de Processos",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["BPM", "Melhoria de Processos", "Gestão"],
        credentialUrl: "#"
      },
      {
        id: 19,
        title: "CODRAS - Operações com Drones",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Drones", "Operações", "Tecnologia"],
        credentialUrl: "#"
      }
    ]
  },
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      capybara: 'Capybara',
      sponsorship: 'Become a Sponsor',
      contact: 'Contact',
    },
    hero: {
      badge: 'Full-Stack Web Developer & UX/UI Design',
      title: 'Building modern',
      titleGradient: 'web experiences',
      description:
        'I\'m a passionate full-stack developer studying Analysis and Development of Systems and IT Management. I create scalable, beautiful applications that solve real-world problems.',
      viewWork: 'View My Work',
      getInTouch: 'Get in Touch',
      stats: {
        projects: 'Completed Projects',
        experience: 'Years Experience',
        satisfaction: 'Client Satisfaction',
      },
    },
    about: {
      badge: 'About Me',
      title: 'Turning ideas into',
      titleGradient: 'digital solutions',
      description:
        'I\'m a dedicated full-stack developer and UX/UI Designer with a passion for creating scalable, high-performance applications. Currently studying Analysis and Development of Systems and IT Management, I combine theoretical knowledge with practical experience.',
      skillsTitle: 'My Skills',
      educationTitle: 'Education & Learning',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      devops: 'DevOps & Tools',
      frontendDesc: 'React, Next.js, Vue.js, Angular, HTML5, CSS3, UI/UX Design, Three.js',
      backendDesc: 'Node.js, Express, Python, Django, FastAPI, GraphQL, JWT, WebSockets',
      databasesDesc: 'PostgreSQL, MongoDB, Redis, Prisma, Supabase, Firebase',
      devopsDesc: 'Docker, Git, GitHub, AWS, Vercel, Netlify, Render, Formspree, Stripe',
      performance: 'Performance',
      performanceDesc: 'Optimization, scalability, best practices',
    },
    seo: {
      defaultTitle: 'Vitor.dev | Full-Stack Developer',
      defaultDescription: 'Vitor.dev Portfolio. Full-stack Developer and UX/UI Designer creating modern digital experiences.',
      home: {
        title: 'Vitor.dev | Home',
        description: 'Welcome to my digital lab. Explore my projects and experiments.'
      },
      projects: {
        title: 'Vitor.dev | Projects',
        description: 'Check out my case studies and recent web development projects.'
      },
      uiLibrary: {
        title: 'Vitor.dev | UI Library',
        description: 'A collection of modern and interactive UI components.'
      },
      projectDetails: {
        title: 'Project | Vitor.dev',
      }
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured',
      titleGradient: 'Projects',
      description:
        'A selection of my recent work showcasing various technologies and problem-solving approaches',
      viewProject: 'View Project',
      viewAll: 'View all projects',
      taskmanagement: {
        title: 'Professional Portfolio',
        description:
          'Software as a Product (SaaP). High-performance platform with exclusive UI/UX design included. Fully customizable for your brand, with on-demand update and expansion support.',
        badge: 'For Sale',
        story: {
          challenge: 'Many talented developers miss opportunities by lacking aportfolio that reflects their seniority, spending valuable time reinventing the wheel.',
          solution: 'Vitor.dev Portfolio was created as a Product (SaaP): scalable architecture and premium design ready to use, allowing full customization.',
          impact: 'Increased visitor-to-recruiter conversion rate by 40% for beta users.'
        }
      },
      ecommerce: {
        title: 'E-Commerce Platform',
        description:
          'Full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.',
        story: {
          challenge: 'Small bakeries lose sales relying on manual orders (WhatsApp) and suffer from perishable inventory mismanagement.',
          solution: 'Full-stack platform with digital catalog, interactive cart, and integrated admin dashboard for real-time order management.',
          impact: 'Centralized 100% of digital orders and reduced service time by 50%.'
        }
      },
      aichat: {
        title: 'Vitrine360 - Store Management',
        description:
          'Complete SaaS application for physical and online store management. Flexible plans (Free, Pro, Enterprise), inventory control, POS, and advanced reports.',
        story: {
          challenge: 'Fragmented retail management requires multiple non-integrated tools, making it difficult to control inventory and sales across physical and digital channels.',
          solution: 'We developed a unified ecosystem connecting POS (Point of Sale), centralized Inventory Control, and E-commerce into a single intuitive platform.',
          impact: 'Merchants report a 30% increase in operational efficiency and a drastic reduction in inventory errors.'
        }
      },
      colorflicks: {
        title: 'ColorFlicks - Color Intelligence',
        description:
          'Cinematic tool that analyzes movie posters to extract palettes and "mood". Features client-side color extraction and premium design.',
      },
      capyflow: {
        title: 'CapyFlow Academy',
        description:
          'Gamified teaching platform focused on software development with Monorepo architecture.',
        story: {
          challenge: 'Junior developers rarely have access to complex enterprise architectures (Monorepo) before their first job.',
          solution: 'Gamified educational platform built on a real Monorepo (Next.js + NestJS), teaching by example.',
          impact: 'Accelerates the software architecture learning curve in a safe and engaging environment.'
        }
      },
      siteinstitucional: {
        title: 'Modern Institutional Site',
        description:
          'High-performance institutional web application for companies seeking to consolidate their digital presence with elegance and speed.',
        badge: 'For Sale',
        story: {
          challenge: 'Traditional companies suffer from slow, unresponsive, and hard-to-maintain websites, hurting their online credibility.',
          solution: 'Development of a modern SPA (Single Page Application) using React and Vite, focused on Core Web Vitals and SEO.',
          impact: 'Drastic improvement in Google Lighthouse scores and increased visitor retention.'
        }
      },
      mizinapp: {
        title: 'Mizin Youtube App',
        description:
          'Powerful and elegant tool to download videos and playlists from YouTube with maximum quality. Completely free with premium design.',
      },
      zapedia: {
        title: 'Zapedia Hub - WhatsApp Intelligence',
        description:
          'Leading conversational intelligence platform for WhatsApp. We transform simple conversations into profitable relationships through intelligent automation.',
        story: {
          challenge: 'Businesses lose thousands in sales by failing to turn WhatsApp conversations into actionable data and long-lasting relationships.',
          solution: 'A conversational intelligence platform that uses AI to analyze, automate, and optimize every interaction, focusing on conversion.',
          impact: 'Improvement in customer retention rates and direct increase in lead conversion from WhatsApp.'
        }
      },
      medhub: {
        title: 'Med Hub - Shift Management',
        description: 'The Operating System for medical shift management. Connecting world-class hospitals with top-tier professionals via AI.',
        story: {
          challenge: 'Hospitals struggle with shift gaps and difficulty finding qualified professionals quickly.',
          solution: 'Platform using AI for automatic matching between shifts and professionals, with real-time financial and schedule management.',
          impact: 'Drastic reduction in shift closing time and higher professional satisfaction.'
        }
      },
      portfoliofotografo: {
        title: 'FrameStudio - Photography',
        description: 'Premium template for photographers and visual artists. Design with a brutal focus on aesthetics and user experience.',
        badge: 'For Sale',
        story: {
          challenge: 'Photographers need portfolios that highlight their images without distractions, but common templates are generic and slow.',
          solution: 'Native dark mode template with Framer Motion animations, Masonry layout, and extreme performance.',
          impact: 'Increases value perception and converts visitors into high-ticket clients.'
        }
      },
      ongtemplate: {
        title: 'LoveFlow - NGOs',
        description: 'Modern, accessible, and beautiful template structured for non-profit organizations and social impact projects.',
        badge: 'For Sale',
        story: {
          challenge: 'Many NGOs have outdated and inaccessible websites, making it difficult to raise funds and communicate impact.',
          solution: 'Fast and SEO-optimized platform, focusing on accessibility (WCAG AAA) and donation conversion.',
          impact: 'Ensures 100% accessibility and raises the institutional credibility of the NGO.'
        }
      },
      imersiveblock: {
        title: 'Imersive Block 3D',
        description: 'Immersive 3D experience running right in the browser using the powerful integration between React and Three.js.',
        story: {
          challenge: 'Creating 3D web experiences usually requires high processing and complex code that sacrifices performance.',
          solution: 'Interactive application developed with React Three Fiber and Vite, delivering impressive graphics without losing fluidity.',
          impact: 'Demonstrates advanced 3D rendering capabilities in modern and performant web interfaces.'
        }
      },
    },
    capybara: {
      badge: 'My Initiative',
      title: 'Capybara',
      titleGradient: 'Holding',
      description:
        'Founder and creator of Capybara Holding, a visionary organization dedicated to fostering innovation, collaboration, and growth in the tech ecosystem. We believe in building sustainable solutions that make a positive impact.',
      item1: 'Technology Innovation & Development',
      item2: 'Strategic Business Solutions',
      item3: 'Team Building & Mentorship',
      item4: 'Digital Transformation Services',
      learnMore: 'Learn More',
      activeProjects: 'Active Projects',
      incubating: 'Incubating',
    },
    contact: {
      title: "Let's work",
      titleGradient: 'together',
      description:
        'Whether you have a project in mind, want to discuss opportunities, or just want to connect, I\'d love to hear from you. Let\'s create something amazing together.',
      email: 'Send me an Email',
      schedule: 'Schedule a Call',
      available: 'Available for freelance projects, full-time positions, and consulting opportunities.',
    },
    footer: {
      description:
        'Full-stack web developer passionate about creating modern, scalable applications.',
      nav: 'Navigation',
      skills: 'Skills',
      connect: 'Connect',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      uiux: 'UI/UX Design',
      fullstack: 'Full-stack Applications',
      rights: 'All rights reserved.',
      crafted: 'Crafted with passion by a full-stack developer.',
    },
    projectsPage: {
      title: 'My Projects',
      subtitle: 'Check out all my work, from complex full-stack applications to UI components.',
      backHome: 'Back to home',
      projectLinks: 'Project Links',
      imInterested: "I'm Interested",
      whatsappMessage: "Hi! I saw the {project} project on your portfolio and I'm interested.",
    },
    uiLibrary: {
      badge: "Vitor's Lab",
      titleUI: "UI",
      titleLibrary: "LIBRARY",
      featuredExperiment: "Featured Experiment",
      systemActive: "SYSTEM_ACTIVE",
      componentsActive: "Components Active",
      title: 'UI Component Library',
      description: 'A collection of reusable components.',
      noComponents: 'No components found in this category yet.',
      backToHome: 'Back to Home',
      downloadFreeTool: 'Download Free Tool',
      learnToUse: 'Learn how to use',
      iAmInterested: 'I am Interested',
      newFreeApp: 'New Free App',
    },
    instructions: {
      title: "How to Install and Use",
      subtitle: "Quick guide to start using Mizin Youtube App",
      step1: {
        title: "Download the File",
        desc: "Click the 'Download Free Tool' button to save the .zip file to your computer.",
      },
      step2: {
        title: "Extract Files",
        desc: "Right-click the downloaded file and select 'Extract All' or use your preferred unzipper.",
      },
      step3: {
        title: "Run the App",
        desc: "Open the extracted folder and double-click 'MizinYoutubeApp.exe' to start. No installation required!",
      },
      note: {
        title: "Important Note",
        desc: "Windows might show a protection warning. As it is an independent app, click 'More info' and then 'Run anyway'.",
      },
    },
    categories: {
      All: 'All',
      Buttons: 'Buttons',
      Loaders: 'Loaders',
      Inputs: 'Inputs',
      Cards: 'Cards',
      Text: 'Text',
      Tooltips: 'Tooltips',
    },
    contactForm: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully! We will get back to you soon.',
      error: 'Error sending message. Please try again.',
      loading: 'Sending...',
      required: 'Required field',
    },
    playground: {
      badge: 'Interactive',
      title: 'Your turn to play',
    },
    holding: {
      title: "Capybara Holding",
      subtitle: "Innovation & Technology Ecosystem",
      description: "Capybara Holding was born from the need to centralize and professionalize the management of various technological initiatives, creating an ecosystem where each project empowers the others.",
      mission: {
        title: "Our Mission",
        text: "Develop solutions that simplify the lives of entrepreneurs and users, using the latest in technology and design."
      },
      vitrine360: {
        title: "Vitrine360",
        tagline: "Your store, anywhere.",
        description: "A complete SaaS platform for sales, inventory, and digital presence management, focused on small and medium-sized merchants seeking professionalism without complexity.",
        features: [
          "Intuitive POS (Point of Sale)",
          "Smart inventory management",
          "E-commerce integration",
          "Advanced financial reports"
        ]
      },
      colorflicks: {
        title: "ColorFlicks",
        tagline: "The psychology of color in cinema.",
        description: "Explore the mood and aesthetics of your favorite movies through algorithmically generated color palettes. A visual tool for designers and cinephiles.",
        features: [
          "Mood Analysis",
          "Cinematic Palettes",
          "Social Sharing"
        ]
      },
      capyflow: {
        title: "CapyFlow Academy",
        tagline: "The coding academy for developers.",
        description: "Gamified learning platform focused on software development. Master full-stack skills with hands-on challenges.",
        features: [
          "Gamified Learning",
          "Monorepo Architecture",
          "Real-world Challenges"
        ]
      },
      mizin: {
        title: "Mizin",
        tagline: "Your offline playlist, simplified.",
        description: "The definitive organization and download tool for the ecosystem. Mizin is completely free and allows you to save videos or entire YouTube playlists in MP3 or MP4 format, with no quantity restrictions.",
        features: [
          "Playlist Download",
          "4K Ultra HD Quality",
          "Ultra MP3 Conversion",
          "Minimalist Interface"
        ]
      },
      ecosystem: {
        title: "The Ecosystem",
        description: "Capybara Holding is a technological symbiosis. While Vitrine360 handles commercial infrastructure, ColorFlicks provides visual intelligence, and Mizin offers practical media utilities, the CapyFlow Academy trains the talents of the future. Together, we cover diverse domains: Sales, Creativity, Utility, and Education."
      },
      sponsorship: {
        hero: {
          badge: "Back the Vision",
          title: "Fuel the Future",
          subtitle: "of Technology",
          description: "Capybara Holding is built on the idea that technology must serve people. By becoming a sponsor, you invest directly in innovation, education, and tools that empower creators and entrepreneurs.",
          cta: "I Want to Support"
        },
        tiers: {
          visionary: {
            title: "Visionary",
            price: "Custom / Contact Us",
            description: "Support the entire ecosystem. Your name/brand featured across all projects.",
            features: ["Logo on All Projects", "Early Access", "Strategic Consulting"]
          },
          guardian: {
            title: "Project Guardian",
            price: "$40/mo",
            description: "Choose a project (Vitrine360, ColorFlicks, CapyFlow) to sponsor directly.",
            features: ["Logo on Project", "Exclusive Badge", "Impact Reports"]
          },
          community: {
            title: "Community Supporter",
            price: "Pay What You Want",
            description: "One-time contribution to keep our servers running and coffee flowing.",
            features: ["Name on Wall", "Social Shoutout", "Good Vibes"]
          }
        },
        why: {
          innovation: {
            title: "Open Innovation",
            desc: "We foster technologies others dare not try."
          },
          education: {
            title: "Free Education",
            desc: "We keep CapyFlow accessible to underprivileged students."
          },
          impact: {
            title: "Real Impact",
            desc: "Tools that generate income for small businesses."
          }
        },
        form: {
          title: "Get in touch to sponsor",
          name: "Company/Person Name",
          email: "Professional Email",
          interest: "Interest Level",
          message: "Message",
          submit: "Send Proposal"
        },
        wallOfFame: {
          title: "Community Wall",
          subtitle: "Amazing people who help make all of this possible.",
          beTheFirst: "Be the first!",
          joinUs: "Join us"
        }
      },
      cta: "Learn more about the Holding"
    },
    testimonials: {
      badge: 'What I Offer',
      title: 'Tailored solutions for your business',
    },
    servicesList: [
      {
        title: "Full-Stack Development",
        description: "Complete web applications, from database to frontend, using React, Node.js and modern architectures.",
        icon: "Code2"
      },
      {
        title: "UI/UX Design",
        description: "Beautiful, intuitive and responsive interfaces. Focus on user experience and accessibility.",
        icon: "Palette"
      },
      {
        title: "Optimization & Performance",
        description: "Your site loading in milliseconds. Core Web Vitals, technical SEO and best practices.",
        icon: "Zap"
      },
      {
        title: "Technical Consulting",
        description: "I help choose the best technology for your idea and design your project architecture.",
        icon: "Terminal"
      }
    ],
    certificates: {
      button: "View Certifications",
      title: "Certifications & Achievements",
      subtitle: "My journey of continuous learning and skill validation.",
      viewCredential: "View Credential",
      issuer: "Issued by",
      date: "Completed in",
      searchPlaceholder: "Search certificates...",
      noCertificates: "No certificates found.",
      clearFilters: "Clear filters",
      all: "All",
      categories: {
        "Design & UX": "Design & UX",
        "AI & Data": "AI & Data",
        "DevOps & Security": "DevOps & Security",
        "Engineering": "Engineering",
        "Management": "Management"
      }
    },
    pricing: {
      title: "Vitrine360 Plans",
      subtitle: "Choose the best plan for your store",
      free: {
        title: "Free",
        description: "Ideal for starters",
        button: "Start Free"
      },
      pro: {
        title: "Pro",
        description: "For growing stores",
        button: "Subscribe Pro"
      },
      enterprise: {
        title: "Enterprise",
        description: "For large networks",
        button: "Contact Sales"
      }
    },
    certificatesList: [
      {
        id: 21,
        title: "UX: Improving User Experience in Digital Public Services",
        issuer: "National School of Public Administration - Enap",
        date: "2025",
        skills: ["UX Design", "Usability", "User Research"],
        credentialUrl: "#"
      },
      {
        id: 22,
        title: "Figma in Practice: Create Your First Prototype from Scratch with AI",
        issuer: "EBAC",
        date: "2026",
        skills: ["Figma", "UI Design", "Prototyping", "AI"],
        credentialUrl: "#"
      },
      {
        id: 20,
        title: "Software Modeling",
        issuer: "Universidade Anhembi Morumbi",
        date: "2024",
        skills: ["UML", "Software Architecture", "Design Patterns"],
        credentialUrl: "#"
      },
      {
        id: 1,
        title: "Development with GitHub Copilot",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["AI", "Coding", "GitHub"],
        credentialUrl: "#"
      },
      {
        id: 2,
        title: "GitHub Actions",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["DevOps", "CI/CD", "Automation"],
        credentialUrl: "#"
      },
      {
        id: 3,
        title: "GitHub Codespaces",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["DevOps", "Cloud IDE", "Development"],
        credentialUrl: "#"
      },
      {
        id: 4,
        title: "Information Security for Everyone",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Security", "InfoSec", "Cybersecurity"],
        credentialUrl: "#"
      },
      {
        id: 5,
        title: "Generative Artificial Intelligence",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["AI", "Generative AI", "Innovation"],
        credentialUrl: "#"
      },
      {
        id: 6,
        title: "Microsoft Generative AI - Copilot",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["AI", "Microsoft", "Productivity"],
        credentialUrl: "#"
      },
      {
        id: 7,
        title: "The History of AI",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["AI", "History", "Foundations"],
        credentialUrl: "#"
      },
      {
        id: 8,
        title: "AI Ethics",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["AI", "Ethics", "Compliance"],
        credentialUrl: "#"
      },
      {
        id: 9,
        title: "How to be More Productive using Bing Chat",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["AI", "Productivity", "Bing"],
        credentialUrl: "#"
      },
      {
        id: 10,
        title: "Introduction to Data Science - Concepts and Tools",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Data Science", "Analytics", "Big Data"],
        credentialUrl: "#"
      },
      {
        id: 11,
        title: "Introduction to Data Science - Data Processing",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Data Science", "ETL", "Data Processing"],
        credentialUrl: "#"
      },
      {
        id: 12,
        title: "Introduction to Data Science - Classification Models",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Data Science", "Machine Learning", "Classification"],
        credentialUrl: "#"
      },
      {
        id: 13,
        title: "Introduction to Data Science - Frequent Sets",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Data Science", "Pattern Mining", "Analytics"],
        credentialUrl: "#"
      },
      {
        id: 14,
        title: "Introduction to Data Science - Topic Discovery in Text",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Data Science", "NLP", "Text Mining"],
        credentialUrl: "#"
      },
      {
        id: 15,
        title: "People Management",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Management", "Leadership", "HR"],
        credentialUrl: "#"
      },
      {
        id: 16,
        title: "Leadership and Management of Hybrid Teams",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Management", "Remote Work", "Leadership"],
        credentialUrl: "#"
      },
      {
        id: 17,
        title: "Managing Projects with Microsoft 365",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["Project Management", "Microsoft 365", "Planning"],
        credentialUrl: "#"
      },
      {
        id: 18,
        title: "Process Analysis and Improvement",
        issuer: "EV.G / ENAP",
        date: "2024",
        skills: ["BPM", "Process Improvement", "Management"],
        credentialUrl: "#"
      },
      {
        id: 19,
        title: "CODRAS - Drone Operations",
        issuer: "EV.G / ENAP",
        date: "2023",
        skills: ["Drones", "Operations", "Technology"],
        credentialUrl: "#"
      }
    ]
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let current: any = translations[lang];

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback para Inglês
      current = translations.en;
      for (const fallbackKey of keys) {
        if (current && typeof current === 'object' && fallbackKey in current) {
          current = current[fallbackKey];
        } else {
          return key; // Retornar chave se não encontrada em inglês também
        }
      }
      return typeof current === 'string' ? current : key;
    }
  }

  return typeof current === 'string' ? current : key;
}
