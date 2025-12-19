type IconProps = {
  className?: string;
};

const ExpandIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 7 7"
    className={`w-2.5 h-2.5 ${className}`}
    fill="currentColor"
    aria-hidden
  >
    <g transform="scale(0.8)">
      <path d="M7.56805 7.55529L3.33547 7.5629L7.54774 3.32856L7.56805 7.55529Z" />
      <path d="M2.43195 2.44446L6.66453 2.43685L2.45226 6.6712L2.43195 2.44446Z" />
    </g>
  </svg>
);

export default ExpandIcon;
