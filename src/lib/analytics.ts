type GtagParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: GtagParams) {
  if (typeof window === "undefined") return;

  const gtag = (window as typeof window & {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }).gtag;

  gtag?.("event", eventName, params);
}