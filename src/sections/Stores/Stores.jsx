import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

import { stores } from "../../data/stores";

import StoreGrid from "./StoreGrid";

export default function Stores() {
  const [selectedCity, setSelectedCity] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  // ============================================
  // CITY LIST
  // ============================================

  const cities = useMemo(() => {
    const uniqueCities = [
      ...new Set(
        stores
          .map((store) => store.city)
          .filter(Boolean)
      ),
    ];

    return ["Semua", ...uniqueCities];
  }, []);

  // ============================================
  // FILTER
  // ============================================

  const filteredStores = useMemo(() => {
    if (selectedCity === "Semua") {
      return stores;
    }

    return stores.filter(
      (store) => store.city === selectedCity
    );
  }, [selectedCity]);

  // ============================================
  // DISPLAY LIMIT
  // ============================================

  const displayedStores = showAll
    ? filteredStores
    : filteredStores.slice(0, 6);

  // ============================================
  // HANDLER
  // ============================================

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section
      id="stores"
      className="
        relative overflow-hidden
        bg-slate-50
        py-24 sm:py-28
      "
    >
      {/* ========================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl" />
      </div>

      <Container className="relative">
        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              align="left"
              eyebrow="Our Stores"
              title="Temukan"
              highlight="Sinar Mas Selluler"
              description="Hadir melalui jaringan toko yang terus berkembang untuk memberikan akses lebih dekat terhadap smartphone, accessories, protection, dan berbagai kebutuhan teknologi Anda."
            />
          </motion.div>

          {/* Store Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              flex items-center gap-4
              rounded-2xl
              border border-slate-200
              bg-white
              px-5 py-4
              shadow-sm
            "
          >
            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              <FiShoppingBag size={23} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-950">
                {stores.length}+
              </p>

              <p className="text-sm text-slate-500">
                Store Network
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* CITY FILTER */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-12"
        >
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => {
              const active = selectedCity === city;

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleCityChange(city)}
                  className={`
                    rounded-full
                    border
                    px-5 py-2.5
                    text-sm font-medium
                    transition-all duration-300

                    ${
                      active
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                    }
                  `}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* STORE GRID */}
        {/* ========================================= */}

        <AnimatePresence mode="wait">
          {displayedStores.length > 0 ? (
            <motion.div
              key={`${selectedCity}-${showAll}`}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-10"
            >
              <StoreGrid stores={displayedStores} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                mt-10
                rounded-3xl
                border border-dashed border-slate-300
                bg-white
                px-6 py-16
                text-center
              "
            >
              <div
                className="
                  mx-auto flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-slate-100
                  text-slate-400
                "
              >
                <FiStore size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Belum ada toko
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Belum tersedia data toko untuk wilayah yang dipilih.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================= */}
        {/* SHOW ALL */}
        {/* ========================================= */}

        {filteredStores.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleShowAll}
              className="
                group inline-flex items-center gap-3
                rounded-full
                border border-slate-300
                bg-white
                px-6 py-3
                text-sm font-semibold
                text-slate-700
                shadow-sm
                transition-all duration-300
                hover:border-blue-600
                hover:text-blue-600
                hover:shadow-md
              "
            >
              {showAll
                ? "Tampilkan Lebih Sedikit"
                : "Lihat Semua Toko"}

              {showAll ? (
                <FiChevronDown
                  size={18}
                  className="
                    rotate-180
                    transition-transform duration-300
                  "
                />
              ) : (
                <FiArrowRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              )}
            </button>
          </div>
        )}

        {/* ========================================= */}
        {/* BOTTOM INFO */}
        {/* ========================================= */}

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative mt-16
            overflow-hidden
            rounded-3xl
            bg-slate-950
          "
        >
          <div
            className="
              absolute -right-20 -top-20
              h-64 w-64
              rounded-full
              bg-blue-600/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              px-6 py-10
              sm:px-10
              lg:px-12
            "
          >
            <div
              className="
                flex flex-col gap-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-blue-400">
                  <FiMapPin size={18} />

                  <span
                    className="
                      text-sm font-semibold
                      uppercase tracking-wider
                    "
                  >
                    Store Network
                  </span>
                </div>

                <h3
                  className="
                    text-2xl font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  Hadir lebih dekat dengan pelanggan.
                </h3>

                <p
                  className="
                    mt-3
                    text-sm leading-6
                    text-slate-400
                    sm:text-base
                  "
                >
                  Jelajahi jaringan Sinar Mas Selluler dan
                  temukan toko terdekat untuk mendapatkan
                  produk serta layanan yang Anda butuhkan.
                </p>
              </div>

              <Button
                href="#contact"
                variant="light"
                size="lg"
                icon="arrow"
                className="shrink-0 self-start lg:self-center"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}