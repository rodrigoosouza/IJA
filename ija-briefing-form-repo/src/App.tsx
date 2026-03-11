import { useState, useRef, useEffect } from 'react'
import { supabase } from './lib/supabase'
import { briefingSections, type BriefingData, countProgress, isBriefingComplete, getSectionProgress, getPrefilledData } from './lib/briefing-sections'

type Screen = 'intro' | 'form' | 'success'

function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [currentSection, setCurrentSection] = useState(0)
  const [data, setData] = useState<BriefingData>(getPrefilledData())
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentSection])

  const handleChange = (key: string, value: string) => {
    setData(prev => ({ ...prev, [key]: value }))
  }

  const progress = countProgress(data)
  const section = briefingSections[currentSection]
  const sectionProg = getSectionProgress(section, data)
  const currentSectionHasRequired = section.questions.some(q => q.required)
  const currentRequiredFilled = section.questions
    .filter(q => q.required)
    .every(q => data[q.key]?.trim())

  const canAdvance = !currentSectionHasRequired || currentRequiredFilled

  const handleSubmit = async () => {
    if (!isBriefingComplete(data)) {
      setError('Por favor, preencha todos os campos obrigatórios antes de enviar.')
      return
    }
    setSaving(true)
    setError('')
    try {
      // Filtra apenas campos com valor preenchido para evitar erro de coluna
      const cleanData: Record<string, string> = {}
      Object.entries(data).forEach(([k, v]) => {
        if (v?.trim()) cleanData[k] = v.trim()
      })
      cleanData.status = 'completo'
      const { error: dbError } = await supabase
        .from('ija_client_briefings')
        .insert([cleanData])
      if (dbError) throw dbError
      setScreen('success')
    } catch (err: any) {
      setError(err.message || 'Erro ao salvar. Tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  // ─── INTRO SCREEN ───
  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium">
              <span>📋</span> Diagnóstico Empresarial
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Briefing<br />
              <span className="text-orange-500">Estratégico</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
              Já pré-preenchemos o que sabemos sobre a IJA. Confirme, ajuste e complete as perguntas para criarmos a estratégia ideal de crescimento.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-500">8</div>
              <div className="text-xs text-gray-500 mt-1">Seções</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-500">~10</div>
              <div className="text-xs text-gray-500 mt-1">Minutos</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-500">44</div>
              <div className="text-xs text-gray-500 mt-1">Perguntas</div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-left space-y-3 max-w-md mx-auto">
            <p className="text-sm text-gray-300 font-medium">O que você vai mapear:</p>
            <ul className="space-y-2 text-sm text-gray-400">
              {briefingSections.map(s => (
                <li key={s.id} className="flex items-center gap-2">
                  <span>{s.icon}</span>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setScreen('form')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]"
          >
            Começar Diagnóstico →
          </button>

          <p className="text-gray-600 text-xs">
            Instituto João Alves — Consultoria Empresarial
          </p>
        </div>
      </div>
    )
  }

  // ─── SUCCESS SCREEN ───
  if (screen === 'success') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">✅</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white">Briefing Enviado!</h2>
            <p className="text-gray-400 leading-relaxed">
              Suas respostas foram salvas com sucesso. Agora nossa equipe vai analisar cada detalhe para criar a estratégia ideal para o seu negócio.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-400">
              <span className="text-orange-400 font-medium">Próximos passos:</span> Em até 48h entraremos em contato para agendar a reunião de diagnóstico com base nas suas respostas.
            </p>
          </div>

          <p className="text-gray-600 text-xs">
            Instituto João Alves — Consultoria Empresarial
          </p>
        </div>
      </div>
    )
  }

  // ─── FORM SCREEN ───
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">
              {section.icon} {section.title}
            </span>
            <span className="text-xs text-gray-500">
              {progress.answered}/{progress.total} respondidas ({progress.percent}%)
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div
              className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
        </div>

        {/* Section pills */}
        <div className="max-w-3xl mx-auto px-4 pb-3 flex gap-1.5 overflow-x-auto scrollbar-hide">
          {briefingSections.map((s, i) => {
            const sp = getSectionProgress(s, data)
            const isActive = i === currentSection
            const isDone = sp.answered === sp.total && sp.total > 0
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSection(i)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : isDone
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-gray-900 text-gray-500 border border-gray-800 hover:border-gray-700'
                }`}
              >
                {s.icon} {sp.answered}/{sp.total}
              </button>
            )
          })}
        </div>
      </div>

      {/* Form content */}
      <div ref={formRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {/* Section header */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{section.icon} {section.title}</h2>
            <p className="text-sm text-gray-500">{section.description}</p>
            <p className="text-xs text-gray-600">{sectionProg.answered} de {sectionProg.total} respondidas nesta seção</p>
          </div>

          {/* Questions */}
          <div className="space-y-5">
            {section.questions.map((q) => {
              const isPrefilled = q.prefilled && data[q.key] === q.prefilled
              return (
              <div key={q.key} className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  {q.label}
                  {q.required && <span className="text-orange-500 ml-1">*</span>}
                  {isPrefilled && <span className="ml-2 text-xs bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full">pré-preenchido</span>}
                </label>
                {q.hint && (
                  <p className="text-xs text-gray-500 italic">💡 {q.hint}</p>
                )}

                {q.type === 'select' && q.options ? (
                  <select
                    value={data[q.key] || ''}
                    onChange={(e) => handleChange(q.key, e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    {q.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : q.type === 'textarea' ? (
                  <textarea
                    value={data[q.key] || ''}
                    onChange={(e) => handleChange(q.key, e.target.value)}
                    placeholder={q.placeholder}
                    rows={3}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={q.type}
                    value={data[q.key] || ''}
                    onChange={(e) => handleChange(q.key, e.target.value)}
                    placeholder={q.placeholder}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
                  />
                )}
              </div>
            )})}
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 pb-8 border-t border-gray-800">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-700"
            >
              ← Anterior
            </button>

            <span className="text-xs text-gray-600">
              Seção {currentSection + 1} de {briefingSections.length}
            </span>

            {currentSection < briefingSections.length - 1 ? (
              <button
                onClick={() => setCurrentSection(currentSection + 1)}
                disabled={!canAdvance}
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/20"
              >
                Próxima →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={saving || !isBriefingComplete(data)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/20"
              >
                {saving ? 'Enviando...' : 'Enviar Briefing ✓'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
