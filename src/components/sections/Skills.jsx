import { useState } from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { skillsData } from "../../data/skillsData.js";
import {
  FaCode, FaServer, FaPalette, FaScrewdriverWrench,
  FaLayerGroup, FaDatabase, FaReact, FaArrowRight,
} from "react-icons/fa6";

const iconMap = {
  frontend: FaReact, backend: FaServer, design: FaPalette,
  tools: FaScrewdriverWrench, languages: FaCode,
  frameworks: FaLayerGroup, database: FaDatabase,
};
const getIcon = (c) => iconMap[c?.toLowerCase()] || FaCode;

export default function Skills() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const group = skillsData[active];
  const Icon = getIcon(group.category);

  return (
    <section id="skills" className="relative py-12">
      <div className="max-w-6xl px-6 mx-auto">
        <SectionTitle
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[280px_1fr]">
          {/* === Tabs === */}
          <div className="flex gap-2 pb-2 overflow-x-auto md:flex-col md:overflow-visible md:pb-0">
            {skillsData.map((g, i) => {
              const TabIcon = getIcon(g.category);
              const isActive = active === i;
              return (
                <button
                  key={g.category}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-3 shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-sky-100 to-violet-100 text-sky-900 border border-sky-300 shadow-sm dark:from-sky-500/20 dark:to-violet-500/10 dark:text-white dark:border-sky-400/40 dark:shadow-none"
                      : "border border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${
                      isActive
                        ? "bg-sky-200 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300"
                        : "bg-slate-100 text-slate-500 group-hover:text-sky-600 dark:bg-white/5 dark:text-slate-500 dark:group-hover:text-sky-300"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </span>
                  <span className="whitespace-nowrap md:whitespace-normal">
                    {g.category}
                  </span>
                  {isActive && (
                    <FaArrowRight className="hidden w-3 h-3 ml-auto md:block text-sky-600 dark:text-sky-300" />
                  )}
                </button>
              );
            })}
          </div>

          {/* === Display panel === */}
          <div
            key={active}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none animate-[fadeIn_0.4s_ease]"
          >
            {/* ───── Background Grid & Effects ───── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-100">
              
              {/* Base grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(56,189,248,0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(56,189,248,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                  maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 80%)",
                }}
              />

              {/* Intersection dots */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.8) 1px, transparent 1.6px)",
                  backgroundSize: "24px 24px",
                  maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 15%, transparent 65%)",
                  WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 15%, transparent 65%)",
                }}
              />

              {/* Horizontal scanline */}
              <div
                className="absolute inset-x-0 h-24 scanline"
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.35), transparent)",
                  filter: "blur(1px)",
                }}
              />

              {/* HUD corner brackets */}
              <div className="absolute w-6 h-6 border-t-2 border-l-2 top-3 left-3 border-sky-500/50 dark:border-sky-400/50" />
              <div className="absolute w-6 h-6 border-t-2 border-r-2 top-3 right-3 border-sky-500/50 dark:border-sky-400/50" />
              <div className="absolute w-6 h-6 border-b-2 border-l-2 bottom-3 left-3 border-sky-500/50 dark:border-sky-400/50" />
              <div className="absolute w-6 h-6 border-b-2 border-r-2 bottom-3 right-3 border-sky-500/50 dark:border-sky-400/50" />

              {/* Corner glows */}
              <div className="absolute w-64 h-64 rounded-full -right-20 -top-20 bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
              <div className="absolute w-64 h-64 rounded-full -left-20 -bottom-20 bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
            </div>

            {/* ───── Content ───── */}
            <div className="relative p-8">
              {/* Icon */}
              <span className="inline-grid border shadow-sm h-14 w-14 place-items-center rounded-2xl border-sky-300 bg-sky-100 text-sky-600 backdrop-blur dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-300 dark:shadow-none">
                <Icon className="w-6 h-6" />
              </span>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {group.items.length} {t("skills.skillsCount")}
              </p>

              {/* Pills */}
              <div className="grid grid-cols-2 gap-2 mt-6 sm:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-none dark:hover:border-sky-400/50 dark:hover:bg-sky-500/10 dark:hover:text-sky-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 transition-transform group-hover:scale-150" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0%   { top: -10%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .scanline { animation: scanline 4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .scanline { animation: none; opacity: 0; }
        }
      `}</style>
    </section>
  );
}