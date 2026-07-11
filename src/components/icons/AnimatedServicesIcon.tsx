type AnimatedServicesIconProps = {
  size?: number;
};

const AnimatedServicesIcon = ({ size = 16 }: AnimatedServicesIconProps) => (
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
    <path
      className="services-icon-layer services-icon-layer-3"
      d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
    />
    <path
      className="services-icon-layer services-icon-layer-2"
      d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
    />
    <path
      className="services-icon-layer services-icon-layer-1"
      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
    />
  </svg>
);

export default AnimatedServicesIcon;
