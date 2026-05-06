"use client";

import { trackEvent } from "@/lib/analytics";

export function HeroActions() {
  return (
    <div className="mt-8 flex gap-4">
      <a
        href="#projects"
        onClick={() =>
          trackEvent("click_hero_cta", {
            section: "hero",
            label: "view_projects",
          })
        }
        className="rounded-full bg-white px-5 py-3 font-medium text-zinc-950"
      >
        Ver projetos
      </a>

      <a
        href="#contact"
        onClick={() =>
          trackEvent("click_contact_cta", {
            section: "hero",
            label: "contact",
          })
        }
        className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-white"
      >
        Contato
      </a>
    </div>
  );
}