// Todo o texto do site fica aqui. Para atualizar o portfólio, edite só este arquivo.

export type Link = { label: string; href: string }

export type Image = { src: string; alt: string }

export type Project = {
  id: string
  name: string
  summary: string
  status?: string
  highlights: string[]
  challenge?: string
  note?: string
  stack: string[]
  stackSummary: string
  // Telas de sistema web: a primeira é a principal e as outras aparecem menores, abaixo dela.
  // Telas de celular ('phone'): aparecem lado a lado, em formato retrato.
  images?: Image[]
  imageFormat?: 'desktop' | 'phone'
  imagesCaption?: string
  repo?: Link
}

export type Role = {
  title: string
  period: string
  items?: string[]
}

export const profile = {
  name: 'Matheus Marques Fernandes Vieira',
  shortName: 'Matheus Vieira',
  role: 'Desenvolvedor PHP/Laravel Full Stack',
  email: 'matheusmarques9096@gmail.com',
  location: 'Itapetininga, SP',
  // Gerado por `npm run curriculo` a partir de curriculo/curriculo.html
  resume: '/curriculo-matheus-vieira.pdf',
  resumeDownloadName: 'Curriculo-Matheus-Marques-Fernandes-Vieira.pdf',
  github: 'https://github.com/CdeCinza',
  linkedin: 'https://www.linkedin.com/in/matheus-marques-fernandes-vieiracln/',
  facts: [
    { label: 'Atualmente', value: 'Desenvolvedor full stack na J2K Sistemas' },
    { label: 'Formação', value: 'Análise e Desenvolvimento de Sistemas, FATEC Itapetininga' },
    { label: 'Local', value: 'Itapetininga, SP' },
  ],
}

export const projectsIntro =
  'Dois projetos pessoais e o trabalho de graduação. O código do Elo e do Taskly está aberto no GitHub.'

export const featuredProject: Project = {
  id: 'elo',
  name: 'Elo',
  status: 'Em desenvolvimento',
  summary:
    'Conecta a operação de um restaurante: pedidos pelo tablet da mesa, acompanhamento pela cozinha, comanda, fechamento no caixa e controle de estoque.',
  highlights: [
    'Pedidos simultâneos na mesma mesa',
    'Baixa de ingredientes durante o preparo',
    'Pagamento com Stripe em ambiente de testes, confirmado por webhook',
    'Testes em PHPUnit e Playwright',
  ],
  challenge:
    'Os pontos mais delicados foram tratar pedidos feitos ao mesmo tempo na mesma mesa e baixar os ingredientes do estoque no momento em que o item entra em preparo, não quando é pedido.',
  stack: ['Laravel', 'MySQL', 'Next.js', 'React', 'TypeScript'],
  stackSummary: 'Laravel, MySQL, Next.js, React e TypeScript',
  images: [
    {
      src: '/projects/elo-home.png',
      alt: 'Página inicial do Elo explicando o fluxo entre mesa, cozinha e caixa',
    },
  ],
  repo: { label: 'Ver código no GitHub', href: 'https://github.com/CdeCinza/Elo' },
}

export const otherProjects: Project[] = [
  {
    id: 'taskly',
    name: 'Taskly',
    summary: 'Gestão de tarefas e chamados com Kanban, SLA, agenda e relatórios.',
    highlights: [
      'Kanban com arrastar e soltar, ordem salva no banco',
      'Chamados com prioridade, SLA, checklist e anexos',
      'Dashboard, subtarefas e responsáveis',
      'Agenda e relatórios por período',
      'Lixeira com restauração',
      'Três idiomas, tema claro e escuro',
    ],
    challenge:
      'O mais trabalhoso foi manter a ordem das tarefas sincronizada com o banco ao arrastar os cards e organizar a tela de chamados com filtros, checklists e alertas de SLA.',
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL', 'Tailwind CSS'],
    stackSummary: 'Laravel, Livewire, MySQL',
    images: [
      { src: '/projects/taskly-kanban.jpg', alt: 'Quadro Kanban do Taskly com colunas A fazer, Em progresso e Revisão' },
      { src: '/projects/taskly-dashboard.jpg', alt: 'Dashboard do Taskly com indicadores de tarefas, chamados e prazos da semana' },
      { src: '/projects/taskly-chamados.jpg', alt: 'Central de chamados do Taskly separada por status, com prioridade e SLA' },
    ],
    imagesCaption: 'Telas do sistema rodando com os dados de exemplo do próprio projeto.',
    repo: { label: 'Ver código no GitHub', href: 'https://github.com/CdeCinza/TaskManager' },
  },
  {
    id: 'veez',
    name: 'VEEZ',
    summary:
      'Trabalho de graduação: app de transporte escolar por vans para motoristas, pais e alunos.',
    highlights: [
      'Rastreamento da rota em tempo real com Mapbox',
      'Chat individual e em grupo entre responsáveis e motoristas',
      'Mensalidades por Pix e cartão com Stripe, com histórico',
      'API REST em Node.js',
    ],
    note: 'Desenvolvido em equipe de três pessoas, de fevereiro a junho de 2026. Aprovado com nota 9,0 na FATEC Itapetininga.',
    stack: ['React Native com Expo', 'TypeScript', 'Node.js', 'PostgreSQL (Supabase)', 'Stripe', 'Mapbox', 'Socket.io', 'Figma'],
    stackSummary: 'React Native, Node.js, PostgreSQL',
    imageFormat: 'phone',
    images: [
      { src: '/projects/veez-dashboard.jpg', alt: 'Painel do passageiro no VEEZ com as próximas viagens' },
      { src: '/projects/veez-search.jpg', alt: 'Busca de vans no VEEZ com rotas disponíveis' },
      { src: '/projects/veez-driver-home.jpg', alt: 'Painel do motorista no VEEZ com a próxima rota e os ganhos do dia' },
      { src: '/projects/veez-driver-earnings.jpg', alt: 'Tela de ganhos do motorista no VEEZ com o histórico semanal' },
    ],
    imagesCaption: 'Telas do app com dados de exemplo. As duas primeiras são do passageiro; as duas últimas, do motorista.',
  },
]

export const experience = {
  company: 'J2K Sistemas, Itapetininga',
  current: { title: 'Desenvolvedor Full Stack', period: 'Junho de 2026 até hoje' } satisfies Role,
  responsibilities: [
    'Desenvolvimento de funcionalidades, telas e dashboards em PHP e Laravel',
    'Rotas, controllers e validações',
    'Integração com banco de dados',
    'Correções e melhorias nos sistemas da empresa',
  ],
  previous: [
    {
      title: 'Estagiário de desenvolvimento',
      period: 'Janeiro a julho de 2026',
      items: [
        'Apoio no desenvolvimento e na sustentação de sistemas web em ambiente ágil',
        'Correção de bugs, suporte técnico e evolução de funcionalidades existentes, com Git',
      ],
    },
  ] satisfies Role[],
  // Trabalhos públicos feitos na empresa. Só o que está no ar; nada de código ou painel interno.
  sites: {
    title: 'Sites que desenvolvi na J2K',
    intro: 'Para o SNDesk, software de atendimento da J2K. Os dois estão no ar e são usados pela empresa.',
    items: [
      {
        id: 'sndesk-landing',
        name: 'Landing page do SNDesk',
        link: { label: 'lp.sndesk.com.br', href: 'https://lp.sndesk.com.br' },
        summary:
          'Site de marketing e captação de leads, com páginas por segmento e por funcionalidade, formulários de demonstração em etapas, WhatsApp e página de LGPD para pedido de remoção de dados. Sistema de design próprio em CSS e deploy automático a cada envio ao GitHub.',
        stack: 'Laravel, Blade, CSS próprio, Laravel Mix',
        image: { src: '/projects/sndesk-landing.jpg', alt: 'Página inicial da landing page do SNDesk' },
      },
      {
        id: 'sndesk-blog',
        name: 'Blog do SNDesk',
        link: { label: 'blog.sndesk.com.br', href: 'https://blog.sndesk.com.br' },
        summary:
          'CMS feito do zero: painel de posts, temas e usuários, editor com rascunho automático, comentários, curtidas, avaliações, newsletter e perfis com endereço preenchido pela ViaCEP.',
        stack: 'Laravel, MySQL, Blade, Bootstrap 5, Quill',
        image: { src: '/projects/sndesk-blog.jpg', alt: 'Página inicial do blog do SNDesk' },
      },
    ],
  },
}

export const education = {
  period: 'Formação, 2023 a 2026',
  course: 'Análise e Desenvolvimento de Sistemas',
  school: 'FATEC Itapetininga',
  detail: 'Curso Superior de Tecnologia, de agosto de 2023 a agosto de 2026. Concluído.',
  thesis: {
    label: 'Trabalho de graduação',
    name: 'VEEZ',
    summary:
      'App de transporte escolar por vans, com rastreamento da rota em tempo real, chat entre responsáveis e motoristas e pagamento de mensalidades por Pix e cartão.',
    facts: [
      { label: 'Nota', value: '9,0' },
      { label: 'Equipe', value: '3 pessoas' },
      { label: 'Período', value: 'Fev. a jun. de 2026' },
    ],
    link: { label: 'Ver o projeto', href: '#projeto-veez' },
  },
}

// Cada item é um parágrafo da seção Sobre.
export const about = [
  'Comecei a estudar desenvolvimento web em 2021, pelo front-end. Na faculdade de Análise e Desenvolvimento de Sistemas passei para o full stack, e na J2K Sistemas isso virou trabalho: entrei como estagiário em janeiro de 2026 e fui efetivado como desenvolvedor full stack em junho.',
  'Fora do expediente, uso projetos próprios para ir além do dia a dia. No Taskly, aprofundo Laravel e Livewire em um sistema completo de tarefas e chamados. No Elo, separo uma API em Laravel de uma interface em Next.js, com testes em PHPUnit e Playwright. E o VEEZ, app em React Native, foi meu trabalho de graduação, aprovado com nota 9,0.',
]

export const skills = [
  { group: 'Back-end', items: 'PHP, Laravel, Node.js' },
  { group: 'Front-end', items: 'Livewire, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap' },
  { group: 'Mobile', items: 'React Native' },
  { group: 'Banco de dados', items: 'MySQL, PostgreSQL' },
]

export const tools = 'Ferramentas e testes: Alpine.js, Stripe, PHPUnit e Playwright.'

export const navigation: Link[] = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
