import { useTranslation } from "../../context/LanguageContext.jsx";

export default function LanguageToggle({ className = "" }) {
  const { language, toggleLanguage, t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("nav.toggleLanguage")}
      title={t("nav.toggleLanguage")}
      className={`flex items-center justify-center h-10 px-3 glass glass-hover rounded-xl text-xs font-semibold tracking-wider text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors ${className}`}
    >
      {language === "en" ? "ខ្មែរ" : "EN"}
    </button>
  );
}