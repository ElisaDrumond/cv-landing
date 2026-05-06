declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  window.gtag?.("event", action, params);
}