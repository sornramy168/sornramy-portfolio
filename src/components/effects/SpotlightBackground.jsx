import { useEffect, useRef } from "react";

export default function SpotlightBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!glowRef.current) return;
      // ប្រើ CSS Variables ជំនួស React State ដើម្បីកុំឱ្យយឺត
      glowRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      glowRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    
    // បន្ថែម { passive: true } ដើម្បីឱ្យ Browser ដំណើរការលឿន
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_100%)]" />
      
      {/* Mouse Glow */}
      <div
        ref={glowRef}
        className="absolute transition-opacity duration-300 opacity-50 -inset-px"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.15), transparent 40%)`,
        }}
      />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}