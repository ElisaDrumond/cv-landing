export function HeroActions() {
  return (
    <div className="mt-8 flex gap-4">
      <a
        href="#projects"
        data-track-event="click_hero_cta"
        data-track-section="hero"
        data-track-label="view_projects"
        className="rounded-full bg-white px-5 py-3 font-medium text-zinc-950"
      >
        Ver projetos
      </a>

      <a
        href="#contact"
        data-track-event="click_contact_cta"
        data-track-section="hero"
        data-track-label="contact"
        className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-white"
      >
        Contato
      </a>
    </div>
  );
}