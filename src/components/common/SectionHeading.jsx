 
import { FiArrowUpRight } from "react-icons/fi";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
  action,
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`
        ${alignment[align] || alignment.center}
        ${align === "center" ? "mx-auto" : ""}
        max-w-3xl
      `}
    >
      {/* Eyebrow */}

      {eyebrow && (
        <div
          className={`
            mb-5 flex items-center gap-3
            ${
              align === "center"
                ? "justify-center"
                : align === "right"
                  ? "justify-end"
                  : "justify-start"
            }
          `}
        >
          <span
            className={`
              h-px w-10
              ${dark ? "bg-blue-500" : "bg-blue-600"}
            `}
          />

          <span
            className={`
              text-sm font-semibold uppercase tracking-[0.2em]
              ${dark ? "text-blue-400" : "text-blue-600"}
            `}
          >
            {eyebrow}
          </span>

          <span
            className={`
              h-px w-10
              ${dark ? "bg-blue-500" : "bg-blue-600"}
            `}
          />
        </div>
      )}

      {/* Title */}

      {title && (
        <h2
          className={`
            text-4xl font-bold leading-tight tracking-tight
            sm:text-5xl
            ${dark ? "text-white" : "text-slate-950"}
          `}
        >
          {title}{" "}

          {highlight && (
            <span
              className={
                dark
                  ? "text-blue-400"
                  : "text-blue-600"
              }
            >
              {highlight}
            </span>
          )}
        </h2>
      )}

      {/* Description */}

      {description && (
        <p
          className={`
            mt-5 text-base leading-7 sm:text-lg
            ${
              dark
                ? "text-slate-400"
                : "text-slate-600"
            }
          `}
        >
          {description}
        </p>
      )}

      {/* Optional Action */}

      {action && (
        <div
          className={`
            mt-7
            ${
              align === "center"
                ? "flex justify-center"
                : ""
            }
          `}
        >
          <a
            href={action.href}
            className={`
              group inline-flex items-center gap-2
              text-sm font-semibold
              ${
                dark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }
            `}
          >
            {action.label}

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      )}
    </div>
  );
}