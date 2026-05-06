export function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
        Desenvolvedora Fullstack
      </p>

      <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
        Elisa Drumond — Desenvolvedora Fullstack focada em performance e experiência digital.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-300">
        Atuo com JavaScript, TypeScript, React, Next.js e Node.js, criando
        aplicações web com foco em performance, qualidade de código e
        experiência do usuário.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-5 py-3 font-medium text-zinc-950"
        >
          Ver projetos
        </a>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-white"
        >
          Contato
        </a>
      </div>
    </section>
  );
}