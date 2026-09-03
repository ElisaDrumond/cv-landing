# Elisa Drumond — CV Landing

Portfólio pessoal desenvolvido com Next.js e React, usado também como estudo de performance web, renderização no servidor, SEO técnico e instrumentação de analytics com baixo impacto no carregamento inicial.

## Stack atual

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- React Compiler
- Google Analytics 4
- Biome

## Objetivos técnicos

A implementação busca manter o máximo possível da página no servidor e introduzir JavaScript no cliente somente onde existe comportamento interativo ou integração com APIs do browser.

A página principal é composta por Server Components. Os pontos explicitamente client-side ficam concentrados em:

- captura de eventos de analytics;
- carregamento do Google Analytics após o carregamento inicial.

## Analytics desacoplado da UI

Os CTAs recebem atributos `data-*` declarativos em vez de handlers de tracking individuais:

```tsx
data-track-event="click_hero_cta"
data-track-section="hero"
data-track-label="view_projects"
```

Um único listener no `document` usa event delegation para identificar o elemento mais próximo com `data-track-event` e encaminhar o evento para a camada de analytics.

Isso evita transformar componentes de apresentação em Client Components apenas para adicionar tracking e mantém a instrumentação centralizada.

## Lazy loading do Google Analytics

O script do GA não é carregado durante o caminho crítico inicial. A inicialização ocorre depois de um delay e, quando suportado pelo browser, dentro de `requestIdleCallback`.

A implementação também evita inserir o mesmo script mais de uma vez e limpa o timer quando o componente é desmontado.

### Trade-off conhecido

Adiar a inicialização do GA reduz trabalho de third-party JavaScript no carregamento inicial, mas cria um trade-off: uma interação muito precoce pode acontecer antes de `window.gtag` estar disponível.

Na implementação atual, `trackEvent` usa optional chaining e esse evento não é armazenado para envio posterior.

Uma evolução possível é adicionar buffering dos eventos anteriores à inicialização ou inicializar o `dataLayer` antes do download do script. Esse caso fica documentado porque performance e fidelidade de telemetria são requisitos que precisam ser balanceados, não uma otimização gratuita.

## Renderização e hidratação

O projeto usa App Router e mantém componentes no servidor por padrão.

Isso reduz a quantidade de JavaScript hidratado sem necessidade. Componentes client-side são utilizados somente nas integrações que dependem do browser.

O React Compiler está habilitado no `next.config.ts`.

## SEO técnico

A configuração inclui:

- metadata via API do Next.js;
- Open Graph;
- imagem de preview social;
- `metadataBase` configurável por ambiente;
- estrutura semântica da página;
- sitemap e robots no projeto.

## Performance: como este projeto deve ser avaliado

O foco do projeto é minimizar trabalho no caminho crítico, principalmente hidratação e third-party JavaScript.

O README anterior descrevia o projeto como “Lighthouse otimizado”, mas não registrava medições reproduzíveis de antes/depois. Por isso, esta documentação evita apresentar números que não estão versionados no repositório.

Uma próxima etapa do case é registrar uma baseline e comparar mudanças com o mesmo ambiente e metodologia, incluindo métricas como:

- LCP;
- TBT;
- JavaScript transferido/executado;
- impacto da inicialização de analytics.

A intenção é tratar performance como investigação mensurável: problema → hipótese → alteração → nova medição.

## Estrutura

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── AnalyticsEvents.tsx
│   ├── Contact.tsx
│   ├── GoogleAnalyticsLazy.tsx
│   ├── Hero.tsx
│   ├── HeroActions.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── lib/
    └── analytics.ts
```

## Rodando localmente

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

Qualidade:

```bash
npm run lint
npm run format
```

## Variáveis de ambiente

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Evoluções planejadas

- registrar benchmark reproduzível de performance;
- garantir buffering de eventos disparados antes da inicialização do GA;
- transformar a seção de projetos em pequenos estudos de caso técnicos;
- adicionar testes onde houver comportamento client-side relevante, sem criar testes apenas por cobertura.
