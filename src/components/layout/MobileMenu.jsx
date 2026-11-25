import { useEffect } from "react";
import SocialLinks from "../common/SocialLinks.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";
import LanguageToggle from "../common/LanguageToggle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";

export default function MobileMenu({ open, onClose, links = [] }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <aside
        className={`glass-strong absolute right-0 top-0 h-full w-[80%] max-w-sm p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white">{t("nav.menu")}</span>
          <button
            className="flex items-center justify-center rounded-lg glass h-9 w-9 text-slate-200"
            onClick={onClose}
            aria-label={t("nav.closeMenu")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 mt-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                className="block px-4 py-3 text-base transition rounded-xl text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mt-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </aside>
    </div>
  );
}