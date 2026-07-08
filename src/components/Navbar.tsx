import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useI18n } from "@/lib/i18n";

const NAVBAR_HEIGHT = 64;
const MOBILE_SCROLL_DELAY_MS = 180;

const Navbar = () => {
  const { locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [activeHref, setActiveHref] = useState("#hero");

  const navItems = useMemo(
    () => [
      { label: locale === "fr" ? "Accueil" : "Home", href: "#hero" },
      { label: locale === "fr" ? "A propos" : "About", href: "#about" },
      { label: locale === "fr" ? "Competences" : "Skills", href: "#skills" },
      { label: locale === "fr" ? "Formation" : "Education", href: "#education" },
      { label: locale === "fr" ? "Experiences" : "Experience", href: "#experience" },
      { label: locale === "fr" ? "Projets" : "Projects", href: "#projects" },
      { label: locale === "fr" ? "Services" : "Services", href: "#services" },
      { label: locale === "fr" ? "Contact" : "Contact", href: "#contact" },
    ],
    [locale],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = navItems[0].href;
      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) continue;

        const sectionTop = section.offsetTop - NAVBAR_HEIGHT - 24;
        if (window.scrollY >= sectionTop) {
          currentSection = item.href;
        }
      }

      setActiveHref(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  useEffect(() => {
    if (!mobileOpen && pendingHref) {
      const timeoutId = window.setTimeout(() => {
        const section = document.querySelector<HTMLElement>(pendingHref);
        if (section) {
          const top =
            section.getBoundingClientRect().top +
            window.scrollY -
            NAVBAR_HEIGHT;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
          window.history.replaceState(null, "", pendingHref);
        }
        setPendingHref(null);
      }, MOBILE_SCROLL_DELAY_MS);

      return () => window.clearTimeout(timeoutId);
    }
  }, [mobileOpen, pendingHref]);

  const handleClick = (href: string) => {
    setActiveHref(href);

    if (mobileOpen) {
      setPendingHref(href);
      setMobileOpen(false);
      return;
    }

    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass-strong" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => handleClick("#hero")}
          className="flex shrink-0 items-center rounded-md transition-opacity hover:opacity-90"
          aria-label={locale === "fr" ? "Accueil" : "Home"}
        >
          <img
            src="/favicon.svg"
            alt=""
            className="h-9 w-auto"
            width={36}
            height={36}
          />
        </button>

        {/* Desktop */}
        <ul className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={`relative inline-flex items-center pb-1 text-sm transition-colors duration-200 ${
                  activeHref === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{
                    scaleX: activeHref === item.href ? 1 : 0,
                    opacity: activeHref === item.href ? 1 : 0,
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-primary origin-left"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="xl:hidden bg-glass-strong overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleClick(item.href)}
                    aria-current={
                      activeHref === item.href ? "location" : undefined
                    }
                    className={`relative inline-flex items-center pb-1 text-sm transition-colors ${
                      activeHref === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <motion.span
                      aria-hidden="true"
                      initial={false}
                      animate={{
                        scaleX: activeHref === item.href ? 1 : 0,
                        opacity: activeHref === item.href ? 1 : 0,
                      }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-primary origin-left"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
