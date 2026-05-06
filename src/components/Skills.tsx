export function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "API REST",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
  ];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Tecnologias
        </p>

        <h2 className="text-3xl font-bold">Stack principal</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}