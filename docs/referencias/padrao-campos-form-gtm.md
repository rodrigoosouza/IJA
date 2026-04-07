# Padrão de Campos de Formulário para GTM

Padrão obrigatório de nomes no dataLayer para que nome, email e telefone cheguem corretos às variáveis do GTM — independente da ferramenta (Tally, Lovable, HTML custom, React).

## O Problema
Ferramentas diferentes enviam campos com nomes diferentes. Se o nome não bate com a DLV do GTM, o campo chega nulo → Meta CAPI e Google Ads Enhanced Conversions recebem dados vazios → match quality zero.

## Campos Obrigatórios no dataLayer.push

| Chave | Tipo | Descrição |
|---|---|---|
| `email` | string | Email do lead (usuario@dominio.com) |
| `phoneNumber` | string | Telefone SEM máscara — apenas dígitos (ex: 71999998888) |
| `nome` | string | Primeiro nome |
| `sobrenome` | string | Sobrenome (string vazia se não disponível, NUNCA omitir) |
| `apex_session_id` | string | Session ID do sessionStorage |
| `time_on_page_at_submit` | number | Segundos na página até o submit |

### NOMES ERRADOS (não usar)
- `lead_email` → usar `email`
- `lead_phone` → usar `phoneNumber`
- `lead_first_name` → usar `nome`
- `lead_last_name` → usar `sobrenome`
- `lp_session_id` → usar `apex_session_id`

## Event Names

| event name | Quando usar |
|---|---|
| `tally_form_submit` | Formulários nativos Tally (via postMessage/iframe) |
| `form_submit_success` | Lovable, HTML customizado, qualquer LP que não seja Tally |

Ambos disparam GA4, Meta CAPI, TikTok, Bing. Não criar novos triggers.

## Implementação por Ferramenta

### Tally
Nenhuma alteração necessária. O GTM já tem HTML tag listener que intercepta `Tally.FormSubmitted` e mapeia automaticamente:
- INPUT_EMAIL → email
- INPUT_PHONE_NUMBER → phoneNumber
- 1º INPUT_TEXT → nome
- 2º INPUT_TEXT → sobrenome

### React / Lovable
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'form_submit_success',
  email: leadEmail,
  phoneNumber: phoneDigitsOnly,
  nome: firstName,
  sobrenome: lastName,
  apex_session_id: sessionId,
  time_on_page_at_submit: Math.round((Date.now() - pageStart) / 1000)
});
```

### HTML Custom
```javascript
document.getElementById('form-lead').addEventListener('submit', function(e) {
  e.preventDefault();
  var fullName = document.getElementById('nome').value.trim();
  var parts = fullName.split(' ');

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submit_success',
    email: document.getElementById('email').value.trim(),
    phoneNumber: document.getElementById('telefone').value.replace(/\D/g,''),
    nome: parts[0],
    sobrenome: parts.slice(1).join(' '),
    apex_session_id: sessionId,
    time_on_page_at_submit: Math.round((Date.now() - pageStart) / 1000)
  });
});
```

### Session ID (gerar no load)
```javascript
var sessionId = (function() {
  try {
    var key = 'apex_session_id';
    var s = sessionStorage.getItem(key);
    if (!s) {
      s = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem(key, s);
    }
    return s;
  } catch(e) {
    return Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
})();
```

## Variáveis DLV no GTM

| Variável GTM | Chave dataLayer | Usada em |
|---|---|---|
| 01 - DLV - email | `email` | GA4, Meta CAPI, Google Ads |
| 01 - DLV - Celular | `phoneNumber` | GA4, Meta CAPI, Google Ads |
| 01 - DLV - Nome | `nome` | GA4, Meta CAPI |
| 01 - DLV - Sobrenome | `sobrenome` | GA4, Meta CAPI |
| DLV - time_on_page_at_submit | `time_on_page_at_submit` | GA4 generate_lead |
| jsc - SessionID | `apex_session_id` | Todos os eventos (lê sessionStorage) |

## Checklist de Validação
- [ ] Evento chega no GTM Preview com nome correto
- [ ] DLV email populada (não undefined/null)
- [ ] DLV phoneNumber populada — apenas dígitos
- [ ] DLV nome e sobrenome populadas
- [ ] apex_session_id presente (não nulo)
- [ ] generate_lead no Supabase com email, phone, first_name, last_name
- [ ] Meta Events Manager: match quality >= 7
- [ ] Google Ads Enhanced Conversions: user-provided data presente

## Erros Comuns
| Sintoma | Causa | Fix |
|---|---|---|
| email nulo | Push com `lead_email` | Usar `email` |
| phone nulo | Push com `lead_phone` | Usar `phoneNumber` + remover máscara |
| first_name nulo | Push com `lead_first_name` | Usar `nome` |
| session_id nulo | Chave errada (`lp_session_id`) | Usar `apex_session_id` |
| Match quality baixo | Campos nulos no CAPI | Validar DLVs no GTM Preview |
| Eventos duplicados | Dois containers GTM | Verificar só 1 GTM ativo |
