import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function MissionList({ missions = [] }) {
  if (!missions.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {missions.map((mission, index) => (
        <motion.div
          key={mission.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="
            group rounded-3xl border border-slate-200
            bg-white p-6 transition-all duration-300
            hover:-translate-y-1 hover:border-blue-200
            hover:shadow-xl hover:shadow-blue-900/5
          "
        >
          {/* Number + Check */}
          <div className="flex items-center justify-between">
            <span
              className="
                text-sm font-bold tracking-[0.15em]
                text-slate-300 transition-colors
                group-hover:text-blue-200
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-blue-50 text-blue-600
                transition-all duration-300
                group-hover:bg-blue-600 group-hover:text-white
              "
            >
              <FiCheck size={17} />
            </div>
          </div>

          {/* Title */}
          <h4
            className="
              mt-6 text-lg font-bold text-slate-950
              transition-colors duration-300
              group-hover:text-blue-600
            "
          >
            {mission.title}
          </h4>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {mission.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
} 
