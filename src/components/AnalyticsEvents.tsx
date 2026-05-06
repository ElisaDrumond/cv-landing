"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      const element = target?.closest<HTMLElement>("[data-track-event]");

      if (!element) return;

      const eventName = element.dataset.trackEvent;

      if (!eventName) return;

      const payload: Record<string, string> = {};

      if (element.dataset.trackSection) {
        payload.section = element.dataset.trackSection;
      }

      if (element.dataset.trackLabel) {
        payload.label = element.dataset.trackLabel;
      }

      trackEvent(eventName, payload);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}