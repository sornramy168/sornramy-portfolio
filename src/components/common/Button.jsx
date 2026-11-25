export default function Button({
  as: Tag = "button",
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60";

  const variants = {
    primary:
      "bg-sky-500/90 text-white hover:bg-sky-400 shadow-[0_8px_30px_-8px_rgba(56,189,248,0.7)]",
    // 👇 Added text-slate-800 and dark:text-slate-100
    glass: "glass text-slate-800 dark:text-slate-100 hover:border-sky-400/50 hover:text-sky-600 dark:hover:text-white", 
    ghost: "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5",
  };

  return (
    <Tag className={`${base} ${variants[variant] || variants.primary} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}