import Button from "../common/Button.jsx";
import SocialLinks from "../common/SocialLinks.jsx";
import GlowOrb from "../effects/GlowOrb.jsx";
import Typewriter from "../effects/Typewriter.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { personalInfo } from "../../data/personalInfo.js";
import MyP from "../../assets/img/MYPIC.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-40 pb-6 overflow-hidden">
      <GlowOrb className="-left-20 top-20" color="56,189,248" size={500} opacity={0.28} />
      <GlowOrb className="bottom-0 -right-24" color="139,92,246" size={520} opacity={0.22} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulseGlow" />
            {t("hero.availableForWork")}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-6xl">
            {t("hero.hiIm")}{" "}
            <Typewriter
              text={t("hero.name")}
              typingSpeed={150}
              deletingSpeed={100}
              pauseDuration={2000}
              className="text-transparent bg-gradient-to-r from-sky-500 via-sky-400 to-violet-500 dark:from-sky-300 dark:via-sky-400 dark:to-violet-400 bg-clip-text"
            />
            
          </h1>

          <p className="max-w-xl mt-4 text-lg text-slate-600 dark:text-slate-300">
            {t("personalInfo.tagline", personalInfo.tagline)}
          </p>
          
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {t("personalInfo.role", personalInfo.role)} ·{" "}
            {t("personalInfo.location", personalInfo.location)}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Button as="a" href="#projects" variant="primary">
              {t("hero.viewProjects")}
            </Button>
            <Button as="a" href={personalInfo.resume} variant="glass" download>
              {t("hero.downloadCV")}
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="relative w-full max-w-sm mx-auto">
          <div className="p-4 glass rounded-3xl">
            <div className="w-full overflow-hidden aspect-square rounded-2xl bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20">
              <img
                src={MyP}
                alt={personalInfo.name}
                className="object-cover w-full h-full"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-sky-400/20" />
        </div>
      </div>
    </section>
  );
}