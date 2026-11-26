import { useState } from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import Button from "../common/Button.jsx";
import SocialLinks from "../common/SocialLinks.jsx";
import MailIcon from "../../assets/icons/MailIcon.jsx";
import { useTranslation } from "../../context/LanguageContext.jsx";
import { personalInfo } from "../../data/personalInfo.js";
import { FaPaperPlane } from "react-icons/fa6";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full py-12 overflow-hidden">
      
      {/* 👇 ដាក់ Background Glows នៅក្នុង Wrapper នេះ ដើម្បីកុំឱ្យវារុញទំព័រចេញក្រៅ */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-1/4 h-96 w-96 translate-x-1/3 rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/15" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/15" />
      </div> */}

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        <SectionTitle
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        {/* 👇 បន្ថែម min-w-0 ទៅលើ Grid */}
        <div className="grid gap-6 mt-12 md:grid-cols-[1fr_1.5fr] min-w-0">
          
          {/* Left Column: Info Card */}
          <div className="flex flex-col justify-between min-w-0 p-6 border shadow-sm sm:p-8 rounded-3xl border-slate-200 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t("contact.getInTouch")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t("contact.preferEmail")}
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center min-w-0 gap-4 p-4 mt-8 transition-all border group rounded-2xl border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-sky-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white shadow-sm rounded-xl dark:bg-slate-800 shrink-0">
                  <MailIcon className="w-6 h-6 text-sky-500 dark:text-sky-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    Email Me
                  </p>
                  {/* បន្ថែម truncate ដើម្បីកុំឱ្យអ៊ីមែលវែងរុញប្រអប់ */}
                  <p className="mt-1 font-semibold truncate text-slate-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
            </div>

            <div className="pt-6 mt-10 border-t border-slate-200 dark:border-white/10">
              <p className="mb-4 text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                Follow My Work
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="min-w-0 p-6 border shadow-sm sm:p-8 rounded-3xl border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    {t("contact.name")}
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 mt-2 bg-white border rounded-xl border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-sky-400"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </label>

                <label className="block min-w-0">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    {t("contact.email")}
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 mt-2 bg-white border rounded-xl border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-sky-400"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </label>
              </div>

              <label className="block min-w-0">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  {t("contact.message")}
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 mt-2 bg-white border resize-none rounded-xl border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-sky-400"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </label>

              <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
                <Button type="submit" variant="primary" className="!px-8 !py-3 gap-2 w-full sm:w-auto justify-center">
                  <FaPaperPlane className="text-sm" />
                  {t("contact.sendMessage")}
                </Button>
                {sent && (
                  <span className="text-sm font-medium text-sky-600 dark:text-sky-400 animate-pulse">
                    {t("contact.openingMailApp")}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}