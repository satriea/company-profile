import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import Button from "../../components/common/Button";

import { hero } from "../../data/hero";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="h-px w-10 bg-blue-500" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
          {hero.eyebrow}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="
          text-5xl font-bold leading-[1.05] tracking-tight text-white
          sm:text-6xl
          lg:text-7xl
          xl:text-[5.25rem]
        "
      >
        {hero.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="
          mt-6 max-w-2xl text-base leading-7 text-slate-300
          sm:text-lg sm:leading-8
        "
      >
        {hero.description}
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Button
          href={hero.cta.primary.target}
          variant="primary"
          size="lg"
          icon="arrow"
        >
          <span className="inline-flex items-center gap-2">
            <FiMapPin size={17} />
            {hero.cta.primary.label}
          </span>
        </Button>

        <Button
          href={hero.cta.secondary.target}
          variant="dark"
          size="lg"
          icon="external"
          className="border-white/10 bg-white/5 hover:bg-white/10"
        >
          {hero.cta.secondary.label}
        </Button>
      </motion.div>

      {/* Supporting information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Jaringan retail terpercaya
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <a
          href="#about"
          className="
            group inline-flex items-center gap-1.5 text-sm font-medium
            text-slate-400 transition-colors hover:text-white
          "
        >
          Pelajari lebih lanjut
          <FiArrowUpRight
            size={15}
            className="
              transition-transform duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>
      </motion.div>
    </div>
  );
} 
