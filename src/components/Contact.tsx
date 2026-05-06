export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contato
        </p>

        <h2 className="text-3xl font-bold">Vamos conversar</h2>
      </div>

      <div className="space-y-4 text-zinc-300">
        <p>
          <span className="text-zinc-500">Email:</span>{" "}
          <a href="mailto:elisadrumond@vizzuallab.com" className="underline">
            elisadrumond@vizzuallab.com
          </a>
        </p>

        <p>
          <span className="text-zinc-500">Telefone:</span>{" "}
          <a href="tel:+5521985015981" className="underline">
            (21) 98501-5981
          </a>
        </p>

        <p>
          <span className="text-zinc-500">Site:</span>{" "}
          <a
            href="https://site.vizzuallab.com"
            target="_blank"
            className="underline"
          >
            site.vizzuallab.com
          </a>
        </p>
      </div>
    </section>
  );
}