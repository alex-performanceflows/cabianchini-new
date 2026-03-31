/**
 * Analytics utility — Google Analytics 4 with Consent Mode v2
 * GA only collects data when the user has accepted cookies.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function grantAnalytics() {
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
}

export function denyAnalytics() {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
}

/** Fire a GA4 event — only if the user has accepted cookies */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (localStorage.getItem("cb_cookie_consent") === "accepted") {
    window.gtag?.("event", name, params);
  }
}
