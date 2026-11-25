export default function GlassCard({
  as: Tag = "div",
  className = "",
  hover = true,
  children,
  ...rest
}) {
  return (
    <Tag
      className={`glass rounded-2xl ${hover ? "glass-hover" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}