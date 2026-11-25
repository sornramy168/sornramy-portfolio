import { useState } from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import Button from "../common/Button.jsx";
import GithubIcon from "../../assets/icons/GithubIcon.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { projectsData } from "../../data/projectsData.js";
import { FaLaptopCode, FaServer, FaGraduationCap, FaLayerGroup } from "react-icons/fa6";

export default function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", icon: <FaLayerGroup /> },
    { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
    { id: "achievement", label: "Achievements", icon: <FaGraduationCap /> },
  ];

  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative py-12">
      <div className="max-w-6xl px-6 mx-auto">
        <SectionTitle
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-10 mb-8 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl w-fit border border-slate-200 dark:border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-sky-600 shadow-sm dark:bg-slate-800 dark:text-sky-400 dark:shadow-none"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              className="flex flex-col h-full overflow-hidden transition-all duration-300 border shadow-sm group rounded-3xl border-slate-200 bg-white/60 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-sky-500/50"
            >
              
              {/* Image Container - 16/10 aspect ratio looks best for 3 columns */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.opacity = 0; }}
                />
                {/* Light/Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-slate-950/90 dark:via-slate-950/20" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/90 text-slate-800 backdrop-blur-md dark:bg-black/60 dark:text-white border border-white/20">
                  {p.category || "Project"}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
                  {p.title}
                </h3>
                
                {/* Description - Line clamp ensures equal height cards */}
                <p className="flex-grow mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                  {p.description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="px-2.5 py-1 text-xs font-medium border rounded-lg border-slate-200 bg-slate-50 text-slate-600 dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
                      {tag}
                    </li>
                  ))}
                  {p.tags.length > 3 && (
                    <li className="px-2.5 py-1 text-xs font-medium border rounded-lg border-slate-200 bg-slate-50 text-slate-600 dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
                      +{p.tags.length - 3}
                    </li>
                  )}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-5 mt-6 border-t border-slate-100 dark:border-white/5">
                  <Button 
                    as="a" 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    variant="primary" 
                    className="flex-1 !py-2 !text-sm text-center justify-center rounded-xl"
                  >
                    {t("projects.liveDemo")}
                  </Button>
                  
                  <a 
                    href={p.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 dark:border-white/10 dark:text-slate-300 dark:hover:text-sky-400 dark:hover:border-sky-400/50 dark:hover:bg-sky-500/10 shrink-0"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}