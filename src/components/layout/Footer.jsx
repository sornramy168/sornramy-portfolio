import SocialLinks from "../common/SocialLinks.jsx";
import { personalInfo } from "../../data/personalInfo.js";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 flex justify-center w-full px-4 pb-8 mt-12">
      {/* Floating Dock Container */}
      <div className="flex flex-col items-center w-full max-w-3xl gap-4 px-6 py-4 border shadow-2xl sm:flex-row sm:justify-between rounded-3xl border-slate-200/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        
        {/* Profile / Logo */}
        <div className="flex items-center justify-center w-full gap-3 pb-4 border-b sm:justify-start sm:w-auto sm:pb-0 sm:border-b-0 sm:border-r border-slate-200 dark:border-white/10 sm:pr-4">
          <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-sky-500 shrink-0">
            {personalInfo.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
              {personalInfo.name}
            </p>
            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {personalInfo.role}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-1">
          <SocialLinks />
        </div>

        {/* Divider */}
        <div className="hidden w-px h-8 mx-2 sm:block bg-slate-200 dark:bg-white/10" />

        {/* Back to Top & Copyright */}
        <div className="flex items-center justify-between w-full gap-4 sm:w-auto sm:justify-end">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center w-10 h-10 transition-all rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 group shrink-0"
            title="Back to top"
          >
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}