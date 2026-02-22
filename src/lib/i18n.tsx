import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "fr" | "en";

const STORAGE_KEY = "preferred-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "fr";
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (savedLocale === "fr" || savedLocale === "en") {
    return savedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};
