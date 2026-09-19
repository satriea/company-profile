 
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = "arrow",
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button",
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20",

    secondary:
      "bg-slate-950 text-white hover:bg-blue-600",

    outline:
      "border border-slate-200 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950",

    dark:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",

    light:
      "bg-white text-slate-950 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-sm sm:text-base",
  };

  const icons = {
    arrow: FiArrowRight,
    external: FiArrowUpRight,
  };

  const Icon = icons[icon];

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-semibold
    transition-all
    duration-300
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${fullWidth ? "w-full" : ""}
    ${
      disabled
        ? "cursor-not-allowed opacity-50"
        : ""
    }
    ${className}
  `;

  const content = (
    <>
      {iconPosition === "left" && Icon && (
        <Icon size={17} />
      )}

      <span>{children}</span>

      {iconPosition === "right" && Icon && (
        <Icon
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
    >
      {content}
    </button>
  );
}