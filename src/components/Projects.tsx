export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Projetos
        </p>

        <h2 className="text-3xl font-bold">Experiências digitais em destaque</h2>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Alguns exemplos de soluções que representam minha atuação com frontend,
          backend, performance e integração com APIs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="mb-3 text-sm text-zinc-500">Frontend • Performance • SEO</p>

          <h3 className="text-xl font-semibold">Landing page otimizada</h3>

          <p className="mt-3 text-zinc-300">
            Página desenvolvida com Next.js e TypeScript com foco em performance,
            SEO técnico e responsividade.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="mb-3 text-sm text-zinc-500">Fullstack • APIs</p>

          <h3 className="text-xl font-semibold">Aplicações fullstack</h3>

          <p className="mt-3 text-zinc-300">
            Desenvolvimento de aplicações com React, Node.js e integração com APIs
            REST, bancos de dados e regras de negócio.
          </p>
        </article>
      </div>
    </section>
  );
}