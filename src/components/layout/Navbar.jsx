import { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import MobileMenu from "./MobileMenu.jsx";
import Button from "../common/Button.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";
import LanguageToggle from "../common/LanguageToggle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import MyP from "../../assets/img/MYPIC.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 24;
  const { t } = useTranslation();

  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      {/* 👇 z-[9999] ធានាថាវានៅលើរូបភាព និង Content ទាំងអស់ */}
      <header className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          
          {/* 👇 បន្ថែម style ផ្ទាល់ ដើម្បីកុំឱ្យ Vercel Purge វា */}
          <nav 
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
            style={{
              backdropFilter: "blur(16px) saturate(150%)",
              WebkitBackdropFilter: "blur(16px) saturate(150%)",
              backgroundColor: scrolled ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none"
            }}
          >
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img src={MyP} alt="" className="object-cover w-8 transition-transform duration-300 rounded-md group-hover:scale-105" />
              <span className="font-semibold tracking-wide transition-colors text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                Sorn Ramy
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="items-center hidden gap-2 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 group"
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-sky-500 group-hover:w-[80%] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Right */}
            <div className="items-center hidden gap-3 lg:flex">
              <LanguageToggle />
              <ThemeToggle />
              <Button as="a" href="#contact" variant="primary" className="transition-transform duration-300 hover:scale-105">
                {t("nav.letsTalk")}
              </Button>
            </div>

            {/* Mobile Right */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <button
                className="flex items-center justify-center w-10 h-10 transition-colors glass rounded-xl text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400"
                onClick={() => setOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              </button>
            </div>

          </nav>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}