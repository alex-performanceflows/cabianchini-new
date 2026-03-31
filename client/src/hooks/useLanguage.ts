import { useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

/**
 * Reads the language prefix from the URL (/it/* or /en/*)
 * and syncs i18next accordingly.
 */
export function useLanguage() {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  const lang = location.startsWith("/en") ? "en" : "it";

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    // Update <html lang> attribute for accessibility & SEO
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return lang;
}

/**
 * Returns the opposite-language URL for the language switcher.
 * /it/appartamenti → /en/apartments
 * /en/apartments  → /it/appartamenti
 */
const routeMap: Record<string, Record<string, string>> = {
  it: {
    "/it": "/en",
    "/it/appartamenti": "/en/apartments",
    "/it/dintorni": "/en/surroundings",
    "/it/posizione": "/en/location",
    "/it/contatti": "/en/contact",
    "/it/privacy-policy": "/en/privacy-policy",
    "/it/cookie-policy": "/en/cookie-policy",
    "/it/informativa-erogazioni-pubbliche": "/en/public-grants",
  },
  en: {
    "/en": "/it",
    "/en/apartments": "/it/appartamenti",
    "/en/surroundings": "/it/dintorni",
    "/en/location": "/it/posizione",
    "/en/contact": "/it/contatti",
    "/en/privacy-policy": "/it/privacy-policy",
    "/en/cookie-policy": "/it/cookie-policy",
    "/en/public-grants": "/it/informativa-erogazioni-pubbliche",
  },
};

export function useAlternateLangUrl(): string {
  const [location] = useLocation();
  const lang = location.startsWith("/en") ? "en" : "it";
  const map = routeMap[lang];

  // Exact match first
  if (map[location]) return map[location];

  // Handle apartment detail pages: /it/appartamenti/villa-anna → /en/apartments/villa-anna
  if (lang === "it" && location.startsWith("/it/appartamenti/")) {
    const id = location.replace("/it/appartamenti/", "");
    return `/en/apartments/${id}`;
  }
  if (lang === "en" && location.startsWith("/en/apartments/")) {
    const id = location.replace("/en/apartments/", "");
    return `/it/appartamenti/${id}`;
  }

  // Fallback: switch prefix
  return lang === "it"
    ? location.replace(/^\/it/, "/en")
    : location.replace(/^\/en/, "/it");
}
