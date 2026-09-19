import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiClock,
  FiExternalLink,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

import Image from "../../components/common/Image";
import Badge from "../../components/common/Badge";

import StoreModal from "./StoreModel";

export default function StoreCard({ store }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!store) return null;

  const {
    name,
    city,
    address,
    images,
    openingHours,
    coordinates,
  } = store;

  /*
   * Google Maps URL
   *
   * Prioritas:
   * 1. Latitude & longitude
   * 2. Nama toko + alamat
   */
  const hasCoordinates =
    coordinates?.latitude !== undefined &&
    coordinates?.longitude !== undefined;

  const googleMapsUrl = hasCoordinates
    ? `https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name}, ${address || ""}`
      )}`;

  /*
   * Store image
   */
  const image =
    images?.thumbnail ||
    images?.gallery?.[0] ||
    "/images/company/store-placeholder.jpg";

  /*
   * Opening hours
   */
  const openingTime =
    openingHours?.mondayFriday ||
    openingHours?.monday ||
    "Jam operasional belum tersedia";

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          group
          overflow-hidden
          rounded-3xl
          border border-slate-200
          bg-white
          shadow-sm
          transition-shadow duration-300
          hover:shadow-2xl
          hover:shadow-slate-900/10
        "
      >
        {/* ============================================== */}
        {/* STORE IMAGE */}
        {/* ============================================== */}

        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={name}
            fallback="/images/company/store-placeholder.jpg"
            wrapperClassName="absolute inset-0 h-full w-full"
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            loading="lazy"
          />

          {/* Image Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-slate-950/70
              via-slate-950/10
              to-transparent
              opacity-80
            "
          />

          {/* City Badge */}
          {city && (
            <div className="absolute left-4 top-4">
              <Badge
                variant="light"
                icon={FiMapPin}
                className="
                  border-white/20
                  bg-slate-950/60
                  shadow-lg
                  backdrop-blur-md
                "
              >
                {city}
              </Badge>
            </div>
          )}

          {/* Google Maps */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka ${name} di Google Maps`}
            className="
              absolute right-4 top-4
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/90
              text-slate-800
              shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:scale-105
              hover:bg-white
              hover:text-blue-600
            "
          >
            <FiNavigation size={17} />
          </a>

          {/* Store Name */}
          <div className="absolute bottom-4 left-4 right-4">
            <p
              className="
                text-xs font-medium
                uppercase tracking-[0.18em]
                text-blue-200
              "
            >
              Sinar Mas Selluler
            </p>

            <h3
              className="
                mt-1 line-clamp-2
                text-xl font-bold
                leading-tight text-white
                sm:text-2xl
              "
            >
              {name}
            </h3>
          </div>
        </div>

        {/* ============================================== */}
        {/* CONTENT */}
        {/* ============================================== */}

        <div className="p-5 sm:p-6">
          {/* Address */}
          <div className="flex gap-3">
            <div
              className="
                mt-0.5
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              <FiMapPin size={18} />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-wider
                  text-slate-400
                "
              >
                Alamat
              </p>

              <p
                className="
                  mt-1 line-clamp-2
                  text-sm leading-6
                  text-slate-600
                "
              >
                {address || "Alamat belum tersedia"}
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className="
              mt-5 flex gap-3
              border-t border-slate-100
              pt-5
            "
          >
            <div
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-xl
                bg-slate-100
                text-slate-600
              "
            >
              <FiClock size={18} />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-wider
                  text-slate-400
                "
              >
                Jam Operasional
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {openingTime}
              </p>
            </div>
          </div>

          {/* ============================================ */}
          {/* ACTIONS */}
          {/* ============================================ */}

          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/maps
                inline-flex items-center justify-center gap-2
                rounded-xl
                border border-slate-200
                px-4 py-3
                text-sm font-semibold
                text-slate-700
                transition-all duration-300
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              <FiExternalLink
                size={16}
                className="
                  transition-transform duration-300
                  group-hover/maps:scale-110
                "
              />

              Maps
            </a>

            {/* Detail */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="
                group/detail
                inline-flex items-center justify-center gap-2
                rounded-xl
                bg-slate-950
                px-4 py-3
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:bg-blue-600
              "
            >
              Detail

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover/detail:translate-x-0.5
                  group-hover/detail:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </motion.article>

      {/* ============================================== */}
      {/* STORE MODAL */}
      {/* ============================================== */}

      <StoreModal
        store={store}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}