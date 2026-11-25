import GlassCard from "../effects/GlassCard.jsx";

export default function Card({ className = "", children, ...rest }) {
  return (
    <GlassCard className={`p-6 ${className}`} {...rest}>
      {children}
    </GlassCard>
  );
}