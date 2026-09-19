import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

import Image from "../../components/common/Image";
import Badge from "../../components/common/Badge";

import { hero } from "../../data/hero";

export default function HeroStorePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative mx-auto w-full max-w-xl lg:ml-auto"
    >
      {/* Decorative glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-blue-600/10 blur-3xl" />

      {/* Main image card */}
      <div
        className="
          relative overflow-hidden rounded-[2rem]
          border border-white/10 bg-white/5
          p-2 shadow-2xl shadow-black/30
          backdrop-blur-sm
        "
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6]">
          <Image
            src={hero.image}
            alt="Sinar Mas Selluler Store"
            fallback="/images/company/store-placeholder.jpg"
            wrapperClassName="absolute inset-0 h-full w-full"
            className="
              h-full w-full object-cover
              transition-transform duration-700
              hover:scale-105
            "
            loading="eager"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

          {/* Top badge */}
          <div className="absolute left-5 top-5">
            <Badge
              variant="light"
              icon={FiShoppingBag}
              className="border-white/10 bg-slate-950/40"
            >
              Retail Technology
            </Badge>
          </div>

          {/* Bottom information */}
          <div className="absolute inset-x-5 bottom-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-blue-300">
                  <FiMapPin size={15} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Jawa Tengah
                  </span>
                </div>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Sinar Mas Selluler
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Connecting People Through Technology
                </p>
              </div>

              <a
                href="#stores"
                aria-label="Lihat jaringan toko"
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full bg-white text-slate-950
                  transition-all duration-300
                  hover:scale-105 hover:bg-blue-500 hover:text-white
                "
              >
                <FiArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating statistic */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="
          absolute -bottom-6 -left-3
          hidden items-center gap-4
          rounded-2xl border border-white/10
          bg-slate-900/90 px-5 py-4
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          sm:flex lg:-left-8
        "
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
          <FiShoppingBag size={20} />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            Store Network
          </p>

          <p className="mt-0.5 text-lg font-bold text-white">
            30+ Stores
          </p>
        </div>
      </motion.div>

      {/* Floating established badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="
          absolute -right-2 -top-5
          hidden rounded-2xl border border-white/10
          bg-slate-900/90 px-5 py-4
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          sm:block lg:-right-7
        "
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
          Established
        </p>

        <p className="mt-1 text-xl font-bold text-white">
          2001
        </p>
      </motion.div>
    </motion.div>
  );
} 
