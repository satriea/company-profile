 
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeadphones,
  FiShield,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";

const iconMap = {
  Smartphone: FiSmartphone,
  Headphones: FiHeadphones,
  ShieldCheck: FiShield,
  Headset: FiHeadphones,
  Wrench: FiTool,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || FiSmartphone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group"
    >
      <div
        className="
          relative flex h-full min-h-[280px] flex-col
          overflow-hidden rounded-3xl
          border border-slate-200
          bg-white p-6
          transition-all duration-500
          hover:-translate-y-2
          hover:border-blue-200
          hover:shadow-xl
          hover:shadow-blue-900/5
          sm:p-7
        "
      >
        {/* Hover background */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br from-blue-50/0
            via-white to-blue-50
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Decorative circle */}
        <div
          className="
            pointer-events-none absolute
            -right-12 -top-12
            h-32 w-32
            rounded-full
            bg-blue-50
            opacity-0
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-110
          "
        />

        <div className="relative flex h-full flex-col">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-blue-50
                text-blue-600
                transition-all duration-300
                group-hover:bg-blue-600
                group-hover:text-white
                group-hover:shadow-lg
                group-hover:shadow-blue-600/20
              "
            >
              <Icon size={25} />
            </div>

            <span
              className="
                text-[10px] font-bold tracking-[0.2em]
                text-slate-200
                transition-colors duration-300
                group-hover:text-blue-200
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="mt-7">
            <h3
              className="
                text-xl font-bold tracking-tight text-slate-950
                transition-colors duration-300
                group-hover:text-blue-600
              "
            >
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {service.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-8">
            <div
              className="
                flex items-center justify-between
                border-t border-slate-100 pt-5
                transition-colors duration-300
                group-hover:border-blue-100
              "
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 transition-colors group-hover:text-blue-500">
                Learn More
              </span>

              <div
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-slate-200
                  text-slate-400
                  transition-all duration-300
                  group-hover:border-blue-600
                  group-hover:bg-blue-600
                  group-hover:text-white
                "
              >
                <FiArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}