/**
 * SeoHead — inject meta tags and hreflang links for bilingual SEO
 * Covers: title, description, canonical, hreflang (self + alternate + x-default),
 * og:title, og:description, og:url, og:image, og:locale, og:site_name, og:type
 */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAlternateLangUrl } from "@/hooks/useLanguage";
import { useLocation } from "wouter";

const BASE_URL = "https://cabianchini.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/slider_home/Home_Slider-1.webp`;

// Per-page hero images for og:image
const PAGE_OG_IMAGES: Record<string, string> = {
  home: `${BASE_URL}/images/slider_home/Home_Slider-1.webp`,
  appartamenti: `${BASE_URL}/images/slider_appartamenti/Appartamenti_Slider-1.webp`,
  dintorni: `${BASE_URL}/images/slider_dintorni/Dintorni_Slider-1.webp`,
  posizione: `${BASE_URL}/images/slider_posizione/Location-Slider-1.webp`,
  contatti: `${BASE_URL}/images/header-contatti.webp`,
};

interface SeoHeadProps {
  page: "home" | "appartamenti" | "dintorni" | "posizione" | "contatti";
  /** Override title/description/image (e.g. apartment detail page) */
  title?: string;
  description?: string;
  image?: string;
}

/** Set or update a <meta name="..."> tag */
function setMetaName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Set or update a <meta property="..."> tag */
function setMetaProp(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Set or update a <link rel="..."> tag, optionally filtered by hreflang */
function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SeoHead({ page, title, description, image }: SeoHeadProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "it" | "en";
  const [location] = useLocation();
  const alternateLangUrl = useAlternateLangUrl();

  const resolvedTitle = title ?? t(`seo.${page}.title`);
  const resolvedDesc = description ?? t(`seo.${page}.description`);
  const resolvedImage = image ?? PAGE_OG_IMAGES[page] ?? DEFAULT_OG_IMAGE;

  const canonicalUrl = `${BASE_URL}${location}`;
  const alternateUrl = `${BASE_URL}${alternateLangUrl}`;
  const alternateLang = lang === "it" ? "en" : "it";

  // x-default always points to the Italian version
  const xDefaultUrl = lang === "it" ? canonicalUrl : alternateUrl;

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    document.title = resolvedTitle;

    // ── html[lang] ─────────────────────────────────────────────────────────
    document.documentElement.lang = lang;

    // ── Meta description ───────────────────────────────────────────────────
    setMetaName("description", resolvedDesc);

    // ── Canonical ──────────────────────────────────────────────────────────
    setLink("canonical", canonicalUrl);

    // ── hreflang self ──────────────────────────────────────────────────────
    setLink("alternate", canonicalUrl, lang);

    // ── hreflang alternate ─────────────────────────────────────────────────
    setLink("alternate", alternateUrl, alternateLang);

    // ── hreflang x-default ─────────────────────────────────────────────────
    setLink("alternate", xDefaultUrl, "x-default");

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMetaProp("og:title", resolvedTitle);
    setMetaProp("og:description", resolvedDesc);
    setMetaProp("og:url", canonicalUrl);
    setMetaProp("og:image", resolvedImage);
    setMetaProp("og:image:alt", resolvedTitle);
    setMetaProp("og:type", "website");
    setMetaProp("og:site_name", "Ca' Bianchini Agriturismo");
    setMetaProp("og:locale", lang === "it" ? "it_IT" : "en_GB");
    setMetaProp("og:locale:alternate", lang === "it" ? "en_GB" : "it_IT");

    // ── Twitter Card ───────────────────────────────────────────────────────
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", resolvedTitle);
    setMetaName("twitter:description", resolvedDesc);
    setMetaName("twitter:image", resolvedImage);
  }, [resolvedTitle, resolvedDesc, resolvedImage, canonicalUrl, alternateUrl, xDefaultUrl, lang, alternateLang]);

  return null;
}
