 
import { motion } from "framer-motion";

export default function WhyUsCard({ reason, index = 0 }) {
  if (!reason) return null;

  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="
        group bg-slate-950 p-7
        transition-colors duration-300
        hover:bg-slate-900
        sm:p-8
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl bg-blue-500/10
          text-blue-400
          ring-1 ring-blue-400/10
          transition-all duration-300
          group-hover:bg-blue-600
          group-hover:text-white
          group-hover:ring-blue-600
        "
      >
        {Icon && <Icon size={25} />}
      </div>

      {/* Number */}
      <p
        className="
          mt-8 text-xs font-bold
          tracking-[0.2em] text-slate-600
          transition-colors duration-300
          group-hover:text-blue-500/50
        "
      >
        {String(reason.id).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3
        className="
          mt-2 text-xl font-bold text-white
          transition-colors duration-300
          group-hover:text-blue-400
        "
      >
        {reason.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {reason.description}
      </p>
    </motion.div>
  );
}