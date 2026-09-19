 
import { AnimatePresence, motion } from "framer-motion";
import {
  FiClock,
  FiExternalLink,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiX,
} from "react-icons/fi";

import Image from "../../components/common/Image";
import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";

export default function StoreModal({
  store,
  isOpen,
  onClose,
}) {
  if (!store) {
    return null;
  }

  const thumbnail =
    store.images?.thumbnail ||
    store.images?.gallery?.[0];

  const gallery = store.images?.gallery || [];

  const latitude = store.coordinates?.latitude;
  const longitude = store.coordinates?.longitude;

  const hasCoordinates =
    latitude !== undefined &&
    longitude !== undefined;

  const mapsUrl = hasCoordinates
    ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            p-4 sm:p-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="
              absolute inset-0
              cursor-default
              bg-slate-950/70
              backdrop-blur-sm
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-modal-title"
            className="
              relative z-10
              max-h-[90vh]
              w-full max-w-4xl
              overflow-y-auto
              rounded-[2rem]
              bg-white
              shadow-2xl
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup detail toko"
              className="
                absolute right-4 top-4 z-20
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-slate-950/70
                text-white
                backdrop-blur-sm
                transition-colors
                hover:bg-blue-600
              "
            >
              <FiX size={20} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src={thumbnail}
                  alt={store.name}
                  fallback="/images/company/store-placeholder.jpg"
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="h-full w-full object-cover"
                  loading="eager"
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-slate-950/80
                    via-transparent
                    to-transparent
                  "
                />

                <div className="absolute bottom-6 left-6 right-6">
                  {store.city && (
                    <Badge
                      variant="light"
                      icon={FiMapPin}
                      className="bg-slate-950/50"
                    >
                      {store.city}
                    </Badge>
                  )}

                  <h2
                    id="store-modal-title"
                    className="
                      mt-3
                      text-2xl font-bold
                      text-white
                      sm:text-3xl
                    "
                  >
                    {store.name}
                  </h2>
                </div>
              </div>

              {/* ================================= */}
              {/* INFORMATION */}
              {/* ================================= */}

              <div className="p-6 sm:p-8 lg:p-10">
                <p
                  className="
                    text-xs font-semibold
                    uppercase tracking-[0.2em]
                    text-blue-600
                  "
                >
                  Store Information
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Informasi Toko
                </h3>

                {/* Address */}
                {store.address && (
                  <div className="mt-7 flex gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <FiMapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Alamat
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {store.address}
                      </p>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {store.phone && (
                  <div className="mt-5 flex gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <FiPhone size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Telepon
                      </p>

                      <a
                        href={`tel:${store.phone}`}
                        className="
                          mt-1 block
                          text-sm font-semibold
                          text-slate-800
                          hover:text-blue-600
                        "
                      >
                        {store.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Opening Hours */}
                {store.openingHours?.mondayFriday && (
                  <div className="mt-5 flex gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <FiClock size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Jam Operasional
                      </p>

                      <p className="mt-1 text-sm text-slate-700">
                        Senin - Jumat:{" "}
                        <span className="font-semibold">
                          {store.openingHours.mondayFriday}
                        </span>
                      </p>

                      {store.openingHours.saturday && (
                        <p className="mt-1 text-sm text-slate-700">
                          Sabtu:{" "}
                          <span className="font-semibold">
                            {store.openingHours.saturday}
                          </span>
                        </p>
                      )}

                      {store.openingHours.sunday && (
                        <p className="mt-1 text-sm text-slate-700">
                          Minggu:{" "}
                          <span className="font-semibold">
                            {store.openingHours.sunday}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Services */}
                {store.services?.length > 0 && (
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Available Services
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {store.services.map((service) => (
                        <Badge
                          key={service}
                          variant="slate"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {gallery.length > 1 && (
                  <div className="mt-7">
                    <div className="grid grid-cols-3 gap-2">
                      {gallery.slice(0, 3).map((image, index) => (
                        <div
                          key={`${image}-${index}`}
                          className="
                            aspect-square
                            overflow-hidden
                            rounded-xl
                          "
                        >
                          <Image
                            src={image}
                            alt={`${store.name} ${index + 1}`}
                            fallback="/images/company/store-placeholder.jpg"
                            wrapperClassName="h-full w-full"
                            className="
                              h-full w-full object-cover
                              transition-transform
                              duration-300
                              hover:scale-105
                            "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {mapsUrl && (
                    <Button
                      href={mapsUrl}
                      variant="primary"
                      size="md"
                      icon="external"
                      className="sm:flex-1"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FiNavigation size={16} />
                        Petunjuk Lokasi
                      </span>
                    </Button>
                  )}

                  {store.phone && (
                    <Button
                      href={`tel:${store.phone}`}
                      variant="outline"
                      size="md"
                      icon={null}
                      className="sm:flex-1"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FiPhone size={16} />
                        Hubungi Toko
                      </span>
                    </Button>
                  )}
                </div>

                {/* Google Maps fallback link */}
                {mapsUrl && (
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4
                      flex items-center justify-center
                      gap-2
                      text-xs font-medium
                      text-slate-400
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    Buka lokasi di Google Maps
                    <FiExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}