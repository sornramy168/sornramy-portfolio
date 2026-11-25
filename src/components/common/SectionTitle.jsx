export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulseGlow" />
          {eyebrow}
        </span>
      )}
      {/* 👇 Added text-slate-900 dark:text-white */}
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {/* 👇 Added text-slate-600 dark:text-slate-400 */}
      {subtitle && <p className="max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}