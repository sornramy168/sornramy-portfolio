export default function GlowOrb({
  className = "",
  color = "56,189,248",
  size = 420,
  opacity = 0.3,
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(${color},${opacity}) 0%, transparent 70%)`,
      }}
    />
  );
}