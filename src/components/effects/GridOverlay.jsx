export default function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 mix-blend-screen opacity-[0.06]"
      style={{
        zIndex: 2,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
}