export interface BriefingQuestion {
  key: string
  label: string
  placeholder: string
  required: boolean
  type: 'text' | 'textarea' | 'email' | 'tel' | 'select'
  options?: string[]
  prefilled?: string
  hint?: string
}

export interface BriefingSection {
  id: string
  title: string
  description: string
  icon: string
  questions: BriefingQuestion[]
}

export const briefingSections: BriefingSection[] = [
  {
    id: 'dados-base',
    title: 'Dados da Empresa',
    description: 'Confirme as informações básicas do IJA',
    icon: '🏢',
    questions: [
      { key: 'nome_empresa', label: 'Nome da empresa', placeholder: '', required: true, type: 'text', prefilled: 'Instituto João Alves (IJA)' },
      { key: 'nome_responsavel', label: 'Seu nome completo', placeholder: '', required: true, type: 'text', prefilled: 'João Pedro Alves' },
      { key: 'email', label: 'E-mail principal', placeholder: 'seu@email.com', required: true, type: 'email' },
      { key: 'telefone', label: 'Telefone / WhatsApp', placeholder: '(22) 99999-9999', required: true, type: 'tel' },
      { key: 'cidade_estado', label: 'Cidade / Estado (sede)', placeholder: '', required: true, type: 'text', prefilled: 'Cabo Frio / RJ' },
      { key: 'segmento', label: 'Segmento de atuação', placeholder: '', required: true, type: 'text', prefilled: 'Consultoria empresarial para restaurantes e food service' },
      { key: 'areas_atuacao_geografica', label: 'Regiões de atuação', placeholder: '', required: false, type: 'text', prefilled: 'RJ, SP, ES, RS', hint: 'Atualize se atende mais regiões' },
      { key: 'tempo_mercado', label: 'Há quanto tempo está no mercado?', placeholder: 'Ex: 5 anos', required: false, type: 'text' },
    ],
  },
  {
    id: 'metodo-solucoes',
    title: 'Método e Soluções',
    description: 'Valide e complemente o que já mapeamos sobre o Tripé da Expansão',
    icon: '🔺',
    questions: [
      { key: 'descricao_metodo', label: 'Descreva o Método Tripé da Expansão com suas palavras', placeholder: '', required: true, type: 'textarea', prefilled: 'O Tripé da Expansão é baseado em três pilares: Padronização de Processos, Universidade Corporativa e Controle de Qualidade. Juntos, eles levam o restaurante de um modelo de sobrevivência para um modelo de crescimento sustentável.', hint: 'Ajuste à vontade — queremos capturar EXATAMENTE como você explica para um cliente.' },
      { key: 'solucao_mais_procurada', label: 'Qual das 4 soluções é a mais procurada?', placeholder: '', required: false, type: 'select', options: ['Gestão Financeira', 'Planejamento Estratégico', 'Liderança Organizacional', 'Gestão Comercial e Marketing', 'Todas igualmente'] },
      { key: 'como_explica_diferencial', label: 'Como você explica seu diferencial para um cliente?', placeholder: 'Quando alguém pergunta "por que a IJA?", o que você responde?', required: true, type: 'textarea', hint: 'Essa resposta vai virar a base da copy de todo material de marketing.' },
      { key: 'resultado_medio_cliente', label: 'Qual o resultado médio que seus clientes alcançam?', placeholder: 'Ex: Aumento de 30% na margem em 6 meses, redução de 50% na rotatividade...', required: false, type: 'textarea', hint: 'Números concretos são o melhor argumento de venda.' },
      { key: 'tempo_resultado', label: 'Em quanto tempo o cliente vê os primeiros resultados?', placeholder: 'Ex: Primeiros resultados em 30 dias, transformação completa em 6-12 meses', required: false, type: 'text' },
    ],
  },
  {
    id: 'contexto-numeros',
    title: 'Contexto e Números',
    description: 'Dados sobre a operação da IJA como negócio',
    icon: '📊',
    questions: [
      { key: 'faturamento_mensal', label: 'Faturamento mensal da IJA (pode ser faixa)', placeholder: 'Ex: R$ 30.000 a R$ 60.000', required: false, type: 'text', hint: 'Essa informação é confidencial — usaremos apenas para dimensionar investimento em marketing.' },
      { key: 'clientes_ativos', label: 'Quantos clientes ativos a IJA atende hoje?', placeholder: 'Ex: 12 clientes simultâneos', required: false, type: 'text' },
      { key: 'ticket_medio', label: 'Ticket médio por projeto/consultoria', placeholder: 'Ex: R$ 8.000 por projeto de 3 meses', required: false, type: 'text' },
      { key: 'modelo_cobranca', label: 'Como funciona a cobrança?', placeholder: '', required: false, type: 'select', options: ['Projeto fechado (valor fixo)', 'Mensalidade/retainer', 'Por hora', 'Misto (projeto + acompanhamento)', 'Outro'] },
      { key: 'capacidade_atendimento', label: 'Quantos clientes consegue atender por mês?', placeholder: 'Ex: Capacidade para 15-20 clientes simultâneos', required: false, type: 'text' },
    ],
  },
  {
    id: 'clientes-icp',
    title: 'Clientes e Perfil Ideal',
    description: 'Sobre os donos de restaurante que você atende',
    icon: '🎯',
    questions: [
      { key: 'perfil_cliente_ideal', label: 'Descreva seu cliente ideal com suas palavras', placeholder: '', required: true, type: 'textarea', prefilled: 'Donos de restaurantes e negócios de food service', hint: 'Detalhe: faturamento, número de unidades, momento do negócio, perfil pessoal...' },
      { key: 'faturamento_cliente_ideal', label: 'Faixa de faturamento do cliente ideal', placeholder: '', required: false, type: 'text', prefilled: 'R$ 50 mil a R$ 2 milhões/mês' },
      { key: 'unidades_cliente_ideal', label: 'Quantas unidades o cliente ideal tem?', placeholder: '', required: false, type: 'text', prefilled: '1 a 10 unidades' },
      { key: 'maior_dor_cliente', label: 'Qual a MAIOR dor desses restauradores?', placeholder: 'A dor que mais aparece na primeira conversa', required: true, type: 'textarea', hint: 'Essa é a pergunta mais importante do briefing. Quanto mais específico, melhor o marketing.' },
      { key: 'frase_cliente_comum', label: 'Qual frase o cliente mais fala na primeira reunião?', placeholder: 'Ex: "Eu trabalho 14h por dia e não sei pra onde vai o dinheiro"', required: false, type: 'textarea', hint: 'Vamos usar essas frases EXATAS nos anúncios e LPs.' },
      { key: 'objecoes_comuns', label: 'Quais as objeções mais comuns antes de fechar?', placeholder: 'Ex: "Está caro", "Não tenho tempo", "Já tentei consultoria e não funcionou"...', required: false, type: 'textarea' },
      { key: 'como_quebra_objecoes', label: 'Como você quebra essas objeções?', placeholder: 'O que responde quando o cliente diz que é caro, por exemplo?', required: false, type: 'textarea' },
    ],
  },
  {
    id: 'marketing-atual',
    title: 'Marketing Atual',
    description: 'O que já sabemos — confirme ou ajuste',
    icon: '📣',
    questions: [
      { key: 'como_conquista_clientes', label: 'Como conquista clientes hoje?', placeholder: '', required: true, type: 'textarea', prefilled: '100% por indicação de clientes satisfeitos', hint: 'Se mudou algo recentemente, atualize.' },
    ],
  },
  {
    id: 'objetivos-metas',
    title: 'Objetivos e Metas',
    description: 'Onde a IJA quer chegar com o marketing',
    icon: '🚀',
    questions: [
      { key: 'meta_12_meses', label: 'Onde quer estar daqui a 12 meses?', placeholder: 'Ex: 30 clientes ativos, presença forte no digital, referência em SP...', required: false, type: 'textarea' },
      { key: 'meta_90_dias', label: 'Se pudesse resolver 1 coisa nos próximos 90 dias, o que seria?', placeholder: 'Pense na transformação mais urgente para a IJA', required: false, type: 'textarea' },
    ],
  },
  {
    id: 'cases-prova-social',
    title: 'Cases e Prova Social',
    description: 'Histórias de sucesso para usar no marketing',
    icon: '⭐',
    questions: [
      { key: 'case_sucesso_1', label: 'Conte seu melhor case de sucesso', placeholder: 'Qual cliente teve a maior transformação? O que mudou? Quais números?', required: false, type: 'textarea', hint: 'Cases com números são a arma mais poderosa do marketing B2B.' },
      { key: 'case_sucesso_2', label: 'Tem um segundo case para compartilhar?', placeholder: 'Quanto mais cases, mais material para criar conteúdo', required: false, type: 'textarea' },
      { key: 'numeros_comprovanveis', label: 'Números que podemos usar publicamente', placeholder: 'Ex: 50+ restaurantes atendidos, 98% de satisfação, média de 35% de aumento em margem...', required: false, type: 'textarea' },
    ],
  },
  {
    id: 'comunicacao-pessoal',
    title: 'Comunicação e Estilo',
    description: 'Como João Pedro se comunica e aparece',
    icon: '🎤',
    questions: [
      { key: 'tom_comunicacao', label: 'Como prefere se comunicar?', placeholder: '', required: false, type: 'select', options: ['Direto e prático, sem enrolação', 'Próximo e acessível, como um amigo', 'Profissional e consultivo', 'Inspirador e motivacional', 'Misto — depende do contexto'] },
      { key: 'temas_domina', label: 'Quais temas você domina e poderia dar uma aula?', placeholder: 'Ex: Gestão financeira de restaurante, formação de líderes, padronização de processos...', required: false, type: 'textarea', hint: 'Esses viram temas de webinar, blog e conteúdo nas redes.' },
      { key: 'observacoes_adicionais', label: 'Algo mais que gostaria de compartilhar?', placeholder: 'Espaço livre — pode ser uma ideia, preocupação, sonho, qualquer coisa...', required: false, type: 'textarea' },
    ],
  },
]

export type BriefingData = Record<string, string>

/**
 * Retorna os dados iniciais com campos pré-preenchidos
 */
export function getPrefilledData(): BriefingData {
  const data: BriefingData = {}
  briefingSections.forEach(s => {
    s.questions.forEach(q => {
      if (q.prefilled) {
        data[q.key] = q.prefilled
      }
    })
  })
  return data
}

export function getRequiredKeys(): string[] {
  return briefingSections.flatMap(s =>
    s.questions.filter(q => q.required).map(q => q.key)
  )
}

export function countProgress(data: BriefingData) {
  const allKeys = briefingSections.flatMap(s => s.questions.map(q => q.key))
  const answered = allKeys.filter(k => data[k]?.trim()).length
  return { answered, total: allKeys.length, percent: Math.round((answered / allKeys.length) * 100) }
}

export function isBriefingComplete(data: BriefingData): boolean {
  return getRequiredKeys().every(k => data[k]?.trim())
}

export function getSectionProgress(section: BriefingSection, data: BriefingData) {
  const answered = section.questions.filter(q => data[q.key]?.trim()).length
  return { answered, total: section.questions.length }
}
