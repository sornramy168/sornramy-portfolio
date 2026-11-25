import GithubIcon from "../../assets/icons/GithubIcon.jsx";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.jsx";
import MailIcon from "../../assets/icons/MailIcon.jsx";
import { personalInfo } from "../../data/personalInfo.js";
import TelegramIcon from "../../assets/icons/TelegramIcon.jsx";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  telegram: TelegramIcon,
};

export default function SocialLinks({ className = "" }) {
  const entries = Object.entries(personalInfo.socials);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const Icon = iconMap[key];
        if (!Icon) return null;
        return (
          <a
            key={key}
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={key}
            className="flex items-center justify-center w-10 h-10 glass glass-hover rounded-xl text-slate-300 hover:text-sky-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}