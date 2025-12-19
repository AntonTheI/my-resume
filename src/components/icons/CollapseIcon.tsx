type IconProps = {
  className?: string;
};

const CollapseIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 7 7"
    className={`w-2 h-2 ${className}`}
    fill="currentColor"
    aria-hidden
  >
    <path d="M9.7998 6C10.0759 6.00011 10.2998 6.22392 10.2998 6.5C10.2998 6.77608 10.0759 6.99989 9.7998 7H2.2002C1.92405 7 1.7002 6.77614 1.7002 6.5C1.7002 6.22386 1.92405 6 2.2002 6H9.7998Z" />
  </svg>
);

export default CollapseIcon;
