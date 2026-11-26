import { useEffect } from "react";
import SocialLinks from "../common/SocialLinks.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";
import LanguageToggle from "../common/LanguageToggle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";

export default function MobileMenu({ open, onClose, links = [] }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none"; 
    } else {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[9999] lg:hidden transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div 
        className="absolute inset-0 transition-opacity bg-slate-900/80 dark:bg-black/80" 
        onClick={onClose} 
      />

      <aside
        className={`fixed right-0 top-0 bottom-0 h-[100dvh] w-[85%] max-w-sm flex flex-col transition-transform duration-300 ease-out 
        bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-white/10 shrink-0">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {t("nav.menu")}
          </span>
          <button
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul 
          className="flex flex-col flex-1 gap-2 p-5 overflow-y-auto overscroll-contain touch-pan-y"
          style={{ overscrollBehavior: "contain" }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 text-base font-bold transition-colors duration-300 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-white/5 dark:active:bg-white/10 group"
              >
                <span className="relative inline-block">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 group-hover:w-full group-active:w-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="p-5 border-t border-slate-200 dark:border-white/10 shrink-0 bg-slate-50 dark:bg-[#0b1120]">
          <div className="flex items-center gap-3 p-3 mb-5 bg-white border shadow-sm rounded-2xl dark:bg-white/5 border-slate-200 dark:border-white/5">
            <LanguageToggle />
            <ThemeToggle />
            <span className="ml-auto text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
              Settings
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
              {t("contact.getInTouch", "Connect")}
            </p>
            <SocialLinks />
          </div>
        </div>
      </aside>
    </div>
  );
}