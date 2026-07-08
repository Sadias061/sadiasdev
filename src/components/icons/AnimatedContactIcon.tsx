type AnimatedContactIconProps = {
  size?: number;
};

const AnimatedContactIcon = ({ size = 16 }: AnimatedContactIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 overflow-visible"
    aria-hidden="true"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />

    <g className="contact-icon-letter">
      <rect
        x="7"
        y="11"
        width="10"
        height="6"
        rx="0.75"
        fill="currentColor"
        stroke="none"
      />
      <line x1="8.5" y1="13.25" x2="15.5" y2="13.25" stroke="hsl(var(--primary))" strokeWidth="0.9" />
      <line x1="8.5" y1="15.25" x2="13.5" y2="15.25" stroke="hsl(var(--primary))" strokeWidth="0.9" />
    </g>
  </svg>
);

export default AnimatedContactIcon;
