import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

export default function VisionCard({ vision }) {
  if (!vision) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-14"
    >
      <div
        className="
          relative overflow-hidden rounded-[2rem]
          bg-slate-950 p-8 shadow-2xl shadow-slate-900/10
          sm:p-10 lg:p-12
        "
      >
        {/* Decorative Background */}
        <div
          className="
            pointer-events-none absolute -right-32 -top-32
            h-96 w-96 rounded-full bg-blue-600/20 blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-40 left-1/3
            h-80 w-80 rounded-full bg-blue-500/10 blur-3xl
          "
        />

        {/* Content */}
        <div
          className="
            relative grid gap-8
            lg:grid-cols-[auto_1fr] lg:items-center
          "
        >
          {/* Icon */}
          <div
            className="
              flex h-20 w-20 items-center justify-center
              rounded-3xl bg-blue-600 text-white
              shadow-xl shadow-blue-600/20
            "
          >
            <FiEye size={34} />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              {vision.title}
            </p>

            <h3
              className="
                mt-3 max-w-4xl text-2xl font-bold
                leading-tight text-white
                sm:text-3xl lg:text-4xl
              "
            >
              {vision.description}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
