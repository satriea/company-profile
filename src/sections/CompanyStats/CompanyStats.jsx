import { motion } from "framer-motion";

import Container from "../../components/common/Container";

import { companyStatistics } from "../../data/statistics";

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {companyStatistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative bg-slate-950 p-6 sm:p-8"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  {Icon && (
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                  )}

                  {/* Value */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </span>

                    {stat.suffix && (
                      <span className="ml-1 text-2xl font-bold text-blue-400 sm:text-3xl">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <h3 className="mt-2 text-sm font-semibold text-white sm:text-base">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  {stat.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                      {stat.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}