# Elisa Drumond — CV Landing

Landing page desenvolvida com Next.js focada em performance, SEO técnico, acessibilidade e boas práticas modernas de frontend.

O projeto foi criado como portfólio profissional e também como ambiente de estudo para aprofundamento em:

- React Server Components
- Performance Web
- SEO técnico
- Google Analytics
- Renderização híbrida no Next.js
- Tracking customizado
- Otimização de Lighthouse

## 🚀 Tecnologias

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Google Analytics 4
- Vercel

---

# ✨ Features

- Landing page responsiva
- SEO otimizado
- Open Graph configurado
- Google Analytics com carregamento lazy
- Tracking customizado desacoplado da UI
- Server Components
- Lighthouse otimizado
- Performance mobile otimizada
- Deploy automático com Vercel

---

# 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── AnalyticsEvents.tsx
│   ├── Contact.tsx
│   ├── GoogleAnalyticsLazy.tsx
│   ├── Hero.tsx
│   ├── HeroActions.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
│
├── lib/
│   └── analytics.ts
```

---

# 🧠 Conceitos aplicados

## Server Components

Os componentes são renderizados no servidor por padrão utilizando o App Router do Next.js.

Isso reduz:

- JavaScript enviado ao cliente
- hidratação desnecessária
- impacto no TBT

---

## Event Delegation

O tracking de eventos foi implementado utilizando delegated events.

Ao invés de adicionar `onClick` em cada botão:

- os elementos recebem atributos `data-*`
- um listener global captura os eventos
- menos hidratação no client
- melhor performance mobile

---

## Lazy Analytics

O Google Analytics é carregado de forma otimizada:

- `requestIdleCallback`
- carregamento após delay
- menor impacto no Lighthouse mobile

---

## SEO Técnico

O projeto possui:

- Metadata otimizada
- Open Graph
- Preview social
- Sitemap
- Robots
- Estrutura semântica

---

# 📊 Lighthouse

Principais focos durante o desenvolvimento:

- Redução de TBT
- Melhorias em LCP
- Otimização mobile
- Minimização de hidratação
- Redução de JavaScript executado no carregamento inicial

---

# ⚙️ Como rodar o projeto

## Instalar dependências

```bash
npm install
```

## Rodar ambiente de desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Rodar build local

```bash
npm run start
```

---

# 🌎 Variáveis de ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

# 🚀 Deploy

O deploy é realizado automaticamente pela Vercel.

Produção:

- branch `main`

Preview Deploys:

- qualquer branch secundária

---

# 📚 Assuntos estudados no projeto

- React Server Components
- Hydration
- Lighthouse
- Core Web Vitals
- Web Performance
- SEO Técnico
- Google Analytics
- Event Delegation
- Renderização híbrida
- Lazy Loading
- Third-party Scripts

---

# 👩‍💻 Desenvolvido por

Elisa Drumond

- React
- Next.js
- Node.js
- TypeScript
- Performance Web
- SEO Técnico

