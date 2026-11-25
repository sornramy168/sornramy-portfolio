import { useRef } from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { personalInfo } from "../../data/personalInfo.js";
import { FaCode, FaRocket, FaUsers, FaMugHot } from "react-icons/fa6";

// Reusable component for the cursor-tracking spotlight effect
function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-sky-500/50 ${className}`}
    >
      {/* The Spotlight Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.15), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}

export default function About() {
  const { t, tArray } = useTranslation();

  const stats = [
    { k: "3+",  v: t("about.stats.yearsCoding"),     icon: <FaCode />,    color: "text-sky-500 bg-sky-500/10 border-sky-500/20" },
    { k: "5+", v: t("about.stats.projectsShipped"), icon: <FaRocket />,  color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
    { k: "10+", v: t("about.stats.happyClients"),    icon: <FaUsers />,   color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { k: "∞",   v: t("about.stats.coffee"),          icon: <FaMugHot />,  color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  ];

  const bio = tArray("about.bio", personalInfo.bio);

  return (
    <section id="about" className="relative py-7">
      {/* Background ambient glows */}
      <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-[120px] dark:bg-sky-500/10 pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-violet-400/10 blur-[120px] dark:bg-violet-500/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        <SectionTitle
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid gap-6 mt-12 md:grid-cols-3">
          
          {/* Main Bio Card - Spans 2 columns */}
          <SpotlightCard className="flex flex-col justify-between md:col-span-2">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {t("about.background")}
                </h3>
              </div>
              
              {/* Text container */}
              <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {bio.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-slate-900 dark:text-slate-200 font-medium" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom decorative tech tags */}
            <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-slate-200/60 dark:border-white/5">
              {["Problem Solver", "Clean Code", "UI/UX Focused", "Fast Learner"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Stats Column - Spans 1 column, stacked 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-4">
            {stats.map((s, i) => (
              <SpotlightCard key={i} className="flex flex-row items-center gap-4 !p-5">
                {/* Icon container with hover glow */}
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-xl">{s.icon}</span>
                </div>
                
                <div>
                  <p className="text-3xl font-extrabold leading-none text-slate-900 dark:text-white">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                    {s.v}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}