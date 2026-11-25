import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaWind, FaBolt, FaCube,
  FaFigma, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaGithub,
  FaDocker, FaAws, FaLaptopCode,
} from "react-icons/fa6";

const frontend = [
  { name: "HTML5",      icon: <FaHtml5 /> },
  { name: "CSS3",       icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React",      icon: <FaReact /> },
  { name: "Next.js",    icon: <FaCode /> },
  { name: "Tailwind",   icon: <FaWind /> },
  { name: "GSAP",       icon: <FaBolt /> },
  { name: "Three.js",   icon: <FaCube /> },
  { name: "Figma",      icon: <FaFigma /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python",  icon: <FaPython /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Git",     icon: <FaGitAlt /> },
  { name: "GitHub",  icon: <FaGithub /> },
  { name: "Docker",  icon: <FaDocker /> },
  { name: "AWS",     icon: <FaAws /> },
  { name: "VS Code", icon: <FaLaptopCode /> },
];

function Row({ items, direction = "left", accent = "sky" }) {
  const looped = [...items, ...items, ...items];
  
  // Clean, layout-safe hover classes (no translation!)
  const accentClasses =
    accent === "sky"
      ? "hover:border-sky-400/60 hover:bg-sky-500/10 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)] group-hover:text-sky-300"
      : "hover:border-violet-400/60 hover:bg-violet-500/10 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)] group-hover:text-violet-300";
      
  const iconColor = accent === "sky" ? "text-sky-400" : "text-violet-400";

  return (
    <div className={direction === "left" ? "marquee marquee-left" : "marquee marquee-right"}>
      {looped.map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          // transition-[...] targets specific properties so text doesn't jump
          className={`group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 ${accentClasses}`}
        >
          <span className={`text-2xl ${iconColor} transition-colors`}>{tech.icon}</span>
          <span className="text-sm font-medium transition-colors text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-4 mb-4 overflow-hidden">
      {/* Top & Bottom Glowing Borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      <div className="relative space-y-2">
        <Row items={frontend} direction="left" accent="sky" />
        <Row items={backend} direction="right" accent="violet" />
      </div>

      <style>{`
        .marquee {
          display: flex;
          gap: 1rem;
          width: max-content;
          /* Smooth fade at edges */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-left  { animation: marqueeL 45s linear infinite; }
        .marquee-right { animation: marqueeR 50s linear infinite; }
        
        /* Pause the whole row when hovering over an item */
        .marquee:hover { animation-play-state: paused; }
        
        @keyframes marqueeL { from { transform: translateX(0); } to { transform: translateX(-33.3333%); } }
        @keyframes marqueeR { from { transform: translateX(-33.3333%); } to { transform: translateX(0); } }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-left, .marquee-right { animation: none; }
        }
      `}</style>
    </section>
  );
}