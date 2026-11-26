import SectionTitle from "../common/SectionTitle.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { experienceData } from "../../data/experienceData.js";
import { FaCircleDot } from "react-icons/fa6";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative py-12">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          
          {/* Left Column: Sticky Header */}
          <div className="relative">
            <div className="md:sticky md:top-32">
              <SectionTitle
                eyebrow={t("experience.eyebrow")}
                title={t("experience.title")}
                subtitle={t("experience.subtitle")}
              />
              {/* <div className="flex items-center gap-3 mt-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <FaCircleDot className="text-sky-500 animate-pulse" />
                <span>Scroll to view timeline</span>
              </div> */}
            </div>
          </div>

          {/* Right Column: Scrolling Timeline */}
          <div className="relative">
            {/* Solid Gradient Line */}
            <div className="absolute bottom-0 left-0 w-1 rounded-full top-2 bg-gradient-to-b from-sky-500 via-violet-500 to-transparent" />

            <ul className="space-y-10">
              {experienceData.map((item, i) => (
                <li key={i} className="relative pl-10 group">
                  
                  {/* Node */}
                  <span className="absolute left-[-4px] top-6 flex h-3 w-3 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-slate-950 dark:ring-slate-950">
                    <span className="h-full w-full rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  </span>

                  {/* Card */}
                  <div className="p-6 transition-all duration-300 border shadow-sm rounded-2xl border-slate-200 bg-white/60 backdrop-blur-xl hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-sky-500/50 dark:hover:bg-slate-900/80">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">
                        {item.period}
                      </span>
                    </div>

                    <p className="mb-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {item.company}
                    </p>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>

                    <ul className="grid gap-2 mt-4 sm:grid-cols-2">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}