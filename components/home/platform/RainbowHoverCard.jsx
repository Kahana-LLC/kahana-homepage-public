/**
 * Card shell with a spinning rainbow border on hover (or always when `alwaysOn`).
 * Respects prefers-reduced-motion via CSS.
 */
export default function RainbowHoverCard({
  children,
  className = '',
  innerClassName = '',
  as: Tag = 'div',
  alwaysOn = false,
  ...rest
}) {
  return (
    <Tag
      className={`rainbow-hover-card${alwaysOn ? ' rainbow-hover-card--on' : ''} ${className}`}
      {...rest}
    >
      <span className="rainbow-hover-card__ring" aria-hidden />
      <div className={`rainbow-hover-card__inner ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
