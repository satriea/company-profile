import { motion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";

import Image from "../../components/common/Image";

import { brands } from "../../data/brands";

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {brands.map((brand, index) => (
        <motion.div
          key={brand.id}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.05,
          }}
          className="group"
        >
          <div
            className="
              relative
              flex
              h-36
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
              hover:shadow-blue-900/5
              sm:h-40
            "
          >
            {/* ================================================= */}
            {/* HOVER BACKGROUND */}
            {/* ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-50/0
                via-white
                to-blue-50/0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* ================================================= */}
            {/* BRAND LOGO */}
            {/* ================================================= */}

            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                objectFit="contain"
                wrapperClassName="
                  relative
                  z-10
                  flex
                  h-16
                  w-36
                  items-center
                  justify-center
                "
                className="
                  max-h-12
                  max-w-[130px]
                  object-contain
                  grayscale
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />
            ) : (
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <FiSmartphone size={23} />
                </div>

                <span className="text-sm font-bold text-slate-800">
                  {brand.name}
                </span>
              </div>
            )}

            {/* ================================================= */}
            {/* NUMBER */}
            {/* ================================================= */}

            <span
              className="
                absolute
                right-4
                top-4
                text-[10px]
                font-bold
                tracking-widest
                text-slate-200
                transition-colors
                duration-300
                group-hover:text-blue-200
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
