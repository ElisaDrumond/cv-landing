"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalyticsLazy() {
  useEffect(() => {
    if (!GA_ID) return;

    const loadAnalytics = () => {
      if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

      const script = document.createElement("script");

      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

      script.async = true;

      document.head.appendChild(script);

      window.dataLayer = window.dataLayer ?? [];

      const dataLayer = window.dataLayer;

      function gtag(...args: unknown[]) {
        dataLayer.push(args);
      }

      window.gtag = gtag;

      gtag("js", new Date());

      gtag("config", GA_ID, {
        page_path: window.location.pathname,
      });
    };

    const timeoutId = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadAnalytics);
      } else {
        loadAnalytics();
      }
    }, 3500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}