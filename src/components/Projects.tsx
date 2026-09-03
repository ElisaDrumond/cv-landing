const projects = [
  {
    eyebrow: "Full stack • Domínio • Testes",
    title: "Delivery Skip",
    description:
      "Take-home em Next.js, TypeScript e MongoDB com regras temporais, janela móvel de cota, idempotência e tratamento de concorrência sobre a mesma entrega.",
    highlights: [
      "Regra de cutoff em America/Sao_Paulo com fronteiras testadas",
      "Separação entre HTTP, operação de negócio e regras puras",
      "Testes de idempotência, ownership e atualização concorrente",
    ],
    href: "https://github.com/ElisaDrumond/take-home",
    linkLabel: "Ver código e decisões",
  },
  {
    eyebrow: "Frontend • Performance • Observabilidade",
    title: "Este portfólio como case técnico",
    description:
      "A própria landing é usada para estudar Server Components, hidratação seletiva e o impacto de analytics de terceiros no caminho crítico.",
    highlights: [
      "Event delegation para tracking desacoplado da UI",
      "Google Analytics carregado fora do caminho crítico",
      "Trade-off documentado entre performance e fidelidade de eventos",
    ],
    href: "https://github.com/ElisaDrumond/cv-landing",
    linkLabel: "Ver implementação",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Projetos
        </p>

        <h2 className="text-3xl font-bold">Código com decisões para discutir</h2>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Projetos públicos escolhidos menos pela quantidade de features e mais pelos
          problemas de engenharia, trade-offs e decisões que consigo explicar.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <p className="mb-3 text-sm text-zinc-500">{project.eyebrow}</p>

            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-zinc-300">{project.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-zinc-400">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              data-track-event="click_project_repository"
              data-track-section="projects"
              data-track-label={project.title}
              className="mt-6 inline-flex w-fit rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              {project.linkLabel}
              <span className="sr-only"> — abre em uma nova aba</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
