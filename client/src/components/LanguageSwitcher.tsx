/**
 * LanguageSwitcher — due varianti:
 * - variant="flags"  → 🇮🇹 🇬🇧 per l'header
 * - variant="text"   → IT | EN per il footer
 */
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useAlternateLangUrl } from "@/hooks/useLanguage";

interface LanguageSwitcherProps {
  variant: "flags" | "text";
  className?: string;
}

export default function LanguageSwitcher({ variant, className = "" }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as "it" | "en";
  const alternateLangUrl = useAlternateLangUrl();
  const alternateLang = lang === "it" ? "en" : "it";

  if (variant === "flags") {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {/* Current language — active, slightly larger */}
        <span
          className="text-lg leading-none cursor-default opacity-100"
          title={lang === "it" ? "Italiano" : "English"}
          aria-label={lang === "it" ? "Italiano — lingua attiva" : "English — active language"}
        >
          {lang === "it" ? "🇮🇹" : "🇬🇧"}
        </span>
        <span className="text-white/30 text-xs">/</span>
        {/* Alternate language — link */}
        <Link href={alternateLangUrl}>
          <span
            className="text-lg leading-none cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200"
            title={alternateLang === "it" ? "Italiano" : "English"}
            aria-label={alternateLang === "it" ? "Passa all'italiano" : "Switch to English"}
          >
            {alternateLang === "it" ? "🇮🇹" : "🇬🇧"}
          </span>
        </Link>
      </div>
    );
  }

  // text variant for footer
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`text-xs tracking-[0.15em] cursor-default ${
          lang === "it" ? "text-[#C4A265]" : "text-white/30 hover:text-white/60"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        IT
      </span>
      <span className="text-white/20 text-xs">|</span>
      <Link href={alternateLangUrl}>
        <span
          className={`text-xs tracking-[0.15em] cursor-pointer transition-colors duration-200 ${
            lang === "en" ? "text-[#C4A265]" : "text-white/30 hover:text-white/60"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          EN
        </span>
      </Link>
    </div>
  );
}
