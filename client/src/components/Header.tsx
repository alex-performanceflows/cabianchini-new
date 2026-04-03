/*
 * Design: Stile i·pini — Header con MENU + PRENOTA a dx
 * Aperto: le voci nav appaiono nella STESSA riga, tra logo e bottoni
 */
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { logoUrl, logoWhiteUrl } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useLanguage, useAlternateLangUrl } from "@/hooks/useLanguage";

export default function Header() {
  const { t } = useTranslation();
  const lang = useLanguage();
  const alternateLangUrl = useAlternateLangUrl();
  const alternateLang = lang === "it" ? "en" : "it";
  const alternateFlag = alternateLang === "en" ? "🇬🇧" : "🇮🇹";
  const alternateLangLabel = alternateLang === "en" ? "English" : "Italiano";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const isHome = location === "/it" || location === "/en" || location === "/";
  const isDintorni = location === "/it/dintorni" || location === "/en/surroundings" || location === "/dintorni";
  const isAppartamenti =
    location.startsWith("/it/appartamenti") ||
    location.startsWith("/en/apartments") ||
    location.startsWith("/appartamenti");
  const isPosizione = location === "/it/posizione" || location === "/en/location" || location === "/posizione";
  const isContatti =
    location === "/it/contatti" ||
    location === "/en/contact" ||
    location === "/contatti";

  const hasHeroSlider = isHome || isDintorni || isAppartamenti || isPosizione || isContatti;
  const isInternal = !hasHeroSlider;
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks =
    lang === "en"
      ? [
          { label: t("nav.appartamenti"), href: "/en/apartments" },
          { label: t("nav.dintorni"), href: "/en/surroundings" },
          { label: t("nav.posizione"), href: "/en/location" },
          { label: t("nav.contatti"), href: "/en/contact" },
        ]
      : [
          { label: t("nav.appartamenti"), href: "/it/appartamenti" },
          { label: t("nav.dintorni"), href: "/it/dintorni" },
          { label: t("nav.posizione"), href: "/it/posizione" },
          { label: t("nav.contatti"), href: "/it/contatti" },
        ];

  // --- Detect if header overlaps any image on the page ---
  const [overDark, setOverDark] = useState(hasHeroSlider);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => {
      const header = headerRef.current;
      if (!header) return;

      // Get logo bounding box to know the sample area
      const logo = header.querySelector("img");
      const logoRect = logo?.getBoundingClientRect();
      if (!logoRect) return;

      const logoCenterY = logoRect.top + logoRect.height / 2;

      // Check all images and data-hero sections on the page
      const targets = document.querySelectorAll("img:not(header img), [data-hero='true']");
      let isDark = false;

      for (const target of targets) {
        const rect = target.getBoundingClientRect();
        // Skip tiny images (icons, logos in other sections)
        if (rect.width < 200 || rect.height < 100) continue;
        // Check if this element vertically overlaps the logo center
        if (rect.top <= logoCenterY && rect.bottom >= logoCenterY) {
          // Also check horizontal overlap with logo
          if (rect.left <= logoRect.right && rect.right >= logoRect.left) {
            isDark = true;
            break;
          }
        }
      }

      setOverDark(isDark);
    };

    // Initial check + on scroll
    check();
    window.addEventListener("scroll", check, { passive: true });
    const interval = setInterval(check, 600); // catch slider transitions
    return () => {
      window.removeEventListener("scroll", check);
      clearInterval(interval);
    };
  }, [location]);

  // --- Color logic ---
  const isWhiteLogo = overDark && !menuOpen;

  // Header background: always transparent, only white when menu is open
  let headerBg: string;
  if (menuOpen) {
    headerBg = "bg-[#FAFAF7] shadow-sm";
  } else {
    headerBg = "bg-transparent";
  }

  // Logo: white when over dark content, red otherwise
  const currentLogo = isWhiteLogo ? logoWhiteUrl : logoUrl;

  const handlePrenota = () => {
    setMenuOpen(false);
    if (isContatti) {
      const el = document.getElementById("contatta");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("prenota");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/${lang}/contatti`);
      }
    }
  };

  return (
    <div ref={menuRef}>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6 md:px-10 lg:px-12 py-4">
          {/* Logo */}
          <Link href={`/${lang}`} className="relative z-10 shrink-0">
            <img
              src={currentLogo}
              alt="Ca' Bianchini"
              className="h-12 md:h-14 w-auto transition-all duration-500"
              style={undefined}
            />
          </Link>

          {/* Desktop: nav links appear inline when menu is open */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden lg:flex items-center gap-8 xl:gap-12"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[11px] tracking-[0.18em] uppercase text-[#2C2C2C] hover:text-[#C4A265] transition-colors duration-300 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Alternate language flag — only the one you can switch to */}
                <Link
                  href={alternateLangUrl}
                  onClick={() => setMenuOpen(false)}
                  title={alternateLangLabel}
                  aria-label={alternateLang === "en" ? "Switch to English" : "Passa all'italiano"}
                  className="text-xl leading-none opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  {alternateFlag}
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Right side: MENU + PRENOTA stacked */}
          <div className="flex flex-col gap-2 relative z-10 shrink-0">
            {/* MENU button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center justify-between gap-3 px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                isWhiteLogo
                  ? "bg-white/90 text-[#2C2C2C] hover:bg-white"
                  : "bg-white text-[#2C2C2C] hover:bg-gray-50 shadow-sm"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
              aria-label="Menu"
            >
              <span>{t("nav.menu")}</span>
              <div className="flex flex-col gap-[3px] ml-1">
                {menuOpen ? (
                  <X size={16} strokeWidth={1.5} />
                ) : (
                  <>
                    <span className="block w-[18px] h-[1.5px] bg-[#2C2C2C]" />
                    <span className="block w-[18px] h-[1.5px] bg-[#2C2C2C]" />
                    <span className="block w-[18px] h-[1.5px] bg-[#2C2C2C]" />
                  </>
                )}
              </div>
            </button>

            {/* PRENOTA button */}
            <button
              onClick={handlePrenota}
              className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 text-center transition-all duration-300 ${
                isWhiteLogo
                  ? "bg-[#8B8B8B]/90 text-white hover:bg-[#C4A265]"
                  : "bg-[#8B8B8B] text-white hover:bg-[#C4A265]"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {isContatti ? t("nav.contatta") : t("nav.prenota")}
            </button>

          </div>
        </div>

        {/* Mobile menu: full-screen overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#E8E6E1]"
            >
              <nav className="px-6 py-6">
                <div className="flex flex-col items-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xl tracking-[0.15em] text-[#2C2C2C] hover:text-[#C4A265] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    onClick={handlePrenota}
                    className="mt-4 text-xs tracking-[0.2em] uppercase bg-[#8B8B8B] text-white px-8 py-3 text-center transition-all duration-300 hover:bg-[#C4A265]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {isContatti ? t("nav.contatta") : t("nav.prenota")}
                  </button>
                  {/* Alternate language flag — solo quella su cui puoi switchare */}
                  <Link
                    href={alternateLangUrl}
                    onClick={() => setMenuOpen(false)}
                    title={alternateLangLabel}
                    aria-label={alternateLang === "en" ? "Switch to English" : "Passa all'italiano"}
                    className="text-2xl leading-none opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    {alternateFlag}
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
