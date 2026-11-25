import { createContext, useContext, useEffect, useCallback, useState } from "react";
import en from "../i18n/en.js";
import km from "../i18n/km.js";

const dictionaries = { en, km };
const LanguageContext = createContext(null);

function lookup(dict, key) {
  return key.split(".").reduce(
    (acc, k) => (acc && typeof acc === "object" ? acc[k] : undefined),
    dict
  );
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("portfolio:language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio:language", language);
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
  }, [language]);

  const t = useCallback(
    (key, fallback) => {
      const value = lookup(dictionaries[language], key);
      if (typeof value === "string") return value;
      return fallback ?? key;
    },
    [language]
  );

  const tArray = useCallback(
    (key, fallback = []) => {
      const value = lookup(dictionaries[language], key);
      return Array.isArray(value) ? value : fallback;
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((l) => (l === "en" ? "km" : "en"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t, tArray }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}