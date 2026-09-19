 
import { FiMapPin } from "react-icons/fi";

export default function Badge({
  children,
  variant = "blue",
  icon,
  className = "",
}) {
  const variants = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",

    dark: "bg-slate-900 text-white border-slate-800",

    light:
      "bg-white/10 text-white border-white/10 backdrop-blur-sm",

    slate:
      "bg-slate-100 text-slate-600 border-slate-200",

    green:
      "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  const Icon = icon || null;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-semibold
        ${variants[variant] || variants.blue}
        ${className}
      `}
    >
      {Icon && <Icon size={13} />}

      {children}
    </span>
  );
}