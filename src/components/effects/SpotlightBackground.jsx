import { useEffect, useState } from "react";

export default function SpotlightBackground() {
  // 👇 This is the missing piece that caused the error
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden transition-colors duration-500 pointer-events-none">
      {/* Base ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1)_0%,transparent_100%)]" />
      
      {/* Interactive Mouse Glow */}
      <div
        className="absolute transition-opacity duration-300 opacity-50 -inset-px dark:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.15), transparent 40%)`,
        }}
      />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}